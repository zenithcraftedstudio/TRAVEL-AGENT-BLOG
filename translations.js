// ============================================
// BILINGUAL TRANSLATIONS (EN/VI)
// ============================================
// Travel blog tone - No AI mentions

const TRANSLATIONS = {
  vi: {
    // Header & Navigation
    site_name: 'Travel Vietnam',
    nav_all: 'Tất cả',
    nav_reviews: 'Reviews',
    nav_itinerary: 'Lịch trình',
    nav_comparison: 'So sánh',
    
    // Hero Section
    hero_title: 'Khám phá Việt Nam',
    hero_subtitle: 'Reviews chi tiết, lịch trình tối ưu, và gợi ý khách sạn tốt nhất',
    
    // Filter Bar
    filter_search: 'Tìm kiếm địa điểm, khách sạn...',
    filter_all: 'Tất cả loại',
    filter_review: 'Review',
    filter_itinerary: 'Lịch trình',
    filter_comparison: 'So sánh',
    filter_sort_newest: 'Mới nhất',
    filter_sort_popular: 'Phổ biến',
    
    // Post Card
    post_read_more: 'Đọc tiếp',
    post_views: 'lượt xem',
    
    // Loading & Empty States
    loading_posts: 'Đang tải bài viết...',
    empty_title: 'Không tìm thấy bài viết',
    empty_subtitle: 'Thử tìm kiếm với từ khóa khác',
    error_load: 'Không thể tải bài viết. Vui lòng thử lại sau',
    
    // Post Detail Page
    post_hotels_title: '🏨 Khách sạn đề xuất',
    post_activities_title: '🎫 Hoạt động & Tour',
    post_loading: 'Đang tải bài viết...',
    
    // Buttons
    btn_view_agoda: 'Xem giá Agoda',
    btn_view_booking: 'Xem giá Booking',
    btn_book_klook: 'Đặt qua Klook',
    btn_book_traveloka: 'Đặt qua Traveloka',
    
    // Price
    price_from: 'Từ',
    price_per_night: '/đêm',
    
    // Categories
    category_review: 'Review',
    category_itinerary: 'Lịch trình',
    category_comparison: 'So sánh',
    
    // Admin Panel
    admin_title: 'Quản lý Blog',
    admin_tab_outline: '✍️ Tạo Outline',
    admin_tab_posts: '📝 Quản lý bài viết',
    admin_tab_outlines: '💡 Outlines chờ duyệt',
    admin_tab_analytics: '📊 Thống kê'
  },
  
  en: {
    // Header & Navigation
    site_name: 'Travel Vietnam',
    nav_all: 'All',
    nav_reviews: 'Reviews',
    nav_itinerary: 'Itineraries',
    nav_comparison: 'Comparisons',
    
    // Hero Section
    hero_title: 'Discover Vietnam',
    hero_subtitle: 'Detailed reviews, optimized itineraries, and best hotel recommendations',
    
    // Filter Bar
    filter_search: 'Search destinations, hotels...',
    filter_all: 'All types',
    filter_review: 'Review',
    filter_itinerary: 'Itinerary',
    filter_comparison: 'Comparison',
    filter_sort_newest: 'Newest',
    filter_sort_popular: 'Popular',
    
    // Post Card
    post_read_more: 'Read more',
    post_views: 'views',
    
    // Loading & Empty States
    loading_posts: 'Loading posts...',
    empty_title: 'No posts found',
    empty_subtitle: 'Try searching with different keywords',
    error_load: 'Unable to load posts. Please try again later',
    
    // Post Detail Page
    post_hotels_title: '🏨 Recommended Hotels',
    post_activities_title: '🎫 Activities & Tours',
    post_loading: 'Loading post...',
    
    // Buttons
    btn_view_agoda: 'View on Agoda',
    btn_view_booking: 'View on Booking',
    btn_book_klook: 'Book on Klook',
    btn_book_traveloka: 'Book on Traveloka',
    
    // Price
    price_from: 'From',
    price_per_night: '/night',
    
    // Categories
    category_review: 'Review',
    category_itinerary: 'Itinerary',
    category_comparison: 'Comparison',
    
    // Admin Panel
    admin_title: 'Blog Admin',
    admin_tab_outline: '✍️ Create Outline',
    admin_tab_posts: '📝 Manage Posts',
    admin_tab_outlines: '💡 Pending Outlines',
    admin_tab_analytics: '📊 Analytics'
  }
};

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
  return TRANSLATIONS[lang][key] || key;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS, getCurrentLanguage, setLanguage, t };
}
