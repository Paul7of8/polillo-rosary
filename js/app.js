(function () {
  const SET_ORDER = ["joyful", "luminous", "sorrowful", "glorious"];
  const ORDINALS = ["First", "Second", "Third", "Fourth", "Fifth"];
  const SCREEN_COUNT = 7; // opening, five decades, closing
  const SLIDE_MS = 40000;
  const STATE_KEY = "rosary-state";
  const THEME_KEY = "rosary-theme";

  const screenEl = document.getElementById("screen");
  const titleEl = document.getElementById("topbar-title");
  const dotsEl = document.getElementById("dots");
  const backEl = document.getElementById("back");
  const nextEl = document.getElementById("next");
  const settingsEl = document.getElementById("settings");

  let state;
  let slideTimer = null;

  // ---------- state ----------

  function dateKey(date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-");
  }

  // Position, override and the Scripture setting last for the day only.
  function loadState() {
    const today = dateKey(new Date());
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(STATE_KEY));
    } catch (e) {}
    state = saved && saved.date === today ? saved : { date: today, screen: 0, override: null };
  }

  function saveState() {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function todaysSet() {
    return RosaryCalendar.mysteriesFor(new Date());
  }

  function currentSet() {
    return state.override || todaysSet();
  }

  // ---------- html helpers ----------

  function esc(text) {
    return String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function paragraphs(text, placeholder) {
    const trimmed = (text || "").trim();
    if (!trimmed) return `<p class="placeholder">[${esc(placeholder)}]</p>`;
    return trimmed
      .split(/\n\s*\n/)
      .map((p) => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`)
      .join("");
  }

  function prayerBody(key) {
    const prayer = PRAYERS[key];
    return paragraphs(prayer.text, `${prayer.title} — text to be supplied`);
  }

  // A prayer written out in full.
  function shown(key) {
    return `<section class="prayer"><h2>${esc(PRAYERS[key].title)}</h2>${prayerBody(key)}</section>`;
  }

  // A prayer listed by name; tap to read it.
  function folded(key, title, note) {
    return `<details class="prayer folded">
      <summary><span>${esc(title || PRAYERS[key].title)}</span>${note ? `<span class="note">${esc(note)}</span>` : ""}</summary>
      ${prayerBody(key)}
    </details>`;
  }

  function head(eyebrow, title) {
    return `<header class="screen-head"><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(title)}</h1></header>`;
  }

  // ---------- screens ----------

  function openingScreen(set) {
    return (
      head(`${set.name} Mysteries`, "Opening") +
      folded("signOfTheCross") +
      shown("apostlesCreed") +
      folded("ourFather") +
      folded("hailMary", "Three Hail Marys", "for faith, hope, and charity") +
      folded("gloryBe") +
      folded("fatimaPrayer") +
      `<section class="prayer"><h2>Intention</h2><p>State the intention for which you offer this Rosary.</p></section>`
    );
  }

  function closingScreen(set) {
    const v = PRAYERS.versicle;
    return (
      head(`${set.name} Mysteries`, "Closing") +
      shown("hailHolyQueen") +
      `<section class="prayer versicle">
        <p><span class="vr">V.</span> ${esc(v.versicle)}</p>
        <p><span class="vr">R.</span> ${esc(v.response)}</p>
      </section>` +
      shown("letUsPray") +
      shown("stMichael") +
      folded("signOfTheCross")
    );
  }

  function decadeScreen(setKey, set, index) {
    const mystery = set.mysteries[index];
    const images = IMAGES[`${setKey}-${index + 1}`] || [];
    // Each painting is shown whole over a blurred copy of itself. Wide
    // paintings sit a little above centre, clear of the overlay text.
    const start = Math.floor(Math.random() * images.length);
    const slides = images.length
      ? images
          .map((img, i) => {
            const wide = img.width > img.height;
            return `<figure class="slide${wide ? " wide" : ""}">
              <div class="backdrop" style="background-image:url('${esc(img.file)}')"></div>
              <img src="${esc(img.file)}" alt="${esc(img.title)}" width="${img.width}" height="${img.height}" loading="${i === start ? "eager" : "lazy"}">
            </figure>`;
          })
          .join("")
      : `<div class="slide"></div>`;
    const slideDots =
      images.length > 1 ? `<ol class="slide-dots" id="slide-dots">${images.map(() => "<li></li>").join("")}</ol>` : "";
    const scripture = mystery.scripture;

    return (
      head(`The ${ORDINALS[index]} ${set.name} Mystery`, mystery.title) +
      `<div class="card${state.scripture ? " show-scripture" : ""}" id="card">
        <div class="card-inner">
          <div class="card-face card-front">
            <div class="slides" id="slides" data-start="${start}">${slides}</div>
            ${slideDots}
            <div class="card-actions">
              <button class="card-action" id="scripture-toggle" type="button" aria-pressed="${!!state.scripture}">Scripture</button>
              <button class="card-action" type="button">Prayers</button>
            </div>
            <div class="overlay">
              <p class="fruit"><span class="fruit-label">Fruit of the mystery</span>${esc(mystery.fruit)}</p>
              <blockquote class="scripture">
                ${paragraphs(scripture.text, `Scripture text to be supplied — ${scripture.ref}`)}
                <cite>${esc(scripture.ref)}</cite>
              </blockquote>
              <p class="credit" id="credit"></p>
            </div>
          </div>
          <div class="card-face card-back">
            ${shown("ourFather")}
            <section class="prayer"><h2>Hail Mary <span class="note">ten times</span></h2>${prayerBody("hailMary")}</section>
            ${shown("gloryBe")}
            ${shown("fatimaPrayer")}
            <p class="flip-back">Tap to return</p>
          </div>
        </div>
      </div>`
    );
  }

  // ---------- slideshow ----------

  function startSlides(images) {
    const card = document.getElementById("card");
    const slides = document.getElementById("slides");
    const credit = document.getElementById("credit");
    const dots = document.getElementById("slide-dots");
    let current = -1;

    function showCredit() {
      const i = Math.round(slides.scrollLeft / slides.clientWidth) || 0;
      if (i === current) return;
      current = i;
      const img = images[i];
      credit.textContent = img ? [img.artist, img.title, img.date].filter(Boolean).join(", ") : "";
      if (dots) Array.from(dots.children).forEach((dot, n) => dot.classList.toggle("current", n === i));
    }

    // Scripture stays hidden until asked for, then stays on for the day's
    // remaining mysteries; a tap anywhere else flips to the prayers.
    const scriptureToggle = document.getElementById("scripture-toggle");
    scriptureToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      state.scripture = card.classList.toggle("show-scripture");
      scriptureToggle.setAttribute("aria-pressed", state.scripture);
      saveState();
    });
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    // Begin at a random painting so each gets seen over time.
    slides.scrollLeft = Number(slides.dataset.start) * slides.clientWidth;
    slides.addEventListener("scroll", showCredit, { passive: true });
    showCredit();

    if (images.length > 1) {
      slideTimer = setInterval(() => {
        if (document.hidden || card.classList.contains("flipped")) return;
        const next = (current + 1) % images.length;
        slides.scrollTo({ left: next * slides.clientWidth, behavior: "smooth" });
      }, SLIDE_MS);
    }
  }

  // ---------- render ----------

  function render() {
    clearInterval(slideTimer);
    const setKey = currentSet();
    const set = MYSTERIES[setKey];
    const i = state.screen;
    const isDecade = i >= 1 && i <= 5;

    if (i === 0) screenEl.innerHTML = openingScreen(set);
    else if (isDecade) screenEl.innerHTML = decadeScreen(setKey, set, i - 1);
    else screenEl.innerHTML = closingScreen(set);

    screenEl.classList.toggle("decade", isDecade);
    screenEl.scrollTop = 0;
    if (isDecade) startSlides(IMAGES[`${setKey}-${i}`] || []);

    const weekday = new Date().toLocaleDateString(undefined, { weekday: "long" });
    titleEl.textContent = `${weekday} · ${set.name} Mysteries`;

    dotsEl.innerHTML = Array.from(
      { length: SCREEN_COUNT },
      (_, n) => `<li class="${n === i ? "current" : n < i ? "done" : ""}"></li>`
    ).join("");
    backEl.hidden = i === 0;
    nextEl.hidden = i === SCREEN_COUNT - 1;
  }

  function go(screen) {
    state.screen = Math.max(0, Math.min(SCREEN_COUNT - 1, screen));
    saveState();
    render();
  }

  // ---------- settings ----------

  function choice(group, value, label, checked) {
    return `<label class="choice"><input type="radio" name="${group}" value="${value}"${checked ? " checked" : ""}><span>${esc(label)}</span></label>`;
  }

  function renderSettings() {
    const today = MYSTERIES[todaysSet()].name;
    document.getElementById("mystery-choices").innerHTML =
      choice("mysteries", "", `Today’s (${today})`, !state.override) +
      SET_ORDER.map((key) => choice("mysteries", key, MYSTERIES[key].name, state.override === key)).join("");

    let theme = "auto";
    try {
      theme = localStorage.getItem(THEME_KEY) || "auto";
    } catch (e) {}
    document.getElementById("theme-choices").innerHTML = ["auto", "light", "dark"]
      .map((t) => choice("theme", t, t[0].toUpperCase() + t.slice(1), t === theme))
      .join("");
  }

  function setTheme(theme) {
    if (theme === "auto") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
  }

  settingsEl.addEventListener("change", (event) => {
    if (event.target.name === "mysteries") {
      state.override = event.target.value || null;
      saveState();
      render();
    } else if (event.target.name === "theme") {
      setTheme(event.target.value);
    }
  });

  // Tapping the dimmed area outside the sheet closes it.
  settingsEl.addEventListener("click", (event) => {
    if (event.target === settingsEl) settingsEl.close();
  });

  document.getElementById("settings-open").addEventListener("click", () => {
    renderSettings();
    settingsEl.showModal();
  });

  document.getElementById("restart").addEventListener("click", () => {
    settingsEl.close();
    go(0);
  });

  backEl.addEventListener("click", () => go(state.screen - 1));
  nextEl.addEventListener("click", () => go(state.screen + 1));

  // ---------- keep the screen awake ----------

  let wakeLock = null;

  async function keepAwake() {
    if (!("wakeLock" in navigator) || wakeLock || document.hidden) return;
    try {
      wakeLock = await navigator.wakeLock.request("screen");
      wakeLock.addEventListener("release", () => (wakeLock = null));
    } catch (e) {}
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    keepAwake();
    // Left open overnight: start the new day's mysteries.
    if (dateKey(new Date()) !== state.date) {
      loadState();
      render();
    }
  });
  document.addEventListener("pointerdown", keepAwake);

  // ---------- offline copy ----------

  // sw.js stores the site on the device. Not registered on a development
  // server unless the address has ?sw, so local edits show up straight away.
  const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
  if ("serviceWorker" in navigator && (!isLocal || location.search.includes("sw"))) {
    const hadWorker = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register("sw.js").then((registration) => {
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) registration.update().catch(() => {});
      });
    });
    // A new version has taken over: switch to it now, unless a Rosary is under way.
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (hadWorker && state.screen === 0) location.reload();
    });
  }

  loadState();
  render();
  keepAwake();
})();
