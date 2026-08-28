const cartController = require('../js/cart-logic.js');

describe('Srinivas Ecommerce Cart Suite', () => {
  test('should calculate subtotal correctly', () => {
    const items = [
      { price: 1000, quantity: 2 },
      { price: 500, quantity: 1 }
    ];
    const subtotal = cartController.calculateSubtotal(items);
    expect(subtotal).toBe(2500);
  });

  test('should apply 20% discount coupon correctly', () => {
    const total = 2000;
    const discount = cartController.calculateDiscount(total, 20);
    expect(discount).toBe(400);
  });
});
