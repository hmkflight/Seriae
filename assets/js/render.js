// RENDER.JS - Simple templating helpers for rendering dynamic content

const Render = {
    // Create an HTML element with attributes and children
    html(tag, attrs = {}, ...children) {
        const element = document.createElement(tag);

        // Set attributes
        Object.entries(attrs).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key === 'dataset') {
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    element.dataset[dataKey] = dataValue;
                });
            } else if (key.startsWith('on') && typeof value === 'function') {
                const eventName = key.slice(2).toLowerCase();
                element.addEventListener(eventName, value);
            } else {
                element.setAttribute(key, value);
            }
        });

        // Append children
        children.flat().forEach(child => {
            if (child == null) return;
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });

        return element;
    },

    // Render a list of items using a template function
    renderList(selector, items, templateFn) {
        const container = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;

        if (!container) return;

        container.innerHTML = '';

        if (!items || items.length === 0) {
            container.innerHTML = '<p class="empty-message">No items found</p>';
            return;
        }

        items.forEach((item, index) => {
            const element = templateFn(item, index);
            if (element) {
                container.appendChild(element);
            }
        });
    },

    // Safely escape HTML to prevent XSS
    safe(text) {
        if (text == null) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // Format currency
    currency(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    },

    // Format date
    formatDate(dateString, options = {}) {
        const date = new Date(dateString);
        const defaultOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(date);
    },

    // Format relative time
    relativeTime(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 60) {
            return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
        } else if (diffHours < 24) {
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 7) {
            return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        } else {
            return this.formatDate(dateString);
        }
    },

    // Calculate time remaining until a date
    timeRemaining(endDateString) {
        const end = new Date(endDateString);
        const now = new Date();
        const diffMs = end - now;

        if (diffMs <= 0) {
            return 'Ended';
        }

        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffDays > 0) {
            return `${diffDays}d ${diffHours % 24}h`;
        } else if (diffHours > 0) {
            return `${diffHours}h ${diffMins % 60}m`;
        } else {
            return `${diffMins}m`;
        }
    },

    // Truncate text with ellipsis
    truncate(text, maxLength = 100) {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    },

    // Create item card template
    itemCard(item) {
        const isWatched = window.DataService?.isInWatchlist(item.id);

        return this.html('div', { className: 'auction-card', 'data-item-id': item.id },
            this.html('a', { href: `/item/${item.slug}.html`, className: 'auction-image-link' },
                this.html('div', { className: 'auction-image' },
                    this.html('img', {
                        src: item.cover,
                        alt: `${item.brand} ${item.title}`,
                        loading: 'lazy',
                        width: '400',
                        height: '300'
                    }),
                    this.html('div', {
                        className: `availability-indicator ${item.status === 'auction' ? 'active' : ''}`
                    }),
                    this.html('button', {
                        className: `watchlist-btn ${isWatched ? 'active' : ''}`,
                        'aria-label': 'Add to watchlist',
                        onclick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const added = window.DataService.toggleWatchlist(item.id);
                            e.target.classList.toggle('active', added);
                            window.UI.toast(
                                added ? 'Added to watchlist' : 'Removed from watchlist',
                                'success'
                            );
                        }
                    }, '★')
                )
            ),
            this.html('div', { className: 'auction-info' },
                this.html('div', { className: 'item-details' },
                    this.html('h3', {},
                        this.html('a', { href: `/item/${item.slug}.html` }, item.title)
                    ),
                    this.html('p', { className: 'brand' }, item.brand),
                    this.html('p', { className: 'year' },
                        `${item.year} · ${item.condition}`
                    )
                ),
                this.html('div', { className: 'pricing' },
                    this.html('div', { className: 'current-price' },
                        this.html('span', { className: 'amount' }, this.currency(item.price))
                    ),
                    this.html('div', { className: 'auction-status' },
                        this.html('span', { className: 'time-remaining' },
                            item.status === 'auction' && item.endsAtISO
                                ? `${this.timeRemaining(item.endsAtISO)} remaining`
                                : item.status === 'appointment'
                                ? 'By appointment'
                                : 'Available now'
                        )
                    )
                ),
                this.html('button', {
                    className: 'btn-primary full-width',
                    onclick: () => {
                        if (item.status === 'auction') {
                            window.UI.openModal('bid-modal');
                            // Set modal data
                            document.getElementById('bid-item-id').value = item.id;
                            document.getElementById('bid-item-title').textContent = item.title;
                            document.getElementById('bid-current-price').textContent = this.currency(item.price);
                        } else {
                            window.UI.openModal('interest-modal');
                            document.getElementById('interest-item-id').value = item.id;
                            document.getElementById('interest-item-title').textContent = item.title;
                        }
                    }
                },
                    item.status === 'auction' ? 'Place Bid' :
                    item.status === 'appointment' ? 'Request Appointment' :
                    'Submit Interest'
                )
            )
        );
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.Render = Render;
}
