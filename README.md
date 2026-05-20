# Southwest Hauling & Trash Removal

Static marketing site for Southwest Hauling & Trash Removal.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This project is configured for Vercel as a static site through `vercel.json`.

After the repository is pushed to GitHub, connect the repository in Vercel and use these settings:

- Framework preset: Other
- Build command: None
- Output directory: `.`

Vercel will deploy the root `index.html` plus the `about`, `contact`, `locations`, `services`, and `assets` directories.
