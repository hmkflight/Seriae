// SEARCH.JS - Unified fuzzy search across items and posts

const Search = {
    index: null,
    debounceTimer: null,

    // Initialize search index
    async init() {
        const items = await window.DataService.getItems();
        const posts = await window.DataService.getPosts();

        this.index = [
            ...items.map(item => ({
                type: 'item',
                id: item.id,
                title: item.title,
                brand: item.brand,
                description: item.description || '',
                tags: item.tags.join(' '),
                searchText: `${item.brand} ${item.title} ${item.model} ${item.description || ''} ${item.tags.join(' ')}`.toLowerCase(),
                url: `/item/${item.slug}.html`,
                cover: item.cover,
                price: item.price
            })),
            ...posts.map(post => ({
                type: 'post',
                id: post.id,
                title: post.title,
                summary: post.summary,
                category: post.category,
                tags: post.tags.join(' '),
                searchText: `${post.title} ${post.summary} ${post.category} ${post.tags.join(' ')}`.toLowerCase(),
                url: `/blog/${post.slug}.html`,
                cover: post.cover,
                date: post.date
            }))
        ];

        return this.index;
    },

    // Perform fuzzy search
    search(query) {
        if (!query || query.length < 2) return [];
        if (!this.index) return [];

        const queryLower = query.toLowerCase();
        const words = queryLower.split(/\s+/);

        return this.index
            .map(item => {
                let score = 0;

                // Exact title match gets highest score
                if (item.title.toLowerCase().includes(queryLower)) {
                    score += 100;
                }

                // Brand match
                if (item.brand && item.brand.toLowerCase().includes(queryLower)) {
                    score += 80;
                }

                // Search text match for each word
                words.forEach(word => {
                    if (item.searchText.includes(word)) {
                        score += 10;
                    }
                });

                // Category/type match
                if (item.category && item.category.toLowerCase().includes(queryLower)) {
                    score += 20;
                }

                return { ...item, score };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 20); // Limit to top 20 results
    },

    // Debounced search
    searchDebounced(query, callback, delay = 300) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            const results = this.search(query);
            callback(results);
        }, delay);
    },

    // Highlight matches in text
    highlightMatches(text, query) {
        if (!query || query.length < 2) return text;

        const words = query.split(/\s+/);
        let highlighted = text;

        words.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi');
            highlighted = highlighted.replace(regex, '<mark>$1</mark>');
        });

        return highlighted;
    },

    // Render search results
    renderResults(container, results, query = '') {
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = `
                <div class="search-empty">
                    <p>No results found for "${query}"</p>
                    <p class="search-empty-hint">Try different keywords or browse our collections</p>
                </div>
            `;
            return;
        }

        const resultsHTML = results.map(result => {
            if (result.type === 'item') {
                return `
                    <a href="${result.url}" class="search-result search-result-item">
                        <img src="${result.cover}" alt="${result.title}" class="search-result-image">
                        <div class="search-result-content">
                            <span class="search-result-type">Product</span>
                            <h3 class="search-result-title">${this.highlightMatches(result.title, query)}</h3>
                            <p class="search-result-brand">${result.brand}</p>
                            <p class="search-result-price">${window.Render.currency(result.price)}</p>
                        </div>
                    </a>
                `;
            } else {
                return `
                    <a href="${result.url}" class="search-result search-result-post">
                        <div class="search-result-content">
                            <span class="search-result-type">${result.category}</span>
                            <h3 class="search-result-title">${this.highlightMatches(result.title, query)}</h3>
                            <p class="search-result-summary">${this.highlightMatches(result.summary, query)}</p>
                            <time class="search-result-date">${window.Render.formatDate(result.date)}</time>
                        </div>
                    </a>
                `;
            }
        }).join('');

        container.innerHTML = resultsHTML;
    },

    // Setup search input with auto-suggestions
    setupSearchInput(inputSelector, resultsSelector) {
        const input = document.querySelector(inputSelector);
        const resultsContainer = document.querySelector(resultsSelector);

        if (!input || !resultsContainer) return;

        // Initialize index
        this.init();

        input.addEventListener('input', (e) => {
            const query = e.target.value;

            if (query.length < 2) {
                resultsContainer.innerHTML = '';
                resultsContainer.style.display = 'none';
                return;
            }

            this.searchDebounced(query, (results) => {
                this.renderResults(resultsContainer, results, query);
                resultsContainer.style.display = 'block';
            });
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = 'none';
            }
        });

        // Keyboard navigation
        let selectedIndex = -1;

        input.addEventListener('keydown', (e) => {
            const results = resultsContainer.querySelectorAll('.search-result');

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
                    updateSelection();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    selectedIndex = Math.max(selectedIndex - 1, -1);
                    updateSelection();
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (selectedIndex >= 0 && results[selectedIndex]) {
                        results[selectedIndex].click();
                    }
                    break;
                case 'Escape':
                    resultsContainer.style.display = 'none';
                    selectedIndex = -1;
                    break;
            }

            function updateSelection() {
                results.forEach((result, index) => {
                    result.classList.toggle('selected', index === selectedIndex);
                });
                if (selectedIndex >= 0 && results[selectedIndex]) {
                    results[selectedIndex].scrollIntoView({ block: 'nearest' });
                }
            }
        });
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.Search = Search;
}
