/* ============================= */
/* ===== WEBSHOP SCRIPT ===== */
/* ============================= */

/* ===== PRODUCTS ===== */
const products = [
    {
        id: 1, cat: "mouse",
        name: "Razer DeathAdder V3",
        desc: "Ultrakönnyű ergonomikus FPS egér, 30K DPI optikai szenzorral.",
        price: 34990, oldPrice: 42990,
        emoji: "🖱️", badge: "sale",
        specs: { "DPI": "100–30.000", "Súly": "59g", "Kapcsolók": "Optikai", "Kábel": "Speedflex 1.8m" }
    },
    {
        id: 2, cat: "mouse",
        name: "Logitech G Pro X Superlight 2",
        desc: "Pro gaming egér, csupán 60g súllyal. A profi bajnokok választása.",
        price: 49990, oldPrice: null,
        emoji: "🖱️", badge: "new",
        specs: { "DPI": "100–32.000", "Súly": "60g", "Kapcsolók": "HERO 2 szenzor", "Akku": "95+ óra" }
    },
    {
        id: 3, cat: "keyboard",
        name: "SteelSeries Apex Pro TKL",
        desc: "Állítható érzékenységű OmniPoint mechanikus billentyűzet.",
        price: 59990, oldPrice: 69990,
        emoji: "⌨️", badge: "sale",
        specs: { "Switch": "OmniPoint 2.0", "Méret": "TKL", "Visszajelzés": "OLED kijelző", "Csatlakozó": "USB-C" }
    },
    {
        id: 4, cat: "keyboard",
        name: "Ducky One 3 Mini",
        desc: "60%-os prémium mechan billentyűzet, Cherry MX kapcsolókkal.",
        price: 42990, oldPrice: null,
        emoji: "⌨️", badge: "new",
        specs: { "Switch": "Cherry MX Red", "Méret": "60%", "Háttérvilágítás": "RGB", "Hotswap": "Igen" }
    },
    {
        id: 5, cat: "headset",
        name: "HyperX Cloud Alpha",
        desc: "Kettős kamrás meghajtók, 300 órás akkumulátor, légpárna fülpárna.",
        price: 29990, oldPrice: 36990,
        emoji: "🎧", badge: "sale",
        specs: { "Meghajtó": "50mm kettős kamrás", "Frekvencia": "13Hz–27kHz", "Mikrofon": "Levehető", "Csatlakozó": "3.5mm" }
    },
    {
        id: 6, cat: "headset",
        name: "SteelSeries Arctis Nova Pro",
        desc: "Aktív zajszűrés, 360° térhangzás, hot-swap akkumulátor.",
        price: 89990, oldPrice: null,
        emoji: "🎧", badge: "new",
        specs: { "ANC": "Aktív zajszűrő", "Frekvencia": "10Hz–40kHz", "Csatlakozó": "USB-C + 3.5mm", "Akkumulátor": "Hot-swap" }
    },
    {
        id: 7, cat: "chair",
        name: "Noblechairs Hero",
        desc: "Valódi bőr gaming szék, masszázs funkcióval és állítható karfával.",
        price: 149990, oldPrice: 179990,
        emoji: "🪑", badge: "sale",
        specs: { "Anyag": "Valódi bőr", "Teherbírás": "150kg", "Magasság": "Állítható", "Karfa": "4D" }
    },
    {
        id: 8, cat: "chair",
        name: "Secretlab Titan Evo",
        desc: "Prémium gaming szék, hűtő memóriahab-párnával és mágneses fejpárnával.",
        price: 189990, oldPrice: null,
        emoji: "🪑", badge: "new",
        specs: { "Anyag": "SoftWeave Plus", "Teherbírás": "180kg", "Párna": "Mágneses fejpárna", "Tilt": "Multi-tilt" }
    },
    {
        id: 9, cat: "monitor",
        name: "LG 27GP850-B",
        desc: "27 colos Nano IPS, 165Hz, 1ms, G-Sync kompatibilis gaming monitor.",
        price: 119990, oldPrice: 139990,
        emoji: "🖥️", badge: "sale",
        specs: { "Méret": "27\"", "Frissítési ráta": "165Hz", "Panel": "Nano IPS", "Válaszidő": "1ms" }
    },
    {
        id: 10, cat: "monitor",
        name: "Samsung Odyssey G7",
        desc: "32 colos ívelt QLED, 240Hz, HDR600 – teljesen elmerülő gaming élmény.",
        price: 249990, oldPrice: null,
        emoji: "🖥️", badge: "new",
        specs: { "Méret": "32\" ívelt", "Frissítési ráta": "240Hz", "Panel": "QLED", "HDR": "HDR600" }
    }
];

/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem("gz_cart") || "[]");
let currentFilter = "all";

/* ===== ELEMENTS ===== */
const shopGrid = document.getElementById("shopGrid");
const cartBadge = document.getElementById("cartBadge");
const cartFab = document.getElementById("cartFab");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCartBtn = document.getElementById("closeCart");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartToast = document.getElementById("cartToast");
const productModal = document.getElementById("productModal");
const productModalBackdrop = document.getElementById("productModalBackdrop");
const closeProductModalBtn = document.getElementById("closeProductModal");
const productModalContent = document.getElementById("productModalContent");
const checkoutBtn = document.getElementById("checkoutBtn");

/* ===== HELPERS ===== */
function formatPrice(n) {
    return n.toLocaleString("hu-HU") + " Ft";
}

function saveCart() {
    localStorage.setItem("gz_cart", JSON.stringify(cart));
}

function showToast(msg) {
    cartToast.textContent = msg;
    cartToast.classList.add("show");
    setTimeout(() => cartToast.classList.remove("show"), 2500);
}

/* ===== RENDER PRODUCTS ===== */
function renderProducts(filter, searchQuery) {
    shopGrid.innerHTML = "";
    let list = filter === "all" ? products : products.filter(p => p.cat === filter);

    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q) ||
            getCatLabel(p.cat).toLowerCase().includes(q)
        );
    }

    if (!list.length) {
        const msg = searchQuery
            ? `Nincs találat: "${searchQuery}"`
            : "Nincs találat ebben a kategóriában.";
        shopGrid.innerHTML = `<div class="shop-empty"><span class="shop-empty-icon">🔍</span><p>${msg}</p></div>`;
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-img-wrap">
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === "new" ? "ÚJ" : "AKCIÓ"}</span>` : ""}
                <span>${product.emoji}</span>
            </div>
            <div class="product-info">
                <div class="product-category">${getCatLabel(product.cat)}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-desc">${product.desc}</div>
                <div class="product-bottom">
                    <div class="product-price">
                        <span class="price-current">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""}
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Kosárba</button>
                </div>
            </div>
        `;
        // open modal on card click (not on button)
        card.addEventListener("click", (e) => {
            if (!e.target.classList.contains("add-to-cart-btn")) {
                openProductModal(product);
            }
        });
        // add to cart button
        card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart(product);
        });
        shopGrid.appendChild(card);
    });
}

function getCatLabel(cat) {
    const map = { mouse: "Egér", keyboard: "Billentyűzet", headset: "Fejhallgató", chair: "Gaming szék", monitor: "Monitor" };
    return map[cat] || cat;
}

/* ===== FILTER ===== */
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.cat;
        if (searchInput) searchInput.value = "";
        renderProducts(currentFilter);
    });
});

/* ===== CART LOGIC ===== */
function addToCart(product) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`✅ ${product.name} kosárba rakva!`);

    // bounce animation on fab
    cartFab.style.transform = "scale(1.25)";
    setTimeout(() => cartFab.style.transform = "", 250);
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else { saveCart(); updateCartUI(); }
}

function updateCartUI() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    cartBadge.textContent = total;

    const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
    cartTotalEl.textContent = formatPrice(totalPrice);

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">🛒</span>
                <p>A kosár üres</p>
            </div>`;
        return;
    }

    cartItemsEl.innerHTML = "";
    cart.forEach(item => {
        const el = document.createElement("div");
        el.className = "cart-item";
        el.innerHTML = `
            <div class="cart-item-emoji">${item.emoji}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
            </div>
            <button class="cart-item-remove" data-remove="${item.id}">✕</button>
        `;
        cartItemsEl.appendChild(el);
    });

    cartItemsEl.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", () => changeQty(Number(btn.dataset.id), Number(btn.dataset.delta)));
    });
    cartItemsEl.querySelectorAll(".cart-item-remove").forEach(btn => {
        btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.remove)));
    });
}

/* ===== CART SIDEBAR ===== */
function openCart() {
    cartSidebar.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

cartFab.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* ===== CHECKOUT ===== */
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("⚠️ A kosár üres!");
        return;
    }
    showToast("✅ Megrendelés elküldve! Hamarosan felvesszük veled a kapcsolatot.");
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
});

/* ===== PRODUCT MODAL ===== */
function openProductModal(product) {
    const specsHtml = Object.entries(product.specs).map(([k, v]) =>
        `<div class="modal-spec-row"><span class="modal-spec-key">${k}</span><span class="modal-spec-val">${v}</span></div>`
    ).join("");

    productModalContent.innerHTML = `
        <span class="modal-emoji">${product.emoji}</span>
        <div class="modal-category">${getCatLabel(product.cat)}</div>
        <h2 class="modal-title">${product.name}</h2>
        <p class="modal-desc">${product.desc}</p>
        <div class="modal-specs">${specsHtml}</div>
        <div class="modal-price-row">
            <div>
                <div class="modal-price-current">${formatPrice(product.price)}</div>
                ${product.oldPrice ? `<div class="modal-price-old">${formatPrice(product.oldPrice)}</div>` : ""}
            </div>
            <button class="modal-add-btn" id="modalAddBtn">🛒 Kosárba</button>
        </div>
    `;

    document.getElementById("modalAddBtn").addEventListener("click", () => {
        addToCart(product);
        closeProductModal();
    });

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    productModal.classList.remove("active");
    document.body.style.overflow = "";
}

closeProductModalBtn.addEventListener("click", closeProductModal);
productModalBackdrop.addEventListener("click", closeProductModal);

document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeProductModal();
        closeCart();
    }
});

/* ===== SEARCH ===== */
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        renderProducts(currentFilter, query || null);
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
        item.addEventListener("click", () => {
            window.location.href = item.dataset.page;
        });
    });
}

if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
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

cookieAcceptAll.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "all");
    closeCookieModal();
});
cookieAcceptNecessary.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    closeCookieModal();
});

/* ===== SUBSCRIBE ===== */
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeInput = document.getElementById("subscribeInput");

if (subscribeBtn && subscribeInput) {
    const toast = document.createElement("div");
    toast.className = "subscribe-toast";
    document.body.appendChild(toast);

    function showSubToast(msg) {
        toast.textContent = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
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
renderProducts("all");
updateCartUI();
