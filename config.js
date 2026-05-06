// ============================================
// TRAVEL BLOG - CENTRALIZED CONFIG
// ============================================
// Chỉ cần sửa file này khi deploy!

const CONFIG = {
  // Google Apps Script API URL
  // Lấy từ: Extensions > Apps Script > Deploy > Web app URL
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzTNmBloaVKaQee5Qm7WjFH9amzJtlu-eEAfbL1sdQZNzH_-CRaMXNbs2HmKJdSvkj4ng/exec',
  
  // Site Settings
  SITE_NAME: 'Travel Vietnam AI Blog',
  SITE_URL: 'https://yourusername.github.io/travel-blog',
  
  // Cache Settings
  CACHE_KEY: 'travel_blog_cache',
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
  
  // Pagination
  POSTS_PER_PAGE: 12,
  
  // Analytics (optional)
  GA_ID: '', // Google Analytics ID (ex: G-XXXXXXXXXX)
  
  // Features Toggle
  FEATURES: {
    enableAnalytics: true,
    enableCaching: true,
    enableLazyLoad: true
  }
};

// Export for ES6 modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
