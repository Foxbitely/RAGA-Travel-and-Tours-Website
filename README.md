# RAGA Travel and Tours

The website for **RAGA Travel and Tours**, a travel agency in Bonifacio, Misamis Occidental, Philippines. Visitors can browse local and international tour packages, read about the company, and send booking requests or enquiries straight to the agency's inbox.

Built with React 19, React Router 7 and Vite. Forms are sent through [EmailJS](https://www.emailjs.com/), so there is no backend to host.

## Features

- **Landing page:** a crossfading photo slideshow, why-choose-us highlights and the most popular packages.
- **Catalogue:** 14 packages (7 in the Philippines, 7 international), each with its own detail page.
- **Booking and contact forms:** sent by email through EmailJS, with friendly error messages.
- **Responsive and accessible:** a mobile menu, skip link, keyboard support, and a slideshow that can be paused and drops its zoom effect for visitors who prefer reduced motion.

## Getting started

You need [Node.js](https://nodejs.org/) 20.19 or newer (the LTS release is fine).

The app lives in `website/frontend/RAGA`, so run every command from there:

```bash
cd website/frontend/RAGA
npm install
npm run dev
```

Then open http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server, which reloads as you edit |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally to check it |
| `npm run lint` | Checks the code with ESLint |

## Email setup (EmailJS)

The Contact and Book pages send their forms through EmailJS. The IDs come from environment variables. Copy the example file and fill it in:

```bash
cd website/frontend/RAGA
cp .env.example .env
```

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_BOOKING_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

All four come from the [EmailJS dashboard](https://dashboard.emailjs.com/). `.env` is ignored by git, so each person (and each host) sets their own. Restart `npm run dev` after editing it.

These values are built into the public site, so only ever use the **public** key here, never a private key. In the dashboard, also restrict sending to your website's domain so nobody else can use your quota.

If the variables are missing, the forms show a message asking visitors to email the agency directly instead.

The email templates can use these variables:

| Template | Variables |
| --- | --- |
| Contact | `form_type`, `from_name`, `reply_to`, `phone`, `message` |
| Booking | `form_type`, `from_name`, `reply_to`, `package_name`, `package_route`, `duration`, `price`, `departure`, `travellers`, `interest`, `notes` |

## Editing the content

Almost all of the wording lives in one file, [`src/data/site.js`](website/frontend/RAGA/src/data/site.js), so most updates don't need any component changes.

| To change… | Edit in `site.js` |
| --- | --- |
| Landing headline and slideshow photos | `hero` (`slides` lists the photos in order) |
| "Why Choose RAGA?" cards | `features` |
| Packages, prices and blurbs | `packages` |
| Packages shown on the home page | `popularIds` |
| About page story | `story` |
| Email, phone numbers, address, hours | `contact` |
| Navigation links | `nav` |

**Adding a package:** add an entry to `packages` with a unique `id`, then put its poster in `public/images/`. The `id` becomes the page address (`/catalogues/<id>`), and `price` is a plain number such as `2799`, which shows as ₱2,799.

**Images:** anything in `public/` is served from the site root, so `public/images/cebu.png` becomes `/images/cebu.png`. Keep slideshow photos at about 2400px wide and saved as JPEG (a few hundred KB each). Full-size camera photos make the landing page slow to load.

**Colours and fonts:** these are design tokens at the top of [`src/index.css`](website/frontend/RAGA/src/index.css), such as `--rose` (the brand pink). Change a value there and it updates across the whole site.

## Project structure

```
website/frontend/RAGA/
├── public/
│   ├── logo.png
│   └── images/          package posters, about photo
│       └── hero/        landing slideshow photos
├── src/
│   ├── main.jsx         app entry (router setup)
│   ├── App.jsx          routes and page layout
│   ├── index.css        design tokens and global styles
│   ├── data/site.js     all site content
│   ├── lib/emailjs.js   EmailJS setup and the two send functions
│   ├── components/      reusable pieces (Navbar, Hero, PackageCard, …)
│   └── pages/           one file per page
├── .env.example         EmailJS settings template (copy to .env)
├── index.html
└── vite.config.js
```

Each component and page has a matching `.css` file next to it.

### Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/catalogues` | All packages |
| `/catalogues/:id` | Package details |
| `/about` | About us |
| `/contact` | Contact form and details |
| `/book` | Booking request form |

## Deploying

Run `npm run build` and upload the `dist/` folder to any static host, such as Netlify, Vercel, Cloudflare Pages or GitHub Pages. Set the four `VITE_EMAILJS_*` variables in the host's settings, because they are read at build time.

This is a single-page app, so the host must send every path to `index.html`. Otherwise, opening or refreshing a page like `/catalogues/japan` returns a 404:

- **Netlify:** create `public/_redirects` containing `/*  /index.html  200`
- **Vercel:** add a `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`

## Contact

RAGA Travel and Tours · Purok 2, Poblacion, Bonifacio, Misamis Occidental
[Facebook](https://www.facebook.com/profile.php?id=61566022247507) · rossel.arnuco80@yahoo.com
