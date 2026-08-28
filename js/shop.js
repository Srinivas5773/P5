/**
 * SRINIVAS ECOMMERCE - SHOP PAGE CONTROLLER
 * Dynamic Filters (Category, Price, Brand, Rating), Sorting & Grid Layout
 */

document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('shop-products-grid');
  if (!productsGrid) return; // Only runs on shop.html

  // Parse URL parameters (e.g. ?category=fashion or ?search=shirt)
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');
  const initialSearch = urlParams.get('search');

  let activeFilters = {
    category: initialCategory || 'all',
    brands: [],
    minPrice: 0,
    maxPrice: 100000,
    search: initialSearch || '',
    sort: 'popular'
  };

  // Populate Filter Checkboxes & UI
  initFilterControls();
  renderProducts();

  function initFilterControls() {
    // Set search box value if coming from search
    if (initialSearch) {
      const globalSearch = document.getElementById('global-search');
      if (globalSearch) globalSearch.value = initialSearch;
    }

    // Category Radio/Link Sync
    const categoryInputs = document.querySelectorAll('input[name="filter-category"]');
    categoryInputs.forEach(input => {
      if (input.value === activeFilters.category) input.checked = true;
      input.addEventListener('change', (e) => {
        activeFilters.category = e.target.value;
        renderProducts();
      });
    });

    // Price Slider Inputs
    const minPriceInput = document.getElementById('min-price-input');
    const maxPriceInput = document.getElementById('max-price-input');
    if (minPriceInput && maxPriceInput) {
      minPriceInput.addEventListener('input', (e) => {
        activeFilters.minPrice = parseInt(e.target.value) || 0;
        renderProducts();
      });
      maxPriceInput.addEventListener('input', (e) => {
        activeFilters.maxPrice = parseInt(e.target.value) || 100000;
        renderProducts();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        activeFilters.sort = e.target.value;
        renderProducts();
      });
    }

    // Dynamic Brand Checkboxes Generator based on loaded products
    const products = store.getProducts();
    const brands = [...new Set(products.map(p => p.brand))];
    const brandContainer = document.getElementById('brand-filter-list');
    if (brandContainer) {
      brandContainer.innerHTML = brands.map(brand => `
        <label class="checkbox-label">
          <input type="checkbox" value="${brand}" class="brand-checkbox" />
          <span>${brand}</span>
        </label>
      `).join('');

      document.querySelectorAll('.brand-checkbox').forEach(cb => {
        cb.addEventListener('change', () => {
          activeFilters.brands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(c => c.value);
          renderProducts();
        });
      });
    }
  }

  function renderProducts() {
    let products = store.getProducts();

    // 1. Filter by Category
    if (activeFilters.category !== 'all') {
      products = products.filter(p => p.category.toLowerCase() === activeFilters.category.toLowerCase());
    }

    // 2. Filter by Search Query
    if (activeFilters.search) {
      const q = activeFilters.search.toLowerCase();
      products = products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }

    // 3. Filter by Brands
    if (activeFilters.brands.length > 0) {
      products = products.filter(p => activeFilters.brands.includes(p.brand));
    }

    // 4. Filter by Price Range
    products = products.filter(p => p.price >= activeFilters.minPrice && p.price <= activeFilters.maxPrice);

    // 5. Sorting
    if (activeFilters.sort === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (activeFilters.sort === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    } else if (activeFilters.sort === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    } else {
      // Default: Popularity / ID
      products.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    // Count summary
    const countEl = document.getElementById('product-result-count');
    if (countEl) {
      countEl.textContent = `Showing ${products.length} products`;
    }

    // Render Grid Cards
    if (products.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:4rem 1rem;">
          <i class="bi bi-emoji-frown" style="font-size:3rem; color:var(--text-muted);"></i>
          <h3 style="margin-top:1rem; color:var(--text-main);">No Products Found</h3>
          <p style="color:var(--text-muted); margin-bottom:1.5rem;">Try adjusting your filters or search terms.</p>
          <button class="btn-filter-reset" onclick="location.reload()" style="max-width:200px; margin:0 auto;">Reset All Filters</button>
        </div>
      `;
      return;
    }

    const wishlist = store.getWishlist();

    productsGrid.innerHTML = products.map(product => {
      const isWishlisted = wishlist.includes(product.id);
      return `
        <div class="product-card">
          <div class="product-img-wrap">
            <div class="product-badges">
              ${product.discount ? `<span class="badge-tag badge-discount">-${product.discount}%</span>` : ''}
              ${product.badge ? `<span class="badge-tag badge-hot">${product.badge}</span>` : ''}
            </div>
            <div class="product-actions">
              <button class="btn-action-icon ${isWishlisted ? 'active' : ''}" onclick="toggleWishlistBtn(this, '${product.id}')" title="Wishlist">
                <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
              </button>
              <button class="btn-action-icon" onclick="open3DProductViewer('${product.name}')" title="3D Model View">
                <i class="bi bi-box-seam"></i>
              </button>
              <button class="btn-action-icon" onclick="openQuickView('${product.id}')" title="Quick View">
                <i class="bi bi-eye-fill"></i>
              </button>
            </div>
            <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this, '${product.category}')" />
          </div>
          <div class="product-content">
            <div class="product-cat">${product.category.toUpperCase()} • ${product.brand}</div>
            <h3 class="product-title" title="${product.name}">${product.name}</h3>
            <div class="product-rating">
              <i class="bi bi-star-fill"></i>
              <span style="font-weight:700;">${product.rating}</span>
              <span class="rating-count">(${product.reviewsCount})</span>
            </div>
            <div class="product-price-row">
              <span class="price-current">₹${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `<span class="price-old">₹${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <button class="btn-add-cart" onclick="store.addToCart('${product.id}')">
              <i class="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
});

function toggleWishlistBtn(btn, productId) {
  const added = store.toggleWishlist(productId);
  const icon = btn.querySelector('i');
  if (added) {
    btn.classList.add('active');
    icon.className = 'bi bi-heart-fill';
  } else {
    btn.classList.remove('active');
    icon.className = 'bi bi-heart';
  }
}
