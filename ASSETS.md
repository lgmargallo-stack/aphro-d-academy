# Asset map

Run `bash download-assets.sh` first. Every URL below is the original
WordPress upload, not the Optimole CDN copy — Optimole re-encodes to AVIF and
downscales to the requested display size, so pulling from it would give you
degraded art. Base path for all of them:

```
https://aphro-dacademy.com/wp-content/uploads/
```

## Read this before rebuilding in Funnelish

Large parts of the page are **flattened PNGs, not layout**. Three files carry
artwork that looks like structure:

| File | Size | What's baked into it |
|---|---|---|
| `TOP-3.png` | 1436×2051 | Background behind hero + benefits + comparison |
| `1-1438056.png` | 1440×1944 | The whole 15-tile course grid as one image |
| `2-51.png` | 1440×1976 | The whole "Builds You For Success" band |

You have two routes in Funnelish:

1. **Drop the flattened PNGs in as section backgrounds.** Fastest, matches the
   original exactly, but nothing inside them is editable or responsive, and the
   text inside them won't be selectable or translatable.
2. **Rebuild with real elements** and use the individual assets below. More
   work, but you get editable text, real hover states, and control over mobile.
   The 15 course tiles exist as separate files, so the grid is worth rebuilding
   this way even if you use flattened art elsewhere.

Route 2 is what the HTML rebuild in this repo does.

## Course tiles

Fifteen separate files at ~379×213. Grid order is left-to-right, top-to-bottom.
The download script renames them to `01-` … `15-` so they sort correctly.

| # | Original | Course |
|---|---|---|
| 01 | `Group-8601.png` | Six-Pack Shortcuts |
| 02 | `Group-8611.png` | 5-Minute Anabolic Meals |
| 03 | `Group-8624.png` | Home Workout Accelerator |
| 04 | `Group-8631.png` | The Billionaire Code |
| 05 | `Group-8641.png` | The Science of Changing Habits |
| 06 | `Group-8651.png` | Bedroom Rockstar |
| 07 | `Group-8661.png` | Anabolic Hormone Optimization |
| 08 | `Group-8671.png` | The Truth About Diets |
| 09 | `Group-8681.png` | Staying 6-Pack Lean Daily Routines |
| 10 | `Group-8691.png` | Neurotoxins and Androgen Disruptors |
| 11 | `Group-8701.png` | Fake Health Foods |
| 12 | `How-to-Build-Muscle-on-Easy-Mode-2.png` | How to Build Muscle on Easy Mode |
| 13 | `Group-8721.png` | Perfect Sleep System |
| 14 | `Natural-Remedies-for-Longevity-1.png` | Natural Remedies for Longevity |
| 15 | `Group-8741.png` | Gut Health Secrets |

Filename-to-course mapping was derived from DOM order and confirmed against
rendered screenshots at positions 12 and 14.

## Section artwork

| File | Size | Section |
|---|---|---|
| `Play-Anytime-Anywhere-5.png` | 750×500 | Watch Anytime. Anywhere. |
| `Science-Based-Learning-2-11.png` | 1181×629 | Science-Based Learning |
| `Action-Focused-Training-Modules-1.png` | 750×426 | Action and Results Training Modules |
| `Live-Feedback-v2-3.png` | 1148×610 | Live Feedback and Mentoring |
| `Community-and-Support-5.png` | 750×486 | Community & Support |

Note the inconsistent resolutions — three are 750px wide while two are ~1150px.
The 750px ones will soften on a retina desktop display. Worth regenerating those
at 2x if you have the sources.

## Icons and small parts

**Benefit icons**, 108×108: `Group-766` (easy-to-follow courses), `Group-7671`
(custom workout plan), `Group-883` (live support), `Group-7691` (expert
coaches), `Group-772` (supportive community), `Group-7711` (lifelong benefits).

**Comparison marks**, 28×28: `Group-734` is the green check, `cancel.png` and
`cancel-1.png` are red crosses. The HTML rebuild replaces these with inline SVG
so they stay crisp at any size — you may prefer Funnelish's own icon set here.

**Buttons**: `Rectangle-883.png` (444×94) and `Rectangle-8831.png` (193×60) are
the CTA backgrounds. They're just a horizontal gradient, `#ff9900` to `#9d5e00`
left to right — reproduce that natively in Funnelish rather than using an image,
so buttons stay sharp and resize freely. Same for `Div-bg-brand.png` (64×6),
which is a solid `#ff9900` bar.

**Pricing card art**: `Group-885` (monthly), `Group-886-1` (yearly),
`Group-887-2` (lifetime), all 136 tall. These carry the struck-through anchor
price and the live price as baked-in art, which is why the prices aren't
selectable text on the live page. Rebuild as text in Funnelish so you can change
prices without a designer.

**Avatars**, 50×50: `Mask-group5`, `Mask-group11` … `Mask-group15`, `image6`.
Seven testimonials, seven avatars. `Mask-group10` (36×36) is a quote mark.

**Social**: `Icon1`/`Icon2` are 20px Facebook and Instagram; `Icon6`/`Icon7` are
52px versions of the same. **Review badges**: `684-6848018_...` is the Google
reviews badge (158×54), `Trustpilot_logo-copy-1.png` is Trustpilot (92×25).

## Brand values

| Token | Value |
|---|---|
| Background | `#000000` |
| Text / muted / soft | `#ffffff` / `#a3a3a3` / `#e5e5e5` |
| Brand orange | `#ff9900` |
| Button gradient | `#ff9900` → `#9d5e00`, 90deg |
| Check / cross | `#4eb641` / `#ff0000` |
| Comparison highlight column | `#12330d` |
| Fonts | Roboto (body + headings), Archivo (buttons only) |
| Container width | 1056px |
| Display type | 50px / 70px line / 14px tracking / 700 |
| Section headings | 37–40px / 51px line / 6px tracking / 400 |
