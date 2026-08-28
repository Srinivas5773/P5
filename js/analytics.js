/**
 * SRINIVAS ECOMMERCE - ADVANCED ADMIN ANALYTICS & INSIGHTS
 * Generates revenue charts, conversion metrics, category sales breakdown, and export CSV reports.
 */

class AdminAnalytics {
  getCategoryBreakdown() {
    const products = store.getProducts();
    const breakdown = { fashion: 0, mobiles: 0, furniture: 0, groceries: 0 };
    products.forEach(p => {
      if (breakdown[p.category] !== undefined) {
        breakdown[p.category] += (p.stock || 0);
      }
    });
    return breakdown;
  }

  exportProductsCSV() {
    const products = store.getProducts();
    let csv = "ID,Name,Category,Subcategory,Brand,Price,Stock,Rating\n";
    products.forEach(p => {
      csv += `"${p.id}","${p.name}","${p.category}","${p.subcategory}","${p.brand}",${p.price},${p.stock},${p.rating}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Srinivas_Store_Inventory_${Date.now()}.csv`;
    a.click();
    showToast('Inventory report exported as CSV!', 'success');
  }
}

const analytics = new AdminAnalytics();
