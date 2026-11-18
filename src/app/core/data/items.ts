import type { Item } from '../../shared/models/content.models';
// src/data/items.js
// Catálogo de objetos reales de Teamfight Tactics utilizados en las composiciones.

const items: Item[] = [
  {
    id: 'guinsoos-rageblade',
    name: 'Espadafuria de Guinsoo',
    image: '/images/items/guinsoos-rageblade.png',
  },
  {
    id: 'krakens-fury',
    name: 'Furia del Kraken',
    image: '/images/items/krakens-fury.png',
  },
  {
    id: 'deathblade',
    name: 'Filo de la Muerte',
    image: '/images/items/deathblade.png',
  },
  {
    id: 'spear-of-shojin',
    name: 'Lanza de Shojin',
    image: '/images/items/spear-of-shojin.png',
  },
  {
    id: 'last-whisper',
    name: 'Último Suspiro',
    image: '/images/items/last-whisper.png',
  },
  {
    id: 'dragons-claw',
    name: 'Garra de Dragón',
    image: '/images/items/dragons-claw.png',
  },
  {
    id: 'warmogs-armor',
    name: 'Armadura de Warmog',
    image: '/images/items/warmogs-armor.png',
  },
  {
    id: 'bramble-vest',
    name: 'Vesta Espinosa',
    image: '/images/items/bramble-vest.png',
  },
  {
    id: 'thiefs-gloves',
    name: 'Guantes de Ladrón',
    image: '/images/items/thiefs-gloves.png',
  },
  {
    id: 'elderwood-emblem',
    name: 'Emblema de Bosqueviejo',
    image: '/images/items/elderwood-emblem.png',
  },
  {
    id: 'crownguard',
    name: 'Guardia de la Corona',
    image: '/images/items/crownguard.png',
  },
  {
    id: 'evenshroud',
    name: 'Manto del Ocaso',
    image: '/images/items/evenshroud.png',
  },
  {
    id: 'red-buff',
    name: 'Mejora Roja',
    image: '/images/items/red-buff.png',
  },
  {
    id: 'protectors-vow',
    name: 'Juramento del Protector',
    image: '/images/items/protectors-vow.png',
  },
  {
    id: 'blue-buff',
    name: 'Mejora Azul',
    image: '/images/items/blue-buff.png',
  },
  {
    id: 'rabadons-deathcap',
    name: 'Sombrero Mortífero de Rabadon',
    image: '/images/items/rabadons-deathcap.png',
  },
  {
    id: 'jeweled-gauntlet',
    name: 'Guantelete Deslumbrante',
    image: '/images/items/jeweled-gauntlet.png',
  },
  {
    id: 'gargoyle-stoneplate',
    name: 'Armadura Pétrea',
    image: '/images/items/gargoyle-stoneplate.png',
  },
  {
    id: 'void-staff',
    name: 'Báculo del Vacío',
    image: '/images/items/void-staff.png',
  },
  {
    id: 'morellonomicon',
    name: 'Morellonomicón',
    image: '/images/items/morellonomicon.png',
  },
  {
    id: 'power-gauntlet',
    name: 'Mangual del Guerrero',
    image: '/images/items/power-gauntlet.png',
  },
  {
    id: 'spirit-visage',
    name: 'Apariencia Espiritual',
    image: '/images/items/spirit-visage.png',
  },
  {
    id: 'adaptive-helm',
    name: 'Yelmo Adaptable',
    image: '/images/items/adaptive-helm.png',
  },
  {
    id: 'edge-of-night',
    name: 'Filo de la Noche',
    image: '/images/items/edge-of-night.png',
  },
  {
    id: 'hand-of-justice',
    name: 'Mano de la Justicia',
    image: '/images/items/hand-of-justice.png',
  },
  {
    id: 'infinity-edge',
    name: 'Filo Infinito',
    image: '/images/items/infinity-edge.png',
  },
  {
    id: 'hextech-gunblade',
    name: 'Sablepistola Hextech',
    image: '/images/items/hextech-gunblade.png',
  },
  {
    id: 'titan-resolve',
    name: 'Determinación Titánica',
    image: '/images/items/titan-resolve.png',
  },
  {
    id: 'titans-resolve',
    name: 'Determinación Titánica',
    image: '/images/items/titan-resolve.png',
  },
  {
    id: 'sunfire-cape',
    name: 'Capa Solar',
    image: '/images/items/sunfire-cape.png',
  },
  {
    id: 'archangels-staff',
    name: 'Bastón del Arcángel',
    image: '/images/items/archangels-staff.png',
  },
  {
    id: 'steraks-gage',
    name: 'Guantelete de Sterak',
    image: '/images/items/steraks-gage.png',
  },
  {
    id: 'quicksilver',
    name: 'Fajín de Mercurio',
    image: '/images/items/quicksilver.png',
  },
  {
    id: 'ionic-spark',
    name: 'Chispa Iónica',
    image: '/images/items/ionic-spark.png',
  },
  {
    id: 'fae-emblem',
    name: 'Emblema Hadístico (Hada)',
    image: '/images/items/fae-emblem.png',
  },
  {
    id: 'lunar-emblem',
    name: 'Emblema Lunar',
    image: '/images/items/lunar-emblem.png',
  },
];

export const itemMap = new Map(items.map((item) => [item.id, item]));
export default items;
