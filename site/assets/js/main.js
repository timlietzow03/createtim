/* =================================================================
   createtim — main.js
   ================================================================= */
(function () {
  "use strict";

  /* ---------- Header: shrink/blur on scroll ---------- */
  const header = document.getElementById("header");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
    const toTop = document.getElementById("toTop");
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById("navToggle");
  if (navToggle) {
    const close = () => {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll("#mobileMenu a").forEach((a) =>
      a.addEventListener("click", close)
    );
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
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

  /* ---------- Skill bars ---------- */
  const skillList = document.getElementById("skillList");
  if (skillList && "IntersectionObserver" in window) {
    const fill = () =>
      skillList.querySelectorAll(".bar i").forEach((bar) => {
        bar.style.width = (bar.dataset.w || 0) + "%";
      });
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { fill(); obs.disconnect(); }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(skillList);
  } else if (skillList) {
    skillList.querySelectorAll(".bar i").forEach((b) => (b.style.width = (b.dataset.w || 0) + "%"));
  }

  /* ---------- Contact form ----------
     Mit action-Endpunkt (Formspree): Versand per AJAX, ohne Seitenwechsel.
     Ohne action (oder ohne fetch): Fallback öffnet das E-Mail-Programm via mailto.
  ------------------------------------ */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    const endpoint = form.getAttribute("action");

    const valid = () => {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const privacy = form.privacy.checked;

      if (!name || !email || !message || !privacy) {
        status.textContent = "Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Datenschutzerklärung.";
        status.classList.add("err");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
      const subject = form.subject.value.trim();
      const betreff = subject ? subject : "Anfrage über createtim.de";
      const body =
        "Name: " + form.name.value.trim() + "\n" +
        "E-Mail: " + form.email.value.trim() + "\n" +
        (subject ? "Betreff: " + subject + "\n" : "") +
        "\n" + form.message.value.trim() + "\n";

      window.location.href =
        "mailto:tim.lietzow@createtim.de" +
        "?subject=" + encodeURIComponent(betreff) +
        "&body=" + encodeURIComponent(body);

      status.textContent = "Danke! Ihr E-Mail-Programm öffnet sich – bitte senden Sie die Nachricht ab. Alternativ erreichen Sie mich direkt unter tim.lietzow@createtim.de.";
      status.classList.add("ok");
      form.reset();
    });
  }
})();
