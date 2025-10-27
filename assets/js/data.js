// DATA.JS - DEMO MODE
// All backend/API/localStorage functionality commented out for presentation demo

const DataService = {
    cache: {},
    store: {},
    DEMO_MODE: true,

    // Initialize store - DEMO MODE (localStorage disabled)
    init() {
        // DEMO MODE: localStorage disabled
        // const stored = localStorage.getItem('SERIAE_STORE');
        // if (stored) {
        //     try {
        //         this.store = JSON.parse(stored);
        //     } catch (e) {
        //         console.warn('Failed to parse stored data:', e);
        //         this.store = {};
        //     }
        // }
        console.log('✨ SERIAE Demo Mode Active - Backend disabled');
        return this;
    },

    // Fetch JSON - DEMO MODE (fetch disabled)
    async fetchJSON(url) {
        // DEMO MODE: All fetch calls disabled
        // if (this.cache[url]) {
        //     return this.cache[url];
        // }
        // try {
        //     const response = await fetch(url);
        //     if (!response.ok) {
        //         throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        //     }
        //     const data = await response.json();
        //     this.cache[url] = data;
        //     return data;
        // } catch (error) {
        //     console.error(`Failed to fetch ${url}:`, error);
        //     return null;
        // }
        return null;
    },

    // Get all items - DEMO MODE
    async getItems() {
        // DEMO MODE: Returns empty array
        return [];
    },

    // Get single item by slug - DEMO MODE
    async getItemBySlug(slug) {
        return null;
    },

    // Get items by category - DEMO MODE
    async getItemsByCategory(category) {
        return [];
    },

    // Get items by status - DEMO MODE
    async getItemsByStatus(status) {
        return [];
    },

    // Get auction data - DEMO MODE
    async getAuctions() {
        return { active: [], history: [] };
    },

    // Get user data - DEMO MODE
    async getUser() {
        return {};
    },

    // Get exhibitions - DEMO MODE
    async getExhibitions() {
        return [];
    },

    // Get consignments - DEMO MODE
    async getConsignments() {
        return {};
    },

    // Get posts - DEMO MODE
    async getPosts() {
        return [];
    },

    // Get post by slug - DEMO MODE
    async getPostBySlug(slug) {
        return null;
    },

    // WATCHLIST MANAGEMENT - DEMO MODE (localStorage disabled)
    getWatchlist() {
        // DEMO MODE: Returns empty array
        return [];
    },

    addToWatchlist(itemId) {
        // DEMO MODE: localStorage disabled
        console.log('[DEMO] Watchlist add disabled');
        return false;
    },

    removeFromWatchlist(itemId) {
        // DEMO MODE: localStorage disabled
        console.log('[DEMO] Watchlist remove disabled');
        return false;
    },

    isInWatchlist(itemId) {
        return false;
    },

    toggleWatchlist(itemId) {
        // DEMO MODE: localStorage disabled
        console.log('[DEMO] Watchlist toggle disabled');
        return false;
    },

    // BIDS MANAGEMENT - DEMO MODE (localStorage disabled)
    getBids() {
        return [];
    },

    addBid(itemId, amount, itemTitle, brand) {
        // DEMO MODE: localStorage disabled
        console.log('[DEMO] Bid submission disabled');
        return null;
    },

    getBidsByItemId(itemId) {
        return [];
    },

    // LEADS MANAGEMENT - DEMO MODE (localStorage disabled)
    getLeads() {
        return [];
    },

    addLead(leadData) {
        // DEMO MODE: localStorage disabled
        console.log('[DEMO] Lead submission disabled');
        return null;
    },

    // SELLER SUBMISSIONS - DEMO MODE (localStorage disabled)
    getSubmissions() {
        return [];
    },

    addSubmission(submissionData) {
        // DEMO MODE: localStorage disabled
        console.log('[DEMO] Seller submission disabled');
        return null;
    },

    // USER DATA UPDATES - DEMO MODE (localStorage disabled)
    updateUserProfile(updates) {
        // DEMO MODE: localStorage disabled
        console.log('[DEMO] Profile update disabled');
        return {};
    },

    getUserProfile() {
        return null;
    },

    // CLEAR ALL DATA - DEMO MODE
    clearAllData() {
        console.log('[DEMO] Data clearing disabled');
    }
};

// Initialize on load
DataService.init();

// Export for global use
if (typeof window !== 'undefined') {
    window.DataService = DataService;
}
