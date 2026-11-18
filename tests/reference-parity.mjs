import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { JSDOM, VirtualConsole } from 'jsdom';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reference = process.env.REACT_REFERENCE_DIR ?? path.resolve(root, '../JustRoll1');
assert.ok(
  existsSync(path.join(reference, 'src/main.jsx')),
  'Set REACT_REFERENCE_DIR to the original React project',
);
const output = path.join(root, 'dist/justroll-angular/browser');
const main = readdirSync(output).find((file) => /^main-.*\.js$/.test(file));
const angular = (
  await build({
    entryPoints: [path.join(output, main)],
    bundle: true,
    write: false,
    format: 'iife',
    logLevel: 'silent',
  })
).outputFiles[0].text;
const react = (
  await build({
    entryPoints: [path.join(reference, 'src/main.jsx')],
    bundle: true,
    write: false,
    format: 'iife',
    jsx: 'automatic',
    loader: { '.css': 'empty' },
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'silent',
  })
).outputFiles[0].text;
const pause = () => new Promise((resolve) => setTimeout(resolve, 30));
async function render(code, route, isAngular) {
  const dom = new JSDOM(
    '<!doctype html><html><head><base href="/"></head><body>' +
      (isAngular ? '<app-root id="root"></app-root>' : '<div id="root"></div>') +
      '</body></html>',
    {
      url: 'http://justroll.test' + route,
      runScripts: 'outside-only',
      pretendToBeVisual: true,
      virtualConsole: new VirtualConsole(),
    },
  );
  dom.window.scrollTo = () => {};
  dom.window.HTMLElement.prototype.scrollIntoView = () => {};
  dom.window.eval(code);
  for (
    let attempt = 0;
    attempt < 120 && !dom.window.document.querySelector('.site-footer');
    attempt++
  )
    await pause();
  await pause();
  assert.ok(dom.window.document.querySelector('.site-footer'));
  return dom;
}
// Angular hosts have display:contents. Compare semantic elements, classes, image URLs,
// links, accessibility attributes and text while ignoring framework bookkeeping.
function snapshot(node) {
  if (node.nodeType === 3) return [node.textContent];
  if (node.nodeType !== 1) return [];
  const raw = [...node.childNodes].flatMap(snapshot);
  const merged = [];
  for (const child of raw) {
    if (typeof child === 'string' && typeof merged.at(-1) === 'string')
      merged[merged.length - 1] += child;
    else merged.push(child);
  }
  const children = merged
    .map((child) => (typeof child === 'string' ? child.replace(/\s+/g, ' ').trim() : child))
    .filter((child) => child !== '');
  if (
    node.id === 'root' ||
    node.tagName.startsWith('JR-') ||
    ['APP-ROOT', 'ROUTER-OUTLET'].includes(node.tagName)
  )
    return children;
  const ignored = new Set([
    'data-discover',
    'routerlink',
    'routerlinkactive',
    'ariacurrentwhenactive',
    'jrmodal',
  ]);
  const attrs = Object.fromEntries(
    [...node.attributes]
      .filter(
        (attribute) =>
          !(attribute.name === 'class' && !attribute.value.trim()) &&
          !attribute.name.startsWith('ng-') &&
          !attribute.name.startsWith('_ng') &&
          !ignored.has(attribute.name),
      )
      .map((attribute) => [
        attribute.name,
        attribute.name === 'class'
          ? attribute.value.trim().split(/\s+/).sort().join(' ')
          : attribute.value,
      ])
      .sort(([a], [b]) => a.localeCompare(b)),
  );
  return [{ tag: node.tagName, attrs, children }];
}
let states = 0;
function compare(reactDom, angularDom, label) {
  assert.deepEqual(
    snapshot(angularDom.window.document.querySelector('#root')),
    snapshot(reactDom.window.document.querySelector('#root')),
    label,
  );
  states++;
}
for (const route of [
  '/',
  '/composiciones',
  '/tutoriales',
  '/noticias',
  '/noticias#set-19',
  '/guias',
  '/missing',
  '/composiciones/no-existe',
  '/composiciones?id=1',
]) {
  const a = await render(angular, route, true),
    r = await render(react, route, false);
  try {
    compare(r, a, route);
  } finally {
    a.window.close();
    r.window.close();
  }
}
// Open every modal from every catalog, including both news sets, using the same
// user actions in both applications. This also covers all tutorial block types.
for (const [route, card, close] of [
  ['/composiciones', '.tier-card', '.detail-close'],
  ['/tutoriales', '.tut-card', '.tut-panel-close'],
  ['/noticias', '.news-card', '.news-detail-close'],
  ['/noticias#set-19', '.news-card', '.news-detail-close'],
]) {
  const a = await render(angular, route, true),
    r = await render(react, route, false);
  try {
    const count = r.window.document.querySelectorAll(card).length;
    assert.equal(a.window.document.querySelectorAll(card).length, count);
    for (let index = 0; index < count; index++) {
      for (const dom of [r, a]) dom.window.document.querySelectorAll(card)[index].click();
      await pause();
      compare(r, a, `${route} modal ${index + 1}`);
      for (const dom of [r, a]) dom.window.document.querySelector(close).click();
      await pause();
    }
  } finally {
    a.window.close();
    r.window.close();
  }
}
for (const style of ['global', 'navbar', 'home', 'Compositions', 'tutorials', 'news']) {
  assert.equal(
    readFileSync(path.join(root, 'src/styles', style + '.css'), 'utf8'),
    readFileSync(path.join(reference, 'src/styles', style + '.css'), 'utf8'),
    `Original stylesheet: ${style}`,
  );
}
function compareAssets(relative = '') {
  for (const entry of readdirSync(path.join(reference, 'public', relative), {
    withFileTypes: true,
  })) {
    const file = path.join(relative, entry.name);
    if (entry.isDirectory()) compareAssets(file);
    else
      assert.deepEqual(
        readFileSync(path.join(root, 'public', file)),
        readFileSync(path.join(reference, 'public', file)),
        `Original asset: ${file}`,
      );
  }
}
compareAssets();
console.log(
  `Verified ${states} React/Angular DOM states; all original stylesheets and public assets are identical.`,
);
console.log(
  'This checks structure and behavior; it does not replace pixel comparisons in a browser.',
);
