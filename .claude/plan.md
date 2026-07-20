createtim Relaunch – Implementierungsplan
Projektübersicht
Ziel: One-Pager zu Multi-Site umwandeln, ehrlichen Auftritt schaffen, Data Science als Kernkompetenz positionieren.
Vorher: Überladener Onepager mit AI-Slop-Merkmalen, "handgemacht" behauptet
Nachher: Klare Mehrseiter-Struktur, ehrlich über KI-Nutzung, Data Science als Hauptfeld
Dateistruktur
site/
├── index.html              (NEU - kompakte Startseite)
├── leistungen.html         (NEU - Webdesign, Wartung, SEO)
├── anwendungen.html        (NEU - Data Science, KI, Automatisierung)
├── ueber-mich.html         (NEU - Persönliche Seite)
├── kontakt.html            (NEU - Einfaches Formular)
├── impressum.html          (ANPASSEN - Navigation)
├── datenschutz.html        (ANPASSEN - Navigation)
├── 404.html                (ANPASSEN - Navigation)
├── sitemap.xml             (NEU - an neue Struktur anpassen)
├── robots.txt              (BLEIBT)
├── CNAME                   (BLEIBT)
└── assets/
    ├── css/style.css       (REDUZIERT - weniger Animationen)
    ├── js/main.js          (REDUZIERT - weniger Features)
    ├── img/                (BLEIBT)
    └── fonts/              (BLEIBT)
Header/Footer Template (auf ALLEN Seiten)
Header
<header class="site-header" id="header">
  <div class="container nav">
    <a href="/" class="brand" aria-label="createtim Startseite">
      <span class="brand-mark" aria-hidden="true">c</span>
      <span class="brand-word">create<span class="mid" aria-hidden="true">·</span><b>tim</b></span>
    </a>
    <nav class="nav-links" aria-label="Hauptnavigation">
      <a href="leistungen.html">Leistungen</a>
      <a href="anwendungen.html">Anwendungen</a>
      <a href="ueber-mich.html">Über mich</a>
      <a href="kontakt.html">Kontakt</a>
    </nav>
    <div class="nav-cta">
      <a href="kontakt.html" class="btn btn--primary">Kontakt</a>
      <button class="nav-toggle" id="navToggle" aria-label="Menü öffnen" aria-expanded="false">
        <span></span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <div class="nav-links">
      <a href="leistungen.html">Leistungen</a>
      <a href="anwendungen.html">Anwendungen</a>
      <a href="ueber-mich.html">Über mich</a>
      <a href="kontakt.html">Kontakt</a>
    </div>
    <a href="kontakt.html" class="btn btn--primary">Kontakt aufnehmen</a>
  </div>
</header>
Footer (auf allen Seiten identisch)
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div>
        <a href="/" class="brand" aria-label="createtim Startseite">
          <span class="brand-mark" aria-hidden="true">c</span>
          <span class="brand-word">create<span class="mid" aria-hidden="true">·</span><b>tim</b></span>
        </a>
        <p class="footer-about">Data Science, Software & Webdesign aus Buxtehude.</p>
      </div>
      <div class="footer-col">
        <h3>Leistungen</h3>
        <a href="leistungen.html">Webdesign</a>
        <a href="leistungen.html">Wartung & Support</a>
        <a href="leistungen.html">SEO</a>
      </div>
      <div class="footer-col">
        <h3>Anwendungen</h3>
        <a href="anwendungen.html">Data Science</a>
        <a href="anwendungen.html">Machine Learning</a>
        <a href="anwendungen.html">Automatisierung</a>
      </div>
      <div class="footer-col">
        <h3>Kontakt</h3>
        <a href="tel:+491629856176">+49 162 9856176</a>
        <a href="mailto:tim.lietzow@createtim.de">tim.lietzow@createtim.de</a>
        <p>Hauptstraße 9<br>21614 Buxtehude</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year">2026</span> createtim · Tim Lietzow</span>
      <div class="links">
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
      </div>
    </div>
  </div>
</footer>
<button class="to-top" id="toTop" aria-label="Nach oben scrollen">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
</button>
Seite 1: index.html (Startseite)
Konzept
Kompakt, selbstbewusst, kein ewiges Scrollen. Maximal 3-4 Screens.
Inhalt
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>createtim · Data Science, Software & Webdesign | Buxtehude</title>
  <meta name="description" content="Tim Lietzow – Data Science, Machine Learning, Automatisierung und Webdesign aus Buxtehude. Ich nutze KI als Werkzeug, weil ich die richtigen Fragen stellen kann." />
  <link rel="stylesheet" href="assets/css/style.css" />
  <!-- ... Rest wie aktuell (Favicon, Fonts, etc.) -->
</head>
<body>
  <!-- HEADER (siehe Template) -->

  <main id="top">
    <!-- Hero: kurz, selbstbewusst -->
    <section class="hero hero--short">
      <div class="hero-bg">
        <span class="blob b1"></span>
        <span class="blob b2"></span>
      </div>
      <div class="container">
        <span class="hero-badge">
          <span class="pulse"></span> verfügbar für neue projekte
        </span>
        <h1>Data Science & Software,<br>die funktioniert.</h1>
        <p class="lead">
          Ich bin Tim Lietzow aus Buxtehude. Ich löse Probleme mit Code – 
          von Data Science über Automatisierung bis hin zu Websites, wenn's sinnvoll ist. 
          KI nutze ich als Werkzeug, weil ich die richtigen Fragen stellen kann.
        </p>
        <div class="hero-actions">
          <a href="anwendungen.html" class="btn btn--primary btn--lg">
            Was ich mache
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
          <a href="kontakt.html" class="btn btn--ghost btn--lg">Kontakt</a>
        </div>
      </div>
    </section>

    <!-- 3 Kernkompetenzen (einfache Cards) -->
    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Was ich mache</span>
          <h2>Drei Bereiche, ein Ziel: Ihr Problem lösen</h2>
        </div>
        <div class="cards cards--3">
          <article class="card reveal">
            <div class="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 3v18h18"/>
                <path d="m7 14 4-4 3 3 5-6"/>
              </svg>
            </div>
            <h3>Data Science & Analyse</h3>
            <p>Aus Daten Erkenntnisse gewinnen. Auswertungen, Prognosen, Dashboards – damit Sie fundiert entscheiden können.</p>
            <a href="anwendungen.html" class="card-link">Mehr erfahren →</a>
          </article>
          <article class="card reveal d1">
            <div class="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="8" width="16" height="11" rx="2.5"/>
                <path d="M12 4.9V8M9 13h.01M15 13h.01"/>
              </svg>
            </div>
            <h3>KI & Automatisierung</h3>
            <p>Skripte, die Arbeit abnehmen. KI-Lösungen, die funktionieren. Nicht das, was alle versprechen – sondern das, was Sie brauchen.</p>
            <a href="anwendungen.html" class="card-link">Mehr erfahren →</a>
          </article>
          <article class="card reveal d2">
            <div class="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="14" rx="2"/>
                <path d="M3 9h18M7 21h10"/>
              </svg>
            </div>
            <h3>Webdesign & Entwicklung</h3>
            <p>Websites, die aussehen wie Sie wollen und funktionieren wie sie sollen. Responsive, schnell, suchmaschinenfreundlich.</p>
            <a href="leistungen.html" class="card-link">Mehr erfahren →</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Kurzer Über-mich-Snippet -->
    <section class="section section--soft">
      <div class="container">
        <div class="about-snippet reveal">
          <div class="about-snippet-text">
            <span class="eyebrow">Über mich</span>
            <h2>Tim Lietzow</h2>
            <p>
              Dualer Student Informatik, ausgelernter Anwendungsentwickler. 
              Ich komme aus Buxtehude und kenne die Region. 
              Data Science ist mein Hauptfeld – aber wenn Sie eine Website brauchen, 
              baue ich die auch. Ehrlich, direkt, ohne Agentur-Firmament.
            </p>
            <a href="ueber-mich.html" class="btn btn--ghost">
              Mehr über mich
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
          </div>
          <div class="about-snippet-photo">
            <img src="assets/img/tim.jpg" alt="Tim Lietzow" width="200" height="200" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Bereit für eine Lösung, die funktioniert?</h2>
          <p>Lassen Sie uns unverbindlich sprechen. Das Erstgespräch ist kostenlos.</p>
          <div class="hero-actions">
            <a href="kontakt.html" class="btn btn--light btn--lg">
              Kontakt aufnehmen
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
            <a href="tel:+491629856176" class="btn btn--outline-light btn--lg">Direkt anrufen</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER (siehe Template) -->
  <script src="assets/js/main.js"></script>
</body>
</html>
CSS für diese Seite
- .hero--short: Reduziertes Padding (nicht 132px top, sondern 100px)
- .cards--3: 3-Spalten-Grid (statt 2+1 Layout)
- .card-link: Einfacher Link unter den Cards
- .about-snippet: Flexbox mit Text links, Foto rechts
Seite 2: leistungen.html
Inhalt
- Webdesign (individuell, responsive, sauber)
- Wartung & Support (Updates, Backups, Sicherheit)
- SEO & Performance ( lokale Sichtbarkeit, Core Web Vitals)
- Hosting & Einrichtung (Domain, E-Mail, Deployment)
- Einfache Preistabelle (keine Cards, sondern eine Übersicht)
Kein
- Funnel-Formular
- Vergleich Baukasten vs. individuell
- Übertriebene Erklärungen
Struktur
<main class="container legal" id="main">
  <div class="legal-head">
    <span class="eyebrow">Leistungen</span>
    <h1>Was ich anbiete</h1>
    <p>Klare Leistungen, faire Preise. Kein Agentur-Aufschlag.</p>
  </div>

  <div class="services-grid">
    <!-- 4 Service-Cards -->
  </div>

  <!-- Einfache Preistabelle -->
  <div class="pricing-table">
    <h2>Preise</h2>
    <table>
      <tr><td>Starter</td><td>450 €</td><td>Onepager, Kontaktformular</td></tr>
      <tr><td>Business</td><td>900 €</td><td>Mehrseitig, SEO-Grundlagen</td></tr>
      <tr><td>Premium</td><td>1.500 €</td><td>Umfangreich, erweiterte Funktionen</td></tr>
      <tr><td>Wartung</td><td>40 €/Monat</td><td>Updates, Backups, Sicherheit</td></tr>
    </table>
    <p class="price-note">Gemäß § 19 UStG keine Umsatzsteuer. Alle Preise Endpreise.</p>
  </div>
</main>
Seite 3: anwendungen.html (Kernkompetenz)
Inhalt
- Data Science & Analyse
- Machine Learning
- Automatisierung & Skripte
- KI-Lösungen (ehrlich: "Ich nutze KI als Werkzeug")
- Individuelle Tools
- APIs & Integrationen
- GitHub-Referenzen (kleine Projekte mit Links)
Struktur
<main class="container legal" id="main">
  <div class="legal-head">
    <span class="eyebrow">Anwendungen</span>
    <h1>Data Science, KI & Automatisierung</h1>
    <p>
      Mein eigentliches Feld. Ich löse Probleme mit Code – 
      von der Datenanalyse bis zur individuellen Software. 
      KI nutze ich als Werkzeug, nicht als Verkaufsversprechen.
    </p>
  </div>

  <div class="applications-grid">
    <!-- 6 Application-Cards (ähnlich wie aktuelle Software-Cards) -->
  </div>

  <!-- GitHub Referenzen -->
  <div class="github-refs">
    <h2>Aus der Praxis</h2>
    <div class="ref-cards">
      <a href="https://github.com/..." class="ref-card">
        <h3>Projektname</h3>
        <p>Kurze Beschreibung</p>
        <span class="tech-tags">Python, ML, etc.</span>
      </a>
      <!-- mehr Referenzen -->
    </div>
  </div>
</main>
Seite 4: ueber-mich.html
Inhalt (ehrlich, persönlich)
<main class="container legal" id="main">
  <div class="legal-head">
    <span class="eyebrow">Über mich</span>
    <h1>Tim Lietzow</h1>
  </div>

  <div class="about-content">
    <div class="about-photo-section">
      <img src="assets/img/tim.jpg" alt="Tim Lietzow" width="300" height="300" />
    </div>
    
    <div class="about-text">
      <h2>Wer ich bin</h2>
      <p>
        Ich bin Tim, 23, aus Buxtehude. Ich studiere Informatik im dualen Modell 
        und habe meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung 
        schon in der Tasche.
      </p>
      
      <h2>Was ich mache</h2>
      <p>
        Data Science ist mein Hauptfeld. Ich analysiere Daten, baue Modelle, 
        automatisiere Abläufe. KI nutze ich dabei als Werkzeug – weil ich 
        die richtigen Fragen stellen kann, nicht weil ich sonst nichts kann.
      </p>
      <p>
        Webdesign mache ich, weil ich gerne Dinge baue, die funktionieren. 
        Wenn ein lokaler Betrieb eine Website braucht, helfe ich gern. 
        Aber mein Schwerpunkt liegt auf Anwendungen und Software.
      </p>
      
      <h2>Warum Buxtehude?</h2>
      <p>
        Ich kenne die Region, spreche Ihre Sprache und weiß, was lokale 
        Betriebe brauchen. Keine anonyme Hotline, sondern ein fester 
        Ansprechpartner aus der Nachbarschaft.
      </p>
      
      <h2>Was mich antreibt</h2>
      <p>
        Etwas zu bauen, das funktioniert. Keine coolen Demos, 
        sondern Lösungen, die im Alltag helfen. Dazu lerne ich ständig 
        dazu – Technik verändert sich schnell, und ich verändere mich mit.
      </p>
      
      <div class="about-contact-links">
        <a href="tel:+491629856176">+49 162 9856176</a>
        <a href="mailto:tim.lietzow@createtim.de">tim.lietzow@createtim.de</a>
        <a href="https://github.com/...">GitHub</a>
      </div>
    </div>
  </div>
</main>
Seite 5: kontakt.html
Inhalt (einfach, kein Funnel)
<main class="container legal" id="main">
  <div class="legal-head">
    <span class="eyebrow">Kontakt</span>
    <h1>Lassen Sie uns sprechen</h1>
    <p>Schreiben Sie mir kurz, worum es geht – ich melde mich zeitnah.</p>
  </div>

  <div class="contact-content">
    <div class="contact-info">
      <div class="info-item">
        <strong>Telefon</strong>
        <a href="tel:+491629856176">+49 162 9856176</a>
      </div>
      <div class="info-item">
        <strong>E-Mail</strong>
        <a href="mailto:tim.lietzow@createtim.de">tim.lietzow@createtim.de</a>
      </div>
      <div class="info-item">
        <strong>Adresse</strong>
        <span>Hauptstraße 9<br>21614 Buxtehude</span>
      </div>
      <div class="info-item">
        <strong>Erreichbarkeit</strong>
        <span>Mo–Fr, Antwort i.d.R. innerhalb 24h</span>
      </div>
    </div>

    <form class="form" id="contactForm" action="https://formspree.io/f/maqzojdb" method="POST">
      <input type="hidden" name="_subject" value="Anfrage über createtim.de" />
      
      <div class="field-row">
        <div class="field">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" required placeholder="Max Mustermann" />
        </div>
        <div class="field">
          <label for="email">E-Mail *</label>
          <input type="email" id="email" name="email" required placeholder="max@firma.de" />
        </div>
      </div>
      
      <div class="field">
        <label for="message">Ihre Nachricht *</label>
        <textarea id="message" name="message" required placeholder="Erzählen Sie mir kurz von Ihrem Projekt …"></textarea>
      </div>
      
      <label class="form-check">
        <input type="checkbox" id="privacy" name="privacy" required />
        <span>Ich habe die <a href="datenschutz.html">Datenschutzerklärung</a> gelesen. *</span>
      </label>
      
      <button type="submit" class="btn btn--primary btn--lg">
        Nachricht senden
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
      </button>
      
      <div class="form-status" id="formStatus" role="status"></div>
    </form>
  </div>
</main>
CSS-Änderungen (style.css)
Komplett entfernen
/* Petals - Zeilen 233-255 */
.petal { ... }
@keyframes petal-fall { ... }

/* IDE Hero - Zeilen 270-366 */
.hero-ide { ... }
.ide { ... }
.ide-bar { ... }
.ide-tabs { ... }
.ide-body { ... }
.ide-editor { ... }
.ide-preview { ... }
.ide-terminal { ... }
.ide-status { ... }

/* Radar - Zeilen 396-424 */
.radar { ... }
.radar-data { ... }
.radar-dot { ... }
.radar-label { ... }

/* Timeline Animation - Zeilen 429-483 */
.pgraph { ... }
.pgraph-line { ... }
.pgraph-area { ... }
.pgraph-marker { ... }

/* Funnel - Zeilen 668-714 */
.funnel-head { ... }
.fstep { ... }
.opt-grid { ... }
.opt-card { ... }

/* Vergleich - Zeilen 642-666 */
.compare { ... }
.compare-card { ... }
.compare-card--featured { ... }
Reduzieren
/* Hero - kürzer */
.hero--short {
  padding-top: 100px;  /* statt 132px */
  padding-bottom: clamp(32px, 4vw, 60px);
}

/* Cards - einfacher */
.cards--3 {
  grid-template-columns: repeat(3, 1fr);
}

/* Card-Link */
.card-link {
  display: inline-block;
  margin-top: 1rem;
  color: var(--brand-700);
  font-weight: 600;
  font-size: 0.9rem;
}

/* About Snippet */
.about-snippet {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: clamp(36px, 5vw, 72px);
  align-items: center;
}

.about-snippet-photo img {
  border-radius: var(--r-xl);
  width: 200px;
  height: 200px;
  object-fit: cover;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

/* Applications Grid */
.applications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

/* GitHub References */
.ref-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.ref-card {
  background: var(--bg-elev);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.ref-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.ref-card h3 {
  margin-bottom: 0.5rem;
}

.ref-card p {
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.tech-tags {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--brand-700);
}

/* Pricing Table */
.pricing-table {
  background: var(--bg-elev);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  padding: 2rem;
}

.pricing-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

.pricing-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--line);
}

.pricing-table tr:last-child td {
  border-bottom: none;
}

.price-note {
  font-size: 0.85rem;
  color: var(--muted-2);
  text-align: center;
}
Behalten (unverändert)
- Design Tokens (Sakura-Farben)
- Container/Layout
- Typography
- Buttons
- Header/Footer Styles
- Responsive Breakpoints
- Scroll Reveal (vereinfacht)
- Mobile Menu
JavaScript-Änderungen (main.js)
Komplett entfernen
/* Radar Observer - Zeilen 136-151 */
const radar = document.getElementById("radar");
// ...

/* Timeline Animation - Zeilen 153-204 */
const psteps = document.querySelectorAll("#psteps .pstep");
// ...

/* Funnel Logic - Zeilen 259-302 */
const fsteps = form.querySelectorAll(".fstep");
// ...

/* Count-Up für Radar - Zeilen 206-248 */
const counters = document.querySelectorAll(".radar-legend li b");
// ...
Behalten (vereinfacht)
/* Header scroll */
const header = document.getElementById("header");
const toTop = document.getElementById("toTop");
const progress = document.getElementById("scrollProgress");

const onScroll = () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
  // Scroll Progress entfernen (nicht mehr nötig)
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Mobile Menu */
// Identisch wie aktuell

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && reveals.length) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
}

/* Contact Form (AJAX) */
// Identisch wie aktuell, aber OHNE Funnel-Logik
Content-Richtlinien
Tone of Voice
- Direkt, nicht umständlich
- Ehrlich, nicht übertreibend
- Selbstbewusst, nicht arrogant
- Persönlich, nicht Agentur-mäßig
Texte schreiben
- "Ich" statt "Wir" (du bist allein)
- Kurze Sätze
- Keine Füllwörter
- Konkret statt generisch
Beispiele
Statt: "Ich baue moderne, schnelle Websites, die für Sie arbeiten"
Sondern: "Websites, die aussehen wie Sie wollen und funktionieren wie sie sollen."
Statt: "Individuelle Software, die Ihnen Arbeit abnimmt"
Sondern: "Software, die Ihr Problem löst. Ob Skript, Tool oder komplette Anwendung."
Statt: "Persönlich, lokal und auf Augenhöhe"
Sondern: "Ich komme aus Buxtehude. Keine Hotline, sondern ein Ansprechpartner."
Statt: "KI-Agenten & Assistenten"
Sondern: "KI-Lösungen – ehrlich eingesetzt, nicht als Buzzword"
Implementierungsreihenfolge
 1. CSS reduzieren (style.css) – Animationen entfernen, neue Klassen hinzufügen
 2. JS vereinfachen (main.js) – Funnel, Radar, Timeline entfernen
 3. index.html neu schreiben (Startseite)
 4. leistungen.html neu schreiben
 5. anwendungen.html neu schreiben
 6. ueber-mich.html neu schreiben
 7. kontakt.html neu schreiben
 8. impressum.html anpassen (Navigation)
 9. datenschutz.html anpassen (Navigation)
10. 404.html anpassen (Navigation)
11. sitemap.xml aktualisieren
12. Testen (responsiv, Links, Formular)
Fragen an Tim
Bevor du mit Fable 5 umsetzt:
1. GitHub-Referenzen: Hast du konkrete Projekte, die du zeigen willst? (Links, kurze Beschreibungen)
2. Foto: Ist das aktuelle Foto in Ordnung oder hast du ein besseres?
3. Kontaktformular: Formspree beibehalten oder auf mailto vereinfachen?
4. Preise: Sind die aktuellen Preise (450/900/1500 €) noch aktuell?
5. Farben: Sakura-Stil 1:1 beibehalten oder anpassen?