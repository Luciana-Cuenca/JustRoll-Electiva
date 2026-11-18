import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { JSDOM, VirtualConsole } from 'jsdom';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist/justroll-angular/browser');
const main = readdirSync(output).find((file) => /^main-.*\.js$/.test(file));
assert.ok(main, 'Run npm run build before the application tests');
const bundle = (
  await build({
    entryPoints: [path.join(output, main)],
    bundle: true,
    write: false,
    format: 'iife',
    platform: 'browser',
    logLevel: 'silent',
  })
).outputFiles[0].text;

async function waitFor(check, message = 'Expected rendered application state') {
  for (let attempt = 0; attempt < 120; attempt++) {
    const value = check();
    if (value) return value;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  assert.fail(message);
}
async function application(route = '/') {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (error) => errors.push(error));
  virtualConsole.on('error', (error) => errors.push(error));
  const dom = new JSDOM(
    '<!doctype html><html><head><base href="/"></head><body><app-root id="root"></app-root></body></html>',
    {
      url: 'http://justroll.test' + route,
      runScripts: 'outside-only',
      pretendToBeVisual: true,
      virtualConsole,
    },
  );
  const { window } = dom;
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.eval(bundle);
  const document = window.document;
  await waitFor(
    () =>
      document.querySelector('.site-footer') && document.querySelector('main > router-outlet + *'),
  );
  await new Promise((resolve) => setTimeout(resolve, 15));
  return {
    window,
    document,
    errors,
    close: () => window.close(),
    click(selector) {
      const node = document.querySelector(selector);
      assert.ok(node, selector);
      node.click();
      return node;
    },
    async settled() {
      await new Promise((resolve) => setTimeout(resolve, 35));
      assert.deepEqual(errors, []);
    },
  };
}

test('home renders every section, decorative board and original navigation targets', async () => {
  const app = await application();
  try {
    for (const selector of [
      '.hero',
      '.quick-features',
      '.featured-compositions',
      '.learning-section',
      '.news-section',
    ])
      assert.ok(app.document.querySelector(selector));
    assert.equal(app.document.querySelectorAll('.board-cell').length, 28);
    assert.equal(app.document.querySelectorAll('.board-unit').length, 5);
    assert.equal(app.document.querySelectorAll('.composition-card').length, 3);
    assert.equal(
      app.document.querySelector('.composition-card-link').getAttribute('href'),
      '/composiciones?id=1',
    );
    app.click('.menu-toggle');
    await app.settled();
    assert.equal(app.document.querySelector('.menu-toggle').getAttribute('aria-expanded'), 'true');
    app.click('.navbar-links a[href="/tutoriales"]');
    await waitFor(() => app.document.querySelector('.tut-page'));
    assert.equal(app.document.querySelector('.menu-toggle').getAttribute('aria-expanded'), 'false');
    assert.equal(app.document.querySelectorAll('.tut-card').length, 15);
    await app.settled();
  } finally {
    app.close();
  }
});

test('composition cards, deep links, board, Escape, backdrop and scroll restoration', async () => {
  const app = await application('/composiciones?id=1');
  try {
    await waitFor(() => app.document.querySelector('.detail-modal'));
    assert.match(app.document.querySelector('#detail-title').textContent, /Riftbeast/);
    assert.equal(app.document.querySelectorAll('.hex-cell').length, 28);
    assert.equal(app.document.querySelectorAll('.hex-unit').length, 8);
    assert.equal(app.document.body.style.overflow, 'hidden');
    app.window.document.dispatchEvent(
      new app.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
    );
    await waitFor(() => !app.document.querySelector('.detail-overlay'));
    assert.equal(app.document.body.style.overflow, '');
    app.click('.tier-card');
    await waitFor(() => app.document.querySelector('.detail-modal'));
    app.click('.detail-modal');
    await app.settled();
    assert.ok(app.document.querySelector('.detail-modal'));
    app.click('.detail-overlay');
    await waitFor(() => !app.document.querySelector('.detail-modal'));
    await app.settled();
  } finally {
    app.close();
  }
});

test('tutorial reading, quiz confirmation and previous/next navigation', async () => {
  const app = await application('/tutoriales');
  try {
    assert.equal(app.document.querySelectorAll('.tut-art-cell').length, 15);
    assert.equal(app.document.querySelector('.tut-card-number').textContent.trim(), '01');
    assert.equal(
      [...app.document.querySelectorAll('.tut-card-number')].at(-1).textContent.trim(),
      '15',
    );
    app.click('.tut-card');
    await waitFor(() => app.document.querySelector('.tut-panel'));
    assert.ok(app.document.querySelectorAll('.tut-block-heading').length);
    assert.equal(app.document.querySelector('.tut-quiz-confirm').disabled, true);
    app.click('.tut-quiz-option');
    await app.settled();
    assert.equal(app.document.querySelector('.tut-quiz-confirm').disabled, false);
    app.click('.tut-quiz-confirm');
    await waitFor(() => app.document.querySelector('.tut-quiz-feedback'));
    assert.equal(app.document.querySelector('.tut-quiz-option').disabled, true);
    const title = app.document.querySelector('#tut-panel-title').textContent;
    app.click('.tut-panel-nav-btn--next');
    await app.settled();
    assert.notEqual(app.document.querySelector('#tut-panel-title').textContent, title);
    app.click('.tut-panel-nav-btn--prev');
    await app.settled();
    assert.equal(app.document.querySelector('#tut-panel-title').textContent, title);
    app.click('.tut-panel-close');
    await waitFor(() => !app.document.querySelector('.tut-panel'));
    assert.equal(app.document.body.style.overflow, '');
    await app.settled();
  } finally {
    app.close();
  }
});

test('news set fragment, selector, article navigation and keyboard shortcuts', async () => {
  const app = await application('/noticias#set-19');
  try {
    assert.match(app.document.querySelector('.news-set-name').textContent, /Prismatic/);
    app.click('#tab-set-18');
    await app.settled();
    assert.match(app.document.querySelector('.news-set-name').textContent, /Enchanted/);
    assert.equal(app.window.location.hash, '');
    app.click('.news-card');
    await waitFor(() => app.document.querySelector('.news-detail-panel'));
    const title = app.document.querySelector('.news-detail-title').textContent;
    app.window.document.dispatchEvent(
      new app.window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
    );
    await app.settled();
    assert.notEqual(app.document.querySelector('.news-detail-title').textContent, title);
    app.window.document.dispatchEvent(
      new app.window.KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }),
    );
    await app.settled();
    assert.equal(app.document.querySelector('.news-detail-title').textContent, title);
    app.click('.news-detail-close');
    await waitFor(() => !app.document.querySelector('.news-detail-panel'));
    assert.equal(app.document.body.style.overflow, '');
    app.click('#tab-set-19');
    await app.settled();
    assert.equal(app.window.location.hash, '#set-19');
  } finally {
    app.close();
  }
});

test('legacy guides route redirects and unknown routes display the original 404', async () => {
  for (const [route, selector] of [
    ['/guias', '.news-page'],
    ['/missing-page', 'main h1'],
  ]) {
    const app = await application(route);
    try {
      assert.ok(app.document.querySelector(selector));
      if (route === '/missing-page')
        assert.equal(app.document.querySelector(selector).textContent, '404');
      await app.settled();
    } finally {
      app.close();
    }
  }
});
