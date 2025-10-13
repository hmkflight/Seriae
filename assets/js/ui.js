// UI.JS - UI components: modals, toasts, lightbox, tabs, accordion
// Handles focus trapping, keyboard navigation, and accessible interactions

const UI = {
    activeModal: null,
    activeLightbox: null,
    toastQueue: [],

    // MODAL MANAGEMENT
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        // Close any existing modal
        if (this.activeModal) {
            this.closeModal();
        }

        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Focus first focusable element
        setTimeout(() => {
            const focusable = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length) {
                focusable[0].focus();
            }
        }, 100);

        this.activeModal = modal;
        this.setupModalListeners(modal);
    },

    closeModal() {
        if (!this.activeModal) return;

        this.activeModal.style.display = 'none';
        this.activeModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        this.activeModal = null;
    },

    setupModalListeners(modal) {
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Close on Esc key
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);

        // Close button
        const closeBtn = modal.querySelector('[data-close-modal]');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        // Focus trap
        this.setupFocusTrap(modal);
    },

    setupFocusTrap(container) {
        const focusable = container.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusable.length === 0) return;

        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];

        container.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        });
    },

    // TOAST NOTIFICATIONS
    toast(message, type = 'success', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.textContent = message;

        // Add icon
        const icon = document.createElement('span');
        icon.className = 'toast-icon';
        icon.textContent = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
        toast.prepend(icon);

        // Add to container or create one
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        container.appendChild(toast);

        // Animate in
        setTimeout(() => toast.classList.add('toast-show'), 10);

        // Remove after duration
        setTimeout(() => {
            toast.classList.remove('toast-show');
            setTimeout(() => toast.remove(), 300);
        }, duration);

        return toast;
    },

    // LIGHTBOX / GALLERY
    openLightbox(images, startIndex = 0) {
        if (!images || images.length === 0) return;

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close gallery">&times;</button>
            <button class="lightbox-prev" aria-label="Previous image">&lsaquo;</button>
            <button class="lightbox-next" aria-label="Next image">&rsaquo;</button>
            <div class="lightbox-content">
                <img src="" alt="" class="lightbox-image">
                <div class="lightbox-counter"></div>
            </div>
        `;

        document.body.appendChild(lightbox);
        this.activeLightbox = {
            element: lightbox,
            images,
            currentIndex: startIndex
        };

        this.updateLightboxImage();
        this.setupLightboxListeners();

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Show lightbox
        setTimeout(() => lightbox.classList.add('lightbox-active'), 10);
    },

    updateLightboxImage() {
        if (!this.activeLightbox) return;

        const { element, images, currentIndex } = this.activeLightbox;
        const img = element.querySelector('.lightbox-image');
        const counter = element.querySelector('.lightbox-counter');

        img.src = images[currentIndex];
        img.alt = `Image ${currentIndex + 1} of ${images.length}`;
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    },

    closeLightbox() {
        if (!this.activeLightbox) return;

        this.activeLightbox.element.classList.remove('lightbox-active');
        setTimeout(() => {
            this.activeLightbox.element.remove();
            this.activeLightbox = null;
        }, 300);

        document.body.style.overflow = '';
    },

    setupLightboxListeners() {
        if (!this.activeLightbox) return;

        const { element, images } = this.activeLightbox;

        // Close button
        element.querySelector('.lightbox-close').addEventListener('click', () => {
            this.closeLightbox();
        });

        // Navigation buttons
        element.querySelector('.lightbox-prev').addEventListener('click', () => {
            this.activeLightbox.currentIndex =
                (this.activeLightbox.currentIndex - 1 + images.length) % images.length;
            this.updateLightboxImage();
        });

        element.querySelector('.lightbox-next').addEventListener('click', () => {
            this.activeLightbox.currentIndex =
                (this.activeLightbox.currentIndex + 1) % images.length;
            this.updateLightboxImage();
        });

        // Keyboard navigation
        const handleKey = (e) => {
            if (!this.activeLightbox) return;

            switch (e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    element.querySelector('.lightbox-prev').click();
                    break;
                case 'ArrowRight':
                    element.querySelector('.lightbox-next').click();
                    break;
            }
        };

        document.addEventListener('keydown', handleKey);

        // Close on overlay click
        element.addEventListener('click', (e) => {
            if (e.target === element) {
                this.closeLightbox();
            }
        });
    },

    // TABS
    initTabs(tabsContainer) {
        const tabButtons = tabsContainer.querySelectorAll('[role="tab"]');
        const tabPanels = tabsContainer.querySelectorAll('[role="tabpanel"]');

        tabButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Deactivate all
                tabButtons.forEach(btn => {
                    btn.setAttribute('aria-selected', 'false');
                    btn.classList.remove('active');
                });
                tabPanels.forEach(panel => {
                    panel.setAttribute('hidden', 'true');
                });

                // Activate clicked
                button.setAttribute('aria-selected', 'true');
                button.classList.add('active');
                tabPanels[index].removeAttribute('hidden');
            });

            // Keyboard navigation
            button.addEventListener('keydown', (e) => {
                let newIndex = -1;

                if (e.key === 'ArrowLeft') {
                    newIndex = index === 0 ? tabButtons.length - 1 : index - 1;
                } else if (e.key === 'ArrowRight') {
                    newIndex = index === tabButtons.length - 1 ? 0 : index + 1;
                }

                if (newIndex !== -1) {
                    e.preventDefault();
                    tabButtons[newIndex].click();
                    tabButtons[newIndex].focus();
                }
            });
        });
    },

    // ACCORDION
    initAccordion(accordionContainer) {
        const buttons = accordionContainer.querySelectorAll('[data-accordion-trigger]');

        buttons.forEach(button => {
            const panel = button.nextElementSibling;

            button.addEventListener('click', () => {
                const isExpanded = button.getAttribute('aria-expanded') === 'true';

                button.setAttribute('aria-expanded', !isExpanded);
                button.classList.toggle('active');

                if (!isExpanded) {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                } else {
                    panel.style.maxHeight = '0';
                }
            });

            // Keyboard support
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });
    },

    // LOADING SPINNER
    showLoading(container) {
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = '<div class="spinner"></div>';
        container.appendChild(spinner);
        return spinner;
    },

    hideLoading(spinner) {
        if (spinner && spinner.parentNode) {
            spinner.remove();
        }
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.UI = UI;
}
