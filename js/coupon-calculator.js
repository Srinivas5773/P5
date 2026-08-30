/**
 * Coupon Validator and Cart Discount Calculator
 * Calculates percentage discounts, flat coupons, and free shipping thresholds.
 */

class CouponCalculator {
  constructor() {
    this.coupons = {
      SAVE10: { type: 'percent', value: 10, minOrder: 500 },
      MEGA20: { type: 'percent', value: 20, minOrder: 1500 },
      FLAT100: { type: 'flat', value: 100, minOrder: 1000 }
    };
    this.freeShippingThreshold = 999;
    this.defaultShippingFee = 49;
  }

  calculateDiscount(code, cartTotal) {
    const coupon = this.coupons[(code || '').toUpperCase()];
    if (!coupon || cartTotal < coupon.minOrder) {
      return 0;
    }
    if (coupon.type === 'percent') {
      return Math.round((cartTotal * coupon.value) / 100);
    }
    return coupon.value;
  }

  calculateShipping(cartTotal) {
    return cartTotal >= this.freeShippingThreshold ? 0 : this.defaultShippingFee;
  }
}

module.exports = new CouponCalculator();
