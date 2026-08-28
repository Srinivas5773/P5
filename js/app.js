/**
 * SRINIVAS ECOMMERCE - CORE APP JS
 * State Management (LocalStorage), Global UI (Header, Search, Badges, Quick View, Toast, Theme)
 */

class AppStore {
  constructor() {
    this.initStorage();
  }

  initStorage() {
    const existing = localStorage.getItem('srinivas_products');
    if (!existing || JSON.parse(existing).length < DEFAULT_PRODUCTS.length) {
      localStorage.setItem('srinivas_products', JSON.stringify(DEFAULT_PRODUCTS));
    }
    if (!localStorage.getItem('srinivas_cart')) {
      localStorage.setItem('srinivas_cart', JSON.stringify([]));
    }
    if (!localStorage.getItem('srinivas_wishlist')) {
      localStorage.setItem('srinivas_wishlist', JSON.stringify([]));
    }
    if (!localStorage.getItem('srinivas_orders')) {
      localStorage.setItem('srinivas_orders', JSON.stringify([]));
    }
    if (!localStorage.getItem('srinivas_theme')) {
      localStorage.setItem('srinivas_theme', 'light');
    }
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('srinivas_products')) || DEFAULT_PRODUCTS;
  }

  saveProducts(products) {
    localStorage.setItem('srinivas_products', JSON.stringify(products));
  }

  getCart() {
    return JSON.parse(localStorage.getItem('srinivas_cart')) || [];
  }

  saveCart(cart) {
    localStorage.setItem('srinivas_cart', JSON.stringify(cart));
    this.updateBadges();
  }

  addToCart(productId, quantity = 1) {
    const products = this.getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    this.saveCart(cart);
    showToast(`Added "${product.name}" to your cart!`, 'success');
  }

  removeFromCart(productId) {
    let cart = this.getCart().filter(item => item.id !== productId);
    this.saveCart(cart);
    showToast('Item removed from cart', 'warning');
  }

  updateCartQuantity(productId, newQty) {
    let cart = this.getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      if (newQty <= 0) {
        this.removeFromCart(productId);
        return;
      }
      item.quantity = newQty;
      this.saveCart(cart);
    }
  }

  getWishlist() {
    return JSON.parse(localStorage.getItem('srinivas_wishlist')) || [];
  }

  toggleWishlist(productId) {
    let wishlist = this.getWishlist();
    const products = this.getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const exists = wishlist.some(id => id === productId);
    if (exists) {
      wishlist = wishlist.filter(id => id !== productId);
      showToast(`Removed from Wishlist`, 'warning');
    } else {
      wishlist.push(productId);
      showToast(`Added "${product.name}" to Wishlist!`, 'success');
    }

    localStorage.setItem('srinivas_wishlist', JSON.stringify(wishlist));
    this.updateBadges();
    return !exists;
  }

  getOrders() {
    return JSON.parse(localStorage.getItem('srinivas_orders')) || [];
  }

  addOrder(order) {
    let orders = this.getOrders();
    orders.unshift(order);
    localStorage.setItem('srinivas_orders', JSON.stringify(orders));
    this.saveCart([]); // Clear cart after successful order
  }

  updateBadges() {
    const cartCountEl = document.getElementById('cart-badge');
    const wishlistCountEl = document.getElementById('wishlist-badge');

    if (cartCountEl) {
      const cart = this.getCart();
      const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
      cartCountEl.textContent = totalQty;
      cartCountEl.style.display = totalQty > 0 ? 'flex' : 'none';
    }

    if (wishlistCountEl) {
      const wishlist = this.getWishlist();
      wishlistCountEl.textContent = wishlist.length;
      wishlistCountEl.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
  }
}

const store = new AppStore();

// ==========================================
// TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconMap = {
    success: 'bi-check-circle-fill',
    danger: 'bi-x-circle-fill',
    warning: 'bi-exclamation-triangle-fill'
  };

  toast.innerHTML = `
    <i class="bi ${iconMap[type] || 'bi-info-circle-fill'}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const products = store.getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('quickview-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickview-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const specsHtml = Object.entries(product.specs || {})
    .map(([key, val]) => `<tr><td style="font-weight:600; padding:4px 12px 4px 0; color:var(--text-muted);">${key}:</td><td style="color:var(--text-main);">${val}</td></tr>`)
    .join('');

  modal.innerHTML = `
    <div class="modal-card">
      <button class="modal-close" onclick="closeQuickView()"><i class="bi bi-x-lg"></i></button>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:center;">
        <div style="background-color:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); text-align:center;">
          <img src="${product.image}" alt="${product.name}" style="max-height:260px; margin:0 auto;" />
        </div>
        <div>
          <span class="product-cat">${product.category.toUpperCase()} • ${product.brand}</span>
          <h2 style="font-size:1.4rem; font-weight:800; margin:0.4rem 0 0.8rem; color:var(--text-main);">${product.name}</h2>
          <div class="product-rating" style="margin-bottom:1rem;">
            <i class="bi bi-star-fill"></i>
            <span style="font-weight:700;">${product.rating}</span>
            <span class="rating-count">(${product.reviewsCount} customer reviews)</span>
          </div>
          <div class="product-price-row">
            <span class="price-current">₹${product.price.toLocaleString()}</span>
            <span class="price-old">₹${product.originalPrice.toLocaleString()}</span>
            <span class="price-save">Save ${product.discount}%</span>
          </div>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.2rem; line-height:1.5;">${product.description}</p>
          <table style="font-size:0.85rem; margin-bottom:1.5rem; width:100%; border-collapse:collapse;">
            ${specsHtml}
          </table>
          <div style="display:flex; gap:1rem;">
            <button class="btn-add-cart" onclick="store.addToCart('${product.id}'); closeQuickView();" style="flex:1;">
              <i class="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
            <button class="theme-toggle-btn" onclick="store.toggleWishlist('${product.id}')" title="Wishlist">
              <i class="bi bi-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.remove('active');
}

// ==========================================
// GLOBAL SEARCH & AUTOCOMPLETE
// ==========================================
function initSearch() {
  const searchInput = document.getElementById('global-search');
  const searchResults = document.getElementById('search-results');
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }

    const products = store.getProducts();
    const matches = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query)
    ).slice(0, 6);

    if (matches.length === 0) {
      searchResults.innerHTML = `<div style="padding:1rem; text-align:center; color:var(--text-muted);">No products found matching "${query}"</div>`;
    } else {
      searchResults.innerHTML = matches.map(p => `
        <div class="search-item" onclick="window.location.href='shop.html?search=${encodeURIComponent(p.name)}'">
          <img src="${p.image}" alt="${p.name}" />
          <div>
            <div style="font-weight:700; font-size:0.9rem; color:var(--text-main);">${p.name}</div>
            <div style="font-size:0.75rem; color:var(--primary); font-weight:600;">₹${p.price.toLocaleString()} • ${p.category.toUpperCase()}</div>
          </div>
        </div>
      `).join('');
    }

    searchResults.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('active');
    }
  });
}

// ==========================================
// THEME MANAGER
// ==========================================
function initTheme() {
  const currentTheme = localStorage.getItem('srinivas_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>';
    themeBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('srinivas_theme', newTheme);
      themeBtn.innerHTML = newTheme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  store.updateBadges();
  initSearch();
  initTheme();
});


// Image Fallback Handler for External Links
function handleImageError(img, category) {
  const fallbacks = {
    fashion: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop',
    mobiles: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop',
    furniture: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop',
    groceries: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop'
  };

  img.onerror = null; // Prevent infinite loop
  img.src = fallbacks[category.toLowerCase()] || fallbacks.fashion;
}
