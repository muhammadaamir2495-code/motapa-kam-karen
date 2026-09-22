# MeraSehat

India/Pakistan-focused micro website (Roman Urdu) combining a free diet + skincare plan
tool with SEO content targeting the highest-value, non-medical keywords found during
keyword research. Same core mechanics as the DailyWell project, but:
- Roman Urdu only (no language toggle)
- Metric units only, Desi food terms (roti, dal, paneer, chana, makhana) used freely
- Ships with a `/blog` content section — the tool alone rarely ranks; content does

## Why these specific pages exist

Keyword research turned up ~1,500+ keywords across diet and skin topics. Most were
filtered out for one of three reasons, and it's worth remembering why before adding more:

1. **Medical/YMYL topics are skipped on purpose** — PCOS, diabetes, thyroid, dialysis,
   cardiac, pregnancy-specific diets, eczema, psoriasis, vitiligo, etc. Google mostly
   ranks credentialed medical sources for these, and giving specific advice here is a
   real liability, not just an SEO miss. If this site ever covers them, it should be
   with a named, qualified reviewer — not generated content.
2. **"Near me" / transactional dietician-clinic keywords are skipped** — this is a
   content + tool site, not a directory or clinic; that traffic won't convert to
   anything and competes with actual local businesses.
3. **School-project keywords are skipped** — different audience (students/teachers),
   not aligned with the tool.

What's left and what this site targets: general weight-loss/belly-fat content and
general dry/combination skin content, matched against the tool's own output so a
reader can go from "how do I fix X" straight into "build my own plan."

## Current content (6 posts)

| Post | Targets |
|---|---|
| `/blog/pet-ki-charbi-kaise-kam-kare` | pet ki charbi kaise kam kare / pet ki charbi (~1,000–3,600/mo cluster) |
| `/blog/motapa-kaise-kam-kare` | motapa kaise kam kare / motapa kam kaise karen (~3,600–8,100/mo cluster) |
| `/blog/weight-loss-diet-plan` | weight loss diet plan / diet chart for weight loss (~6,600/mo cluster) |
| `/blog/hand-cream-dry-skin-ke-liye` | hand cream (22,200/mo — the single biggest keyword found) |
| `/blog/combination-skin-care-routine` | combination skin / combination skin care routine (~8,100+880/mo) |
| `/blog/facewash-dry-skin-ke-liye` | facewash for dry skin / best facewash for dry skin (~6,600+2,900/mo) |

To add a new post: copy an existing folder under `app/blog/<slug>/`, keep the same
`BlogLayout` wrapper, write the `metadata` export (title/description) for SEO, and add
an entry to the `posts` array in `app/blog/page.js`.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.js            — fonts + page metadata
  page.js               — hero, tool, featured articles
  blog/page.js           — article index
  blog/<slug>/page.js     — individual articles (6 so far)
components/
  PlanForm.js            — the input form (Roman Urdu, metric only)
  PlanResult.js           — the generated plan, styled
  BlogLayout.js           — shared article wrapper + CTA back to the tool
lib/
  generatePlan.js          — all the plan logic (BMI, calories, timeline, tips)
```

## Put it on GitHub

```bash
git init
git add .
git commit -m "MeraSehat — India-focused diet & skincare site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy on Vercel

1. Push to GitHub (above).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Next.js is
   auto-detected, defaults are fine.
3. Click **Deploy**. You'll get a live link in about a minute; attach a real domain
   from Vercel's project settings once you've picked one.

No environment variables or API keys needed — everything runs client-side.
