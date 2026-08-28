function calculateSubtotal(items) {
  return items.reduce((acc, i) => acc + (i.price * i.quantity), 0);
}

function calculateDiscount(subtotal, discountPercent) {
  return Math.round((subtotal * discountPercent) / 100);
}

module.exports = { calculateSubtotal, calculateDiscount };
