/* ============================= */
/* ===== ELEMENTEK ===== */
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");
const title = document.getElementById("brandTitle");
const desc = document.getElementById("brandDesc");
const grid = document.getElementById("grid");
const homeBtn = document.getElementById("homeBtn");
const themeToggle = document.getElementById("themeToggle");
const layoutButtons = document.querySelectorAll(".layout-switch button");
const layoutSwitch = document.querySelector(".layout-switch");
const searchInput = document.getElementById("searchInput");




/* ============================= */
/* ===== SECTIONS ===== */

const videoItems = [
    { h3: "CS2 – Pro tippek", p: "Top taktikák profi játékosoktól.", videos: ["https://www.youtube.com/embed/VUIpmgQYOS0?si=Y9l-WbrVhvcS0Ozi"], img: "images/cs2.jpg" },
    { h3: "Valorant – Aim guide", p: "Célzástechnika és crosshair beállítás.", videos: ["https://www.youtube.com/embed/BBX-8MzmLsk?si=sVfnd7c9kYCqZ-F2"], img: "images/valorant.jpg" },
    { h3: "Fortnite – Building", p: "Gyors építési technikák kezdőknek.", videos: ["https://www.youtube.com/embed/JxEwFG3ATJU?si=I66XNm91oTVEoTds"], img: "images/FN.jpg" }
];

const streamItems = [
    { h3: "s1mple", p: "NaVi legendás AWP-ese.", link: "https://www.twitch.tv/s1mple", img: "images/cs2.jpg" },
    { h3: "shroud", p: "Volt CS-pro, most full-time streamer.", link: "https://www.twitch.tv/shroud", img: "images/cs2.jpg" },
    { h3: "Ninja", p: "Fortnite ikon, Twitch sztár.", link: "https://www.twitch.tv/ninja", img: "images/FN.jpg" }
];

const sections = {
    Home: [
        { h3: "Fortnite", p: "Egy építkezős battle royale túlélőjáték.", link: "https://www.epicgames.com/fortnite", img: "images/FN.jpg" },
        { h3: "Counter-Strike 2", p: "Skill-based, körökre osztott kompetitív lövölde.", link: "https://www.counter-strike.net/cs2", img: "images/cs2.jpg" },
        { h3: "Call of Duty: Modern Warfare II", p: "Gyors tempójú modern katonai FPS.", link: "https://www.callofduty.com/", img: "images/CoD.jpg" },
        { h3: "Valorant", p: "Taktikai FPS egyedi képességekkel.", link: "https://playvalorant.com/en-gb/?utm_medium=card2%2Bplayvalorant.com&utm_source=riotbar", img: "images/valorant.jpg" }
    ],
    Beállítások: [
        { h3: "Grafika", p: "FPS-optimalizált CS2 beállítások.", img: "images/graphics.jpg", link: "https://prosettings.net/guides/cs2-options/", },
        { h3: "Egér", p: "Prémium gaming egerek a gyorsabb reakciókért.", img: "images/mouse.jpg", link: "https://prosettings.net/guides/cs2-mouse/", }
    ],
    "Videók, streamek": [...streamItems, ...videoItems]
};



/* ============================= */
/* ===== GRID STATE ===== */
function resetGrid() {
    grid.classList.remove("essential", "cols-2", "cols-3", "cols-4");
}

function setDefaultGrid() {
    resetGrid();
    grid.classList.add("cols-2");
}

/* ============================= */
/* ===== CARD ===== */
function createCard(item) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-image" style="background-image:url('${item.img}')">
            <div class="card-overlay">
                <h3>${item.h3}</h3>
                <p>${item.p}</p>
            </div>
        </div>
    `;

    // 1. videók
    if (item.videos && item.videos.length) {
        card.classList.add("clickable");
        card.addEventListener("click", () => openVideoModal(item));
    }

    // 2. HOME / külső linkek
    else if (item.link) {
        card.classList.add("clickable");
        card.addEventListener("click", () => {
            window.open(item.link, "_blank");
        });
    }


document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeVideoModal();
    }
});

    return card;
}

/* ============================= */
/* ===== RENDER ===== */
function renderCards(list) {
    grid.innerHTML = "";

    if (grid.classList.contains("essential")) {
        const top = document.createElement("div");
        const bottom = document.createElement("div");

        top.className = "grid-row";
        bottom.className = "grid-row";

        const split = grid.classList.contains("cols-4") ? 5 : 4;

        list.slice(0, split).forEach(i => top.appendChild(createCard(i)));
        list.slice(split).forEach(i => bottom.appendChild(createCard(i)));

        grid.append(top, bottom);
        return;
    }

    list.forEach(i => grid.appendChild(createCard(i)));
}

/* ============================= */
/* ===== INIT ===== */
setDefaultGrid();
renderCards(sections.Home);

/* ============================= */
/* ===== MENU ===== */
menuBtn.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    menuBtn.classList.toggle("active");
});

dropdown.querySelectorAll("div").forEach(item => {
    item.addEventListener("click", () => {
        // External page navigation
        if (item.dataset.page) {
            window.location.href = item.dataset.page;
            return;
        }

        const section = item.dataset.section;

        title.textContent = section;
        desc.textContent =
            section === "Home"
                ? "Gamer Zone"
                : " " + section;

        dropdown.style.display = "none";
        menuBtn.classList.remove("active");
        layoutSwitch.style.display = "none";

        if (section === "Videók, streamek") {
            resetGrid();
            grid.classList.add("cols-3");
            layoutSwitch.style.display = "flex";
            layoutButtons[0].classList.add("active");
            layoutButtons[1].classList.remove("active");
            renderCards(streamItems);
            return;
        }

        setDefaultGrid();
        renderCards(sections[section]);
    });
});

/* ============================= */
/* ===== HOME ===== */
homeBtn.addEventListener("click", () => {
    title.textContent = "Gamer Zone";
    desc.textContent = "Játékok, videók, streamek";
    layoutSwitch.style.display = "none";
    setDefaultGrid();
    renderCards(sections.Home);
});

/* ============================= */
/* ===== LAYOUT SWITCH ===== */
layoutButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (layoutSwitch.style.display === "none") return;

        layoutButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        resetGrid();
        grid.classList.add("cols-3");

        // data-cols="3" → csak streamek, data-cols="4" → streamek + videók
        renderCards(btn.dataset.cols === "4" ? [...streamItems, ...videoItems] : streamItems);
    });
});

/* ============================= */
/* ===== DARK MODE ===== */
function updateThemeIcon() {
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    updateThemeIcon();
});

const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");

function openVideoModal(map) {
    videoFrame.src = map.videos[0]; // később lehet lista
    videoModal.classList.add("active");
}

closeVideo.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", e => {
    if (e.target === videoModal) closeVideoModal();
});

function closeVideoModal() {
    videoModal.classList.remove("active");
    videoFrame.src = "";
}

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    // ha üres → vissza Home
    if (!query) {
        title.textContent = "Gamer Zone";
        desc.textContent = "Játékok, videók, streamek";
        renderCards(sections.Home);
        return;
    }

    let results = [];

    // keresés minden section-ben
    Object.values(sections).forEach(section => {
        section.forEach(item => {
            if (
                item.h3.toLowerCase().includes(query) ||
                item.p.toLowerCase().includes(query)
            ) {
                results.push(item);
            }
        });
    });

    title.textContent = "Keresési találatok";
    desc.textContent = `"${query}" keresés eredményei`;

    renderCards(results);
});

/* ============================= */
/* ===== COOKIE MODAL ===== */
/* ============================= */

const cookieModal = document.getElementById("cookieModal");
const cookieAcceptAll = document.getElementById("cookieAcceptAll");
const cookieAcceptNecessary = document.getElementById("cookieAcceptNecessary");

function closeCookieModal() {
    cookieModal.classList.add("hidden");
    document.body.style.overflow = "";
}

// Ha még nem döntött → modal megjelenítése
if (!localStorage.getItem("cookieConsent")) {
    document.body.style.overflow = "hidden";
} else {
    cookieModal.classList.add("hidden");
}

cookieAcceptAll.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "all");
    closeCookieModal();
});

cookieAcceptNecessary.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    closeCookieModal();
});

/* ============================= */
/* ===== FELIRATKOZÁS ===== */
/* ============================= */

const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeInput = document.getElementById("subscribeInput");

// Toast elem létrehozása
const toast = document.createElement("div");
toast.className = "subscribe-toast";
document.body.appendChild(toast);

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

function handleSubscribe() {
    const email = subscribeInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        showToast("⚠️ Kérjük add meg az email címed!");
        return;
    }

    if (!emailRegex.test(email)) {
        showToast("⚠️ Érvénytelen email cím!");
        return;
    }

    showToast("✅ Sikeresen feliratkoztál!");
    subscribeInput.value = "";
}

subscribeBtn.addEventListener("click", handleSubscribe);

subscribeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSubscribe();
});

