/* ============================= */
/* ===== LAN PARTY SCRIPT ===== */
/* ============================= */

/* ===== EVENTS DATA ===== */
const events = [
    {
        id: 1,
        status: "open",
        title: "Gamer Zone CS2 Open",
        game: "Counter-Strike 2",
        emoji: "🎯",
        bannerGrad: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        date: "2026. július 12.",
        location: "Budapest, Lurdy Ház",
        format: "5v5 csapat",
        slots: 32, filled: 22,
        prize: "120 000 Ft",
        fee: "Ingyenes",
        desc: "Nyílt CS2 bajnokság kezdőktől haladókig. Bring your own gear, hálózat és számítógépek biztosítva.",
        details: {
            "Helyszín": "Budapest, Lurdy Ház",
            "Dátum": "2026. július 12.",
            "Kezdés": "10:00",
            "Formátum": "5v5 csapat",
            "Díjazás": "120 000 Ft",
            "Nevezési díj": "Ingyenes"
        }
    },
    {
        id: 2,
        status: "open",
        title: "Valorant Clash Cup",
        game: "Valorant",
        emoji: "⚡",
        bannerGrad: "linear-gradient(135deg, #1a0030, #3a0070, #6a0dad)",
        date: "2026. július 19.",
        location: "Győr, Audi Aréna",
        format: "5v5 csapat",
        slots: 16, filled: 9,
        prize: "80 000 Ft",
        fee: "500 Ft/fő",
        desc: "Kompetitív Valorant torna, profi referee-kkel és stream kommentátorral.",
        details: {
            "Helyszín": "Győr, Audi Aréna",
            "Dátum": "2026. július 19.",
            "Kezdés": "11:00",
            "Formátum": "5v5 csapat",
            "Díjazás": "80 000 Ft",
            "Nevezési díj": "500 Ft/fő"
        }
    },
    {
        id: 3,
        status: "upcoming",
        title: "Fortnite Solo Cup",
        game: "Fortnite",
        emoji: "🏗️",
        bannerGrad: "linear-gradient(135deg, #003040, #005080, #0080c0)",
        date: "2026. augusztus 2.",
        location: "Debrecen, DVSC Aréna",
        format: "Solo – 100 játékos",
        slots: 100, filled: 34,
        prize: "150 000 Ft",
        fee: "1 000 Ft",
        desc: "Battle Royale a javából — egyéni verseny, ahol csak egy győztes lehet.",
        details: {
            "Helyszín": "Debrecen, DVSC Aréna",
            "Dátum": "2026. augusztus 2.",
            "Kezdés": "09:00",
            "Formátum": "Solo – 100 játékos",
            "Díjazás": "150 000 Ft",
            "Nevezési díj": "1 000 Ft"
        }
    },
    {
        id: 4,
        status: "upcoming",
        title: "Rocket League 3v3",
        game: "Rocket League",
        emoji: "🚀",
        bannerGrad: "linear-gradient(135deg, #1a0a00, #4a1800, #8b3a00)",
        date: "2026. augusztus 16.",
        location: "Pécs, PMFC Stadion",
        format: "3v3 csapat",
        slots: 24, filled: 6,
        prize: "60 000 Ft",
        fee: "800 Ft/fő",
        desc: "A fizika alapú autós futball legjobb hazai csapatai mérkőznek meg egymással.",
        details: {
            "Helyszín": "Pécs, PMFC Stadion",
            "Dátum": "2026. augusztus 16.",
            "Kezdés": "12:00",
            "Formátum": "3v3 csapat",
            "Díjazás": "60 000 Ft",
            "Nevezési díj": "800 Ft/fő"
        }
    },
    {
        id: 5,
        status: "upcoming",
        title: "Gamer Zone Grand LAN",
        game: "Multi-game",
        emoji: "🏆",
        bannerGrad: "linear-gradient(135deg, #1a1400, #3a2800, #7a5000)",
        date: "2026. szeptember 6–7.",
        location: "Budapest, BOK Csarnok",
        format: "Több kategória",
        slots: 400, filled: 87,
        prize: "500 000 Ft",
        fee: "2 500 Ft",
        desc: "Az év legnagyobb hazai LAN eseménye: CS2, Valorant, Fortnite, LoL és még több!",
        details: {
            "Helyszín": "Budapest, BOK Csarnok",
            "Dátum": "2026. szeptember 6–7.",
            "Kezdés": "09:00 (2 napos)",
            "Formátum": "Több kategória",
            "Díjazás": "500 000 Ft",
            "Nevezési díj": "2 500 Ft"
        }
    },
    {
        id: 6,
        status: "past",
        title: "Spring Clash 2026",
        game: "Counter-Strike 2",
        emoji: "🌸",
        bannerGrad: "linear-gradient(135deg, #1a001a, #2a002a, #3a003a)",
        date: "2026. április 5.",
        location: "Budapest, Lurdy Ház",
        format: "5v5 csapat",
        slots: 32, filled: 32,
        prize: "100 000 Ft",
        fee: "Ingyenes",
        desc: "A tavaszi szezon nyitóeseménye. Győztes: FuriousGG, 2. hely: NightCore.",
        details: {
            "Helyszín": "Budapest, Lurdy Ház",
            "Dátum": "2026. április 5.",
            "Kezdés": "10:00",
            "Formátum": "5v5 csapat",
            "Díjazás": "100 000 Ft",
            "Győztes": "FuriousGG"
        }
    },
    {
        id: 7,
        status: "past",
        title: "New Year Frag Fest",
        game: "Valorant + CS2",
        emoji: "🎆",
        bannerGrad: "linear-gradient(135deg, #000820, #001040, #002080)",
        date: "2026. január 18.",
        location: "Miskolc, Városi Sportcsarnok",
        format: "Mix kategóriák",
        slots: 64, filled: 64,
        prize: "120 000 Ft",
        fee: "500 Ft/fő",
        desc: "Az év első LAN-ja rekordlátogatottsággal. Összesen 64 nevezett, telt ház.",
        details: {
            "Helyszín": "Miskolc, Városi Sportcsarnok",
            "Dátum": "2026. január 18.",
            "Formátum": "Mix kategóriák",
            "Díjazás": "120 000 Ft",
            "Győztes (CS2)": "Team Phantom",
            "Győztes (VAL)": "EchoFive"
        }
    },
    {
        id: 8,
        status: "past",
        title: "GZ Winter Cup 2025",
        game: "Multi-game",
        emoji: "❄️",
        bannerGrad: "linear-gradient(135deg, #001520, #002535, #003550)",
        date: "2025. december 14.",
        location: "Budapest, Lurdy Ház",
        format: "Több kategória",
        slots: 120, filled: 120,
        prize: "200 000 Ft",
        fee: "1 500 Ft",
        desc: "A 2025-ös szezon záróeseménye, 120 résztvevővel és rekord díjalappal.",
        details: {
            "Helyszín": "Budapest, Lurdy Ház",
            "Dátum": "2025. december 14.",
            "Formátum": "Több kategória",
            "Díjazás": "200 000 Ft",
            "Résztvevők": "120 fő (telt ház)"
        }
    }
];

/* ===== STATE ===== */
let currentFilter = "all";

/* ===== ELEMENTS ===== */
const lanGrid = document.getElementById("lanGrid");
const regModal = document.getElementById("regModal");
const regModalBackdrop = document.getElementById("regModalBackdrop");
const closeRegModalBtn = document.getElementById("closeRegModal");
const regModalContent = document.getElementById("regModalContent");
const lanToast = document.getElementById("lanToast");

/* ===== HELPERS ===== */
function showToast(msg) {
    lanToast.textContent = msg;
    lanToast.classList.add("show");
    setTimeout(() => lanToast.classList.remove("show"), 3000);
}

function slotColor(filled, total) {
    const pct = filled / total;
    if (pct >= 0.9) return "red";
    if (pct >= 0.6) return "yellow";
    return "green";
}

function slotPct(filled, total) {
    return Math.round((filled / total) * 100);
}

function statusLabel(s) {
    if (s === "open")     return { text: "Nyitott", cls: "open" };
    if (s === "upcoming") return { text: "Közelgő", cls: "upcoming" };
    return { text: "Lezárt", cls: "past" };
}

/* ===== RENDER EVENTS ===== */
function renderEvents(filter, searchQuery) {
    lanGrid.innerHTML = "";
    let list = filter === "all" ? events : events.filter(e => e.status === filter);

    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(ev =>
            ev.title.toLowerCase().includes(q) ||
            ev.game.toLowerCase().includes(q) ||
            ev.location.toLowerCase().includes(q) ||
            ev.desc.toLowerCase().includes(q)
        );
    }

    if (!list.length) {
        const msg = searchQuery
            ? `Nincs találat: "${searchQuery}"`
            : "Nincs esemény ebben a kategóriában.";
        lanGrid.innerHTML = `<div class="lan-empty"><span class="lan-empty-icon">${searchQuery ? "🔍" : "📭"}</span><p>${msg}</p></div>`;
        return;
    }

    list.forEach(ev => {
        const badge = statusLabel(ev.status);
        const pct = slotPct(ev.filled, ev.slots);
        const color = slotColor(ev.filled, ev.slots);
        const isOpen = ev.status === "open" || ev.status === "upcoming";

        const card = document.createElement("div");
        card.className = `event-card status-${ev.status}`;
        card.innerHTML = `
            <div class="event-banner">
                <div class="event-banner-bg" style="background:${ev.bannerGrad}"></div>
                <span class="event-banner-emoji">${ev.emoji}</span>
                <span class="event-status-badge ${badge.cls}">${badge.text}</span>
            </div>
            <div class="event-body">
                <div class="event-meta">
                    <span class="event-meta-tag">🎮 ${ev.game}</span>
                </div>
                <div class="event-title">${ev.title}</div>
                <div class="event-desc">${ev.desc}</div>
                <div class="event-info-row">
                    <span class="event-pill">📅 ${ev.date}</span>
                    <span class="event-pill">📍 ${ev.location.split(",")[0]}</span>
                    <span class="event-pill">👥 ${ev.format}</span>
                </div>
                ${ev.status !== "past" ? `
                <div class="event-slots-wrap">
                    <div class="event-slots-label">
                        <span>Helyek</span>
                        <span>${ev.filled} / ${ev.slots}</span>
                    </div>
                    <div class="event-slots-bar">
                        <div class="event-slots-fill ${color}" style="width:${pct}%"></div>
                    </div>
                </div>` : ""}
                <div class="event-footer-row">
                    <div class="event-prize">
                        <span class="event-prize-label">Díjalap</span>
                        <span class="event-prize-amount">${ev.prize}</span>
                    </div>
                    <button class="event-reg-btn ${isOpen ? "open" : "past"}" data-id="${ev.id}">
                        ${ev.status === "past" ? "Lezárt" : ev.status === "upcoming" ? "Érdeklődés" : "Jelentkezés"}
                    </button>
                </div>
            </div>
        `;

        // click anywhere → modal
        card.addEventListener("click", (e) => {
            if (!e.target.classList.contains("event-reg-btn")) {
                openRegModal(ev);
            }
        });

        // reg button
        card.querySelector(".event-reg-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            if (ev.status === "past") return;
            openRegModal(ev);
        });

        lanGrid.appendChild(card);
    });
}

/* ===== REGISTRATION MODAL ===== */
function openRegModal(ev) {
    const badge = statusLabel(ev.status);
    const isPast = ev.status === "past";

    const detailsHtml = Object.entries(ev.details).map(([k, v]) =>
        `<div class="reg-info-item"><span class="reg-info-key">${k}</span><span class="reg-info-val">${v}</span></div>`
    ).join("");

    regModalContent.innerHTML = `
        <div class="reg-event-banner">
            <div class="event-banner-bg" style="background:${ev.bannerGrad}"></div>
            <span class="event-banner-emoji" style="position:relative;z-index:1;font-size:60px">${ev.emoji}</span>
        </div>
        <div class="reg-event-title">${ev.title}</div>
        <div class="reg-event-date">📅 ${ev.date} &nbsp;·&nbsp; 📍 ${ev.location}</div>

        <div class="reg-info-grid">${detailsHtml}</div>

        ${!isPast ? `
        <div class="reg-form" id="regForm">
            <div class="reg-form-row">
                <label>Játékosnév / Csapatnév</label>
                <input type="text" id="regName" placeholder="pl. NightCore">
            </div>
            <div class="reg-form-row">
                <label>Email cím</label>
                <input type="email" id="regEmail" placeholder="pelda@email.com">
            </div>
            <div class="reg-form-row">
                <label>Játékos szint</label>
                <select id="regLevel">
                    <option value="">Válassz...</option>
                    <option value="beginner">Kezdő</option>
                    <option value="intermediate">Középhaladó</option>
                    <option value="advanced">Haladó / Kompetitív</option>
                    <option value="pro">Pro</option>
                </select>
            </div>
            <button class="reg-submit-btn" id="regSubmitBtn">
                ${ev.status === "upcoming" ? "Érdeklődés beküldése →" : "Jelentkezés beküldése →"}
            </button>
        </div>` : `
        <div style="text-align:center;padding:24px 0;color:#aaa;font-size:15px;font-weight:600;">
            Ez az esemény már lezárult. Köszönjük a részvételt!
        </div>`}
    `;

    if (!isPast) {
        document.getElementById("regSubmitBtn").addEventListener("click", () => {
            const name  = document.getElementById("regName").value.trim();
            const email = document.getElementById("regEmail").value.trim();
            const level = document.getElementById("regLevel").value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name)  { showToast("⚠️ Add meg a játékosnevet!"); return; }
            if (!email || !emailRegex.test(email)) { showToast("⚠️ Érvényes email cím szükséges!"); return; }
            if (!level) { showToast("⚠️ Válassz szintet!"); return; }

            showToast(`✅ Sikeresen jelentkeztél: ${ev.title}!`);
            closeRegModal();
        });
    }

    regModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeRegModal() {
    regModal.classList.remove("active");
    document.body.style.overflow = "";
}

closeRegModalBtn.addEventListener("click", closeRegModal);
regModalBackdrop.addEventListener("click", closeRegModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeRegModal(); });

/* ===== FILTER BUTTONS ===== */
document.querySelectorAll(".lan-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".lan-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        if (searchInput) searchInput.value = "";
        renderEvents(currentFilter);
    });
});

/* ===== SEARCH ===== */
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        renderEvents(currentFilter, query || null);
    });
}

/* ===== NAVIGATION ===== */
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");
const homeBtn = document.getElementById("homeBtn");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        menuBtn.classList.toggle("active");
    });
}

if (dropdown) {
    dropdown.querySelectorAll("div[data-page]").forEach(item => {
        item.addEventListener("click", () => { window.location.href = item.dataset.page; });
    });
}

if (homeBtn) {
    homeBtn.addEventListener("click", () => { window.location.href = "index.html"; });
}

/* ===== DARK MODE ===== */
const themeToggle = document.getElementById("themeToggle");

function updateThemeIcon() {
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateThemeIcon();
});

/* ===== COOKIE MODAL ===== */
const cookieModal = document.getElementById("cookieModal");
const cookieAcceptAll = document.getElementById("cookieAcceptAll");
const cookieAcceptNecessary = document.getElementById("cookieAcceptNecessary");

function closeCookieModal() {
    cookieModal.classList.add("hidden");
    document.body.style.overflow = "";
}

if (!localStorage.getItem("cookieConsent")) {
    document.body.style.overflow = "hidden";
} else {
    cookieModal.classList.add("hidden");
}

cookieAcceptAll.addEventListener("click", () => { localStorage.setItem("cookieConsent", "all"); closeCookieModal(); });
cookieAcceptNecessary.addEventListener("click", () => { localStorage.setItem("cookieConsent", "necessary"); closeCookieModal(); });

/* ===== SUBSCRIBE ===== */
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeInput = document.getElementById("subscribeInput");

if (subscribeBtn && subscribeInput) {
    const subToast = document.createElement("div");
    subToast.className = "subscribe-toast";
    document.body.appendChild(subToast);

    function showSubToast(msg) {
        subToast.textContent = msg;
        subToast.classList.add("show");
        setTimeout(() => subToast.classList.remove("show"), 3000);
    }

    function handleSubscribe() {
        const email = subscribeInput.value.trim();
        if (!email) { showSubToast("⚠️ Kérjük add meg az email címed!"); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showSubToast("⚠️ Érvénytelen email cím!"); return; }
        showSubToast("✅ Sikeresen feliratkoztál!");
        subscribeInput.value = "";
    }

    subscribeBtn.addEventListener("click", handleSubscribe);
    subscribeInput.addEventListener("keydown", e => { if (e.key === "Enter") handleSubscribe(); });
}

/* ===== INIT ===== */
renderEvents("all");
