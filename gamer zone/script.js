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

/* ============================= */
/* ===== MAPOK ===== */
const maps = {
    Anubis: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=anubis"
    },

    Ancient: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=ancient"
    },

    Mirage: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=mirage"
    },

    Dust2: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=dust2"
    },

    Inferno: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=inferno"
    },

    Overpass: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=overpass"
    },

    Nuke: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=nuke"
    },

    Train: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=train"
    },

    Vertigo: {
        h3: "",
        p: "",
        img: "images/",
        utilityPage: "utility.html?map=vertigo"
    }
};


/* ============================= */
/* ===== SECTIONS ===== */
const sections = {
    Home: [
        { h3: "Fortnite", p: "Egy építkezős battle royale túlélőjáték.", link: "https://www.epicgames.com/fortnite", img: "images/FN.jpg" },
        { h3: "Counter-Strike 2", p: "Skill-based, körökre osztott kompetitív lövölde.", link: "https://www.counter-strike.net/cs2", img: "images/cs2.jpg" },
        { h3: "Call of Duty: Modern Warfare II", p: "Gyors tempójú modern katonai FPS.", link: "https://www.callofduty.com/", img: "images/CoD.jpg" },
        { h3: "Valorant", p: "Taktikai FPS egyedi képességekkel.", link: "https://playvalorant.com/en-gb/?utm_medium=card2%2Bplayvalorant.com&utm_source=riotbar", img: "images/valorant.jpg" }
    ],
    Játékok: [
        { h3: "Crosshair", p: "Letisztult crosshair ajánlások.", img: "images/crosshair.jpg" },
        { h3: "Spray control", p: "AK-47 és M4 recoil gyakorlás.", img: "images/spray.gif" }
    ],
    Beállítások: [
        { h3: "Grafika", p: "FPS-optimalizált CS2 beállítások.", img: "images/graphics.jpg" },
        { h3: "Egér", p: "eDPI, sensitivity és polling rate.", img: "images/mouse.jpg" }
    ]
};

/* ============================= */
/* ===== ESSENTIAL LISTÁK ===== */
const activePool = [
    maps.Anubis, maps.Ancient, maps.Mirage, maps.Dust2,
    maps.Inferno, maps.Overpass, maps.Nuke
];

const allMaps = [...activePool, maps.Train, maps.Vertigo];

/* ============================= */
/* ===== GRID STATE ===== */
function resetGrid() {
    grid.classList.remove("essential", "cols-3", "cols-4");
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

    // 1. utility oldalak (maps)
    if (item.utilityPage) {
        card.classList.add("clickable");
        card.addEventListener("click", () => {
            window.open(item.utilityPage, "_blank");
        });
    }

    // 2. videók
    else if (item.videos && item.videos.length) {
        card.classList.add("clickable");
        card.addEventListener("click", () => openVideoModal(item));
    }

    // 3. HOME / külső linkek
    else if (item.link) {
        card.classList.add("clickable");
        card.addEventListener("click", () => {
            window.open(item.link, "_blank");
        });
    }

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
            grid.classList.add("essential", "cols-3");
            layoutSwitch.style.display = "flex";
            layoutButtons[0].classList.add("active");
            layoutButtons[1].classList.remove("active");
            renderCards(activePool);
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
        if (!grid.classList.contains("essential")) return;

        layoutButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        resetGrid();
        grid.classList.add("essential", `cols-${btn.dataset.cols}`);

        renderCards(btn.dataset.cols === "4" ? allMaps : activePool);
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

    
    Object.values(maps).forEach(item => {
        if (
            item.h3.toLowerCase().includes(query) ||
            item.p.toLowerCase().includes(query)
        ) {
            results.push(item);
        }
    });

    
    title.textContent = "Keresési találatok";
    desc.textContent = `"${query}" keresés eredményei`;

    renderCards(results);
});

