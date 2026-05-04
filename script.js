// ===== Menu data =====
const menuItems = [
  { id: 1, name: "Vadapav", price: 15, available: true, image: "assets/images/vadapav.jpg" },
  { id: 2, name: "Ice Cream Cone", price: 15, available: true, image: "assets/images/icecreamcone.jpg" },
  { id: 3, name: "Tea", price: 10, available: true, image: "assets/images/tea.jpg" },
  { id: 4, name: "Coffee", price: 20, available: true, image: "assets/images/coffee.jpg" },
  { id: 5, name: "Ice Cream Cup", price: 30, available: false, image: "assets/images/icecreamcup.jpg" },
  { id: 6, name: "Samosa", price: 20, available: true, image: "assets/images/samosa.jpg" },
  { id: 7, name: "Grilled Sandwich", price: 45, available: true, image: "assets/images/sandwich.jpg" },
  { id: 8, name: "Cold Coffee", price: 50, available: true, image: "assets/images/coldcoffee.png" },
  { id: 9, name: "Masala Dosa", price: 60, available: true, image: "assets/images/masaladosa.jpg" },
  { id: 10, name: "Pav Bhaji", price: 55, available: true, image: "assets/images/pavbhaji.png" },
  { id: 11, name: "French Fries", price: 40, available: true, image: "assets/images/frenchfries.jpg" }
];

// ===== Language labels =====
const languageLabels = {
  en: "English",
  hi: "Hindi",
  mr: "Marathi",
  ja: "Japanese"
};

// ===== Fallback assets =====
const FALLBACK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%235d4037'/%3E%3Cstop offset='100%25' stop-color='%233e2723'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' fill='%23f3e6df' font-family='Inter, Arial, sans-serif' font-size='44' text-anchor='middle' dominant-baseline='middle'%3EImage not available%3C/text%3E%3C/svg%3E";

// ===== Translations =====
const translations = {
  en: {
    collegeTitle: "DNYANVILAS COLLEGE OF ENGINEERING",
    collegeSubtitle: "College Canteen/Cafeteria",
    languageLabel: "Language",
    menuTitle: "Menu",
    searchPlaceholder: "Search menu...",
    noItemsFound: "No items found",
    yourCart: "Your Cart",
    placeOrder: "Place Order",
    currentOrders: "Current Orders",
    orderHistory: "Order History",
    orderDetails: "Order Details",
    nameLabel: "Name",
    tableLabel: "Table Number",
    namePlaceholder: "Enter your name",
    tablePlaceholder: "Enter table number",
    cancel: "Cancel",
    confirmOrder: "Confirm Order",
    addToCart: "Add to Cart",
    available: "Available",
    notAvailable: "Not Available",
    total: "Total",
    emptyCart: "Your cart is empty",
    emptyOrders: "No active orders",
    emptyHistory: "No order history yet",
    cartEmptyToast: "Cart is empty",
    missingDetails: "Name and table number are required",
    placedSuccess: "Order placed successfully",
    itemAdded: "Item added to cart",
    itemUpdated: "Cart updated",
    orderLabel: "Order",
    historyOrder: "History Order",
    nameField: "Name",
    tableField: "Table",
    itemsField: "Items",
    statusField: "Status",
    pending: "Pending",
    preparing: "Preparing",
    ready: "Ready",
    completed: "Completed",
    advanceStatus: "Advance Status"
  },
  hi: {
    collegeTitle: "ज्ञानविलास कॉलेज ऑफ इंजीनियरिंग",
    collegeSubtitle: "कॉलेज कैंटीन / कैफेटेरिया",
    languageLabel: "भाषा",
    menuTitle: "मेनू",
    searchPlaceholder: "मेनू खोजें...",
    noItemsFound: "कोई आइटम नहीं मिला",
    yourCart: "आपका कार्ट",
    placeOrder: "ऑर्डर करें",
    currentOrders: "चालू ऑर्डर",
    orderHistory: "ऑर्डर इतिहास",
    orderDetails: "ऑर्डर विवरण",
    nameLabel: "नाम",
    tableLabel: "टेबल नंबर",
    namePlaceholder: "अपना नाम दर्ज करें",
    tablePlaceholder: "टेबल नंबर दर्ज करें",
    cancel: "रद्द करें",
    confirmOrder: "ऑर्डर पुष्टि करें",
    addToCart: "कार्ट में जोड़ें",
    available: "उपलब्ध",
    notAvailable: "उपलब्ध नहीं",
    total: "कुल",
    emptyCart: "आपका कार्ट खाली है",
    emptyOrders: "कोई सक्रिय ऑर्डर नहीं",
    emptyHistory: "अभी तक कोई इतिहास नहीं",
    cartEmptyToast: "कार्ट खाली है",
    missingDetails: "नाम और टेबल नंबर आवश्यक है",
    placedSuccess: "ऑर्डर सफलतापूर्वक किया गया",
    itemAdded: "आइटम कार्ट में जोड़ा गया",
    itemUpdated: "कार्ट अपडेट हुआ",
    orderLabel: "ऑर्डर",
    historyOrder: "इतिहास ऑर्डर",
    nameField: "नाम",
    tableField: "टेबल",
    itemsField: "आइटम",
    statusField: "स्थिति",
    pending: "पेंडिंग",
    preparing: "तैयारी में",
    ready: "तैयार",
    completed: "पूर्ण",
    advanceStatus: "स्थिति बदलें"
  },
  mr: {
    collegeTitle: "ज्ञानविलास कॉलेज ऑफ इंजिनिअरिंग",
    collegeSubtitle: "कॉलेज कॅन्टीन / कॅफेटेरिया",
    languageLabel: "भाषा",
    menuTitle: "मेनू",
    searchPlaceholder: "मेनू शोधा...",
    noItemsFound: "कुठलाही आयटम सापडला नाही",
    yourCart: "तुमचा कार्ट",
    placeOrder: "ऑर्डर करा",
    currentOrders: "सध्याच्या ऑर्डर्स",
    orderHistory: "ऑर्डर इतिहास",
    orderDetails: "ऑर्डर तपशील",
    nameLabel: "नाव",
    tableLabel: "टेबल क्रमांक",
    namePlaceholder: "तुमचे नाव लिहा",
    tablePlaceholder: "टेबल क्रमांक लिहा",
    cancel: "रद्द करा",
    confirmOrder: "ऑर्डर निश्चित करा",
    addToCart: "कार्टमध्ये जोडा",
    available: "उपलब्ध",
    notAvailable: "उपलब्ध नाही",
    total: "एकूण",
    emptyCart: "तुमचा कार्ट रिकामा आहे",
    emptyOrders: "सक्रिय ऑर्डर नाही",
    emptyHistory: "इतिहास उपलब्ध नाही",
    cartEmptyToast: "कार्ट रिकामा आहे",
    missingDetails: "नाव आणि टेबल क्रमांक आवश्यक आहे",
    placedSuccess: "ऑर्डर यशस्वीपणे झाली",
    itemAdded: "आयटम कार्टमध्ये जोडला",
    itemUpdated: "कार्ट अपडेट झाला",
    orderLabel: "ऑर्डर",
    historyOrder: "इतिहास ऑर्डर",
    nameField: "नाव",
    tableField: "टेबल",
    itemsField: "आयटम",
    statusField: "स्थिती",
    pending: "प्रलंबित",
    preparing: "तयारीत",
    ready: "तयार",
    completed: "पूर्ण",
    advanceStatus: "स्थिती पुढे न्या"
  },
  ja: {
    collegeTitle: "Dnyanvilas工科大学",
    collegeSubtitle: "学内カンティーン / カフェテリア",
    languageLabel: "言語",
    menuTitle: "メニュー",
    searchPlaceholder: "メニューを検索...",
    noItemsFound: "商品が見つかりません",
    yourCart: "カート",
    placeOrder: "注文する",
    currentOrders: "現在の注文",
    orderHistory: "注文履歴",
    orderDetails: "注文詳細",
    nameLabel: "名前",
    tableLabel: "テーブル番号",
    namePlaceholder: "名前を入力",
    tablePlaceholder: "テーブル番号を入力",
    cancel: "キャンセル",
    confirmOrder: "注文を確定",
    addToCart: "カートに追加",
    available: "提供中",
    notAvailable: "売り切れ",
    total: "合計",
    emptyCart: "カートは空です",
    emptyOrders: "進行中の注文はありません",
    emptyHistory: "履歴はまだありません",
    cartEmptyToast: "カートが空です",
    missingDetails: "名前とテーブル番号が必要です",
    placedSuccess: "注文が完了しました",
    itemAdded: "商品をカートに追加しました",
    itemUpdated: "カートを更新しました",
    orderLabel: "注文",
    historyOrder: "履歴注文",
    nameField: "名前",
    tableField: "テーブル",
    itemsField: "商品",
    statusField: "ステータス",
    pending: "保留",
    preparing: "調理中",
    ready: "準備完了",
    completed: "完了",
    advanceStatus: "ステータスを進める"
  }
};

const statusFlow = ["pending", "preparing", "ready", "completed"];

// ===== Application state =====
const state = {
  cart: [],
  orders: [],
  history: [],
  searchQuery: "",
  currentLanguage: localStorage.getItem("canteenLanguage") || "en",
  currentTheme: localStorage.getItem("canteenTheme") || "dark"
};

// ===== DOM cache =====
const dom = {
  menu: document.getElementById("menu"),
  searchBar: document.getElementById("search-bar"),
  cartItems: document.getElementById("cart-items"),
  total: document.getElementById("total"),
  placeOrderBtn: document.getElementById("place-order"),
  orderList: document.getElementById("order-list"),
  historyList: document.getElementById("history-list"),
  languageWrap: document.getElementById("language-wrap"),
  languageToggle: document.getElementById("language-toggle"),
  languageDropdown: document.getElementById("language-dropdown"),
  languageCurrent: document.getElementById("language-current"),
  themeToggle: document.getElementById("theme-toggle"),
  themeIcon: document.getElementById("theme-icon"),
  modal: document.getElementById("order-modal"),
  nameInput: document.getElementById("customer-name"),
  tableInput: document.getElementById("table-number"),
  cancelOrderBtn: document.getElementById("cancel-order"),
  confirmOrderBtn: document.getElementById("confirm-order"),
  toastContainer: document.getElementById("toast-container")
};

let isLangOpen = false;

// ===== Helpers =====
function t(key) {
  const languagePack = translations[state.currentLanguage] || translations.en;
  return languagePack[key] || translations.en[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function iconSvg(type) {
  const icons = {
    plus: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    alert: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.8 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3c0 0 0 0 0 0A7 7 0 0 0 21 12.79z"/></svg>',
    pending: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
    preparing: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"/><path d="M7 8h10"/><path d="M7 16h10"/></svg>',
    ready: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="m20 6-11 11-5-5"/></svg>',
    completed: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>'
  };

  return icons[type] || "";
}

// ===== Theme and notifications =====
function showToast(message, variant = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${variant}`;
  toast.innerHTML = `
    <span class="toast-icon">${variant === "success" ? iconSvg("check") : iconSvg("alert")}</span>
    <div class="toast-body">${escapeHtml(message)}</div>
  `;

  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => toast.remove(), 260);
  }, 2500);
}

function setTheme(theme) {
  state.currentTheme = theme;
  document.body.setAttribute("data-theme", theme);
  dom.themeIcon.innerHTML = theme === "dark" ? iconSvg("sun") : iconSvg("moon");
  localStorage.setItem("canteenTheme", theme);
}

// ===== Localization =====
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  dom.languageCurrent.textContent = (state.currentLanguage || "en").toUpperCase();

  document.querySelectorAll(".lang-option").forEach((option) => {
    const isActive = option.dataset.lang === state.currentLanguage;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });

}

function formatCurrency(value) {
  return `₹${value}`;
}

function getFilteredMenu() {
  const query = state.searchQuery.trim().toLowerCase();
  if (!query) {
    return menuItems;
  }
  return menuItems.filter((item) => item.name.toLowerCase().includes(query));
}

// ===== Menu rendering =====
function renderMenu() {
  const filteredItems = getFilteredMenu();
  dom.menu.innerHTML = "";

  if (filteredItems.length === 0) {
    const empty = document.createElement("div");
    empty.className = "menu-empty";
    empty.textContent = t("noItemsFound");
    dom.menu.appendChild(empty);
    return;
  }

  filteredItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "item";
    card.style.animationDelay = `${index * 70}ms`;
    card.innerHTML = `
      <div class="item-media">
        <img class="menu-image" src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">
      </div>
      <div class="item-content">
        <div class="item-top">
          <h3>${escapeHtml(item.name)}</h3>
          <span class="price-tag">${formatCurrency(item.price)}</span>
        </div>
        <span class="availability ${item.available ? "true" : "false"}">
          ${item.available ? t("available") : t("notAvailable")}
        </span>
        <button class="add-btn" data-action="add" data-id="${item.id}" ${!item.available ? "disabled" : ""}>
          ${iconSvg("plus")}
          <span>${t("addToCart")}</span>
        </button>
      </div>
    `;
    dom.menu.appendChild(card);
  });

  bindImageFallbacks();
}

function addToCart(id) {
  const item = menuItems.find((m) => m.id === id);
  if (!item || !item.available) {
    return;
  }

  const existing = state.cart.find((c) => c.id === id);
  if (existing) {
    existing.qty += 1;
    showToast(t("itemUpdated"), "success");
  } else {
    state.cart.push({ ...item, qty: 1 });
    showToast(t("itemAdded"), "success");
  }

  renderCart();
}

function updateQty(id, delta) {
  const item = state.cart.find((c) => c.id === id);
  if (!item) {
    return;
  }

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((c) => c.id !== id);
  }

  renderCart();
}

function cartTotal() {
  return state.cart.reduce((total, item) => total + item.price * item.qty, 0);
}

// ===== Cart rendering =====
function renderCart() {
  dom.cartItems.innerHTML = "";

  if (state.cart.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = t("emptyCart");
    dom.cartItems.appendChild(empty);
  } else {
    state.cart.forEach((item) => {
      const li = document.createElement("li");
      li.className = "cart-row";
      li.innerHTML = `
        <div>
          <div class="cart-name">${escapeHtml(item.name)}</div>
          <div class="meta">${formatCurrency(item.price)} x ${item.qty}</div>
        </div>
        <div class="cart-controls">
          <button class="qty-btn" data-action="qty" data-id="${item.id}" data-delta="-1" type="button">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-action="qty" data-id="${item.id}" data-delta="1" type="button">+</button>
          <span class="line-total">${formatCurrency(item.price * item.qty)}</span>
        </div>
      `;
      dom.cartItems.appendChild(li);
    });
  }

  dom.total.textContent = `${t("total")}: ${formatCurrency(cartTotal())}`;
}

function statusClass(status) {
  return `status-${status}`;
}

function statusLabel(status) {
  return t(status);
}

function bindImageFallbacks() {
  document.querySelectorAll(".menu-image").forEach((image) => {
    if (image.dataset.fallbackBound === "true") {
      return;
    }

    image.dataset.fallbackBound = "true";
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied === "true") {
        return;
      }
      image.dataset.fallbackApplied = "true";
      image.src = FALLBACK_IMAGE;
    });
  });
}

// ===== Language dropdown =====
function openLanguageDropdown() {
  dom.languageDropdown.classList.add("open");
  dom.languageToggle.setAttribute("aria-expanded", "true");
  isLangOpen = true;
}

function closeLanguageDropdown() {
  dom.languageDropdown.classList.remove("open");
  dom.languageToggle.setAttribute("aria-expanded", "false");
  isLangOpen = false;
}

function toggleLanguageDropdown() {
  if (isLangOpen) {
    closeLanguageDropdown();
  } else {
    openLanguageDropdown();
  }
}

// ===== Orders rendering =====
function renderOrders() {
  dom.orderList.innerHTML = "";

  if (state.orders.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = t("emptyOrders");
    dom.orderList.appendChild(empty);
    return;
  }

  state.orders.forEach((order, index) => {
    const li = document.createElement("li");
    li.className = "order-card";

    const isCompleted = order.status === "completed";
    li.innerHTML = `
      <div class="order-head">
        <strong>${t("orderLabel")} #${index + 1}</strong>
        <span class="status-badge ${statusClass(order.status)}">
          ${iconSvg(order.status)}
          ${statusLabel(order.status)}
        </span>
      </div>
      <div class="meta">${escapeHtml(order.time)}</div>
      <div class="meta">${t("nameField")}: ${escapeHtml(order.name)} | ${t("tableField")}: ${escapeHtml(order.table)}</div>
      <div class="meta">${t("itemsField")}: ${escapeHtml(order.items)}</div>
      <div><strong>${t("total")}: ${formatCurrency(order.total)}</strong></div>
      ${isCompleted ? "" : `<button class="complete-btn" data-action="advance-status" data-index="${index}" type="button">${t("advanceStatus")}</button>`}
    `;

    dom.orderList.appendChild(li);
  });
}

function renderHistory() {
  dom.historyList.innerHTML = "";

  if (state.history.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = t("emptyHistory");
    dom.historyList.appendChild(empty);
    return;
  }

  state.history.forEach((order) => {
    const li = document.createElement("li");
    li.className = "history-card";
    li.innerHTML = `
      <div class="order-head">
        <strong>${t("historyOrder")}</strong>
        <span class="status-badge status-completed">
          ${iconSvg("completed")}
          ${t("completed")}
        </span>
      </div>
      <div class="meta">${escapeHtml(order.time)}</div>
      <div class="meta">${t("nameField")}: ${escapeHtml(order.name)} | ${t("tableField")}: ${escapeHtml(order.table)}</div>
      <div class="meta">${t("itemsField")}: ${escapeHtml(order.items)}</div>
      <div><strong>${t("total")}: ${formatCurrency(order.total)}</strong></div>
    `;
    dom.historyList.appendChild(li);
  });
}

// ===== Modal actions =====
function openModal() {
  dom.modal.classList.add("open");
  dom.modal.setAttribute("aria-hidden", "false");
  dom.nameInput.value = "";
  dom.tableInput.value = "";
  dom.nameInput.focus();
}

function closeModal() {
  dom.modal.classList.remove("open");
  dom.modal.setAttribute("aria-hidden", "true");
}

function placeOrder() {
  const name = dom.nameInput.value.trim();
  const table = dom.tableInput.value.trim();

  if (!name || !table) {
    showToast(t("missingDetails"), "error");
    return;
  }

  const total = cartTotal();
  const order = {
    name,
    table,
    items: state.cart.map((item) => `${item.name} x${item.qty}`).join(", "),
    total,
    time: new Date().toLocaleString(),
    status: "pending"
  };

  state.orders.push(order);
  state.cart = [];
  renderCart();
  renderOrders();
  closeModal();

  showToast(t("placedSuccess"), "success");
}

function advanceOrderStatus(index) {
  const order = state.orders[index];
  if (!order) {
    return;
  }

  const current = statusFlow.indexOf(order.status);
  if (current < statusFlow.length - 1) {
    order.status = statusFlow[current + 1];
  }

  if (order.status === "completed") {
    state.history.unshift(order);
    state.orders.splice(index, 1);
  }

  renderOrders();
  renderHistory();
}

// ===== Event listeners =====
function bindEvents() {
  dom.searchBar.addEventListener("input", (event) => {
    state.searchQuery = event.target.value;
    renderMenu();
  });

  dom.menu.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='add']");
    if (!button) {
      return;
    }
    addToCart(Number(button.dataset.id));
  });

  dom.cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='qty']");
    if (!button) {
      return;
    }
    updateQty(Number(button.dataset.id), Number(button.dataset.delta));
  });

  dom.placeOrderBtn.addEventListener("click", () => {
    if (state.cart.length === 0) {
      showToast(t("cartEmptyToast"), "error");
      return;
    }
    openModal();
  });

  dom.confirmOrderBtn.addEventListener("click", placeOrder);
  dom.cancelOrderBtn.addEventListener("click", closeModal);

  dom.modal.addEventListener("click", (event) => {
    if (event.target.dataset.closeModal === "true") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (dom.modal.classList.contains("open")) {
        closeModal();
      }
      closeLanguageDropdown();
    }
  });

  dom.orderList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='advance-status']");
    if (!button) {
      return;
    }
    advanceOrderStatus(Number(button.dataset.index));
  });

  dom.themeToggle.addEventListener("click", () => {
    const nextTheme = state.currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  dom.languageToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleLanguageDropdown();
  });

  dom.languageDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    const option = event.target.closest(".lang-option");
    if (!option) {
      return;
    }

    state.currentLanguage = option.dataset.lang;
    localStorage.setItem("canteenLanguage", state.currentLanguage);
    refreshUI();
    closeLanguageDropdown();
  });

  document.addEventListener("click", (event) => {
    const isInsideWrap = dom.languageWrap && dom.languageWrap.contains(event.target);
    if (!isInsideWrap) {
      closeLanguageDropdown();
    }
  });
}

// ===== UI refresh =====
function refreshUI() {
  applyTranslations();
  renderMenu();
  renderCart();
  renderOrders();
  renderHistory();
}

// ===== App init =====
function init() {
  setTheme(state.currentTheme);

  if (!translations[state.currentLanguage]) {
    state.currentLanguage = "en";
  }

  closeLanguageDropdown();
  bindEvents();
  refreshUI();
}

init();
