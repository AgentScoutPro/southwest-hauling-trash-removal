# Southwest Hauling & Handyman Services

Static marketing site for Southwest Hauling & Handyman Services.

## Local preview

```bash
node build-seo-site.js
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This project is configured for Vercel as a static site through `vercel.json`.

After the repository is pushed to GitHub, connect the repository in Vercel and use these settings:

- Framework preset: Other
- Build command: `node build-seo-site.js` (set in `vercel.json`)
- Output directory: `.`

Vercel will deploy the root `index.html` plus the `about`, `contact`, `locations`, `services`, and `assets` directories.

The SEO build regenerates service pages, location pages, and the sitemap. Edit `build-seo-site.js` or the data in `seo/` to change those pages. The neighborhood hubs and service combinations are generated before deployment.
