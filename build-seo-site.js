const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const SITE = "https://www.southwestjunkhauling.com";
const BUSINESS = "Southwest Hauling & Junk Removal LLC";
const BRAND = "Southwest Hauling";
const PHONE = "480-490-8033";
const PHONE_HREF = "tel:+14804908033";
const EMAIL = "Chris@southwestjunkhauling.com";
const EMAIL_HREF = "mailto:Chris@southwestjunkhauling.com";
const QUOTE = `${EMAIL_HREF}?subject=Free%20Junk%20Removal%20Quote%20Request`;
const ADDRESS = "39111 N Zampino St, Queen Creek, AZ 85140";

const services = [
  {
    slug: "junk-removal-east-valley-az",
    name: "Junk Removal",
    h1: "Junk Removal in the East Valley AZ",
    title: "Junk Removal East Valley AZ | Southwest Hauling",
    meta: "Fast junk removal in the East Valley AZ for homes and businesses in Mesa, Gilbert, Queen Creek, Chandler, San Tan Valley, and nearby areas.",
    hero: "Get household junk, bulky clutter, garage piles, and unwanted items hauled away by a local East Valley crew.",
    details: "Southwest Hauling handles everyday junk removal for homeowners, renters, landlords, property managers, and small businesses. Send photos for a free quote, choose a pickup window, and we handle the lifting, loading, hauling, and cleanup.",
    removes: ["Household clutter", "Boxes and bagged trash", "Bulky junk", "Garage items", "Rental cleanup debris", "Light outdoor junk"]
  },
  {
    slug: "garage-cleanout-east-valley-az",
    name: "Garage Cleanouts",
    h1: "Garage Cleanouts in the East Valley AZ",
    title: "Garage Cleanouts East Valley AZ | Southwest Hauling",
    meta: "Garage cleanout services across the East Valley AZ. Clear boxes, clutter, old tools, storage piles, and bulky junk fast.",
    hero: "Turn a crowded garage into usable space again with fast, local garage cleanout help.",
    details: "We remove the clutter that builds up in Arizona garages: storage bins, cardboard, broken furniture, old shelving, tools, toys, and general junk. Our crew loads the trailer and leaves the area easier to sweep, park in, or organize.",
    removes: ["Cardboard and boxes", "Old shelving", "Broken furniture", "Storage clutter", "Tools and household junk", "Move-out piles"]
  },
  {
    slug: "furniture-removal-east-valley-az",
    name: "Furniture Removal",
    h1: "Furniture Removal in the East Valley AZ",
    title: "Furniture Removal East Valley AZ | Southwest Hauling",
    meta: "Furniture removal for couches, sectionals, mattresses, tables, desks, patio furniture, and bulky items across the East Valley AZ.",
    hero: "Book easy furniture removal when the couch, mattress, desk, or patio set needs to go.",
    details: "Southwest Hauling removes heavy and awkward furniture from homes, apartments, offices, garages, patios, and rentals. We make bulky item pickup simple with clear pricing and local scheduling.",
    removes: ["Couches and sectionals", "Tables and chairs", "Desks and office furniture", "Bedroom furniture", "Patio furniture", "Mattresses and frames"]
  },
  {
    slug: "appliance-removal-east-valley-az",
    name: "Appliance Removal",
    h1: "Appliance Removal in the East Valley AZ",
    title: "Appliance Removal East Valley AZ | Southwest Hauling",
    meta: "Appliance removal in the East Valley AZ for refrigerators, washers, dryers, ranges, freezers, and bulky household appliances.",
    hero: "Remove old appliances without wrestling them through the house or renting a trailer.",
    details: "We haul away bulky appliances for homeowners, property managers, and small businesses. Tell us what needs to go, where it is located, and whether stairs or tight access are involved.",
    removes: ["Refrigerators", "Washers and dryers", "Ranges and ovens", "Freezers", "Dishwashers", "Bulky appliance debris"]
  },
  {
    slug: "property-cleanouts-east-valley-az",
    name: "Property Cleanouts",
    h1: "Property Cleanouts in the East Valley AZ",
    title: "Property Cleanouts East Valley AZ | Southwest Hauling",
    meta: "Property cleanouts in the East Valley AZ for rentals, move-outs, foreclosures, estates, storage units, yards, and full cleanout jobs.",
    hero: "Get reliable property cleanout help for rentals, move-outs, storage units, and full junk removal jobs.",
    details: "Southwest Hauling helps property owners, landlords, real estate agents, and families clear spaces quickly. We remove mixed junk, furniture, bagged waste, garage clutter, and non-hazardous debris.",
    removes: ["Rental cleanout junk", "Move-out debris", "Storage unit contents", "Furniture and boxes", "Garage and yard clutter", "Estate cleanout items"]
  },
  {
    slug: "yard-waste-removal-east-valley-az",
    name: "Yard Waste Removal",
    h1: "Yard Waste Removal in the East Valley AZ",
    title: "Yard Waste Removal East Valley AZ | Southwest Hauling",
    meta: "Yard waste removal in the East Valley AZ for branches, trimmings, storm debris, outdoor clutter, and cleanup piles.",
    hero: "Clear outdoor debris, branches, trimmings, and yard cleanup piles without multiple dump runs.",
    details: "Arizona yards collect palm fronds, branches, broken outdoor items, and cleanup piles fast. We load and haul non-hazardous yard waste so patios, side yards, and lots are usable again.",
    removes: ["Branches and trimmings", "Palm fronds", "Outdoor clutter", "Storm debris", "Bagged yard waste", "Side-yard cleanup piles"]
  },
  {
    slug: "construction-debris-removal-east-valley-az",
    name: "Construction Debris Removal",
    h1: "Construction Debris Removal in the East Valley AZ",
    title: "Construction Debris Removal East Valley AZ | Southwest Hauling",
    meta: "Light construction debris removal in the East Valley AZ for remodel scraps, wood, cardboard, packing debris, and non-hazardous jobsite cleanup.",
    hero: "Haul away light remodel debris and non-hazardous construction cleanup loads.",
    details: "Southwest Hauling helps homeowners, contractors, and small businesses remove light debris after repairs, installs, deliveries, and remodel projects. We focus on clean, practical hauling for non-hazardous materials.",
    removes: ["Wood scraps", "Cardboard", "Packing debris", "Light remodel waste", "Fixtures and trim", "Non-hazardous cleanup loads"]
  },
  {
    slug: "hot-tub-removal-east-valley-az",
    name: "Hot Tub Removal",
    h1: "Hot Tub Removal in the East Valley AZ",
    title: "Hot Tub Removal East Valley AZ | Southwest Hauling",
    meta: "Hot tub removal in the East Valley AZ for old spas, bulky outdoor items, and backyard cleanup projects.",
    hero: "Remove an old hot tub, spa, or bulky outdoor item with a local hauling crew.",
    details: "Old hot tubs take up space and are difficult to move. Contact Southwest Hauling with photos and access details so we can quote the job and plan a clean removal.",
    removes: ["Old hot tubs", "Spa debris", "Covers and panels", "Outdoor bulky items", "Patio cleanup debris", "Backyard junk"]
  },
  {
    slug: "commercial-cleanout-east-valley-az",
    name: "Commercial Cleanout",
    h1: "Commercial Cleanout in the East Valley AZ",
    title: "Commercial Cleanout East Valley AZ | Southwest Hauling",
    meta: "Commercial cleanout services in the East Valley AZ for office furniture, business clutter, retail cleanup, warehouse junk, and non-hazardous debris.",
    hero: "Clear business clutter, office furniture, and commercial junk without slowing down the workday.",
    details: "We help local businesses, offices, retail spaces, storage areas, and property managers remove non-hazardous junk. Southwest Hauling keeps commercial cleanouts organized, straightforward, and quote-driven.",
    removes: ["Office furniture", "Retail clutter", "Warehouse junk", "Packing materials", "Shelving and fixtures", "Business cleanout debris"]
  },
  {
    slug: "estate-cleanout-east-valley-az",
    name: "Estate Cleanout",
    h1: "Estate Cleanout in the East Valley AZ",
    title: "Estate Cleanout East Valley AZ | Southwest Hauling",
    meta: "Respectful estate cleanout services across the East Valley AZ for furniture, boxes, household items, garage clutter, and property cleanup.",
    hero: "Get respectful estate cleanout help for furniture, boxes, garage items, and full property cleanup.",
    details: "Estate cleanouts can be emotional and logistically heavy. Southwest Hauling provides steady hauling support for families, trustees, real estate agents, and property owners who need items removed responsibly.",
    removes: ["Furniture", "Boxes and household goods", "Garage items", "Yard debris", "Donation-ready items", "Full cleanout loads"]
  },
  {
    slug: "moving-help-east-valley-az",
    name: "Moving Help",
    h1: "Moving Help in the East Valley AZ",
    title: "Moving Help East Valley AZ | Southwest Hauling",
    meta: "Moving help and hauling assistance in the East Valley AZ for loading, lifting, bulky item removal, move-out junk, and cleanup.",
    hero: "Need extra muscle for moving, loading, or move-out junk removal? Southwest Hauling can help.",
    details: "We assist with moving-related lifting, loading, hauling, and junk removal. This is a practical option when you need bulky items moved out, unwanted items hauled away, or a move-out cleanup finished.",
    removes: ["Move-out junk", "Bulky furniture", "Boxes and packing debris", "Garage clutter", "Donation piles", "Cleanup loads"]
  },
  {
    slug: "trash-hauling-east-valley-az",
    name: "Trash Hauling",
    h1: "Trash Hauling in the East Valley AZ",
    title: "Trash Hauling East Valley AZ | Southwest Hauling",
    meta: "Trash hauling in the East Valley AZ for bagged waste, loose junk, cleanup piles, bulky trash, and non-hazardous debris.",
    hero: "Fast trash hauling for cleanup piles, bagged waste, and non-hazardous debris.",
    details: "When regular trash service is not enough, Southwest Hauling can remove larger cleanup loads, loose junk, bagged waste, and bulky non-hazardous debris from homes, rentals, yards, and businesses.",
    removes: ["Bagged trash", "Loose junk", "Bulky trash", "Cleanup piles", "Rental debris", "Non-hazardous waste"]
  }
];

const locations = [
  { slug: "mesa-az", city: "Mesa", angle: "neighborhoods, rentals, garages, and business cleanouts", nearby: ["gilbert-az", "tempe-az", "apache-junction-az"] },
  { slug: "gilbert-az", city: "Gilbert", angle: "homes, move-outs, remodel cleanup, and bulky pickups", nearby: ["mesa-az", "queen-creek-az", "chandler-az"] },
  { slug: "queen-creek-az", city: "Queen Creek", angle: "homes, acreage cleanup, garages, yards, and cleanouts", nearby: ["gilbert-az", "san-tan-valley-az", "chandler-az"] },
  { slug: "chandler-az", city: "Chandler", angle: "homes, offices, apartments, and commercial cleanouts", nearby: ["gilbert-az", "tempe-az", "queen-creek-az"] },
  { slug: "san-tan-valley-az", city: "San Tan Valley", angle: "garage cleanouts, yard waste, furniture, and move-outs", nearby: ["queen-creek-az", "apache-junction-az", "gilbert-az"] },
  { slug: "apache-junction-az", city: "Apache Junction", angle: "yard cleanup, property cleanouts, bulky junk, and trash hauling", nearby: ["mesa-az", "san-tan-valley-az", "queen-creek-az"] },
  { slug: "tempe-az", city: "Tempe", angle: "apartments, move-outs, office cleanouts, and furniture", nearby: ["mesa-az", "chandler-az", "scottsdale-az"] },
  { slug: "scottsdale-az", city: "Scottsdale", angle: "home cleanouts, furniture pickup, yard waste, and business hauling", nearby: ["tempe-az", "mesa-az", "chandler-az"] }
];

const popularServiceSlugs = [
  "junk-removal-east-valley-az",
  "garage-cleanout-east-valley-az",
  "furniture-removal-east-valley-az",
  "appliance-removal-east-valley-az",
  "property-cleanouts-east-valley-az",
  "yard-waste-removal-east-valley-az"
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

function sentenceList(items) {
  if (items.length < 2) return items[0] || "";
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function write(route, html) {
  const target = route === "/" ? path.join(ROOT, "index.html") : path.join(ROOT, route, "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

function canonical(route) {
  return `${SITE}${route === "/" ? "/" : `/${route.replace(/^\/|\/$/g, "")}/`}`;
}

function localBusinessSchema(description) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS,
    url: SITE,
    telephone: "+1-480-490-8033",
    email: EMAIL,
    image: `${SITE}/assets/southwest-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "39111 N Zampino St",
      addressLocality: "Queen Creek",
      addressRegion: "AZ",
      postalCode: "85140",
      addressCountry: "US"
    },
    areaServed: locations.map(({ city }) => `${city} AZ`),
    description
  };
}

function serviceSchema(service, route) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in the East Valley AZ`,
    provider: { "@type": "LocalBusiness", name: BUSINESS, telephone: "+1-480-490-8033" },
    areaServed: locations.map(({ city }) => `${city} AZ`),
    serviceType: service.name,
    url: canonical(route),
    description: service.meta
  };
}

function metadata({ title, description, route, schema = [] }) {
  const schemas = [localBusinessSchema(description), ...schema];
  return `<title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical(route)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical(route)}">
    <meta property="og:image" content="${SITE}/assets/southwest-logo.png">
    ${schemas.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n    ")}`;
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
            ${services.map((service) => `<a href="/services/${service.slug}/">${esc(service.name)}</a>`).join("")}
          </div>
        </details>
        <details class="nav-dropdown">
          <summary>Service Areas</summary>
          <div class="dropdown-panel location-panel">
            ${locations.map((location) => `<a href="/locations/${location.slug}/">${esc(location.city)} AZ</a>`).join("")}
          </div>
        </details>
        <a href="/about/">About Us</a>
        <a href="/#reviews">Reviews</a>
        <a href="/contact/">Contact</a>
        <a class="phone-cta" href="${PHONE_HREF}">${PHONE}</a>
        <a class="nav-cta" href="${QUOTE}">Get Free Quote</a>
      </nav>
    </header>`;
}

function bottomCta() {
  return `<nav class="bottom-cta" aria-label="Sticky contact actions">
      <a href="${PHONE_HREF}">Call Now</a>
      <a href="${QUOTE}">Get Free Quote</a>
      <a href="${EMAIL_HREF}">Email Chris</a>
    </nav>`;
}

function footer() {
  return `<footer class="site-footer">
      <div>
        <strong>${BUSINESS}</strong>
        <p>Fast junk removal, trash hauling, cleanouts, furniture removal, appliance removal, and yard waste removal across the East Valley.</p>
        <p>${ADDRESS}</p>
      </div>
      <div class="footer-links footer-mega" aria-label="Footer service links">
        ${services.map((service) => `<a href="/services/${service.slug}/">${esc(service.name)}</a>`).join("")}
      </div>
      <div class="footer-links footer-mega" aria-label="Footer service area links">
        ${locations.map((location) => `<a href="/locations/${location.slug}/">${esc(location.city)} AZ</a>`).join("")}
      </div>
      <div class="footer-links" aria-label="Footer contact links">
        <a href="${PHONE_HREF}">${PHONE}</a>
        <a href="${EMAIL_HREF}">${EMAIL}</a>
        <a href="/contact/">Contact</a>
      </div>
    </footer>`;
}

function layout({ route, title, description, h1, intro, body, schema = [] }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${metadata({ title, description, route, schema })}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
    <script defer src="/script.js"></script>
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    ${header()}
    <main id="main-content">
      <section class="hero compact-hero">
        <div class="hero-media" aria-hidden="true">
          <video class="hero-video" muted playsinline preload="auto" poster="/assets/hero-junk-removal.png">
            <source src="/assets/southwest-hauling-hero-video-01-scroll.mp4" type="video/mp4">
          </video>
        </div>
        <div class="hero-spotlight" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="service-area">East Valley of Phoenix, Arizona</p>
          <h1>${esc(h1)}</h1>
          <p class="tagline">You Call It, We&#39;ll Haul It</p>
          <p class="local-intro">${esc(intro)}</p>
          <div class="hero-actions">
            <a class="button primary" href="${QUOTE}">Get Free Quote</a>
            <a class="button secondary" href="${PHONE_HREF}">Call ${PHONE}</a>
          </div>
        </div>
      </section>
      ${body}
    </main>
    ${bottomCta()}
    ${footer()}
  </body>
</html>`;
}

function serviceCards(items, currentSlug = "") {
  return `<div class="service-grid">
        ${items.filter((item) => item.slug !== currentSlug).map((service, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3><a href="/services/${service.slug}/">${esc(service.name)}</a></h3><p>${esc(service.hero)}</p></article>`).join("")}
      </div>`;
}

function locationLinks(currentSlug = "") {
  return `<div class="area-links" aria-label="Service area links">
        ${locations.filter((location) => location.slug !== currentSlug).map((location) => `<a href="/locations/${location.slug}/">${esc(location.city)} AZ junk removal</a>`).join("")}
      </div>`;
}

function finalCta(copy = "Send photos and details for a free East Valley junk removal quote.") {
  return `<section class="section cta-section" id="contact">
      <h2>Ready to clear the junk?</h2>
      <p>${esc(copy)}</p>
      <div class="hero-actions three-actions">
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="button dark" href="${PHONE_HREF}">Call ${PHONE}</a>
      </div>
    </section>`;
}

function servicePage(service) {
  const related = services
    .filter((item) => item.slug !== service.slug)
    .filter((item) => popularServiceSlugs.includes(item.slug) || ["commercial-cleanout-east-valley-az", "trash-hauling-east-valley-az"].includes(item.slug))
    .slice(0, 6);
  const route = `services/${service.slug}`;
  const body = `<section class="section split">
      <div>
        <h2>${esc(service.name)} service details</h2>
        <p>${esc(service.details)}</p>
        <ul class="check-list">
          <li>Free quote before the job begins</li>
          <li>Heavy lifting, loading, hauling, and cleanup</li>
          <li>Residential and commercial junk hauling</li>
          <li>Serving Mesa, Gilbert, Queen Creek, Chandler, San Tan Valley, and nearby East Valley communities</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Get a quote for ${esc(service.name.toLowerCase())}</h3>
        <p>Send photos, your pickup city, and access details for a fast quote from Southwest Hauling.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="/contact/">Contact page</a>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>What we remove</h2><p>Common ${esc(service.name.toLowerCase())} items we haul in the East Valley.</p></div>
      <div class="service-grid">
        ${service.removes.map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${esc(item)}</h3><p>We load and haul ${esc(item.toLowerCase())} as part of a clear, quote-based junk removal pickup.</p></article>`).join("")}
      </div>
    </section>
    <section class="section why-choose">
      <div class="section-heading"><h2>Why choose Southwest Hauling?</h2><p>Local customers choose us for practical communication, fair pricing, and clean results.</p></div>
      <div class="why-grid">
        <article><span>Local</span><h3>East Valley based</h3><p>We know the neighborhoods, access issues, and service areas around Queen Creek, Mesa, Gilbert, and Chandler.</p></article>
        <article><span>Clear</span><h3>Photo-friendly quotes</h3><p>Photos help us quote quickly so there are fewer surprises when the trailer arrives.</p></article>
        <article><span>Ready</span><h3>Heavy lifting handled</h3><p>Our hauling service includes loading, hauling, and cleanup for non-hazardous junk.</p></article>
        <article><span>Useful</span><h3>Homes and businesses</h3><p>Book help for houses, rentals, offices, storage areas, yards, garages, and full cleanouts.</p></article>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Related services</h2><p>Keep moving through the site with helpful junk removal service links.</p></div>
      ${serviceCards(related, service.slug)}
    </section>
    <section class="section areas" id="service-areas">
      <div class="section-heading"><h2>Service areas for ${esc(service.name.toLowerCase())}</h2><p>Southwest Hauling serves these East Valley communities.</p></div>
      ${locationLinks()}
    </section>
    ${finalCta(`Call ${PHONE} or request a free quote for ${service.name.toLowerCase()} in the East Valley.`)}`;
  return layout({
    route,
    title: service.title,
    description: service.meta,
    h1: service.h1,
    intro: service.hero,
    body,
    schema: [serviceSchema(service, route)]
  });
}

function locationPage(location) {
  const route = `locations/${location.slug}`;
  const popular = services.filter((service) => popularServiceSlugs.includes(service.slug)).slice(0, 6);
  const nearby = location.nearby.map((slug) => locations.find((item) => item.slug === slug)).filter(Boolean);
  const title = `Junk Removal in ${location.city} AZ | Southwest Hauling`;
  const description = `Fast junk removal in ${location.city} AZ for homes, businesses, cleanouts, furniture, appliances, yard waste, and trash hauling.`;
  const body = `<section class="section split">
      <div>
        <h2>Local junk removal in ${esc(location.city)}</h2>
        <p>Southwest Hauling provides fast, affordable junk removal in ${esc(location.city)} AZ for ${esc(location.angle)}. Our crew handles heavy lifting, loading, hauling, and cleanup for homes, rentals, businesses, yards, garages, and property cleanouts.</p>
        <ul class="check-list">
          <li>Free quotes for ${esc(location.city)} junk removal</li>
          <li>Bulky item pickup and cleanout help</li>
          <li>Residential and commercial hauling</li>
          <li>Local East Valley service from ${BRAND}</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Need junk removal in ${esc(location.city)}?</h3>
        <p>Send photos and pickup details, or call ${PHONE} for help.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="/contact/">Contact page</a>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Popular services in ${esc(location.city)} AZ</h2><p>Helpful hauling options for local homes and businesses.</p></div>
      ${serviceCards(popular)}
    </section>
    <section class="section why-choose">
      <div class="section-heading"><h2>Why local customers choose us</h2><p>Southwest Hauling keeps local junk removal simple, responsive, and clear.</p></div>
      <div class="why-grid">
        <article><span>Fast</span><h3>Quick scheduling</h3><p>We make it easy to request a quote and find a pickup window that works.</p></article>
        <article><span>Local</span><h3>East Valley routes</h3><p>Our service areas are built around communities like ${esc(location.city)}, Queen Creek, Mesa, Gilbert, and Chandler.</p></article>
        <article><span>Simple</span><h3>Clear communication</h3><p>Photos and details help us quote accurately before the job begins.</p></article>
        <article><span>Clean</span><h3>Loaded and hauled</h3><p>We handle the lifting, loading, hauling, and cleanup for non-hazardous junk.</p></article>
      </div>
    </section>
    <section class="section areas">
      <div class="section-heading"><h2>Nearby service areas</h2><p>Southwest Hauling also serves nearby East Valley cities.</p></div>
      <div class="area-links">${nearby.map((item) => `<a href="/locations/${item.slug}/">${esc(item.city)} AZ junk removal</a>`).join("")}<a href="/contact/">Contact Southwest Hauling</a></div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Related service links</h2><p>Explore common junk removal services for ${esc(location.city)} customers.</p></div>
      ${serviceCards(services.slice(0, 8))}
    </section>
    ${finalCta(`Call ${PHONE} or request a free quote for junk removal in ${location.city} AZ.`)}`;
  return layout({
    route,
    title,
    description,
    h1: `Junk Removal in ${location.city} AZ`,
    intro: `Fast, affordable junk removal and hauling services in ${location.city} for ${location.angle}.`,
    body
  });
}

function servicesHub() {
  const route = "services";
  const title = "Junk Removal Services East Valley AZ | Southwest Hauling";
  const description = "Explore Southwest Hauling junk removal services across the East Valley AZ, including garage cleanouts, furniture removal, appliances, yard waste, and trash hauling.";
  const body = `<section class="section services" id="services">
      <div class="section-heading"><h2>Core junk removal services</h2><p>Choose the service page that matches your cleanup.</p></div>
      ${serviceCards(services)}
    </section>
    <section class="section areas" id="service-areas">
      <div class="section-heading"><h2>East Valley service areas</h2><p>Browse local service area pages.</p></div>
      ${locationLinks()}
    </section>
    ${finalCta()}`;
  return layout({ route, title, description, h1: "Junk Removal Services in the East Valley AZ", intro: "Fast hauling, cleanouts, furniture removal, appliance removal, yard waste removal, and trash hauling from Southwest Hauling.", body });
}

function aboutPage() {
  const route = "about";
  const title = "About Southwest Hauling & Junk Removal LLC | East Valley AZ";
  const description = "Learn about Southwest Hauling & Junk Removal LLC, a Queen Creek junk removal company serving Mesa, Gilbert, Chandler, San Tan Valley, and the East Valley.";
  const body = `<section class="section split">
      <div>
        <h2>Locally owned. East Valley focused.</h2>
        <p>${BUSINESS} helps homeowners and businesses clear clutter with fast response, honest communication, and practical hauling service.</p>
        <ul class="check-list">
          <li>Based in Queen Creek, Arizona</li>
          <li>Serving Mesa, Gilbert, Chandler, San Tan Valley, Apache Junction, Tempe, Scottsdale, and nearby communities</li>
          <li>Residential and commercial junk removal</li>
          <li>Free quote requests by phone or email</li>
        </ul>
      </div>
      <div class="service-card"><h3>Business info</h3><p>${ADDRESS}</p><p>${PHONE}</p><p>${EMAIL}</p><a class="button primary" href="${QUOTE}">Get Free Quote</a><a class="contact-link" href="/contact/">Contact Southwest Hauling</a></div>
    </section>
    <section class="section services"><div class="section-heading"><h2>Helpful service links</h2><p>Explore the most requested East Valley hauling services.</p></div>${serviceCards(services.slice(0, 6))}</section>
    ${finalCta()}`;
  return layout({ route, title, description, h1: "About Southwest Hauling & Junk Removal", intro: "A local East Valley junk removal company built around clear quotes, hard work, and clean results.", body });
}

function contactPage() {
  const route = "contact";
  const title = "Contact Southwest Hauling | Free Junk Removal Quote";
  const description = "Contact Southwest Hauling & Junk Removal LLC for a free junk removal quote in the East Valley AZ. Call 480-490-8033 or email Chris@southwestjunkhauling.com.";
  const body = `<section class="section estimate" id="estimate">
      <div class="section-heading"><h2>Contact and free quote</h2><p>Call, email, or send a quote request for junk removal in Mesa, Gilbert, Queen Creek, Chandler, San Tan Valley, and the East Valley.</p></div>
      <form id="estimate-form" action="${EMAIL_HREF}" method="post" enctype="text/plain">
        <input type="hidden" name="recipient" value="${EMAIL}">
        <label>Name<input name="name" autocomplete="name" required></label>
        <label>Phone<input name="phone" autocomplete="tel" required></label>
        <label>Email<input type="email" name="email" autocomplete="email" required></label>
        <label>City<input name="city" autocomplete="address-level2" required></label>
        <label>What needs to be removed?<select name="service" required><option value="">Choose a service</option>${services.map((service) => `<option>${esc(service.name)}</option>`).join("")}</select></label>
        <label>Preferred pickup date<input type="date" name="pickup_date"></label>
        <label class="full">Message<textarea name="message" rows="5" placeholder="Tell us what needs to go, where it is, and any access details."></textarea></label>
        <button class="button primary full" type="submit">Request My Free Quote</button>
        <p class="form-note" id="form-note">Submissions are addressed to <a href="${EMAIL_HREF}">${EMAIL}</a>. You can also call <a href="${PHONE_HREF}">${PHONE}</a>.</p>
      </form>
    </section>
    <section class="section services"><div class="section-heading"><h2>Popular quote requests</h2><p>Common services customers ask about.</p></div>${serviceCards(services.slice(0, 6))}</section>`;
  return layout({ route, title, description, h1: "Contact Southwest Hauling for a Free Quote", intro: "Need local junk removal near you? Send details for a fast quote from Southwest Hauling.", body });
}

function aliasPage(fromRoute, toRoute, label) {
  const title = `${label} | Southwest Hauling`;
  const description = `${label} from Southwest Hauling. Visit the current page for updated East Valley junk removal information and free quote links.`;
  const body = `<section class="section split">
      <div>
        <h2>Updated page location</h2>
        <p>This page has moved to the current Southwest Hauling SEO page for ${esc(label.toLowerCase())}. Use the link below for the latest service details, service area links, and quote options.</p>
      </div>
      <div class="service-card">
        <h3>Continue to the current page</h3>
        <p>Keep browsing Southwest Hauling's current local SEO pages.</p>
        <a class="button primary" href="/${toRoute}/">Open Current Page</a>
        <a class="contact-link" href="/contact/">Contact Southwest Hauling</a>
      </div>
    </section>`;
  let html = layout({
    route: fromRoute,
    title,
    description,
    h1: label,
    intro: "This route is preserved for visitors and search engines while the site uses the current canonical page.",
    body
  });
  html = html.replace(`href="${canonical(fromRoute)}"`, `href="${canonical(toRoute)}"`);
  html = html.replace(`<meta property="og:url" content="${canonical(fromRoute)}">`, `<meta property="og:url" content="${canonical(toRoute)}">`);
  return html;
}

function updateHome() {
  const file = path.join(ROOT, "index.html");
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/<title>[\s\S]*?(?=\s*<link rel="preconnect")/, metadata({
    route: "/",
    title: "East Valley Junk Removal & Hauling | Southwest Hauling",
    description: "Southwest Hauling provides fast junk removal and hauling for homes and businesses across Mesa, Gilbert, Queen Creek, Chandler, San Tan Valley, and the East Valley."
  }) + "\n    ");
  html = html
    .replace(/<link rel="stylesheet" href="\/?styles\.css">/g, '<link rel="stylesheet" href="styles.css">')
    .replace(/<script defer src="\/?script\.js"><\/script>/g, '<script defer src="script.js"></script>');
  if (!html.includes('rel="stylesheet" href="styles.css"')) {
    html = html.replace("</head>", `    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
  </head>`);
  }
  html = html.replace(/<header class="site-header" id="top">[\s\S]*?<\/header>/, header());
  html = html.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, footer());
  const serviceGrid = `<div class="service-grid">
        ${services.map((service, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3><a href="/services/${service.slug}/">${esc(service.name)}</a></h3><p>${esc(service.hero)}</p></article>`).join("\n        ")}
      </div>`;
  html = html.replace(/<div class="service-grid">\s*<article><span>01<\/span><h3><a href="\/services\/junk-removal-east-valley-az\/">[\s\S]*?<\/div>\s*<\/section>\s*<section class="section why-choose"/, `${serviceGrid}\n    </section>\n    <section class="section why-choose"`);
  html = html.replace(/<div class="area-links" aria-label="Service area links">[\s\S]*?<\/div>\s*<\/section>\s*<section class="section seo-content"/, `<div class="area-links" aria-label="Service area links">
        ${locations.map((location) => `<a href="/locations/${location.slug}/">${esc(location.city)} AZ junk removal</a>`).join("")}<a href="/contact/">Contact Southwest Hauling</a>
      </div>
    </section>
    <section class="section seo-content"`);
  fs.writeFileSync(file, html);
}

updateHome();
write("services", servicesHub());
write("about", aboutPage());
write("contact", contactPage());
services.forEach((service) => write(`services/${service.slug}`, servicePage(service)));
locations.forEach((location) => write(`locations/${location.slug}`, locationPage(location)));

[
  ["services/property-cleanout-east-valley-az", "services/property-cleanouts-east-valley-az", "Property Cleanouts East Valley AZ"],
  ["services/commercial-cleanouts-east-valley-az", "services/commercial-cleanout-east-valley-az", "Commercial Cleanout East Valley AZ"],
  ["services/moving-labor-assistance-east-valley-az", "services/moving-help-east-valley-az", "Moving Help East Valley AZ"],
  ["services/yard-debris-removal-east-valley-az", "services/yard-waste-removal-east-valley-az", "Yard Waste Removal East Valley AZ"],
  ["services/storage-unit-cleanout-east-valley-az", "services/property-cleanouts-east-valley-az", "Storage Unit Cleanout East Valley AZ"],
  ["services/mattress-removal-east-valley-az", "services/furniture-removal-east-valley-az", "Mattress and Furniture Removal East Valley AZ"],
  ["services/same-day-junk-removal-east-valley-az", "services/junk-removal-east-valley-az", "Same Day Junk Removal East Valley AZ"],
  ["locations/mesa-junk-removal", "locations/mesa-az", "Junk Removal in Mesa AZ"],
  ["locations/gilbert-junk-removal", "locations/gilbert-az", "Junk Removal in Gilbert AZ"],
  ["locations/queen-creek-junk-removal", "locations/queen-creek-az", "Junk Removal in Queen Creek AZ"],
  ["locations/chandler-junk-removal", "locations/chandler-az", "Junk Removal in Chandler AZ"],
  ["locations/san-tan-valley-junk-removal", "locations/san-tan-valley-az", "Junk Removal in San Tan Valley AZ"],
  ["locations/apache-junction-junk-removal", "locations/apache-junction-az", "Junk Removal in Apache Junction AZ"],
  ["locations/tempe-junk-removal", "locations/tempe-az", "Junk Removal in Tempe AZ"],
  ["locations/scottsdale-junk-removal", "locations/scottsdale-az", "Junk Removal in Scottsdale AZ"],
  ["locations/phoenix-junk-removal", "locations/mesa-az", "East Valley Junk Removal"]
].forEach(([fromRoute, toRoute, label]) => write(fromRoute, aliasPage(fromRoute, toRoute, label)));

console.log("Built SEO service and location pages.");
