/**
 * SRINIVAS ECOMMERCE - AI & VECTOR RECOMMENDATION ENGINE
 * Provides personalized product recommendations, related items, and recently viewed tracking.
 */

class RecommendationEngine {
  constructor() {
    this.storageKey = 'srinivas_recently_viewed';
  }

  trackViewed(productId) {
    let viewed = this.getRecentlyViewed();
    viewed = viewed.filter(id => id !== productId);
    viewed.unshift(productId);
    if (viewed.length > 12) viewed = viewed.slice(0, 12);
    localStorage.setItem(this.storageKey, JSON.stringify(viewed));
  }

  getRecentlyViewed() {
    return JSON.parse(localStorage.getItem(this.storageKey)) || [];
  }

  getRelatedProducts(productId, limit = 4) {
    const products = store.getProducts();
    const current = products.find(p => p.id === productId);
    if (!current) return products.slice(0, limit);

    return products
      .filter(p => p.id !== productId && (p.category === current.category || p.brand === current.brand))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }

  getPersonalizedRecommendations(limit = 8) {
    const viewedIds = this.getRecentlyViewed();
    const products = store.getProducts();

    if (viewedIds.length === 0) {
      return products.sort((a, b) => b.reviewsCount - a.reviewsCount).slice(0, limit);
    }

    const viewedProducts = products.filter(p => viewedIds.includes(p.id));
    const favoriteCategories = viewedProducts.map(p => p.category);

    return products
      .filter(p => favoriteCategories.includes(p.category) && !viewedIds.includes(p.id))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }
}

const recommender = new RecommendationEngine();
