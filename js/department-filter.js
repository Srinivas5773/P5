/**
 * Department Catalog and Hierarchy Filter
 * Manages category trees, tag indexing, and department filtering.
 */

class DepartmentFilter {
  constructor() {
    this.departments = ['Fashion', 'Mobiles', 'Furniture', 'Groceries'];
  }

  filterByDepartment(products, dept) {
    if (!dept || dept === 'All') return products;
    return products.filter(p => (p.category || p.department || '').toLowerCase() === dept.toLowerCase());
  }

  getDepartmentStats(products) {
    const stats = {};
    this.departments.forEach(d => { stats[d] = 0; });
    products.forEach(p => {
      const dept = p.category || p.department;
      if (stats[dept] !== undefined) {
        stats[dept] += 1;
      }
    });
    return stats;
  }
}

module.exports = new DepartmentFilter();
