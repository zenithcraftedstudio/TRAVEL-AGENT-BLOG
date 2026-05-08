// ============================================
// BILINGUAL TRANSLATIONS (EN/VI)
// ============================================
// Load translations from Google Sheets API

// Fallback translations (used if API fails)
const FALLBACK_TRANSLATIONS = {
  vi: {
    site_name: 'Travel Vietnam',
    hero_title: 'Khám phá Việt Nam',
    hero_subtitle: 'Reviews chi tiết, lịch trình tối ưu, gợi ý khách sạn tốt nhất',
    nav_all: 'Tất cả',
    nav_reviews: 'Reviews',
    nav_itinerary: 'Lịch trình',
    nav_comparison: 'So sánh',
    filter_search: 'Tìm kiếm địa điểm, khách sạn...',
    filter_all: 'Tất cả loại',
    filter_review: 'Review',
    filter_itinerary: 'Lịch trình',
    filter_comparison: 'So sánh',
    filter_sort_newest: 'Mới nhất',
    filter_sort_popular: 'Phổ biến',
    post_read_more: 'Đọc tiếp',
    post_views: 'lượt xem',
    loading_posts: 'Đang tải bài viết...',
    empty_title: 'Không tìm thấy bài viết',
    empty_subtitle: 'Thử tìm kiếm với từ khóa khác',
    category_review: 'Review',
    category_itinerary: 'Lịch trình',
    category_comparison: 'So sánh'
  },
  en: {
    site_name: 'Travel Vietnam',
    hero_title: 'Discover Vietnam',
    hero_subtitle: 'Detailed reviews, optimized itineraries, best hotel recommendations',
    nav_all: 'All',
    nav_reviews: 'Reviews',
    nav_itinerary: 'Itineraries',
    nav_comparison: 'Comparisons',
    filter_search: 'Search destinations, hotels...',
    filter_all: 'All types',
    filter_review: 'Review',
    filter_itinerary: 'Itinerary',
    filter_comparison: 'Comparison',
    filter_sort_newest: 'Newest',
    filter_sort_popular: 'Popular',
    post_read_more: 'Read more',
    post_views: 'views',
    loading_posts: 'Loading posts...',
    empty_title: 'No posts found',
    empty_subtitle: 'Try searching with different keywords',
    category_review: 'Review',
    category_itinerary: 'Itinerary',
    category_comparison: 'Comparison'
  }
};

// Active translations (loaded from API or fallback)
let TRANSLATIONS = {...FALLBACK_TRANSLATIONS};

// Load translations from Google Sheets
async function loadTranslations() {
  try {
    // Wait briefly for config.js to finish loading (race condition fix)
    if (!window.CONFIG || !window.CONFIG.SCRIPT_URL) {
      await new Promise(r => setTimeout(r, 100));
    }
    // Check again after wait
    if (!window.CONFIG || !window.CONFIG.SCRIPT_URL) {
      return FALLBACK_TRANSLATIONS;
    }

    const response = await fetch(`${window.CONFIG.SCRIPT_URL}?path=translations`);
    
    if (!response.ok) {
      throw new Error('Failed to load translations');
    }
    
    const data = await response.json();
    
    // Merge with fallback (in case some keys are missing)
    TRANSLATIONS = {
      vi: {...FALLBACK_TRANSLATIONS.vi, ...data.vi},
      en: {...FALLBACK_TRANSLATIONS.en, ...data.en}
    };
    
    console.log('✅ Translations loaded from Google Sheets');
    return TRANSLATIONS;
  } catch (error) {
    console.warn('⚠️ Using fallback translations:', error.message);
    return FALLBACK_TRANSLATIONS;
  }
}

// Get current language from localStorage or default to Vietnamese
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'vi';
}

// Set language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}

// Get translation
function t(key) {
  const lang = getCurrentLanguage();
  return TRANSLATIONS[lang][key] || FALLBACK_TRANSLATIONS[lang][key] || key;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS, loadTranslations, getCurrentLanguage, setLanguage, t };
}
