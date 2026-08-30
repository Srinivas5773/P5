/**
 * Real-Time Sales Telemetry and Revenue Forecaster
 * Aggregates daily transaction totals and projects sales trends.
 */

class SalesForecaster {
  constructor() {
    this.targetGrowthRate = 0.05; // 5% projected daily growth
  }

  aggregateRevenue(orders) {
    if (!orders || orders.length === 0) return { total: 0, count: 0, averageOrderValue: 0 };
    const total = orders.reduce((sum, o) => sum + (o.total || o.amount || 0), 0);
    return {
      total: Math.round(total * 100) / 100,
      count: orders.length,
      averageOrderValue: Math.round((total / orders.length) * 100) / 100
    };
  }

  forecastNextDay(currentTotal) {
    return Math.round(currentTotal * (1 + this.targetGrowthRate) * 100) / 100;
  }
}

module.exports = new SalesForecaster();
