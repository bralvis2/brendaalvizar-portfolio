# brendaalvizar.com

Astro portfolio, hosted on Cloudflare.

## Run locally
    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs to dist/
    npm run check      # type-check

## Add a project
1. Create `src/content/projects/my-project.md` (the filename becomes the URL: `/projects/my-project`).
2. Copy the frontmatter from `sample-project.md` and fill it in.
3. Optional cover image: put it in `src/assets/`, then add
   `cover: ../../assets/my-project.png` and `coverAlt: "describe the image"`.
4. Set `draft: true` to hide it until it's ready.
5. Commit and push. Cloudflare rebuilds automatically.

## Edit your details
Name, tagline, email and social links live in `src/site.ts`.
