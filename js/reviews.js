/**
 * SRINIVAS ECOMMERCE - CUSTOMER REVIEWS & RATING ENGINE
 * Handles submitting user reviews, calculating dynamic averages, and verified buyer badges.
 */

class ReviewEngine {
  submitReview(productId, userName, rating, comment) {
    const products = store.getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (!product.customerReviews) product.customerReviews = [];

    const newReview = {
      user: userName || 'Verified Customer',
      rating: parseInt(rating),
      date: new Date().toISOString().split('T')[0],
      comment: comment
    };

    product.customerReviews.unshift(newReview);
    
    // Recalculate average rating
    const totalRating = product.customerReviews.reduce((sum, r) => sum + r.rating, 0);
    product.rating = round(totalRating / product.customerReviews.length, 1);
    product.reviewsCount = product.customerReviews.length;

    store.saveProducts(products);
    showToast('Thank you for submitting your review!', 'success');
  }
}

const reviewEngine = new ReviewEngine();
