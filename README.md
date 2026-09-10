# Aphro-D Academy — landing page rebuild

Static rebuild of `https://aphro-dacademy.com/`. No build step, no dependencies.

## Run locally

Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
```

In Cursor, the **Live Server** extension works too — right-click `index.html` → *Open with Live Server*.

## Push to a new repo

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source → GitHub Actions**. The included
workflow publishes on every push to `main`.

## Structure

```
index.html        all markup, section order matches the live page
css/styles.css    token block at the top drives every visual value
js/data.js        courses, testimonials, FAQ copy
js/main.js        course grid, testimonial slider, FAQ accordion
assets/images/    real assets go here
```

## Applying the real design values

Everything visual resolves through the `:root` token block at the top of
`css/styles.css`. Nothing below that block hardcodes a colour, font or size,
so applying the captured brand values is a single-file edit.

Colours, fonts and sizes were captured from the live site's computed styles:

| Token | Value |
|---|---|
| Background | `#000000` |
| Text / muted / soft | `#ffffff` / `#a3a3a3` / `#e5e5e5` |
| Brand | `#ff9900` |
| Button gradient | `#ff9900` to `#9d5e00`, 90deg |
| Yes / No | `#4eb641` / `#ff0000` |
| Comparison highlight | `#12330d` |
| Body / button font | Roboto / Archivo |
| Display | 50px / 70px, 14px tracking |
| Section heading | 40px (37px on some), 51px line, 6px tracking |
| Container | 1056px |

## Assets

```bash
bash download-assets.sh
```

Pulls all 63 images at original resolution into `assets/images/`, organised by
category, bypassing the Optimole CDN. Course tiles and avatars are already
wired up in `js/data.js`; until you run it, tiles fall back to showing the
course title. `ASSETS.md` maps every file to where it belongs and flags which
parts of the original are flattened PNGs rather than real layout.

## Asset placeholders

Elements carrying a `data-asset` attribute are slots for real imagery — hero
media, the six benefit icons, four section screenshots, course thumbnails,
testimonial avatars, social and review badges. They render as dashed outlines
until filled.

For course tiles and avatars, set the `image` / `avatar` field in `js/data.js`
to a path under `assets/images/` and it renders automatically.
