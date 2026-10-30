/* ==========================================================================
   Site content
   All copy and package data lives here so components stay presentational.
   Prices are Philippine pesos, stored as numbers and formatted by peso().
   ========================================================================== */

/** Formats 40999 as "₱40,999". */
export const peso = (n) => `₱${n.toLocaleString('en-PH')}`;

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Catalogues', to: '/catalogues' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

export const hero = {
  eyebrow: 'Travel on!',
  title: 'Your Adventure Awaits',
  body: 'Explore our different travel packages designed by people who love to travel.',
  cta: { label: 'Explore Now', to: '/catalogues' },
  slides: [
    '/images/window-view.jpg',
    '/images/hero/landing1.png',
    '/images/hero/landing2.png',
    '/images/hero/landing3.png',
    '/images/hero/landing4.png',
  ],
};

export const features = [
  {
    id: 'ready',
    title: 'Ready-to-go Adventures',
    body: 'Hand-picked destinations bundled into seamless travel packages, so you can spend less time planning and more time exploring.',
  },
  {
    id: 'tailored',
    title: 'Tailored Package Adjustments',
    body: 'Your trip, your way. Our packages are expertly designed, but we offer customisable tweaks so every itinerary matches your pace and preferences.',
  },
  {
    id: 'local',
    title: 'End-to-End Local Expertise',
    body: 'From the moment you enquire to the end of your journey, our local team makes sure your package delivers an authentic, stress-free experience.',
  },
];

/* --------------------------------------------------------------------------
   Packages
   `price` is the number only. `priceLabel` is the wording from the poster:
   local trips advertise "For as low as", international ones are per-person
   promo fares. `image` points at /public/images/.
   -------------------------------------------------------------------------- */

export const packages = [
  /* ---------- Philippines ---------- */
  {
    id: 'siargao',
    name: 'Siargao',
    route: 'Surigao del Norte',
    scope: 'Local',
    duration: '3D2N',
    price: 2799,
    priceLabel: 'For as low as',
    image: '/images/siargao.png',
    blurb: 'Sugba Lagoon, the coconut road and a morning at Cloud 9. Three days on the island that surfs.',
  },
  {
    id: 'boracay',
    name: 'Boracay',
    route: 'Aklan',
    scope: 'Local',
    duration: '3D2N',
    price: 2799,
    priceLabel: 'For as low as',
    image: '/images/boracay.png',
    blurb: 'White Beach sunsets, paraw sailing and as many watersports as you can fit into a long weekend.',
  },
  {
    id: 'el-nido',
    name: 'El Nido',
    route: 'Palawan',
    scope: 'Local',
    duration: '3D2N',
    price: 2899,
    priceLabel: 'For as low as',
    image: '/images/el_nido.png',
    blurb: 'Island hopping through the lagoons, kayaks in the limestone coves, lunch cooked on the sand.',
  },
  {
    id: 'camiguin',
    name: 'Camiguin',
    route: 'Northern Mindanao',
    scope: 'Local',
    duration: '3D2N',
    price: 3199,
    priceLabel: 'For as low as',
    image: '/images/camiguin.png',
    blurb: 'Katibawasan Falls, the Sunken Cemetery and a volcano skyline you can see from the shore.',
  },
  {
    id: 'iloilo',
    name: 'Iloilo',
    route: 'Western Visayas',
    scope: 'Local',
    duration: '3D2N',
    price: 3199,
    priceLabel: 'For as low as',
    image: '/images/iloilo.png',
    blurb: 'Molo Church, the windmill fields and an island sunset off the Islas de Gigantes coast.',
  },
  {
    id: 'cebu',
    name: 'Cebu',
    route: 'Central Visayas',
    scope: 'Local',
    duration: '3D2N',
    price: 3299,
    priceLabel: 'For as low as',
    image: '/images/cebu.png',
    blurb: 'Magellan\u2019s Cross and the heritage sites, then a full day on the beaches down south.',
  },
  {
    id: 'manila',
    name: 'Manila',
    route: 'Metro Manila',
    scope: 'Local',
    duration: '3D2N',
    price: 4199,
    priceLabel: 'For as low as',
    image: '/images/manila.png',
    blurb: 'Intramuros by night, Manila Cathedral, Rizal Park and the food streets in between.',
  },

  /* ---------- International ---------- */
  {
    id: 'chengdu',
    name: 'Chengdu',
    route: 'Chongqing \u2013 Chengdu',
    scope: 'International',
    duration: '5D4N',
    price: 21999,
    priceLabel: 'Promo, per person',
    airline: 'Out MNL via Air China',
    image: '/images/chengdu.png',
    blurb: 'The panda base, Chongqing\u2019s stacked skyline and the light rail that runs through a building.',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    route: 'Bangkok \u2013 Pattaya',
    scope: 'International',
    duration: '4D3N',
    price: 28999,
    priceLabel: 'Promo, per person',
    airline: 'Out MNL via Cebu Pacific',
    image: '/images/thailand.png',
    blurb: 'The Grand Palace, the floating markets and an afternoon at an elephant sanctuary.',
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    route: 'Taichung \u2013 Taipei',
    scope: 'International',
    duration: '4D3N',
    price: 29999,
    priceLabel: 'Promo, per person',
    airline: 'Out MNL via Cebu Pacific',
    image: '/images/taiwan.png',
    blurb: 'Ximending after dark, the Martyrs\u2019 Shrine and the night markets of Taichung.',
  },
  {
    id: 'korea',
    name: 'Korea',
    route: 'Nami Island \u2013 Seoul',
    scope: 'International',
    duration: '5D4N',
    price: 40999,
    priceLabel: 'Promo, per person',
    airline: 'Out MNL via Cebu Pacific',
    image: '/images/korea.png',
    blurb: 'The tree-lined lanes of Nami Island, Gyeongbokgung in hanbok, and Starfield Library in Seoul.',
  },
  {
    id: 'beijing',
    name: 'Beijing',
    route: 'Beijing + Shanghai',
    scope: 'International',
    duration: '6D5N',
    price: 53999,
    priceLabel: 'Promo, per person',
    airline: 'Out MNL via Philippine Airlines',
    image: '/images/beijing.png',
    blurb: 'The Temple of Heaven, the Great Wall, then the Bund and Shanghai Disneyland.',
  },
  {
    id: 'japan-disney',
    name: 'Meet Japan',
    route: 'Tokyo \u2013 Disneyland \u2013 Mt. Fuji',
    scope: 'International',
    duration: '5D4N',
    price: 59999,
    priceLabel: 'Promo, per person',
    note: 'Free Japan visa processing. Minimum 2 pax.',
    image: '/images/japan.png',
    blurb: 'A whole day at Tokyo Disneyland, Mt. Fuji and Lake Kawaguchiko, then Asakusa and Shibuya.',
  },
  {
    id: 'japan',
    name: 'Japan',
    route: 'Tokyo \u2013 Mt. Fuji \u2013 Osaka',
    scope: 'International',
    duration: '6D5N',
    price: 71999,
    priceLabel: 'Promo, per person',
    airline: 'Out MNL via Cebu Pacific',
    image: '/images/japan2.png',
    blurb: 'Osaka Castle in blossom season, Senso-ji, and Mt. Fuji from the lake road.',
  },
];

/** The three shown on the home page, matching the wireframe. */
export const popularIds = ['korea', 'japan', 'manila'];

/** Every package includes these. Shown as icons on the posters. */
export const inclusions = ['Airfare', 'Hotel', 'Meals', 'Tour', 'Transfer'];

export const story = {
  heading: 'Our Story',
  image: '/images/about_us.jpg',
  imageAlt: 'The RAGA Travel and Tours team',
  date: 'October 1, 2024: A new era of exploration',
  paragraphs: [
    'We did not just start a travel company, we started a movement to make the world more accessible. Since our founding in late 2024 we have been on a mission to design travel packages that balance must-see landmarks with those quiet, locals-only moments.',
    'We believe travel should be seamless, affordable and deeply personal. Whether you are after a quick weekend escape or a bucket-list adventure, our packages are built by travellers, for travellers.',
  ],
};

export const contact = {
  email: 'rossel.arnuco80@yahoo.com',
  phones: ['0956 295 1145', '0945 471 1036', '(088) 545 5778'],
  address: 'Purok 2, Poblacion, Bonifacio, Misamis Occidental',
  facebook: 'https://www.facebook.com/profile.php?id=61566022247507',
  hours: [
    { days: 'Monday \u2013 Friday', time: '9:00 AM \u2013 4:00 PM' },
    { days: 'Saturday \u2013 Sunday', time: 'Closed' },
  ],
};
