/**
 * SRINIVAS ECOMMERCE - ADMIN DASHBOARD CONTROLLER
 * Stats metrics summary, product creation form, inventory management table, delete/edit item operations.
 */

document.addEventListener('DOMContentLoaded', () => {
  const adminTableBody = document.getElementById('admin-inventory-body');
  if (!adminTableBody) return; // Only runs on admin.html

  renderAdminStats();
  renderInventoryTable();

  // Add Product Form Handler
  const addProductForm = document.getElementById('add-product-form');
  if (addProductForm) {
    addProductForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('new-prod-name').value;
      const category = document.getElementById('new-prod-cat').value;
      const brand = document.getElementById('new-prod-brand').value;
      const price = parseFloat(document.getElementById('new-prod-price').value);
      const originalPrice = parseFloat(document.getElementById('new-prod-origprice').value) || (price * 1.3);
      const stock = parseInt(document.getElementById('new-prod-stock').value);
      const description = document.getElementById('new-prod-desc').value;

      const newProduct = {
        id: 'custom-' + Date.now(),
        name,
        category,
        subcategory: 'Custom',
        brand,
        price,
        originalPrice,
        discount: Math.round(((originalPrice - price) / originalPrice) * 100),
        rating: 5.0,
        reviewsCount: 1,
        stock,
        badge: 'New Arrival',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="300" height="300" fill="%23f1f5f9"/><circle cx="150" cy="130" r="50" fill="%232563eb"/><text x="150" y="240" font-family="sans-serif" font-size="14" font-weight="bold" fill="%231e293b" text-anchor="middle">NEW PRODUCT</text></svg>',
        description,
        specs: { Category: category, Brand: brand }
      };

      const products = store.getProducts();
      products.unshift(newProduct);
      store.saveProducts(products);

      showToast(`Product "${name}" added to inventory!`, 'success');
      addProductForm.reset();
      renderAdminStats();
      renderInventoryTable();
    });
  }

  // Reset Store Dataset Handler
  const resetBtn = document.getElementById('reset-store-data');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all product inventory back to default mock data?')) {
        localStorage.removeItem('srinivas_products');
        store.initStorage();
        renderAdminStats();
        renderInventoryTable();
        showToast('Store dataset reset to default!', 'info');
      }
    });
  }

  function renderAdminStats() {
    const products = store.getProducts();
    const orders = store.getOrders();

    const totalSales = orders.reduce((acc, o) => acc + o.grandTotal, 0);
    const totalOrdersCount = orders.length;
    const totalProductsCount = products.length;
    const totalStock = products.reduce((acc, p) => acc + (p.stock || 0), 0);

    document.getElementById('stat-total-sales').textContent = `₹${totalSales.toLocaleString()}`;
    document.getElementById('stat-total-orders').textContent = totalOrdersCount;
    document.getElementById('stat-total-products').textContent = totalProductsCount;
    document.getElementById('stat-total-stock').textContent = totalStock;
  }

  function renderInventoryTable() {
    const products = store.getProducts();

    adminTableBody.innerHTML = products.map(p => `
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:0.8rem;">
            <img src="${p.image}" alt="${p.name}" style="width:40px; height:40px; object-fit:cover; border-radius:var(--radius-sm); background:var(--bg-subtle);" />
            <div>
              <div style="font-weight:700; font-size:0.9rem; color:var(--text-main);">${p.name}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">ID: ${p.id}</div>
            </div>
          </div>
        </td>
        <td><span style="text-transform:uppercase; font-size:0.8rem; font-weight:700; color:var(--primary);">${p.category}</span></td>
        <td style="font-weight:700;">₹${p.price.toLocaleString()}</td>
        <td>
          <span style="font-weight:700; color:${p.stock < 10 ? 'var(--danger)' : 'var(--success)'};">${p.stock || 0} units</span>
        </td>
        <td>
          <div style="display:flex; gap:0.5rem;">
            <button style="color:var(--primary); font-size:1.1rem;" onclick="editProductStock('${p.id}')" title="Update Stock">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button style="color:var(--danger); font-size:1.1rem;" onclick="deleteProduct('${p.id}')" title="Delete Product">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.deleteProduct = function(productId) {
    if (confirm('Delete this product from store catalog?')) {
      let products = store.getProducts().filter(p => p.id !== productId);
      store.saveProducts(products);
      renderAdminStats();
      renderInventoryTable();
      showToast('Product deleted from catalog', 'warning');
    }
  };

  window.editProductStock = function(productId) {
    const products = store.getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const newStockStr = prompt(`Update stock count for "${product.name}":`, product.stock || 0);
    if (newStockStr !== null) {
      const newStock = parseInt(newStockStr);
      if (!isNaN(newStock) && newStock >= 0) {
        product.stock = newStock;
        store.saveProducts(products);
        renderAdminStats();
        renderInventoryTable();
        showToast('Stock quantity updated!', 'success');
      }
    }
  };
});
