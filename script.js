(function () {
  "use strict";

  var services = [
    { num: "01", title: "YouTube Promotion", desc: "Help creators improve their channel visibility and reach through effective promotional strategies.", icon: "fa-brands fa-youtube", color: "var(--accent)", bg: "color-mix(in oklch, var(--accent) 12%, transparent)" },
    { num: "02", title: "Twitch Promotion", desc: "Help Twitch streamers improve visibility, discoverability, and audience reach.", icon: "fa-brands fa-twitch", color: "var(--accent-warm)", bg: "color-mix(in oklch, var(--accent-warm) 14%, transparent)" },
    { num: "03", title: "YouTube Monetization", desc: "Provide guidance on preparing a YouTube channel for monetization and building a stronger channel foundation.", icon: "fa-solid fa-sack-dollar", color: "var(--accent)", bg: "color-mix(in oklch, var(--accent) 12%, transparent)" },
    { num: "04", title: "YouTube Channel Audit", desc: "Review channel branding, content, titles, thumbnails, descriptions, and overall presentation to identify areas for improvement.", icon: "fa-solid fa-magnifying-glass-chart", color: "var(--accent-warm)", bg: "color-mix(in oklch, var(--accent-warm) 14%, transparent)" },
    { num: "05", title: "Twitch Channel Setup", desc: "Help create a professional Twitch channel setup including profile presentation, panels, branding, and organization.", icon: "fa-solid fa-sliders", color: "var(--accent)", bg: "color-mix(in oklch, var(--accent) 12%, transparent)" },
    { num: "06", title: "YouTube Video Editing", desc: "Transform raw footage into clean, engaging, professional YouTube videos.", icon: "fa-solid fa-film", color: "var(--accent-warm)", bg: "color-mix(in oklch, var(--accent-warm) 14%, transparent)" },
    { num: "07", title: "YouTube Channel Setup", desc: "Help creators organize their channel branding, layout, descriptions, and overall presentation.", icon: "fa-solid fa-gear", color: "var(--accent)", bg: "color-mix(in oklch, var(--accent) 12%, transparent)" }
  ];

  var faqs = [
    { q: "What services do you offer?", a: "I offer YouTube Promotion, Twitch Promotion, YouTube Monetization support, YouTube Channel Audits, Twitch Channel Setup, and YouTube Video Editing." },
    { q: "How long does it take to see results?", a: "Results vary by channel and strategy, but most clients start noticing growth within the first few weeks of consistent implementation." },
    { q: "Do you guarantee monetization approval?", a: "I help optimize your channel to meet monetization requirements, but approval is ultimately decided by YouTube/Twitch based on their platform policies." },
    { q: "Can you help a brand-new channel?", a: "Yes — I work with both new and existing channels, tailoring the strategy to your current stage." },
    { q: "How do I get started?", a: "Just reach out through the contact page, and we'll discuss your goals and the best package for your channel." },
    { q: "Do you offer one-time services or ongoing support?", a: "Both — you can choose a one-time service like a channel audit or setup, or ongoing support like continuous promotion and editing." }
  ];

  // Placeholder stats for the "Creator Results" section on index.html —
  // edit the `value` fields here once you have verified analytics. Each
  // number counts up from 0 when the section scrolls into view.
  var STATS_CONFIG = [
    { icon: "fa-solid fa-eye", label: "Views", value: 125000, suffix: "+" },
    { icon: "fa-solid fa-users", label: "Subscribers", value: 4800, suffix: "+" },
    { icon: "fa-solid fa-clock", label: "Watch Time", value: 8500, suffix: "+ Hours" }
  ];

  // Small horizontal scrolling gallery, right after the hero on index.html.
  // Real images: drop a file at assets/gallery/gallery-N.(png|jpg|jpeg|webp)
  // for each n below and it replaces the icon placeholder automatically.
  var galleryTiles = [
    { n: 1, icon: "fa-solid fa-video", alt: "Gaming logo 1" },
    { n: 2, icon: "fa-solid fa-chart-line", alt: "Gaming logo 2" },
    { n: 3, icon: "fa-solid fa-thumbs-up", alt: "Gaming logo 3" },
    { n: 4, icon: "fa-solid fa-bullhorn", alt: "Gaming logo 4" },
    { n: 5, icon: "fa-solid fa-pen-nib", alt: "Gaming logo 5" }
  ];

  // "Featured Services" gaming-style cards on index.html. Each links to a
  // placeholder learn-more.html?service=<slug> page.
  var homeServices = [
    { slug: "youtube-promotion", title: "YouTube Promotion", desc: "Improve your channel visibility and reach the right audience through effective promotional strategies.", icon: "fa-brands fa-youtube" },
    { slug: "twitch-promotion", title: "Twitch Promotion", desc: "Improve visibility, discoverability, and audience reach for your Twitch channel.", icon: "fa-brands fa-twitch" },
    { slug: "youtube-monetization", title: "YouTube Monetization", desc: "Guidance on preparing your channel for monetization and building a stronger foundation.", icon: "fa-solid fa-sack-dollar" },
    { slug: "youtube-audit", title: "YouTube Audit", desc: "A full review of your channel's branding, content, and presentation to find areas to improve.", icon: "fa-solid fa-magnifying-glass-chart" },
    { slug: "twitch-channel-setup", title: "Twitch Channel Setup", desc: "A professional Twitch setup including profile presentation, panels, branding, and organization.", icon: "fa-solid fa-sliders" },
    { slug: "youtube-video-editing", title: "YouTube Video Editing", desc: "Clean, engaging, professional edits that transform raw footage into polished videos.", icon: "fa-solid fa-film" }
  ];

  function homeServiceBySlug(slug) {
    for (var i = 0; i < homeServices.length; i++) {
      if (homeServices[i].slug === slug) return homeServices[i];
    }
    return null;
  }

  function renderServices() {
    var grid = document.getElementById("servicesGrid");
    if (!grid) return;
    var html = services.map(function (svc) {
      return (
        '<div class="service-card">' +
          '<div class="service-card-top">' +
            '<div class="service-icon" style="background:' + svc.bg + '">' +
              '<i class="' + svc.icon + '" style="color:' + svc.color + '" aria-hidden="true"></i>' +
            '</div>' +
            '<span class="service-num">' + svc.num + '</span>' +
          '</div>' +
          '<h3>' + svc.title + '</h3>' +
          '<p>' + svc.desc + '</p>' +
          '<a href="contact.html" class="btn btn-primary btn-block">Get Started</a>' +
        '</div>'
      );
    }).join("");
    grid.innerHTML = html;
  }

  function galleryTileHtml(t, decorative) {
    // Icon renders immediately (no JS dependency) so the tile is never
    // blank; the <img> starts hidden and only takes over once it loads.
    return (
      '<div class="gallery-tile" data-gallery-n="' + t.n + '">' +
        '<i class="' + t.icon + ' gallery-tile-icon" aria-hidden="true"></i>' +
        '<img alt="' + (decorative ? '' : t.alt) + '" class="gallery-tile-img"' + (decorative ? ' aria-hidden="true"' : '') + ' hidden>' +
      '</div>'
    );
  }

  // Renders a small auto-scrolling row of 5 tiles, each showing its own
  // logo at assets/gallery/gallery-N.jpg.
  function renderGallery() {
    var track = document.getElementById("galleryTrack");
    if (!track) return;
    var real = '<div class="gallery-group">' + galleryTiles.map(function (t) { return galleryTileHtml(t, false); }).join("") + '</div>';
    var dup = '<div class="gallery-group" aria-hidden="true">' + galleryTiles.map(function (t) { return galleryTileHtml(t, true); }).join("") + '</div>';
    track.innerHTML = real + dup;
    track.querySelectorAll(".gallery-tile").forEach(function (tile) {
      var n = tile.getAttribute("data-gallery-n");
      var img = tile.querySelector(".gallery-tile-img");
      var icon = tile.querySelector(".gallery-tile-icon");
      img.addEventListener("load", function () {
        img.hidden = false;
        icon.hidden = true;
      });
      img.src = "assets/gallery/gallery-" + n + ".jpg";
    });
  }

  function renderHomeServices() {
    var grid = document.getElementById("homeServicesGrid");
    if (!grid) return;
    var html = homeServices.map(function (svc) {
      return (
        '<div class="gcard">' +
          '<div class="gcard-icon"><i class="' + svc.icon + '" aria-hidden="true"></i></div>' +
          '<h3>' + svc.title + '</h3>' +
          '<p>' + svc.desc + '</p>' +
          '<a href="learn-more.html?service=' + svc.slug + '" class="btn btn-secondary btn-block">Learn More</a>' +
        '</div>'
      );
    }).join("");
    grid.innerHTML = html;
  }

  // learn-more.html reads ?service=<slug> and fills in that service's info.
  function setupLearnMorePage() {
    var titleEl = document.getElementById("lmTitle");
    if (!titleEl) return;
    var slug = new URLSearchParams(window.location.search).get("service");
    var svc = slug ? homeServiceBySlug(slug) : null;
    if (!svc) svc = homeServices[0];
    document.getElementById("lmIcon").innerHTML = '<i class="' + svc.icon + '" aria-hidden="true"></i>';
    titleEl.textContent = svc.title;
    document.getElementById("lmDesc").textContent = svc.desc;
    document.title = svc.title + " — Makanjuola Oluwanifemi (Nancy)";
  }

  function renderServiceOptions() {
    var select = document.getElementById("service");
    if (!select) return;
    var html = services.map(function (svc) {
      return '<option value="' + svc.title + '">' + svc.title + '</option>';
    }).join("") + '<option value="Custom Project">Custom Project</option>';
    select.innerHTML = html;
  }

  // Accordion: only one answer open at a time. The answer wrapper animates
  // via grid-template-rows 0fr -> 1fr (a CSS-only technique for smoothly
  // transitioning to/from an auto-height content block).
  function renderFaq() {
    var list = document.getElementById("faqList");
    if (!list) return;
    var html = faqs.map(function (f, i) {
      return (
        '<div class="faq-item">' +
          '<button type="button" class="faq-question" aria-expanded="false" aria-controls="faqAnswer' + i + '">' +
            '<span>' + f.q + '</span>' +
            '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>' +
          '</button>' +
          '<div class="faq-answer-wrap" id="faqAnswer' + i + '">' +
            '<div class="faq-answer-inner"><p>' + f.a + '</p></div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    list.innerHTML = html;

    var questions = list.querySelectorAll(".faq-question");
    questions.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wasOpen = btn.getAttribute("aria-expanded") === "true";
        questions.forEach(function (b) {
          b.setAttribute("aria-expanded", "false");
          document.getElementById(b.getAttribute("aria-controls")).classList.remove("open");
        });
        if (!wasOpen) {
          btn.setAttribute("aria-expanded", "true");
          document.getElementById(btn.getAttribute("aria-controls")).classList.add("open");
        }
      });
    });
  }

  function renderStats() {
    var grid = document.getElementById("statsGrid");
    if (!grid) return;
    var html = STATS_CONFIG.map(function (s) {
      return (
        '<div class="stat-card">' +
          '<div class="stat-icon"><i class="' + s.icon + '" aria-hidden="true"></i></div>' +
          '<div class="stat-value" data-target="' + s.value + '" data-suffix="' + s.suffix + '">0</div>' +
          '<div class="stat-label">' + s.label + '</div>' +
        '</div>'
      );
    }).join("");
    grid.innerHTML = html;
  }

  function animateStatValue(el, duration) {
    var target = parseInt(el.getAttribute("data-target"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = target.toLocaleString("en-US") + suffix;
      return;
    }

    // Tag each run so a stale requestAnimationFrame loop (from a previous
    // count-up that got interrupted by scrolling away) stops instead of
    // fighting the new one.
    var runId = (el._statRunId || 0) + 1;
    el._statRunId = runId;
    var start = null;
    function tick(now) {
      if (el._statRunId !== runId) return;
      if (start === null) start = now;
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target).toLocaleString("en-US") + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Counts up from 0 every time the section scrolls into view (not just
  // the first time), so revisiting the page/section replays it.
  function setupStatsAnimation() {
    var section = document.querySelector(".stats");
    if (!section) return;
    var values = section.querySelectorAll(".stat-value");

    function playAll() {
      values.forEach(function (el) {
        el.textContent = "0";
        animateStatValue(el, 1800);
      });
    }

    if (!("IntersectionObserver" in window)) {
      playAll();
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          playAll();
        }
      });
    }, { threshold: 0.35 });
    observer.observe(section);
  }

  function setupMobileMenu() {
    var toggle = document.getElementById("menuToggle");
    var icon = document.getElementById("menuIcon");
    var nav = document.getElementById("mobileNav");
    var header = document.querySelector(".site-header");
    if (!toggle || !icon || !nav) return;
    var open = false;

    // Pins the full-screen mobile menu right below the header regardless of
    // its actual rendered height, instead of trusting a guessed fallback.
    function syncHeaderHeight() {
      if (header) document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
    }
    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);

    function close() {
      open = false;
      nav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      icon.className = "fa-solid fa-bars";
      document.body.classList.remove("nav-open");
    }

    function toggleOpen() {
      open = !open;
      nav.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      icon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      document.body.classList.toggle("nav-open", open);
      if (open) syncHeaderHeight();
    }

    toggle.addEventListener("click", toggleOpen);
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && open) close();
    });

    document.addEventListener("click", function (e) {
      if (open && !nav.contains(e.target) && !toggle.contains(e.target)) close();
    });

    var mql = window.matchMedia("(min-width: 860px)");
    mql.addEventListener("change", function (e) {
      if (e.matches) close();
    });
  }

  function setupContactForm() {
    var form = document.getElementById("contactForm");
    var success = document.getElementById("contactSuccess");
    if (!form || !success) return;
    // Demo behavior only: shows a local success message. To connect a real
    // form service (e.g. Formspree, Netlify Forms), add the appropriate
    // action="..." method="POST" attributes to the <form> in contact.html
    // and swap this preventDefault handler for a real fetch/submit.
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.hidden = true;
      success.hidden = false;
    });
  }

  // The <html data-site-theme="..."> attribute is already set synchronously by
  // the inline script in <head> (before first paint, to avoid a flash of
  // the wrong theme). This just wires up the button to flip it and
  // remember the choice.
  function setupThemeToggle() {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    var root = document.documentElement;

    function updateLabel() {
      var isDark = root.getAttribute("data-site-theme") === "dark";
      btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
    updateLabel();

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-site-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-site-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      updateLabel();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderStats();
    renderGallery();
    renderHomeServices();
    renderServices();
    renderServiceOptions();
    renderFaq();
    setupMobileMenu();
    setupContactForm();
    setupStatsAnimation();
    setupLearnMorePage();
    setupThemeToggle();
  });
})();
