# createtim — Project Hand-Over

**Last updated:** 2026-06-11
**Owner:** Tim Lietzow · createtim
**Goal:** A modern marketing website for createtim (Webdesign / Wartung / SEO for local businesses in Buxtehude · Stade · Hamburg).

---

## 1. Quick start

The site is plain static HTML/CSS/JS — **no build step, no dependencies**.

- To view: open `index.html` in any browser (double-click, or `Start-Process .\index.html`).
- To edit: change the HTML/CSS/JS files directly and refresh the browser.
- To deploy: upload the whole `site/` folder to any web host (see Section 6).

---

## 2. Project structure

```
D:\Code\createtim\
├─ HANDOVER.md              # ← this file (repo root — must NEVER live in site\,
│                           #   everything in site\ gets deployed publicly!)
├─ createtim.pdf            # Gewerbeanmeldung (source of business data)
├─ tim-visitenkarte.pdf     # Business card (source of branding/tagline)
└─ site\                    # ← the actual website
   ├─ index.html            # Landing page (hero, services, software, skills, process, about, contact, FAQ)
   ├─ impressum.html        # Legal notice (Impressum) — § 5 DDG
   ├─ datenschutz.html      # Privacy policy (Datenschutzerklärung) — DSGVO
   ├─ 404.html              # Custom error page (GitHub Pages picks it up automatically)
   ├─ robots.txt            # Allows all crawlers, points to sitemap
   ├─ sitemap.xml           # 3 URLs (/, impressum, datenschutz)
   └─ assets\
      ├─ css\style.css      # All styling + design tokens (CSS variables at top); @font-face at top
      ├─ js\main.js         # Nav, scroll-reveal, skill bars, contact-form logic (Formspree AJAX)
      ├─ fonts\             # Self-hosted WOFF2: inter-latin.woff2, sora-latin.woff2
      └─ img\               # (empty — reserved for future images/logo)
```

---

## 3. Business data used (single source of truth)

| Field        | Value                                              |
|--------------|----------------------------------------------------|
| Company      | createtim (Einzelunternehmen, Nebenerwerb)         |
| Owner        | Tim Lietzow                                         |
| Address      | Hauptstraße 9, 21614 Buxtehude, Deutschland        |
| Phone        | +49 162 9856176                                    |
| Email (biz)  | tim.lietzow@createtim.de                            |
| Email (priv) | tim131103@gmail.com                                 |
| Website      | www.createtim.de                                   |
| Tax status   | Kleinunternehmer (§ 19 UStG) — **no VAT ID**       |
| Services     | Webdesign, Webentwicklung, Wartung/Support, SEO, Hosting/Einrichtung, Softwareentwicklung (Tools, Automatisierung, KI/ML) |
| Region       | Buxtehude · Stade · Hamburg                         |
| Tagline      | "Moderne Websites für lokale Betriebe"             |

If any of these change, search-and-replace across `index.html`, `impressum.html`, `datenschutz.html`.

---

## 4. Status — what is DONE ✅

- [x] Responsive landing page (mobile / tablet / desktop)
- [x] Sections: Hero, Marquee, Leistungen, Skills, Ablauf, Über mich, CTA, Kontakt, FAQ, Footer
- [x] Animated browser mockup, scroll-reveal, animated skill bars, mobile menu, back-to-top
- [x] SEO basics: title, meta description, Open Graph tags, JSON-LD structured data (ProfessionalService)
- [x] **Impressum** page (§ 5 DDG: name, address, contact, Kleinunternehmer note, liability/copyright clauses)
- [x] **Datenschutzerklärung** page (DSGVO, incl. contact-form, hosting & Formspree sections)
- [x] Contact form → **Formspree** AJAX (`f/maqzojdb`), with `mailto:` no-JS fallback (see 5.1)
- [x] **Self-hosted fonts** (Inter + Sora WOFF2 in `assets/fonts/`) — no external Google request
- [x] HTML validated (well-formed, all internal links resolve)
- [x] Audit-Fixes (2026-06-10): Back-to-top-Button verkabelt (hatte keinen Click-Handler),
  No-JS-Fallback für Scroll-Reveal (`<noscript>`), `novalidate` nur noch per JS gesetzt
  (ohne JS greift native Validierung), Formspree-Honeypot (`_gotcha`) gegen Spam,
  Content-Security-Policy als `<meta>` auf allen Seiten (Inline-Year-Skripte dafür in
  `main.js` zusammengeführt, Header-Zustand via `data-solid`), Skip-Link, `aria-controls`
  + dynamisches `aria-label` am Menü-Toggle, `aria-invalid` bei Formularfehlern,
  dekorative Hero-Grafik & FAQ-Plus für Screenreader versteckt, `404.html`,
  Mobile-Menü scrollbar (`max-height`), korrekte Latin-Subsets der Fonts (siehe 5.3)
- [x] **Hero-Illustration v2** (2026-06-11): detailliertes animiertes Browser-Mockup
  (Tipp-Animation, Badges, Chips, Analytics-Karte). Komplett unter `.hero-art`
  gescopt, Keyframes mit `ha-`-Präfix (Kollisionsschutz zu `.card`/`.chip`/`.bar`/
  `pulse`), rein dekorativ (`aria-hidden`), reduced-motion-fähig.
  ⚠️ Stand 2026-06-11 **noch nicht committet** — erst im Browser ansehen, dann committen!

---

## 5. Status — what is OPEN / TO DO ⚠️

These are the items to finish **before going live**. Ordered by priority.

### 5.1 — Contact form backend ✅ DONE (Formspree)
The form posts to Formspree endpoint `https://formspree.io/f/maqzojdb` via AJAX
(`fetch` in `main.js`) — no page reload, inline German success/error messages.
A native `action`/`method` POST + `mailto:` path remain as fallbacks if JS is off.
- ⚠️ **You must confirm the form once:** Formspree usually requires confirming the
  first submission (check the inbox tied to the Formspree account) before it delivers.
  Send one test message from the live site to activate + verify delivery.

### 5.2 — Datenschutzerklärung placeholders ✅ DONE
- **Section 3 (Hosting):** filled with **GitHub, Inc.** (San Francisco, USA — GitHub Pages)
  + a third-country-transfer (USA) clause. ⚠️ If you deploy elsewhere, swap the address:
  *Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA* or
  *Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA.*
- **Section 5.1 (Contact form):** added a **Formspree** processor disclosure (USA transfer).
- **Section 7:** rewritten to state fonts are now **self-hosted** (no Google connection).

### 5.3 — Self-host fonts ✅ DONE (fixed 2026-06-10)
Inter + Sora self-hosted as variable WOFF2 in `assets/fonts/`, `@font-face` in
`style.css`, no external font requests.
⚠️ **Bug found & fixed 2026-06-10:** the originally committed files were Google's
**latin-ext** subset (accents only — no a–z, no äöüß!), so the site silently rendered
in the fallback system font the whole time. Replaced with the correct **latin** subset
(full ASCII + äöüß€) and instanced via fonttools to the weights actually used:
Inter wght 400–700 (36 KB), Sora wght 600–800 (24 KB).

### 5.4 — Legal review (partly done)
The Impressum + Datenschutz are built from standard e-recht24-style templates and
adapted to this site.
- **Impressum:** ✅ cross-checked against the official e-recht24 generator output
  (2026-06-08) — complete and consistent. Decided *not* to add a "Berufsbezeichnung"
  (Fachinformatiker is not a regulated profession, so it's optional). No change needed.
- **Datenschutz:** ⚠️ still verify the two US-processor entries (Netlify §3, Formspree §5.1)
  and that you accept their AVV/DPA terms; confirm supervisory authority = LfD Niedersachsen.
  When in doubt, have a lawyer glance over it.

### 5.5 — Privacy: personal address & phone on the site (decision pending)
Currently the **private home address + personal mobile number** appear in Impressum,
Datenschutz, footer, contact section and JSON-LD. Discussed options (2026-06-10):
- A ladungsfähige Anschrift is **legally required** (no way around an address;
  Postfach is not allowed). A **phone number is NOT required** (email + form suffices).
- Short term: get a **business VoIP number** (e.g. Sipgate) instead of the personal
  mobile — cheap, keeps the trust factor.
- Medium term: rent a **ladungsfähige Geschäftsadresse** (Büroservice/Coworking,
  ~10–30 €/month; must reliably receive/forward mail) and replace the home address.
- When either changes: search-and-replace across `index.html` (contact, about,
  JSON-LD), `impressum.html`, `datenschutz.html` (see Section 3).

### 5.6 — (Nice to have) Real content & assets
- Add a real portfolio / references section when first projects exist
  (**biggest credibility gap** — prioritize after the first 1–2 customer sites).
- Add a `favicon.ico` / proper OG share image (currently an inline SVG favicon,
  no `og:image` → bare link previews on WhatsApp/LinkedIn).
- Consider real pricing or package tiers if desired.
- If the site grows beyond ~6 pages: move to Eleventy/Jekyll for shared
  header/footer partials (decided 2026-06-11: stay single-file until then).

---

## 6. Deployment notes

**Chosen host: GitHub Pages** (private repo). A workflow at
`.github/workflows/deploy.yml` publishes **only the `site/` folder** on every push
to `main` — the source PDFs + this HANDOVER stay in the repo but are never served.
See `README.md` for the one-time setup (Settings → Pages → Source: GitHub Actions).

Other static hosts also work (Netlify / Cloudflare Pages drag-and-drop, or
IONOS/Strato via FTP into `httpdocs` / `public_html`) — if you switch, update the
host name in `datenschutz.html` (see 5.2).

After deploy:
1. Point the domain **www.createtim.de** at the host (GitHub Pages: `CNAME` record
   `www` → `<user>.github.io`, then Settings → Pages → Custom domain).
2. Verify HTTPS is active / tick **Enforce HTTPS** (the Datenschutz text promises SSL/TLS).
3. Submit the site to **Google Search Console** for indexing.

---

## 7. Handy reference (where things live in the code)

- **Colors / fonts / spacing:** CSS variables at the very top of `style.css` (`:root { ... }`).
  Brand color = `--brand: #4f46e5`. Change it there and it updates everywhere.
- **Navigation links:** top of `index.html` (`<nav class="nav-links">` and the
  `#mobileMenu` block — keep both in sync).
- **Services cards:** `index.html` → `<section id="leistungen">`.
- **Skill bar percentages:** `index.html` → `<div id="skillList">`, `data-w="NN"` attributes.
- **Contact form logic / mailto fallback:** `main.js` → "Contact form" block.
- **Footer + legal links:** bottom of each HTML file.

---

## 8. Next steps (in order) — status 2026-06-11

1. **Review & commit the new hero** — open `site/index.html` in the browser, check
   the hero illustration on desktop + mobile width, then commit. (The work is done
   but uncommitted; `git status` shows index.html + style.css + HANDOVER.md modified.)
2. **Push to `main`** → triggers the GitHub Pages deploy (everything since commit
   `51a1255` incl. the font fix is also still unpushed). Verify the live site renders
   in Inter/Sora (the old font files were broken — see 5.3).
3. **Send one test message** through the live contact form (Formspree activation +
   verify the new honeypot doesn't break delivery, see 5.1).
4. **Connect domain** www.createtim.de (CNAME `www` → `<user>.github.io`, Pages →
   Custom domain, Enforce HTTPS) + submit to **Google Search Console**.
5. **Privacy decision** (5.5): VoIP number now, Geschäftsadresse when budget allows.
6. **Legal review** (5.4): verify Formspree/GitHub processor entries, AVV/DPA.
7. After first projects: **portfolio section** + OG share image (5.6).

> Tip when resuming with Claude: "Read site/HANDOVER.md and let's continue with step X."




createtim.
Verkaufs-Spickzettel · Vor dem Kundentermin kurz durchlesen
Die Grundhaltung
Du bittest nicht um einen Gefallen — du löst ein Problem. Der Betrieb verliert ohne gute Website Kunden an die Konkurrenz. Du bist die Lösung. Tritt freundlich, aber selbstsicher auf: Du kennst dein Handwerk.
Gesprächsverlauf in 5 Schritten
1
Einstieg – Interesse statt Verkauf
Nicht mit dem Preis starten. Erst zeigen, dass du dich für den Betrieb interessierst.
„Mir ist aufgefallen, dass Sie noch keine eigene Website haben — ich hab mir mal Gedanken gemacht, wie das für Sie aussehen könnte.“
2
Nutzen zeigen – nicht Technik
Der Kunde will keine „responsive Designs“. Er will mehr Kundschaft.
„Wenn jemand abends ‚[Branche] in Buxtehude‘ googelt, finden die Sie aktuell nicht — Ihre Mitbewerber aber schon. Genau das ändert eine Website.“
3
Demo zeigen – der Wow-Moment
Zeig die vorbereitete Beispielseite auf dem Handy/Laptop. Sehen schlägt Erklären.
„Das hier hab ich schon mal mit Ihrem Namen gebaut — natürlich nur ein erster Entwurf.“
4
Preis nennen – ruhig und ohne Entschuldigung
Sag den Preis klar, dann sei still. Wer zuerst spricht, „verliert“.
„Eine fertige Seite wie diese kostet 900 € einmalig. Dazu empfehle ich die Wartung für 40 € im Monat — das nehmen die meisten, damit alles sicher und aktuell bleibt.“
5
Abschluss – konkreter nächster Schritt
Nie offen enden lassen. Immer einen klaren nächsten Schritt vereinbaren.
„Ich schick Ihnen heute noch ein schriftliches Angebot. Wenn es passt, starte ich nächste Woche — bis Monatsende wäre die Seite online.“
Einwände & gute Antworten
Das ist mir zu teuer
Eine Seite kostet einmalig etwa so viel wie ein einziger größerer Auftrag. Wenn sie Ihnen pro Jahr auch nur zwei, drei neue Kunden bringt, hat sie sich längst bezahlt. Und mit 40 € Wartung müssen Sie sich um nichts kümmern.
Brauch ich nicht, läuft auch so
Verstehe ich — solange die Stammkunden kommen. Aber Neukunden suchen heute zuerst online. Wer Sie da nicht findet, geht zum Nächsten. Die Website arbeitet für Sie, auch wenn Sie Feierabend haben.
Mein Neffe / Bekannter macht sowas
Super, wenn jemand startet — viele solcher Seiten bleiben aber leider auf halber Strecke liegen. Bei mir haben Sie einen festen Ansprechpartner vor Ort, der erreichbar ist und sich kümmert, wenn mal was ist. Das ist der Unterschied.
Ich hab schon Facebook / Instagram
Das ist toll für Stammkunden — aber Ihnen gehört es nicht, und nicht jeder ist dort. Eine eigene Seite ist Ihr fester Punkt im Netz, wo Sie bei Google auftauchen und alles Wichtige bündeln. Beides zusammen wirkt am stärksten.
Ich überleg's mir / muss drüber schlafen
Klar, machen Sie das in Ruhe. Ich schick Ihnen das Angebot schriftlich mit, dann haben Sie alles schwarz auf weiß. Darf ich mich Ende der Woche kurz wieder melden?
Kann man das nicht mit Wix/Baukasten selbst machen?
Können Sie — kostet aber viele Stunden Ihrer Zeit, die Sie besser in Ihren Betrieb stecken. Und am Ende sieht man selbstgebauten Seiten das oft an. Ich nehm Ihnen die ganze Technik ab, Sie bekommen ein fertiges, professionelles Ergebnis.
Merksätze
Erst Nutzen, dann Preis. Nie umgekehrt.
Nach dem Preis: still sein. Pause aushalten.
Immer mit konkretem nächsten Schritt rausgehen.
Wartung immer miterwähnen — das ist dein wiederkehrendes Einkommen.
Ein „Nein“ ist kein Drama — der nächste Betrieb wartet schon.
Vermeiden: Dich kleinmachen („Ich bin ja nur Student…“), den Preis von selbst rechtfertigen oder runterhandeln, bevor jemand fragt, und Fachjargon. Dein Studentenstatus ist ein Vorteil (fair, modern, ansprechbar) — verkauf ihn so.