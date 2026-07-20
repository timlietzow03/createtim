/* =================================================================
   createtim — main.js (sakura edition + i18n)
   ================================================================= */
(function () {
  "use strict";

  /* ---------- Password Gate ---------- */
  const AUTH_KEY = "createtim-auth";
  const PW = "Nemo";

  function checkAuth() {
    try { return localStorage.getItem(AUTH_KEY) === PW; } catch(e) {}
    return false;
  }

  function unlock() {
    const gate = document.getElementById("pwGate");
    if (gate) gate.classList.add("hidden");
    document.body.style.overflow = "";
  }

  /* If already authenticated, unlock immediately */
  if (checkAuth()) {
    unlock();
  } else {
    /* Block scroll while gate is visible */
    document.body.style.overflow = "hidden";

    /* Wire up the password form */
    const pwForm = document.getElementById("pwForm");
    const pwInput = document.getElementById("pwInput");
    const pwErr = document.getElementById("pwErr");

    if (pwForm) {
      pwForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const val = pwInput.value.trim();
        if (val === PW) {
          localStorage.setItem(AUTH_KEY, val);
          unlock();
        } else {
          pwErr.classList.add("show");
          pwInput.value = "";
          pwInput.focus();
        }
      });
    }
  }

  /* ---------- Translations ---------- */
  const T = {
    de: {
      skip: "Zum Inhalt springen",
      navLeistungen: "Leistungen",
      navAnwendungen: "Anwendungen",
      navUeberMich: "Über mich",
      navKontakt: "Kontakt",
      menuOpen: "Menü öffnen",
      menuClose: "Menü schließen",

      heroLead: "Data Science, Software und Webdesign aus Buxtehude. Ich helfe lokalen Betrieben, ihre Probleme mit Technik zu lösen.",
      sectionWasIchMache: "Was ich mache",
      serviceDS: "Data Science & Analyse",
      serviceDSDesc: "Aus Daten Erkenntnisse gewinnen — Auswertungen, Prognosen, Dashboards. Damit Sie fundiert entscheiden können.",
      serviceAuto: "Automatisierung",
      serviceAutoDesc: "Wiederkehrende Aufgaben per Skript erledigen. Daten zusammenführen, Berichte erzeugen, Systeme verbinden.",
      serviceWeb: "Webdesign",
      serviceWebDesc: "Websites, die aussehen wie Sie wollen und funktionieren wie sie sollen. Responsive, schnell, suchmaschinenfreundlich.",
      aboutP1: "Ich bin Dualer Student Informatik und ausgelernter Anwendungsentwickler. Data Science ist mein Hauptfeld — aber wenn Sie eine Website brauchen, baue ich die auch.",
      aboutP2: "KI nutze ich als Werkzeug, nicht als Verkaufsversprechen. Weil ich die richtigen Fragen stellen kann.",

      dashBuxtehude: "Buxtehude",
      dashLokal: "lokal",
      dashGerade: "Gerade",
      dashGeradeVal: "Data Science",
      dashGeradeSub: "Projekt für lokalen Betrieb",
      repos: "Repos",

      aboutEyebrow: "Über mich",
      aboutH2: "Hallo, ich bin Tim.",
      aboutP3: "Ich komme aus Buxtehude und kenne die Region. Ich weiß, was lokale Betriebe brauchen — keinen anonymen Dienstleister, sondern jemanden, der direkt vor Ort ist und die Sprache spricht.",
      aboutP4: "Mein Schwerpunkt liegt auf Data Science und Softwareentwicklung. Aber ich baue auch gerne Websites, wenn's sinnvoll ist. Hauptsache, das Ergebnis funktioniert.",
      aboutEmail: "E-Mail",
      aboutTel: "Telefon",

      sectionKontakt: "Kontakt",
      kontaktH2: "Lassen Sie uns sprechen.",
      kontaktP: "Schreiben Sie mir kurz, worum es geht. Ich melde mich zeitnah.",
      kontaktDtEmail: "E-Mail",
      KontaktDtTel: "Telefon",
      kontaktDtAdresse: "Adresse",
      kontaktAdresse: "Hauptstraße 9, 21614 Buxtehude",
      formName: "Name",
      formEmail: "E-Mail",
      formNachricht: "Nachricht",
      formNamePh: "Max Mustermann",
      formEmailPh: "max@firma.de",
      formMsgPh: "Worum geht es?",
      formPrivacy: "Datenschutzerklärung gelesen, Verarbeitung ok. *",
      formSubmit: "Nachricht senden",
      formSending: "Wird gesendet …",
      formOk: "Gesendet. Ich melde mich i.d.R. innerhalb 24h.",
      formErr: "Fehlgeschlagen. E-Mail an tim.lietzow@createtim.de.",
      formErrFields: "Alle Felder ausfüllen + Datenschutz bestätigen.",
      formErrEmail: "Ungültige E-Mail-Adresse.",
      formNote: "* Pflichtfelder. Daten nur zur Bearbeitung Ihrer Anfrage.",
      formMailto: "E-Mail-Programm öffnet sich. Alternativ: tim.lietzow@createtim.de",

      footerImpressum: "Impressum",
      footerDatenschutz: "Datenschutz",
      backToTop: "Nach oben scrollen",

      galleryLabel: "Einblicke",
      galleryH2: "Tim & Buxtehude",
      gallery1Title: "Am Schreibtisch",
      gallery1Desc: "So sieht ein typischer Arbeitstag aus — Daten analysieren, Code schreiben, Kaffee trinken.",
      gallery2Title: "Buxtehude",
      gallery2Desc: "Meine Heimat. Die Stadt, für die ich gerne arbeite.",
      gallery3Title: "Kirschblüten",
      gallery3Desc: "Der Grund, warum ich diese Seite so gestaltet habe.",
      gallery4Title: "Zeile für Zeile",
      gallery4Desc: "Jedes Projekt beginnt mit der ersten Zeile Code.",
      gallery5Title: "Vor Ort",
      gallery5Desc: "Persönlich, nicht anonym. Direkt aus der Nachbarschaft.",
      gallery6Title: "Im Gespräch",
      gallery6Desc: "Zuhören ist wichtiger als programmieren.",

      /* leistungen.html */
      leistungenEyebrow: "Leistungen",
      leistungenH1: "Was ich anbiete",
      leistungenLead: "Klare Leistungen, faire Preise. Kein Agentur-Aufschlag.",
      leiWeb: "Webdesign",
      leiWebDesc: "Modernes, individuelles Design, das zu Ihrer Marke passt. Responsive, schnell und suchmaschinenfreundlich — nicht von der Stange.",
      leiWartung: "Wartung & Support",
      leiWartungDesc: "Updates, Backups, Sicherheit und kleine Änderungen — ich halte Ihre Website dauerhaft aktuell und stabil.",
      leiSEO: "SEO & Sichtbarkeit",
      leiSEODesc: "Damit Kunden Sie bei Google finden: saubere Technik, sinnvolle Keywords und lokale Suchmaschinenoptimierung.",
      leiHosting: "Hosting & Einrichtung",
      leiHostingDesc: "Domain, E-Mail und Hosting — ich richte alles ein, damit Ihre Seite zuverlässig online geht.",
      sectionPreise: "Preise",
      preisPaket: "Leistung",
      preisPreis: "Preis",
      preisUmfang: "Umfang",
      preisWebsites: "Websites",
      preisWebsitesUmfang: "Onepager bis mehrseitig, Kontaktformular, responsiv, SEO-Grundlagen",
      preisAnwendungen: "Anwendungen & Automatisierung",
      preisAnwendungenUmfang: "Individuelle Tools, Skripte, Schnittstellen — Preis hängt vom Projekt ab",
      preisWartung: "Wartung",
      preisWartungUmfang: "Updates, Backups, Sicherheit",
      preisNote: "Gemäß § 19 UStG keine Umsatzsteuer. Alle Preise Endpreise.",

      /* anwendungen.html */
      anwEyebrow: "Anwendungen",
      anwH1: "Data Science, KI & Automatisierung",
      anwLead: "Mein eigentliches Feld. Ich löse Probleme mit Code — von der Datenanalyse bis zur individuellen Software.",
      anwDS: "Data Science & Analyse",
      anwDSDesc: "Aus Ihren Daten Erkenntnisse gewinnen. Auswertungen, Prognosen und Dashboards — damit Sie fundiert entscheiden können.",
      anwML: "Machine Learning",
      anwMLDesc: "Modelle, die Muster erkennen und Vorhersagen treffen. Von Klassifikation bis zu empfehlungsbasierten Systemen.",
      anwKI: "KI-Lösungen",
      anwKIDesc: "Praktische KI-Anwendungen — nicht das, was alle versprechen, sondern das, was Ihr Problem löst. Ehrlich eingesetzt.",
      anwAuto: "Automatisierung & Skripte",
      anwAutoDesc: "Wiederkehrende Aufgaben erledige ich per Python-Skript automatisch: Daten zusammenführen, Berichte erzeugen, Systeme verbinden.",
      anwTools: "Individuelle Tools",
      anwToolsDesc: "Maßgeschneiderte kleine Programme statt umständlicher Excel-Listen: Angebots-Generatoren, interne Tools, Verwaltungssysteme.",
      anwAPIs: "Schnittstellen & APIs",
      anwAPIDesc: "Ich verbinde Ihre vorhandenen Programme und Dienste, damit Daten automatisch dorthin fließen, wo Sie sie brauchen.",
      anwGitHub: "Einblicke in meine Arbeit:",

      /* ueber-mich.html */
      ubmEyebrow: "Über mich",
      ubmH1: "Tim Lietzow",
      ubmWerH2: "Wer ich bin",
      ubmWer: "Ich bin Tim, aus Buxtehude. Ich studiere Informatik im dualen Modell und habe meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung schon in der Tasche.",
      ubmWasH2: "Was ich mache",
      ubmWas1: "Data Science ist mein Hauptfeld. Ich analysiere Daten, baue Modelle, automatisiere Abläufe. KI nutze ich dabei als Werkzeug — weil ich die richtigen Fragen stellen kann, nicht weil ich sonst nichts kann.",
      ubmWas2: "Webdesign mache ich, weil ich gerne Dinge baue, die funktionieren. Wenn ein lokaler Betrieb eine Website braucht, helfe ich gern. Aber mein Schwerpunkt liegt auf Anwendungen und Software.",
      ubmWarumH2: "Warum Buxtehude?",
      ubmWarum: "Ich kenne die Region, spreche Ihre Sprache und weiß, was lokale Betriebe brauchen. Keine anonyme Hotline, sondern ein fester Ansprechpartner aus der Nachbarschaft.",
      ubmAntH2: "Was mich antreibt",
      ubmAnt: "Etwas zu bauen, das funktioniert. Keine coolen Demos, sondern Lösungen, die im Alltag helfen. Dazu lerne ich ständig dazu — Technik verändert sich schnell, und ich verändere mich mit.",

      /* kontakt.html */
      ktEyebrow: "Kontakt",
      ktH1: "Schreiben Sie mir",
      ktLead: "Schreiben Sie mir kurz, worum es geht — ich melde mich zeitnah.",
      ktTel: "Telefon",
      ktEmail: "E-Mail",
      ktAdresse: "Adresse",
      ktAdresseVal: "Hauptstraße 9<br/>21614 Buxtehude",
      ktErreich: "Erreichbarkeit",
      ktErreichVal: "Mo–Fr, Antwort i.d.R. innerhalb 24h",
    },

    en: {
      skip: "Skip to content",
      navLeistungen: "Services",
      navAnwendungen: "Applications",
      navUeberMich: "About",
      navKontakt: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",

      heroLead: "Data science, software and web design from Buxtehude. I help local businesses solve their tech problems.",
      sectionWasIchMache: "What I do",
      serviceDS: "Data Science & Analytics",
      serviceDSDesc: "Turning data into insights — reports, forecasts, dashboards. So you can make informed decisions.",
      serviceAuto: "Automation",
      serviceAutoDesc: "Automating repetitive tasks with scripts. Merging data, generating reports, connecting systems.",
      serviceWeb: "Web Design",
      serviceWebDesc: "Websites that look how you want and work how they should. Responsive, fast, SEO-friendly.",
      aboutP1: "I'm a dual student in computer science and a qualified application developer. Data science is my main focus — but if you need a website, I'll build that too.",
      aboutP2: "I use AI as a tool, not a sales pitch. Because I know the right questions to ask.",

      dashBuxtehude: "Buxtehude",
      dashLokal: "local",
      dashGerade: "Currently",
      dashGeradeVal: "Data Science",
      dashGeradeSub: "Project for a local business",
      repos: "repos",

      aboutEyebrow: "About me",
      aboutH2: "Hi, I'm Tim.",
      aboutP3: "I'm from Buxtehude and know the region. I know what local businesses need — not an anonymous service provider, but someone who's right there and speaks your language.",
      aboutP4: "My focus is on data science and software development. But I also enjoy building websites when it makes sense. The important thing is that it works.",
      aboutEmail: "Email",
      aboutTel: "Phone",

      sectionKontakt: "Contact",
      kontaktH2: "Let's talk.",
      kontaktP: "Drop me a message about what you need. I'll get back to you promptly.",
      kontaktDtEmail: "Email",
      KontaktDtTel: "Phone",
      kontaktDtAdresse: "Address",
      kontaktAdresse: "Hauptstraße 9, 21614 Buxtehude, Germany",
      formName: "Name",
      formEmail: "Email",
      formNachricht: "Message",
      formNamePh: "John Doe",
      formEmailPh: "john@company.com",
      formMsgPh: "What's this about?",
      formPrivacy: "I've read the privacy policy and agree to data processing. *",
      formSubmit: "Send message",
      formSending: "Sending …",
      formOk: "Sent. I'll get back to you within 24h.",
      formErr: "Failed. Email tim.lietzow@createtim.de directly.",
      formErrFields: "Please fill all fields and confirm privacy policy.",
      formErrEmail: "Invalid email address.",
      formNote: "* Required fields. Data used only to process your request.",
      formMailto: "Opening email client. Alternatively: tim.lietzow@createtim.de",

      footerImpressum: "Legal",
      footerDatenschutz: "Privacy",
      backToTop: "Scroll to top",

      galleryLabel: "Glimpses",
      galleryH2: "Tim & Buxtehude",
      gallery1Title: "At my desk",
      gallery1Desc: "A typical workday — analysing data, writing code, drinking coffee.",
      gallery2Title: "Buxtehude",
      gallery2Desc: "My hometown. The place I enjoy working for.",
      gallery3Title: "Cherry blossoms",
      gallery3Desc: "The reason this website looks the way it does.",
      gallery4Title: "Line by line",
      gallery4Desc: "Every project starts with the first line of code.",
      gallery5Title: "On site",
      gallery5Desc: "Personal, not anonymous. Right from your neighbourhood.",
      gallery6Title: "In conversation",
      gallery6Desc: "Listening is more important than coding.",

      /* leistungen.html */
      leistungenEyebrow: "Services",
      leistungenH1: "What I offer",
      leistungenLead: "Clear services, fair prices. No agency markup.",
      leiWeb: "Web Design",
      leiWebDesc: "Modern, custom design that matches your brand. Responsive, fast and SEO-friendly — not off the shelf.",
      leiWartung: "Maintenance & Support",
      leiWartungDesc: "Updates, backups, security and small changes — I keep your website up to date and stable.",
      leiSEO: "SEO & Visibility",
      leiSEODesc: "So customers find you on Google: clean code, relevant keywords and local search optimisation.",
      leiHosting: "Hosting & Setup",
      leiHostingDesc: "Domain, email and hosting — I set everything up so your site goes live reliably.",
      sectionPreise: "Pricing",
      preisPaket: "Service",
      preisPreis: "Price",
      preisUmfang: "Scope",
      preisWebsites: "Websites",
      preisWebsitesUmfang: "Landing page to multi-page, contact form, responsive, SEO basics",
      preisAnwendungen: "Applications & Automation",
      preisAnwendungenUmfang: "Custom tools, scripts, interfaces — price depends on the project",
      preisWartung: "Maintenance",
      preisWartungUmfang: "Updates, backups, security",
      preisNote: "No VAT per § 19 UStG. All prices final.",

      /* anwendungen.html */
      anwEyebrow: "Applications",
      anwH1: "Data Science, AI & Automation",
      anwLead: "My core field. I solve problems with code — from data analysis to custom software.",
      anwDS: "Data Science & Analytics",
      anwDSDesc: "Gaining insights from your data. Reports, forecasts and dashboards — so you can make informed decisions.",
      anwML: "Machine Learning",
      anwMLDesc: "Models that recognise patterns and make predictions. From classification to recommendation systems.",
      anwKI: "AI Solutions",
      anwKIDesc: "Practical AI applications — not what everyone promises, but what actually solves your problem. Used honestly.",
      anwAuto: "Automation & Scripts",
      anwAutoDesc: "I automate repetitive tasks with Python scripts: merging data, generating reports, connecting systems.",
      anwTools: "Custom Tools",
      anwToolsDesc: "Tailored little programs instead of clunky Excel sheets: quote generators, internal tools, management systems.",
      anwAPIs: "Interfaces & APIs",
      anwAPIDesc: "I connect your existing programmes and services so data flows automatically to where you need it.",
      anwGitHub: "Insights into my work:",

      /* ueber-mich.html */
      ubmEyebrow: "About me",
      ubmH1: "Tim Lietzow",
      ubmWerH2: "Who I am",
      ubmWer: "I'm Tim, from Buxtehude. I study computer science on a dual programme and have already completed my training as an application developer.",
      ubmWasH2: "What I do",
      ubmWas1: "Data science is my main field. I analyse data, build models, automate workflows. I use AI as a tool — because I know the right questions to ask, not because I can't do anything else.",
      ubmWas2: "I do web design because I enjoy building things that work. When a local business needs a website, I'm happy to help. But my focus is on applications and software.",
      ubmWarumH2: "Why Buxtehude?",
      ubmWarum: "I know the region, speak your language and know what local businesses need. No anonymous hotline, but a dedicated contact person from your neighbourhood.",
      ubmAntH2: "What drives me",
      ubmAnt: "Building something that works. No cool demos, but solutions that help in everyday life. I'm always learning — technology changes fast, and I change with it.",

      /* kontakt.html */
      ktEyebrow: "Contact",
      ktH1: "Get in touch",
      ktLead: "Drop me a message about what you need — I'll get back to you promptly.",
      ktTel: "Phone",
      ktEmail: "Email",
      ktAdresse: "Address",
      ktAdresseVal: "Hauptstraße 9<br/>21614 Buxtehude, Germany",
      ktErreich: "Availability",
      ktErreichVal: "Mon–Fri, usually within 24h",
    },
  };

  let currentLang = localStorage.getItem("createtim-lang") || "de";

  /* ---------- Apply translations ---------- */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("createtim-lang", lang);
    document.documentElement.lang = lang;

    const dict = T[lang] || T.de;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    /* Handle innerHTML translations (for elements with <br> etc.) */
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    /* Handle placeholders */
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    /* Update lang toggle button text */
    const langLabel = document.getElementById("langLabel");
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    /* Update form validation messages */
    const errFields = document.getElementById("formStatus");
    if (errFields && errFields.classList.contains("err") && errFields.dataset.i18n) {
      /* will be re-set by validation */
    }
  }

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById("navToggle");
  if (navToggle) {
    const setOpen = (open) => {
      document.body.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? T[currentLang].menuClose : T[currentLang].menuOpen);
    };
    navToggle.addEventListener("click", () =>
      setOpen(!document.body.classList.contains("nav-open"))
    );
    document.querySelectorAll("#mobileMenu a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  /* ---------- Language toggle ---------- */
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const next = currentLang === "de" ? "en" : "de";
      applyLang(next);
    });
  }

  /* Apply saved language on load */
  applyLang(currentLang);

  /* ---------- Current year ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Scroll reveal ---------- */
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
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Back to top ---------- */
  const toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 400);
    }, { passive: true });
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Sakura Stem (grows on scroll) ---------- */
  const stemEl = document.getElementById("sakuraStem");
  const stemFill = document.getElementById("sakuraFill");
  if (stemEl && stemFill) {
    const dots = stemEl.querySelectorAll(".sakura-dot");

    const updateStem = () => {
      const rect = stemEl.getBoundingClientRect();
      const viewH = window.innerHeight;
      const raw = 1 - (rect.top / viewH);
      const progress = Math.max(0, Math.min(1, raw * 1.6));

      stemFill.style.width = (progress * 100) + "%";

      dots.forEach((d, i) => {
        const threshold = 0.2 + i * 0.13;
        d.classList.toggle("show", progress >= threshold);
      });
    };

    window.addEventListener("scroll", updateStem, { passive: true });
    updateStem();
  }

  /* ---------- Live Clock ---------- */
  const clockEl = document.getElementById("liveClock");
  if (clockEl) {
    const updateClock = () => {
      const now = new Date();
      const de = now.toLocaleTimeString("de-DE", {
        timeZone: "Europe/Berlin",
        hour: "2-digit",
        minute: "2-digit",
      });
      clockEl.textContent = de;
    };
    updateClock();
    setInterval(updateClock, 10000);
  }

  /* ---------- GitHub Stars/Repos ---------- */
  const ghRepos = document.getElementById("ghRepos");
  if (ghRepos) {
    fetch("https://api.github.com/users/tim131103")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data) {
          ghRepos.textContent = data.public_repos + " " + T[currentLang].repos;
        }
      })
      .catch(() => {
        ghRepos.textContent = "tim131103";
      });
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.setAttribute("novalidate", "");
    const endpoint = form.getAttribute("action");

    const mark = (field, invalid) => {
      if (invalid) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
    };

    const valid = () => {
      const dict = T[currentLang];
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const privacy = form.privacy.checked;
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      mark(form.name, !name);
      mark(form.email, !email || !emailOk);
      mark(form.message, !message);
      mark(form.privacy, !privacy);

      if (!name || !email || !message || !privacy) {
        status.textContent = dict.formErrFields;
        status.className = "form-status err";
        return false;
      }
      if (!emailOk) {
        status.textContent = dict.formErrEmail;
        status.className = "form-status err";
        return false;
      }
      return true;
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.className = "form-status";
      if (!valid()) return;

      const dict = T[currentLang];

      if (endpoint && "fetch" in window) {
        const btn = form.querySelector("button[type=submit]");
        if (btn) btn.disabled = true;
        status.textContent = dict.formSending;
        status.className = "form-status err";

        fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        })
          .then((res) => {
            if (res.ok) {
              status.textContent = dict.formOk;
              status.className = "form-status ok";
              form.reset();
              return;
            }
            return res.json().then((data) => {
              const msg = data && data.errors ? data.errors.map((x) => x.message).join(" ") : "";
              status.textContent = dict.formErr + (msg ? " " + msg : "");
              status.className = "form-status err";
            });
          })
          .catch(() => {
            status.textContent = dict.formErr;
            status.className = "form-status err";
          })
          .finally(() => {
            if (btn) btn.disabled = false;
          });
        return;
      }

      /* Fallback: mailto */
      const body =
        "Name: " + form.name.value.trim() + "\n" +
        "Email: " + form.email.value.trim() + "\n" +
        "\n" + form.message.value.trim() + "\n";

      window.location.href =
        "mailto:tim.lietzow@createtim.de" +
        "?subject=" + encodeURIComponent("Anfrage über createtim.de") +
        "&body=" + encodeURIComponent(body);

      status.textContent = dict.formMailto;
      status.className = "form-status ok";
      form.reset();
    });
  }
})();
