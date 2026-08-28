/**
 * SRINIVAS ECOMMERCE - CART CONTROLLER
 * Handles item table rendering, quantity changes, coupon codes, and pricing breakdown.
 */

document.addEventListener('DOMContentLoaded', () => {
  const cartTableBody = document.getElementById('cart-table-body');
  if (!cartTableBody) return; // Only runs on cart.html

  let appliedCoupon = null;

  renderCart();

  function renderCart() {
    const cart = store.getCart();
    const emptyCartView = document.getElementById('cart-empty-view');
    const cartContentGrid = document.getElementById('cart-content-grid');

    if (cart.length === 0) {
      if (emptyCartView) emptyCartView.style.display = 'block';
      if (cartContentGrid) cartContentGrid.style.display = 'none';
      return;
    }

    if (emptyCartView) emptyCartView.style.display = 'none';
    if (cartContentGrid) cartContentGrid.style.display = 'grid';

    cartTableBody.innerHTML = cart.map(item => `
      <tr>
        <td>
          <div class="cart-item-flex">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
            <div>
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-cat">${item.category.toUpperCase()} • ${item.brand}</div>
            </div>
          </div>
        </td>
        <td style="font-weight:700;">₹${item.price.toLocaleString()}</td>
        <td>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateQty('${item.id}', ${item.quantity - 1})">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQty('${item.id}', ${item.quantity + 1})">+</button>
          </div>
        </td>
        <td style="font-weight:800; color:var(--primary);">₹${(item.price * item.quantity).toLocaleString()}</td>
        <td>
          <button style="color:var(--danger); font-size:1.1rem;" onclick="store.removeFromCart('${item.id}'); renderCart();" title="Remove Item">
            <i class="bi bi-trash-fill"></i>
          </button>
        </td>
      </tr>
    `).join('');

    calculateTotals(cart);
  }

  window.updateQty = function(id, newQty) {
    store.updateCartQuantity(id, newQty);
    renderCart();
  };

  window.applyCoupon = function() {
    const couponInput = document.getElementById('coupon-input');
    const code = couponInput ? couponInput.value.trim().toUpperCase() : '';
    
    if (!code) {
      showToast('Please enter a coupon code', 'warning');
      return;
    }

    if (COUPONS[code]) {
      appliedCoupon = { code, ...COUPONS[code] };
      showToast(`Coupon "${code}" applied successfully!`, 'success');
      renderCart();
    } else {
      showToast('Invalid Coupon Code. Try "SAVE10" or "SRINIVAS20"', 'danger');
    }
  };

  function calculateTotals(cart) {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.05); // 5% GST
    const shipping = subtotal > 1000 ? 0 : 99; // Free shipping over ₹1000

    let discount = 0;
    if (appliedCoupon) {
      discount = Math.round((subtotal * appliedCoupon.discountPercent) / 100);
      if (appliedCoupon.maxDiscount && discount > appliedCoupon.maxDiscount) {
        discount = appliedCoupon.maxDiscount;
      }
    }

    const grandTotal = subtotal + tax + shipping - discount;

    document.getElementById('summary-subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('summary-tax').textContent = `₹${tax.toLocaleString()}`;
    document.getElementById('summary-shipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    
    const discountRow = document.getElementById('summary-discount-row');
    if (discountRow) {
      if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('summary-discount').textContent = `-₹${discount.toLocaleString()}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    document.getElementById('summary-grandtotal').textContent = `₹${grandTotal.toLocaleString()}`;
  }
});
