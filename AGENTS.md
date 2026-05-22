# AGENTS.md

Project guidance for Codex and future AI agents working on the Southwest Hauling & Junk Removal website.

## Project Identity

This site represents:

- Business: Southwest Hauling & Junk Removal LLC
- Phone: 480-490-8033
- Email: Chris@southwestjunkhauling.com
- Address: 39111 N Zampino St, Queen Creek, AZ 85140

Keep this business information consistent anywhere it appears in page copy, metadata, schema, footers, contact blocks, and calls to action.

## Core Build Rules

- Build mobile first. Start with the smallest practical viewport, then enhance layouts for tablet and desktop.
- Use clear, semantic HTML structure. Prefer `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` where appropriate.
- Keep pages fast, scannable, and conversion-focused. Prioritize calls to call, request a quote, and understand service coverage.
- Use accessible markup, meaningful heading order, descriptive link text, readable contrast, and alt text for meaningful images.
- Avoid layout patterns that depend on hover-only interactions or desktop-only behavior.

## Brand Colors

Use these colors consistently across the site:

- Desert Black: `#111111`
- Southwest Orange: `#F05A28`
- Sunset Gold: `#F6A62D`
- Desert Sand: `#F4EAD7`
- Cactus Green: `#28593D`

Prefer Desert Black for primary text, Southwest Orange for primary calls to action, Sunset Gold for highlights, Desert Sand for warm backgrounds, and Cactus Green for trust, service, or supporting accents.

## Local SEO Rules

- Write for customers in Queen Creek and nearby Arizona service areas.
- Use local SEO best practices on every important page:
  - One clear `h1` per page.
  - Descriptive title tags and meta descriptions.
  - Local service keywords in natural language.
  - NAP consistency: business name, address, and phone must match the project identity section.
  - Structured data where appropriate, especially LocalBusiness, Service, FAQ, and BreadcrumbList schema.
  - Internal links to relevant services, locations, contact, and quote pages.
- Avoid keyword stuffing. Copy should sound like a real local junk removal company, not a directory listing.
- Make phone calls easy on mobile with `tel:4804908033` links.
- Make email links use `mailto:Chris@southwestjunkhauling.com`.

## Site Structure Expectations

Use service pages and location pages as core SEO assets.

Service pages should target specific hauling or junk removal needs, such as:

- Junk removal
- Furniture removal
- Appliance removal
- Garage cleanouts
- Construction debris removal
- Yard waste removal
- Hot tub removal
- Estate cleanouts
- Commercial junk removal

Location pages should target real service areas near the business, such as:

- Queen Creek
- San Tan Valley
- Gilbert
- Mesa
- Chandler
- Apache Junction
- Florence

Each service page should link to relevant location pages. Each location page should link to relevant service pages. Keep internal linking helpful and natural.

## Internal Linking Rules

- Use strong internal linking throughout the site.
- Link from the homepage to priority service and location pages.
- Link from service pages to quote/contact actions and nearby location pages.
- Link from location pages to the most relevant services offered in that area.
- Use descriptive anchor text, such as "garage cleanout services in Queen Creek" instead of "click here."
- Include breadcrumb navigation on deeper pages when possible.

## Content Tone

- Keep copy direct, local, and trustworthy.
- Emphasize fast scheduling, clear communication, responsible hauling, and easy cleanup.
- Use plain language customers would actually search for.
- Make calls to action specific: "Call for junk removal in Queen Creek" is better than generic "Learn more."

## Implementation Notes

- Preserve existing project conventions, framework choices, file structure, and styling patterns unless the user asks for a redesign or refactor.
- Do not introduce heavy dependencies for simple layout, SEO metadata, or content changes.
- When adding pages, include mobile-friendly layout, metadata, semantic headings, internal links, and clear calls to action.
- When changing colors or styling, use the official brand palette above rather than inventing new dominant colors.
- Before declaring UI work complete, check common mobile and desktop viewport behavior when practical.
