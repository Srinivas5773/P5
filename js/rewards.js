/**
 * SRINIVAS ECOMMERCE - LOYALTY REWARDS & POINTS ENGINE
 * Manages customer wallet points, tier levels (Silver, Gold, Platinum), and referral bonuses.
 */

class RewardsManager {
  constructor() {
    this.key = 'srinivas_rewards_wallet';
    this.init();
  }

  init() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify({
        points: 250,
        tier: 'Gold Member',
        referralCode: 'SRINIVAS-REF-' + Math.floor(1000 + Math.random() * 9000),
        history: [
          { date: '2026-08-01', desc: 'Welcome Bonus Points', points: 250, type: 'EARNED' }
        ]
      }));
    }
  }

  getWallet() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  addPoints(points, reason) {
    let wallet = this.getWallet();
    wallet.points += points;
    wallet.history.unshift({
      date: new Date().toISOString().split('T')[0],
      desc: reason,
      points: points,
      type: 'EARNED'
    });
    localStorage.setItem(this.key, JSON.stringify(wallet));
    showToast(`Earned +${points} Srinivas Reward Points!`, 'success');
  }

  redeemPoints(points) {
    let wallet = this.getWallet();
    if (wallet.points >= points) {
      wallet.points -= points;
      wallet.history.unshift({
        date: new Date().toISOString().split('T')[0],
        desc: 'Points Redemption on Checkout',
        points: points,
        type: 'REDEEMED'
      });
      localStorage.setItem(this.key, JSON.stringify(wallet));
      return true;
    }
    return false;
  }
}

const rewards = new RewardsManager();
