# createtim

Marketing website for **createtim** — Webdesign · Wartung · SEO for local
businesses in Buxtehude · Stade · Hamburg.

> Plain static HTML/CSS/JS. **No build step, no dependencies.**

## Structure

```
createtim/
├─ site/                  # ← the website (this is what gets deployed)
│  ├─ index.html          # Landing page
│  ├─ impressum.html      # Impressum (§ 5 DDG)
│  ├─ datenschutz.html    # Datenschutzerklärung (DSGVO)
│  ├─ HANDOVER.md         # Full project hand-over / status doc
│  └─ assets/             # css, js, fonts, img
├─ .github/workflows/     # GitHub Pages deploy workflow
├─ createtim.pdf          # Source business data (NOT published)
├─ tim-visitenkarte.pdf   # Source branding (NOT published)
└─ tim-portfolio.html     # Scratch / reference (NOT published)
```

## Develop locally

No tooling required — open the file directly:

```powershell
Start-Process .\site\index.html
```

Edit the HTML/CSS/JS and refresh the browser.

## Deploy (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` publishes **only the `site/`
folder** to GitHub Pages on every push to `main`. The source PDFs and
`HANDOVER.md` at the repo root are never served.

One-time setup after the first push:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main` (or run the workflow manually via *Actions → Deploy to
   GitHub Pages → Run workflow*).
3. Site goes live at `https://<user>.github.io/<repo>/`.

### Custom domain (`www.createtim.de`)

1. **Settings → Pages → Custom domain** → `www.createtim.de`.
2. At the DNS provider, add a `CNAME` record: `www` → `<user>.github.io`.
3. Tick **Enforce HTTPS** once the certificate is issued.

> ⚠️ **Privacy note:** the Datenschutzerklärung names **GitHub, Inc.** as the
> host. If you ever move to another host (Netlify, Cloudflare Pages, …), update
> the host name/address in `site/datenschutz.html` accordingly.

## More

See **`site/HANDOVER.md`** for full status, business data, open to-dos, and a
map of where everything lives in the code.
