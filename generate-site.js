const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const EMAIL = "chris@southwestjunkhauling.com";
const PHONE_DISPLAY = "480-490-8033";
const PHONE_HREF = "tel:+14804908033";
const QUOTE = `mailto:${EMAIL}?subject=Free%20Junk%20Removal%20Quote%20Request`;
const TAGLINE = "You Call It, We'll Haul It";
const MISSION = "Southwest Hauling helps homeowners and businesses across the East Valley clear clutter quickly, professionally, and responsibly through reliable hauling, junk removal, cleanouts, and property cleanup services.";

const services = [
  ["junk-removal-east-valley-az", "Junk Removal", "Junk removal in the East Valley, AZ", "General junk removal for household clutter, bulky items, garage piles, outdoor junk, and unwanted materials."],
  ["garage-cleanout-east-valley-az", "Garage Cleanouts", "Garage cleanouts in the East Valley, AZ", "Clear clutter, boxes, old tools, storage piles, shelves, and household junk from your garage."],
  ["furniture-removal-east-valley-az", "Furniture Removal", "Furniture removal in the East Valley, AZ", "Fast pickup for couches, sectionals, tables, bedroom sets, desks, patio furniture, and bulky household items."],
  ["appliance-removal-east-valley-az", "Appliance Removal", "Appliance removal in the East Valley, AZ", "Washer, dryer, refrigerator, range, freezer, and bulky appliance removal with honest pricing."],
  ["property-cleanout-east-valley-az", "Property Cleanouts", "Property cleanouts in the East Valley, AZ", "Rental, move-out, foreclosure, estate, and full-property junk hauling for homes and businesses."],
  ["yard-waste-removal-east-valley-az", "Yard Waste Removal", "Yard waste removal in the East Valley, AZ", "Branches, trimmings, storm debris, outdoor clutter, and backyard cleanup loads hauled away."],
  ["construction-debris-removal-east-valley-az", "Construction Debris Removal", "Construction debris removal in the East Valley, AZ", "Light construction debris, remodel scraps, cardboard, packing debris, wood, and non-hazardous cleanup loads."],
  ["hot-tub-removal-east-valley-az", "Hot Tub Removal", "Hot tub removal in the East Valley, AZ", "Hot tub, spa, and bulky outdoor item removal with heavy lifting, loading, and hauling handled for you."],
  ["commercial-cleanouts-east-valley-az", "Commercial Cleanouts", "Commercial cleanouts in the East Valley, AZ", "Office, retail, warehouse, and business cleanouts for furniture, clutter, packing debris, and non-hazardous junk."],
  ["estate-cleanout-east-valley-az", "Estate Cleanouts", "Estate cleanouts in the East Valley, AZ", "Respectful estate cleanout help for furniture, boxes, garage items, yard debris, and full cleanouts."],
  ["moving-labor-assistance-east-valley-az", "Moving Labor Assistance", "Moving labor assistance in the East Valley, AZ", "Loading, lifting, and hauling help for moves, cleanouts, furniture pickups, and bulky item removal."],
  ["trash-hauling-east-valley-az", "Trash Hauling", "Trash hauling in the East Valley, AZ", "Fast trash hauling for bagged waste, loose junk, cleanup piles, and non-hazardous debris."],
  ["storage-unit-cleanout-east-valley-az", "Storage Unit Cleanouts", "Storage unit cleanouts in the East Valley, AZ", "Empty storage units quickly so you can reclaim space and stop paying for things you no longer need."],
  ["mattress-removal-east-valley-az", "Mattress Removal", "Mattress removal in the East Valley, AZ", "Mattress, box spring, bed frame, bedroom furniture, and single-item pickup service."],
  ["same-day-junk-removal-east-valley-az", "Same Day Junk Removal", "Same day junk removal in the East Valley, AZ", "Fast response junk hauling when scheduling allows for urgent pickups, cleanouts, and clutter removal."]
];

const cities = [
  ["mesa-junk-removal", "Mesa", "Mesa junk removal"],
  ["gilbert-junk-removal", "Gilbert", "Gilbert junk removal"],
  ["queen-creek-junk-removal", "Queen Creek", "Queen Creek junk removal"],
  ["chandler-junk-removal", "Chandler", "Chandler junk removal"],
  ["san-tan-valley-junk-removal", "San Tan Valley", "San Tan Valley junk removal"],
  ["apache-junction-junk-removal", "Apache Junction", "Apache Junction junk removal"],
  ["tempe-junk-removal", "Tempe", "Tempe junk removal"],
  ["scottsdale-junk-removal", "Scottsdale", "Scottsdale junk removal"],
  ["phoenix-junk-removal", "Phoenix", "Phoenix junk removal"]
];

const navServices = [
  ["junk-removal-east-valley-az", "Junk Removal"],
  ["garage-cleanout-east-valley-az", "Garage Cleanouts"],
  ["furniture-removal-east-valley-az", "Furniture Removal"],
  ["appliance-removal-east-valley-az", "Appliance Removal"],
  ["property-cleanout-east-valley-az", "Property Cleanouts"],
  ["yard-waste-removal-east-valley-az", "Yard Waste Removal"],
  ["construction-debris-removal-east-valley-az", "Construction Debris Removal"],
  ["hot-tub-removal-east-valley-az", "Hot Tub Removal"],
  ["commercial-cleanouts-east-valley-az", "Commercial Cleanouts"],
  ["estate-cleanout-east-valley-az", "Estate Cleanouts"],
  ["moving-labor-assistance-east-valley-az", "Moving Labor Assistance"],
  ["trash-hauling-east-valley-az", "Trash Hauling"]
];

const navCities = [
  ["mesa-junk-removal", "Mesa AZ"],
  ["gilbert-junk-removal", "Gilbert AZ"],
  ["queen-creek-junk-removal", "Queen Creek AZ"],
  ["chandler-junk-removal", "Chandler AZ"],
  ["san-tan-valley-junk-removal", "San Tan Valley AZ"],
  ["apache-junction-junk-removal", "Apache Junction AZ"],
  ["tempe-junk-removal", "Tempe AZ"],
  ["scottsdale-junk-removal", "Scottsdale AZ"]
];

const homeServices = [
  "Furniture Removal",
  "Appliance Removal",
  "Garage Cleanouts",
  "Yard Debris Removal",
  "Storage Unit Cleanouts",
  "Property Cleanouts",
  "Full Cleanouts",
  "Commercial Junk Removal"
];

const trustBadges = [
  "Locally Owned",
  "Fast Response",
  "Affordable Pricing",
  "Single Items to Full Cleanouts",
  "Residential and Commercial",
  "Donation and Disposal Focused"
];

const faqs = [
  ["How much does junk removal cost?", "Junk removal pricing depends on the amount of material, item type, access, and pickup location. Send details and photos for a fast free quote."],
  ["Do you offer same day junk removal?", "Same day junk removal is available when scheduling allows. Call now or request a free quote with your preferred pickup date."],
  ["Do you remove furniture and appliances?", "Yes. Southwest Hauling removes furniture, appliances, mattresses, garage junk, yard debris, storage unit items, and full cleanout loads."],
  ["Do you handle full property cleanouts?", "Yes. We handle full property cleanouts for homes, rentals, storage units, yards, garages, estates, and commercial spaces."],
  ["What areas do you serve?", "We serve Mesa, Gilbert, Chandler, Queen Creek, Tempe, Scottsdale, Apache Junction, San Tan Valley, Phoenix, and the East Valley."]
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function write(route, html) {
  const target = route === "/" ? path.join(ROOT, "index.html") : path.join(ROOT, route, "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

function schema(type, title, description) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Southwest Hauling & Junk Removal",
    email: EMAIL,
    telephone: "+1-480-490-8033",
    image: "https://southwestjunkhauling.com/assets/southwest-logo.png",
    areaServed: cities.map((city) => `${city[1]} AZ`),
    description,
    url: `https://southwestjunkhauling.com${type === "home" ? "/" : ""}`
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
  return `<script type="application/ld+json">${JSON.stringify(localBusiness)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
}

function header() {
  return `<header class="site-header" id="top">
      <a class="brand brand-with-logo" href="/" aria-label="Southwest Hauling and Junk Removal home">
        <img src="/assets/southwest-logo.png" alt="Southwest Hauling & Junk Removal logo">
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
        <span>Menu</span>
        <i aria-hidden="true"></i>
      </button>
      <nav class="top-actions" id="primary-nav" aria-label="Primary">
        <a href="/">Home</a>
        <details class="nav-dropdown">
          <summary>Services</summary>
          <div class="dropdown-panel">
            ${navServices.map(([slug, label]) => `<a href="/services/${slug}/">${esc(label)}</a>`).join("")}
          </div>
        </details>
        <details class="nav-dropdown">
          <summary>Service Areas</summary>
          <div class="dropdown-panel location-panel">
            ${navCities.map(([slug, label]) => `<a href="/locations/${slug}/">${esc(label)}</a>`).join("")}
          </div>
        </details>
        <a href="/about/">About Us</a>
        <a href="/#reviews">Reviews</a>
        <a href="/contact/">Contact</a>
        <a class="phone-cta" href="${PHONE_HREF}">${PHONE_DISPLAY}</a>
        <a class="nav-cta" href="${QUOTE}">Get Free Quote</a>
      </nav>
    </header>`;
}

function bottomCta() {
  return `<nav class="bottom-cta" aria-label="Sticky contact actions">
      <a href="${PHONE_HREF}">Call Now</a>
      <a href="${QUOTE}">Get Free Quote</a>
      <a href="mailto:${EMAIL}">Email Chris</a>
    </nav>`;
}

function footer() {
  return `<footer class="site-footer">
      <div>
        <strong>Southwest Hauling & Junk Removal</strong>
        <p>Fast, affordable junk removal for homes, businesses, garages, storage units, yards, rentals, and full property cleanouts across the East Valley.</p>
      </div>
      <div class="footer-links" aria-label="Footer internal links">
        <a href="/">Home</a>
        <a href="/services/">Services</a>
        <a href="/about/">About</a>
        <a href="/contact/">Contact</a>
        <a href="/services/same-day-junk-removal-east-valley-az/">Same Day Junk Removal</a>
      </div>
      <a href="mailto:${EMAIL}">${EMAIL}</a>
    </footer>`;
}

function serviceAreaLinks() {
  return `<section class="section areas" id="service-areas">
      <div class="section-heading">
        <h2>East Valley service areas</h2>
        <p>Local junk removal near you for homes, businesses, garages, storage units, yards, rentals, and full property cleanouts.</p>
      </div>
      <div class="area-links" aria-label="Service area links">
        ${cities.map(([slug, city, label]) => `<a href="/locations/${slug}/">${esc(label)}</a>`).join("")}
      </div>
    </section>`;
}

function ctaSection() {
  return `<section class="section cta-section" id="contact">
      <h2>Ready to clear the junk?</h2>
      <p>Call, email, or send a free quote request for affordable junk removal in the East Valley.</p>
      <div class="hero-actions three-actions">
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="button dark" href="${PHONE_HREF}">Call Now</a>
        <a class="button light" href="mailto:${EMAIL}">Email Chris</a>
      </div>
    </section>`;
}

function faqSection() {
  return `<section class="section faq" id="faq">
      <div class="section-heading">
        <h2>Junk removal FAQ</h2>
        <p>Quick answers for East Valley homeowners, renters, landlords, property managers, and businesses.</p>
      </div>
      ${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
    </section>`;
}

function quoteForm() {
  return `<form id="estimate-form" action="mailto:${EMAIL}" method="post" enctype="text/plain">
      <input type="hidden" name="recipient" value="${EMAIL}">
      <label>Name<input name="name" autocomplete="name" required></label>
      <label>Phone<input name="phone" autocomplete="tel" required></label>
      <label>Email<input type="email" name="email" autocomplete="email" required></label>
      <label>Address<input name="address" autocomplete="street-address"></label>
      <label>City<input name="city" autocomplete="address-level2" required></label>
      <label>What needs to be removed?<select name="service" required>
        <option value="">Choose a service</option>
        ${homeServices.concat(["Estate Cleanout", "Construction Debris Removal", "Mattress Removal", "Same Day Junk Removal"]).map((item) => `<option>${esc(item)}</option>`).join("")}
      </select></label>
      <label>Upload photos<input type="file" name="photos" accept="image/*" multiple></label>
      <label>Preferred pickup date<input type="date" name="pickup_date"></label>
      <label class="full">Message<textarea name="message" rows="5" placeholder="Tell us what needs to go, where it is, and any access details."></textarea></label>
      <button class="button primary full" type="submit">Request My Free Quote</button>
      <p class="form-note" id="form-note">Submissions are addressed to <a href="mailto:${EMAIL}">${EMAIL}</a>. If you add photos, attach them in the email window that opens.</p>
    </form>`;
}

function layout({ title, description, h1, intro, main, type = "page" }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="/assets/southwest-logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
    <script defer src="/script.js"></script>
    ${schema(type, title, description)}
  </head>
  <body>
    ${header()}
    <main>
      <section class="hero compact-hero">
        <div class="hero-media" role="img" aria-label="Southwest Hauling junk removal truck and trailer in the East Valley"></div>
        <div class="hero-content">
          <p class="service-area">East Valley of Phoenix, Arizona</p>
          <h1>${esc(h1)}</h1>
          <p class="tagline">${esc(TAGLINE)}</p>
          <p class="local-intro">${esc(intro)}</p>
          <div class="hero-actions">
            <a class="button primary" href="${QUOTE}">Get Free Quote</a>
            <a class="button secondary" href="${PHONE_HREF}">Call Now</a>
            <a class="button secondary" href="mailto:${EMAIL}">Email Chris</a>
          </div>
          <div class="inline-links" aria-label="Internal page links">
            <a href="/services/">Services</a>
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
            <a href="#service-areas">Service Areas</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </section>
      ${main}
      ${serviceAreaLinks()}
      ${ctaSection()}
      ${faqSection()}
    </main>
    ${bottomCta()}
    ${footer()}
  </body>
</html>`;
}

function home() {
  const main = `<section class="trust-strip" aria-label="Trust badges">
      ${trustBadges.map((badge) => `<div><strong>${esc(badge)}</strong><span>Southwest Hauling & Junk Removal</span></div>`).join("")}
    </section>
    <section class="section brand-statement">
      <p>${esc(MISSION)}</p>
    </section>
    <section class="section services" id="services">
      <div class="section-heading">
        <h2>Junk removal services</h2>
        <p>Single items, bulky pickups, commercial junk removal, and full cleanouts handled by a local East Valley hauling crew.</p>
      </div>
      <div class="service-grid">
        ${homeServices.map((service, i) => `<article><span>${String(i + 1).padStart(2, "0")}</span><h3>${esc(service)}</h3><p>${esc(serviceCopy(service))}</p></article>`).join("")}
      </div>
    </section>
    ${beforeAfter()}
    <section class="section split">
      <div>
        <h2>Dependable hauling with a local handshake feel</h2>
        <ul class="check-list">
          <li>Fast response for homes, businesses, and property managers.</li>
          <li>Hard-working crew that handles lifting, loading, and cleanup.</li>
          <li>Honest pricing before the work begins.</li>
          <li>Responsible disposal and donation focus whenever practical.</li>
          <li>Locally owned service rooted in Queen Creek and the East Valley.</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>You call it, we'll haul it</h3>
        <p>From one bulky item to a full property cleanout, Southwest Hauling keeps the job simple, clear, and handled.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="${PHONE_HREF}">Call ${PHONE_DISPLAY}</a>
      </div>
    </section>`;
  return layout({
    type: "home",
    title: "East Valley Junk Removal & Hauling | Southwest Hauling",
    description: "Fast, affordable junk removal for homes, businesses, garages, storage units, yards, rentals, and full property cleanouts across Mesa, Gilbert, Chandler, Queen Creek, Tempe, Scottsdale, and the East Valley.",
    h1: "East Valley Junk Removal With Southwest Grit",
    intro: "Fast, affordable hauling for homes, businesses, garages, storage units, yards, rentals, and full property cleanouts across Mesa, Gilbert, Chandler, Queen Creek, Tempe, Scottsdale, and the East Valley.",
    main
  });
}

function serviceCopy(service) {
  const map = {
    "Furniture Removal": "Couches, sectionals, tables, desks, patio furniture, and bulky household items.",
    "Appliance Removal": "Washers, dryers, refrigerators, ranges, freezers, and other bulky appliances.",
    "Garage Cleanouts": "Clutter, boxes, old tools, shelves, storage piles, and household junk.",
    "Yard Debris Removal": "Branches, trimmings, outdoor debris, and cleanup loads.",
    "Storage Unit Cleanouts": "Empty storage units quickly and stop paying for unused space.",
    "Property Cleanouts": "Rentals, move-outs, neglected spaces, and full property cleanup jobs.",
    "Full Cleanouts": "Large cleanout projects from single rooms to full properties.",
    "Commercial Junk Removal": "Office furniture, business clutter, packing debris, and non-hazardous junk."
  };
  return map[service] || "Reliable local junk hauling in the East Valley.";
}

function beforeAfter() {
  const items = [
    ["01", "Gilbert junk removal 01", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["02", "Gilbert junk removal 02", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["03", "Gilbert junk removal 03", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["04", "Gilbert junk removal 04", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["05", "Gilbert junk removal 05", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["06", "Gilbert junk removal 06", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["07", "Gilbert junk removal 07", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["08", "Gilbert junk removal 08", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["09", "Gilbert junk removal 09", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["10", "Gilbert junk removal 10", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["11", "Gilbert junk removal 11", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."],
    ["12", "Gilbert junk removal 12", "Matched before and after cleanup photos from a Southwest Hauling junk removal job."]
  ];
  return `<section class="section before-after" id="before-after">
      <div class="section-heading">
        <h2>Before and after junk removal</h2>
        <p>Matched before and after junk removal photos from Southwest Hauling cleanup jobs in Gilbert and the East Valley.</p>
      </div>
      <div class="project-grid">
        ${items.map(([id, title, copy]) => `<article class="project-card">
          <div class="compare-toggle" aria-label="Choose ${esc(title)} image">
            <button class="is-active" type="button" data-view="before">Before</button>
            <button type="button" data-view="after">After</button>
          </div>
          <div class="compare-pair">
            <figure class="before"><img src="/assets/before-after/${id}-before.png" alt="${esc(title)} before junk removal" loading="lazy" width="400" height="400"><figcaption>Before</figcaption></figure>
            <figure class="after"><img src="/assets/before-after/${id}-after.png" alt="${esc(title)} after junk removal" loading="lazy" width="400" height="400"><figcaption>After</figcaption></figure>
          </div>
          <h3>${esc(title)}</h3><p>${esc(copy)}</p>
        </article>`).join("")}
      </div>
    </section>`;
}

function servicesHub() {
  const all = services.map(([slug, name, headline, copy]) => ({ slug, name, headline, copy }));
  const main = `<section class="section services" id="services">
      <div class="section-heading">
        <h2>Services hub</h2>
        <p>Choose the junk removal service that fits your cleanup, then request a free quote.</p>
      </div>
      <div class="service-grid">
        ${all.map((item, i) => `<article><span>${String(i + 1).padStart(2, "0")}</span><h3><a href="/services/${item.slug}/">${esc(item.name)}</a></h3><p>${esc(item.copy)}</p></article>`).join("")}
      </div>
    </section>`;
  return layout({
    title: "Junk Removal Services in the East Valley | Southwest Hauling",
    description: "Services hub for Southwest Hauling & Junk Removal: furniture removal, appliance removal, garage cleanouts, yard debris, property cleanouts, storage unit cleanouts, estate cleanouts, construction debris, mattress removal, and same day junk removal.",
    h1: "Junk Removal Services in the East Valley",
    intro: "Southwest Hauling provides affordable junk removal, junk hauling, single item pickups, and full cleanouts for homes and businesses across Mesa, Gilbert, Chandler, Queen Creek, Tempe, Scottsdale, and nearby East Valley communities.",
    main
  });
}

function aboutPage() {
  const main = `<section class="section split">
      <div>
        <h2>Locally owned. Community focused.</h2>
        <p>${esc(MISSION)}</p>
        <ul class="check-list">
          <li>Reliable junk hauling with respectful cleanup</li>
          <li>Donation and disposal focused whenever practical</li>
          <li>Residential and commercial cleanout help</li>
          <li>Affordable pricing before the work begins</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Talk with Chris</h3>
        <p>Send details about the items, address, city, and timing. Photos help us quote faster, or call ${PHONE_DISPLAY}.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="mailto:${EMAIL}">Contact Chris</a>
      </div>
    </section>`;
  return layout({
    title: "About Southwest Hauling & Junk Removal | East Valley AZ",
    description: "Learn about Southwest Hauling & Junk Removal, a locally owned, community focused East Valley junk hauling company offering honest pricing and fast response.",
    h1: "About Southwest Hauling",
    intro: "Dependable, fast, local, hard-working, honest, and rugged but approachable: Southwest Hauling serves the East Valley with respectful cleanup for single items, yards, garages, storage units, businesses, and full property cleanouts.",
    main
  });
}

function contactPage() {
  const main = `<section class="section estimate" id="estimate">
      <div class="section-heading">
        <h2>Contact and free quote</h2>
        <p>Request a free quote. The form opens an email addressed to ${EMAIL} so your details go directly to Chris.</p>
      </div>
      ${quoteForm()}
    </section>`;
  return layout({
    title: "Contact Southwest Hauling | Free Junk Removal Quote",
    description: "Contact Southwest Hauling & Junk Removal for a free East Valley junk removal quote. Call, email Chris, or send details for furniture, appliances, garages, yards, storage units, and cleanouts.",
    h1: "Contact Southwest Hauling for a Free Quote",
    intro: "Need local junk removal near you? Send your name, phone, email, address, city, what needs to be removed, photos, preferred pickup date, and a message for a fast free quote.",
    main
  });
}

function servicePage([slug, name, headline, copy]) {
  const main = `<section class="section split">
      <div>
        <h2>${esc(headline)}</h2>
        <p>${esc(copy)} Southwest Hauling keeps the process simple with fast response, honest pricing, heavy lifting, loading, hauling, and cleanup.</p>
        <ul class="check-list">
          <li>Affordable local junk removal near you</li>
          <li>Residential and commercial hauling options</li>
          <li>Single item pickups to full property cleanouts</li>
          <li>Serving Mesa, Gilbert, Chandler, Queen Creek, Tempe, Scottsdale, and the East Valley</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Get a quote for ${esc(name.toLowerCase())}</h3>
        <p>Email Chris with photos, your city, and your preferred pickup date.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="mailto:${EMAIL}">Contact Chris</a>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Related junk removal services</h2><p>Explore other East Valley hauling services.</p></div>
      <div class="service-grid">
        ${services.filter((item) => item[0] !== slug).slice(0, 6).map((item, i) => `<article><span>${String(i + 1).padStart(2, "0")}</span><h3><a href="/services/${item[0]}/">${esc(item[1])}</a></h3><p>${esc(item[3])}</p></article>`).join("")}
      </div>
    </section>`;
  return layout({
    title: `${name} East Valley AZ | Southwest Hauling`,
    description: `${headline} from Southwest Hauling & Junk Removal. Fast, affordable junk hauling for Mesa, Gilbert, Chandler, Queen Creek, Tempe, Scottsdale, and the East Valley.`,
    h1: headline,
    intro: `${headline} for homes, businesses, garages, storage units, yards, rentals, and full property cleanouts across the East Valley. Request a free quote from locally owned Southwest Hauling.`,
    main
  });
}

function cityPage([slug, city, label]) {
  const main = `<section class="section split">
      <div>
        <h2>${esc(label)} made simple</h2>
        <p>Southwest Hauling provides fast, affordable junk removal in ${esc(city)} for furniture, appliances, garage clutter, yard debris, storage units, rentals, businesses, and full property cleanouts.</p>
        <ul class="check-list">
          <li>Same day junk removal when scheduling allows</li>
          <li>Affordable pricing and local East Valley service</li>
          <li>Heavy lifting, loading, hauling, and cleanup</li>
          <li>Donation and disposal focused service</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Need junk removal in ${esc(city)}?</h3>
        <p>Send details and photos for a fast free quote.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="mailto:${EMAIL}">Contact Chris</a>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Services in ${esc(city)}</h2><p>Local hauling for single items, cleanouts, and cleanup projects.</p></div>
      <div class="service-grid">
        ${services.slice(0, 8).map((item, i) => `<article><span>${String(i + 1).padStart(2, "0")}</span><h3><a href="/services/${item[0]}/">${esc(item[1])}</a></h3><p>${esc(item[3])}</p></article>`).join("")}
      </div>
    </section>`;
  return layout({
    title: `${label} | Southwest Hauling East Valley AZ`,
    description: `${label} from Southwest Hauling & Junk Removal. Fast, affordable hauling for furniture, appliances, garage cleanouts, yard debris, storage units, property cleanouts, and same day junk removal when available.`,
    h1: `${label} in ${city}, AZ`,
    intro: `Fast, affordable junk removal in ${city} for homes, businesses, garages, storage units, yards, rentals, and full property cleanouts. Southwest Hauling serves ${city} and nearby East Valley communities.`,
    main
  });
}

write("/", home());
write("services", servicesHub());
write("about", aboutPage());
write("contact", contactPage());
services.forEach((service) => write(`services/${service[0]}`, servicePage(service)));
cities.forEach((city) => write(`locations/${city[0]}`, cityPage(city)));

console.log("Generated Southwest Hauling static pages.");
