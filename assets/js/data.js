// DATA.JS - Data fetching and localStorage store management
// Handles JSON loading with in-memory cache and localStorage-based delta store

const DataService = {
    cache: {},
    store: {},

    // Initialize store from localStorage
    init() {
        const stored = localStorage.getItem('SERIAE_STORE');
        if (stored) {
            try {
                this.store = JSON.parse(stored);
            } catch (e) {
                console.warn('Failed to parse stored data:', e);
                this.store = {};
            }
        }
        return this;
    },

    // Fetch JSON with caching
    async fetchJSON(url) {
        if (this.cache[url]) {
            return this.cache[url];
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            this.cache[url] = data;
            return data;
        } catch (error) {
            console.error(`Failed to fetch ${url}:`, error);
            return null;
        }
    },

    // Get all items
    async getItems() {
        const data = await this.fetchJSON('/data/items.json');
        return data?.items || [];
    },

    // Get single item by slug
    async getItemBySlug(slug) {
        const items = await this.getItems();
        return items.find(item => item.slug === slug);
    },

    // Get items by category
    async getItemsByCategory(category) {
        const items = await this.getItems();
        return items.filter(item => item.category === category);
    },

    // Get items by status
    async getItemsByStatus(status) {
        const items = await this.getItems();
        return items.filter(item => item.status === status);
    },

    // Get auction data
    async getAuctions() {
        const data = await this.fetchJSON('/data/auctions.json');
        return data || {};
    },

    // Get user data
    async getUser() {
        const data = await this.fetchJSON('/data/user.json');
        return data || {};
    },

    // Get exhibitions
    async getExhibitions() {
        const data = await this.fetchJSON('/data/exhibitions.json');
        return data?.exhibitions || [];
    },

    // Get consignments
    async getConsignments() {
        const data = await this.fetchJSON('/data/consignments.json');
        return data || {};
    },

    // Get posts
    async getPosts() {
        const data = await this.fetchJSON('/data/posts.json');
        return data?.posts || [];
    },

    // Get post by slug
    async getPostBySlug(slug) {
        const posts = await this.getPosts();
        return posts.find(post => post.slug === slug);
    },

    // WATCHLIST MANAGEMENT
    getWatchlist() {
        const watchlist = localStorage.getItem('SERIAE_WATCH');
        return watchlist ? JSON.parse(watchlist) : [];
    },

    addToWatchlist(itemId) {
        const watchlist = this.getWatchlist();
        if (!watchlist.includes(itemId)) {
            watchlist.push(itemId);
            localStorage.setItem('SERIAE_WATCH', JSON.stringify(watchlist));
            return true;
        }
        return false;
    },

    removeFromWatchlist(itemId) {
        let watchlist = this.getWatchlist();
        watchlist = watchlist.filter(id => id !== itemId);
        localStorage.setItem('SERIAE_WATCH', JSON.stringify(watchlist));
        return true;
    },

    isInWatchlist(itemId) {
        return this.getWatchlist().includes(itemId);
    },

    toggleWatchlist(itemId) {
        if (this.isInWatchlist(itemId)) {
            this.removeFromWatchlist(itemId);
            return false;
        } else {
            this.addToWatchlist(itemId);
            return true;
        }
    },

    // BIDS MANAGEMENT
    getBids() {
        const bids = localStorage.getItem('SERIAE_BIDS');
        return bids ? JSON.parse(bids) : [];
    },

    addBid(itemId, amount, itemTitle, brand) {
        const bids = this.getBids();
        const bid = {
            bidId: `user-bid-${Date.now()}`,
            itemId,
            itemTitle,
            brand,
            myAmount: amount,
            currentHighBid: amount,
            myStatus: 'winning',
            placedAt: new Date().toISOString()
        };
        bids.push(bid);
        localStorage.setItem('SERIAE_BIDS', JSON.stringify(bids));
        return bid;
    },

    getBidsByItemId(itemId) {
        return this.getBids().filter(bid => bid.itemId === itemId);
    },

    // LEADS MANAGEMENT (contact forms, interest submissions)
    getLeads() {
        const leads = localStorage.getItem('SERIAE_LEADS');
        return leads ? JSON.parse(leads) : [];
    },

    addLead(leadData) {
        const leads = this.getLeads();
        const lead = {
            id: `lead-${Date.now()}`,
            timestamp: new Date().toISOString(),
            ...leadData
        };
        leads.push(lead);
        localStorage.setItem('SERIAE_LEADS', JSON.stringify(leads));
        return lead;
    },

    // SELLER SUBMISSIONS
    getSubmissions() {
        const submissions = localStorage.getItem('SERIAE_SUBMISSIONS');
        return submissions ? JSON.parse(submissions) : [];
    },

    addSubmission(submissionData) {
        const submissions = this.getSubmissions();
        const submission = {
            id: `sub-${Date.now()}`,
            submittedAt: new Date().toISOString(),
            status: 'In Review',
            ...submissionData
        };
        submissions.push(submission);
        localStorage.setItem('SERIAE_SUBMISSIONS', JSON.stringify(submissions));
        return submission;
    },

    // USER DATA UPDATES
    updateUserProfile(updates) {
        const userData = this.store.userProfile || {};
        Object.assign(userData, updates);
        this.store.userProfile = userData;
        localStorage.setItem('SERIAE_STORE', JSON.stringify(this.store));
        return userData;
    },

    getUserProfile() {
        return this.store.userProfile || null;
    },

    // CLEAR ALL DATA (for testing)
    clearAllData() {
        localStorage.removeItem('SERIAE_WATCH');
        localStorage.removeItem('SERIAE_BIDS');
        localStorage.removeItem('SERIAE_LEADS');
        localStorage.removeItem('SERIAE_SUBMISSIONS');
        localStorage.removeItem('SERIAE_STORE');
        this.cache = {};
        this.store = {};
    }
};

// Initialize on load
DataService.init();

// Export for global use
if (typeof window !== 'undefined') {
    window.DataService = DataService;
}
