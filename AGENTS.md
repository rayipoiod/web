# AGENTS.md — Cinnamoroll Learning Café (web project)

## What this is

`public/cinnamoroll-maths-fun.html` — a **standalone, single-file** kids' learning app
(P1 Maths & General Studies, based on the textbook photos in `upload/`).
No build step, no dependencies: HTML + CSS + vanilla JS in one file (~600 KB;
most of it is base64 data-URI images in the `IMG` object at the top of the `<script>`).

Other files in `public/`: `logo.svg` (header logo + favicon), `robots.txt`.

## Editing rules

- **Source of truth is `public/cinnamoroll-maths-fun.html`.** Edit it here, then sync to the deploy copy (below). Never edit `~/Public/web/` directly except for deploy-only files (`index.html` redirect).
- Keep it single-file: new images go in as data URIs in the `IMG` object.
- Question cards are JS-generated: each card has an id (e.g. `p12a`), a `G.cards[id].check()`, and choice groups **must** carry `data-q="<id>"` — `selOf()`/`markChoices()` query `.choices[data-q=...]` and crash on `null` otherwise (this was a real bug).
- Stats/report-card rows map to cards via `CARD_PAGE[cid]`; navigation uses `go(pageNumber)`.

## Deploy (git → GitHub Pages)

Live site: **https://rayipoiod.github.io/web/** · Repo: `github.com/rayipoiod/web` (branch `main`, Pages from root).

1. Copy changed files into the deploy repo:
   ```bash
   cp ~/Public/keikei/public/cinnamoroll-maths-fun.html ~/Public/web/
   ```
2. Commit + push from `~/Public/web`:
   ```bash
   cd ~/Public/web && git add -A && git commit -m "..." && git push
   ```
3. Pages redeploys in ~1 min. `Cache-Control: max-age=600` — users may need a hard refresh (Ctrl+Shift+R) to see changes.

### Auth notes

- GitHub token: `/tmp/gh_token` (session-only, gone on reboot). If push returns 401/404, re-auth via the OAuth device flow (client_id `178c6fc778ccc68e1d6a`, scope `repo`): POST `https://github.com/login/device/code`, user opens `github.com/login/device`, poll `login/oauth/access_token`.
- Passwordless sudo is configured (`/etc/sudoers.d/dirty`).
- `git` and `gh` were apt-installed; apt shows unrelated DKMS/intel-ipu6 kernel errors — ignore them.
