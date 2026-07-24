# IAEG Peru — Website

Official website of the Peruvian National Group of the International Association for Engineering Geology and the Environment (IAEG Peru).

🔗 **Live site:** https://web-iaegperu.vercel.app

---

## Tech stack

| Layer | Tool |
|---|---|
| Static site generator | [Eleventy (11ty)](https://www.11ty.dev/) |
| Templating | Nunjucks (`.njk`) |
| Hosting / CI | [Vercel](https://vercel.com) — auto-deploys on every push to `main` |
| Content editing (no-code) | [Decap CMS](https://decapcms.org/) at `/admin/`, authenticated via a custom GitHub OAuth gateway |
| Styles | Plain CSS (`src/styles.css`), no framework/build step |

## Project structure

```
src/
├── _data/
│   ├── site.json          # Global site settings: name, tagline, nav menu, social links, footer text
│   └── eleventyComputed.js
├── _includes/
│   ├── layout.njk           # Base HTML shell — includes header.njk and footer.njk
│   ├── header.njk
│   ├── footer.njk
│   ├── news-post.njk        # Layout used by individual News posts
│   └── committee-post.njk   # Layout used by individual Committee entries
├── admin/
│   ├── index.html           # Loads Decap CMS
│   └── config.yml           # Defines every editable collection/field in the CMS
├── assets/
│   ├── images/               # Uploaded via the CMS media library
│   └── documents/            # Uploaded PDFs (news attachments, MoUs, etc.)
├── committees/                # One .md file per committee (collection)
├── news/                      # One .md file per news post (collection)
├── index.html                 # Home
├── about.html
├── projects.html
├── partners.html
├── events.html
├── committees.html
├── news.html
└── styles.css

.eleventy.js                   # Eleventy config: collections, filters, passthrough copies
package.json
vercel.json
```

## How content gets edited

Non-technical team members (Social Media Coordinator, committee leads) update content through the **visual admin panel** at `/admin/`, not by touching code. It's backed by GitHub under the hood — every save there becomes a commit to `main`, which triggers an automatic Vercel deployment (usually live within ~60 seconds).

An internal step-by-step guide for using the admin panel has been shared directly with the IAEG Peru Social Media team; ask a repo administrator if you need a copy.

## Local development

```bash
npm install
npx @11ty/eleventy --serve
```

Site will be available at `http://localhost:8080`.

To test the Decap CMS admin panel locally against a local Git backend (instead of the live GitHub OAuth flow), see the commented `local_backend: true` option in `src/admin/config.yml`.

## Key Eleventy collections (defined in `.eleventy.js`)

- `committees` — every file in `src/committees/*.md`, used to show a live "Active Committees" count on the Home page.
- `partnersPage` — points at `src/partners.html`, used to show a live count of partner organizations on the Home page.
- `eventsPage` — points at `src/events.html`, used to automatically feature the next upcoming event on the Home page.

## Deployment

Every push to `main` is automatically built and deployed by Vercel. No manual deploy steps are needed.

## Access & Contributions

This repository is publicly visible for transparency, but it is **not open to external contributions**. It is maintained exclusively by IAEG Peru's Executive Committee, Webmaster, and designated Social Media team members with granted GitHub write access.

- **Pull requests from outside contributors will not be reviewed or merged.**
- Write access is controlled per-person via `Settings → Collaborators and teams` and is only granted to active IAEG Peru staff/volunteers.
- If you've found a bug or have a suggestion, please email **iaegperu@gmail.com** instead of opening a PR or issue.
- Do not attempt unauthorized modifications — all commits are tied to an authenticated GitHub account and logged in the repository history.

## License

GPL-3.0 — see `LICENSE`. Note: the license permits viewing, forking, and reuse of the code under its terms, but does **not** grant write access to this repository or authorize impersonating IAEG Peru's official website.

