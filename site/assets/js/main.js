/* =================================================================
   createtim — main.js
   ================================================================= */
(function () {
  "use strict";

  /* ---------- Header: shrink/blur on scroll ---------- */
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");
  const progress = document.getElementById("scrollProgress");
  /* data-solid: Header bleibt dauerhaft im "scrolled"-Zustand (Unterseiten) */
  const solidHeader = header && header.hasAttribute("data-solid");
  const onScroll = () => {
    if (header && !solidHeader) header.classList.toggle("scrolled", window.scrollY > 20);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progress.style.transform = "scaleX(" + p + ")";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  /* ---------- Scrollspy: aktiven Nav-Link markieren ---------- */
  const navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href^="#"]')
  );
  if (navLinks.length && "IntersectionObserver" in window) {
    const ids = [];
    navLinks.forEach((a) => {
      const id = a.getAttribute("href").slice(1);
      if (id && ids.indexOf(id) === -1) ids.push(id);
    });
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const setActive = (id) => {
      navLinks.forEach((a) =>
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + id)
      );
    };

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Saubere URL: Anker-Navigation ohne #hash ----------
     Interne Sprungmarken scrollen per JS und schreiben den #hash NICHT
     in die Adresszeile. Deep-Links (z. B. /#kontakt von der 404-Seite)
     scrollen beim Laden einmal zum Ziel und werden dann bereinigt. */
  const reduceNav = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clean = () => history.replaceState(null, "", location.pathname + location.search);
  const goTo = (hash) => {
    const id = (hash || "").replace(/^#/, "");
    const target = id ? document.getElementById(id) : null;
    const behavior = reduceNav() ? "auto" : "smooth";
    if (!target || id === "top") window.scrollTo({ top: 0, behavior });
    else target.scrollIntoView({ behavior, block: "start" });
  };

  document.addEventListener("click", (e) => {
    const link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!link || link.classList.contains("skip-link")) return;
    const hash = link.getAttribute("href");
    if (!hash || hash.length < 2) return; /* leeres "#" ignorieren */
    e.preventDefault();
    goTo(hash);
    clean();
  });

  /* Beim Laden mit #hash: einmal zum Ziel, dann URL säubern */
  if (location.hash && location.hash.length > 1) {
    const initial = location.hash;
    requestAnimationFrame(() => { goTo(initial); clean(); });
  }

  /* ---------- Back to top ---------- */
  if (toTop) {
    toTop.addEventListener("click", () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById("navToggle");
  if (navToggle) {
    const setOpen = (open) => {
      document.body.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    };
    navToggle.addEventListener("click", () =>
      setOpen(!document.body.classList.contains("nav-open"))
    );
    document.querySelectorAll("#mobileMenu a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Skills radar: draw when in view ---------- */
  const radar = document.getElementById("radar");
  if (radar) {
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) { radar.classList.add("in"); obs.disconnect(); }
          });
        },
        { threshold: 0.3 }
      );
      io.observe(radar);
    } else {
      radar.classList.add("in");
    }
  }

  /* ---------- Ablauf: animated step-through timeline ---------- */
  const psteps = Array.prototype.slice.call(document.querySelectorAll("#psteps .pstep"));
  const plineFill = document.getElementById("plineFill");
  if (psteps.length) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const last = psteps.length - 1;

    const render = (cur) => {
      psteps.forEach((step, i) => {
        step.classList.toggle("done", i < cur);
        step.classList.toggle("is-current", i === cur);
      });
      if (plineFill) plineFill.style.setProperty("--p", last ? cur / last : 0);
    };

    /* Wachstums-Diagramm: Linie einzeichnen + wandernden Punkt starten */
    const pgraph = document.getElementById("pgraph");
    const pgraphMotion = document.getElementById("pgraphMotion");
    let graphLive = false;
    const startGraph = () => {
      if (graphLive || !pgraph) return;
      graphLive = true;
      pgraph.classList.add("is-live");
      if (pgraphMotion && typeof pgraphMotion.beginElement === "function") {
        try { pgraphMotion.beginElement(); } catch (e) { /* SMIL nicht verfügbar */ }
      }
    };

    if (reduce) {
      psteps.forEach((s) => s.classList.add("done"));
      if (plineFill) plineFill.style.setProperty("--p", 1);
    } else {
      let cur = 0;
      let timer = null;
      const tick = () => { cur = cur >= last ? 0 : cur + 1; render(cur); };
      const start = () => { startGraph(); if (!timer) { render(0); timer = setInterval(tick, 2200); } };
      const stop = () => { if (timer) { clearInterval(timer); timer = null; } };

      const process = document.getElementById("process");
      if (process && "IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
          { threshold: 0.35 }
        );
        io.observe(process);
        process.addEventListener("mouseenter", stop);
        process.addEventListener("mouseleave", start);
      } else {
        start();
      }
    }
  }

  /* ---------- Count-up: Preise & Radar-Prozente ----------
     Zahlen zählen beim Sichtbarwerden von 0 hoch; der Tausenderpunkt
     (de-DE) wandert dabei sauber mit. Bei reduzierter Bewegung bleibt
     der Endwert (aus dem HTML) einfach stehen. */
  const counters = Array.prototype.slice.call(
    document.querySelectorAll(".price-tag .amt, .radar-legend li b")
  );
  if (counters.length) {
    const reduceCount = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const runCount = (el) => {
      const raw = el.textContent.trim();
      const suffix = raw.slice(-1) === "%" ? "%" : "";
      const target = parseInt(raw.replace(/\D/g, ""), 10) || 0;
      const dur = 900;
      const t0 = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3); /* ease-out cubic */
      const step = (now) => {
        const t = Math.min((now - t0) / dur, 1);
        const val = Math.round(ease(t) * target);
        el.textContent = val.toLocaleString("de-DE") + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (reduceCount || !("IntersectionObserver" in window)) {
      /* nichts tun – Endwerte stehen bereits im HTML */
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCount(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => io.observe(el));
    }
  }

  /* ---------- Contact form ----------
     Mit action-Endpunkt (Formspree): Versand per AJAX, ohne Seitenwechsel.
     Ohne action (oder ohne fetch): Fallback öffnet das E-Mail-Programm via mailto.
     Mit JS wird das Formular zum Mehrschritt-Funnel (Anliegen → Zeitrahmen →
     Kontaktdaten); ohne JS bleiben alle Schritte untereinander sichtbar.
  ------------------------------------ */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  /* ---------- Funnel: Schrittsteuerung ---------- */
  const fsteps = form ? Array.prototype.slice.call(form.querySelectorAll(".fstep")) : [];
  let funnelShow = null; /* wird bei aktivem Funnel gesetzt (auch für Reset nach Versand) */

  if (form && fsteps.length > 1) {
    form.classList.add("is-funnel");
    const bar = document.getElementById("funnelBar");
    const label = document.getElementById("funnelLabel");
    const backBtn = document.getElementById("funnelBack");
    const submitBtn = form.querySelector('button[type="submit"]');
    let cur = 0;

    funnelShow = (i, focus) => {
      cur = Math.max(0, Math.min(i, fsteps.length - 1));
      fsteps.forEach((s, j) => s.classList.toggle("is-active", j === cur));
      if (bar) bar.style.setProperty("--p", (cur + 1) / fsteps.length);
      if (label) label.textContent = "Schritt " + (cur + 1) + " von " + fsteps.length;
      if (backBtn) backBtn.hidden = cur === 0;
      if (submitBtn) submitBtn.hidden = cur !== fsteps.length - 1;
      if (focus) {
        const f = fsteps[cur].querySelector("input, textarea");
        if (f) f.focus({ preventScroll: true });
      }
    };

    if (backBtn) backBtn.addEventListener("click", () => funnelShow(cur - 1, false));

    /* Auswahl-Schritte: nach Klick auf eine Option kurz den gewählten Zustand
       zeigen, dann automatisch weiter. Erneuter Klick auf die bereits gewählte
       Option (z. B. nach "Zurück") führt ebenfalls weiter. */
    fsteps.forEach((step, i) => {
      if (i === fsteps.length - 1) return; /* letzter Schritt: normale Felder */
      step.querySelectorAll(".opt-card").forEach((card) => {
        card.addEventListener("click", () => {
          setTimeout(() => {
            const input = card.querySelector("input");
            if (input && input.checked && cur === i) funnelShow(i + 1, true);
          }, 220);
        });
      });
    });

    funnelShow(0, false);
  }

  if (form) {
    /* JS übernimmt Validierung + deutsche Meldungen; ohne JS bleibt die
       native Browser-Validierung für den Formspree-Fallback aktiv. */
    form.setAttribute("novalidate", "");
    const endpoint = form.getAttribute("action");

    const mark = (field, invalid) => {
      if (invalid) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
    };

    const valid = () => {
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
        status.textContent = "Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Datenschutzerklärung.";
        status.classList.add("err");
        return false;
      }
      if (!emailOk) {
        status.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        status.classList.add("err");
        return false;
      }
      return true;
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.className = "form-status";
      if (!valid()) return;

      /* Funnel-Auswahl auslesen (kann leer sein, z. B. beim No-JS-Fallback nie) */
      const anliegenEl = form.querySelector('input[name="anliegen"]:checked');
      const zeitEl = form.querySelector('input[name="zeitrahmen"]:checked');
      const anliegen = anliegenEl ? anliegenEl.value : "";
      const zeitrahmen = zeitEl ? zeitEl.value : "";
      const betreff = anliegen ? "Anfrage: " + anliegen : "Anfrage über createtim.de";

      /* E-Mail-Betreff bei Formspree aus der Auswahl setzen */
      const subj = form.querySelector('input[name="_subject"]');
      if (subj) subj.value = betreff;

      /* ----- Formspree (AJAX) ----- */
      if (endpoint && "fetch" in window) {
        const btn = form.querySelector("button[type=submit]");
        if (btn) btn.disabled = true;
        status.textContent = "Wird gesendet …";

        fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        })
          .then((res) => {
            if (res.ok) {
              status.textContent = "Vielen Dank! Ihre Nachricht wurde gesendet – ich melde mich i. d. R. innerhalb von 24 Stunden bei Ihnen.";
              status.classList.add("ok");
              form.reset();
              if (funnelShow) funnelShow(0, false);
              return;
            }
            return res.json().then((data) => {
              const msg = data && data.errors ? data.errors.map((x) => x.message).join(" ") : "";
              status.textContent = "Senden fehlgeschlagen" + (msg ? ": " + msg : "") + ". Bitte versuchen Sie es erneut oder schreiben Sie an tim.lietzow@createtim.de.";
              status.classList.add("err");
            });
          })
          .catch(() => {
            status.textContent = "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an tim.lietzow@createtim.de.";
            status.classList.add("err");
          })
          .finally(() => {
            if (btn) btn.disabled = false;
          });
        return;
      }

      /* ----- Fallback: mailto ----- */
      const body =
        "Name: " + form.name.value.trim() + "\n" +
        "E-Mail: " + form.email.value.trim() + "\n" +
        (anliegen ? "Anliegen: " + anliegen + "\n" : "") +
        (zeitrahmen ? "Zeitrahmen: " + zeitrahmen + "\n" : "") +
        "\n" + form.message.value.trim() + "\n";

      window.location.href =
        "mailto:tim.lietzow@createtim.de" +
        "?subject=" + encodeURIComponent(betreff) +
        "&body=" + encodeURIComponent(body);

      status.textContent = "Danke! Ihr E-Mail-Programm öffnet sich – bitte senden Sie die Nachricht ab. Alternativ erreichen Sie mich direkt unter tim.lietzow@createtim.de.";
      status.classList.add("ok");
      form.reset();
      if (funnelShow) funnelShow(0, false);
    });
  }
})();
