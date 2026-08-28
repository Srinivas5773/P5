/**
 * SRINIVAS ECOMMERCE - CHECKOUT & ORDERS CONTROLLER
 * Form handling, Payment method selection, Order confirmation, LocalStorage Persistence
 */

document.addEventListener('DOMContentLoaded', () => {
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    initCheckoutPage();
  }

  const ordersListContainer = document.getElementById('orders-list');
  if (ordersListContainer) {
    renderOrdersPage();
  }
});

function initCheckoutPage() {
  const cart = store.getCart();
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'warning');
    setTimeout(() => window.location.href = 'shop.html', 1500);
    return;
  }

  // Calculate order total
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const tax = Math.round(subtotal * 0.05);
  const shipping = subtotal > 1000 ? 0 : 99;
  const grandTotal = subtotal + tax + shipping;

  const checkoutSubtotal = document.getElementById('checkout-subtotal');
  const checkoutTotal = document.getElementById('checkout-grandtotal');
  if (checkoutSubtotal) checkoutSubtotal.textContent = `₹${subtotal.toLocaleString()}`;
  if (checkoutTotal) checkoutTotal.textContent = `₹${grandTotal.toLocaleString()}`;

  // Render items summary
  const itemsContainer = document.getElementById('checkout-items-summary');
  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(i => `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-size:0.9rem;">
        <span>${i.name} <strong>x${i.quantity}</strong></span>
        <span style="font-weight:700;">₹${(i.price * i.quantity).toLocaleString()}</span>
      </div>
    `).join('');
  }

  // Payment Method Switching Tabs
  const paymentOptions = document.querySelectorAll('input[name="payment-mode"]');
  paymentOptions.forEach(opt => {
    opt.addEventListener('change', (e) => {
      document.querySelectorAll('.payment-tab-content').forEach(tab => tab.style.display = 'none');
      const selectedTab = document.getElementById(`payment-tab-${e.target.value}`);
      if (selectedTab) selectedTab.style.display = 'block';
    });
  });

  // Handle Order Form Submit
  const form = document.getElementById('checkout-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;
    const city = document.getElementById('cust-city').value;
    const pincode = document.getElementById('cust-pincode').value;
    const paymentMode = document.querySelector('input[name="payment-mode"]:checked').value;

    const orderId = 'SRIN-' + Math.floor(100000 + Math.random() * 900000);
    const orderData = {
      orderId,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      items: cart,
      shippingDetails: { fullName, phone, address, city, pincode },
      paymentMode: paymentMode.toUpperCase(),
      grandTotal,
      status: 'Order Placed'
    };

    store.addOrder(orderData);
    showOrderSuccessModal(orderData);
  });
}

function showOrderSuccessModal(order) {
  let modal = document.getElementById('order-success-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'order-success-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-card" style="text-align:center;">
      <div style="width:70px; height:70px; background:rgba(16,185,129,0.15); color:var(--success); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2.5rem; margin:0 auto 1rem;">
        <i class="bi bi-check-circle-fill"></i>
      </div>
      <h2 style="font-size:1.6rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem;">Order Successfully Placed!</h2>
      <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:1.5rem;">Thank you, <strong>${order.shippingDetails.fullName}</strong>. Your order ID is <span style="color:var(--primary); font-weight:700;">#${order.orderId}</span>.</p>
      
      <div style="background-color:var(--bg-subtle); padding:1rem; border-radius:var(--radius-md); text-align:left; margin-bottom:1.5rem; font-size:0.9rem;">
        <div style="display:flex; justify-space-between; margin-bottom:0.4rem;">
          <span>Deliver To:</span>
          <strong>${order.shippingDetails.city}, ${order.shippingDetails.pincode}</strong>
        </div>
        <div style="display:flex; justify-space-between; margin-bottom:0.4rem;">
          <span>Payment Mode:</span>
          <strong>${order.paymentMode}</strong>
        </div>
        <div style="display:flex; justify-space-between;">
          <span>Total Amount:</span>
          <strong style="color:var(--primary); font-size:1.1rem;">₹${order.grandTotal.toLocaleString()}</strong>
        </div>
      </div>

      <div style="display:flex; gap:1rem;">
        <a href="orders.html" class="btn-checkout" style="flex:1;">View Order Status</a>
        <a href="shop.html" class="btn-filter-reset" style="flex:1; display:flex; align-items:center; justify-content:center;">Continue Shopping</a>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function renderOrdersPage() {
  const orders = store.getOrders();
  const container = document.getElementById('orders-list');
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:4rem 1rem;">
        <i class="bi bi-box-seam" style="font-size:3.5rem; color:var(--text-muted);"></i>
        <h3 style="margin-top:1rem; color:var(--text-main);">No Orders Yet</h3>
        <p style="color:var(--text-muted); margin-bottom:1.5rem;">When you place orders, they will show up here.</p>
        <a href="shop.html" class="btn-checkout" style="max-width:220px; margin:0 auto;">Start Shopping</a>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(order => `
    <div style="background-color:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.5rem; margin-bottom:1.5rem; box-shadow:var(--shadow-sm);">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1rem;">
        <div>
          <span style="font-size:0.85rem; color:var(--text-muted);">Order ID</span>
          <div style="font-weight:800; color:var(--primary); font-size:1.1rem;">#${order.orderId}</div>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.85rem; color:var(--text-muted);">${order.date}</span>
          <div style="background-color:var(--primary-light); color:var(--primary); font-weight:700; font-size:0.8rem; padding:0.2rem 0.6rem; border-radius:var(--radius-full); width:fit-content; margin-left:auto;">${order.status}</div>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.8rem; margin-bottom:1.25rem;">
        ${order.items.map(item => `
          <div style="display:flex; align-items:center; gap:1rem;">
            <img src="${item.image}" alt="${item.name}" style="width:48px; height:48px; object-fit:cover; border-radius:var(--radius-sm); background:var(--bg-subtle);" />
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.9rem; color:var(--text-main);">${item.name}</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">Qty: ${item.quantity} • ₹${item.price.toLocaleString()}</div>
            </div>
            <div style="font-weight:700; color:var(--text-main);">₹${(item.price * item.quantity).toLocaleString()}</div>
          </div>
        `).join('')}
      </div>

      <div style="border-top:1px dashed var(--border-color); padding-top:1rem; display:flex; justify-content:space-between; align-items:center; font-size:0.95rem;">
        <span>Total Paid: <strong style="color:var(--text-main); font-size:1.1rem;">₹${order.grandTotal.toLocaleString()}</strong> (${order.paymentMode})</span>
        <button class="btn-filter-reset" style="width:auto; padding:0.4rem 1rem;" onclick="showToast('Order details sent to your registered mobile number!', 'info')">Track Order</button>
      </div>
    </div>
  `).join('');
}
