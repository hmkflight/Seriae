// FORMS.JS - DEMO MODE
// Form validation enabled, but all submissions show demo mode alert

const Forms = {
    DEMO_MODE: true,

    // Validate form with built-in HTML5 validation + custom rules
    validate(form) {
        const errors = [];

        // Check HTML5 validity
        if (!form.checkValidity()) {
            const invalids = form.querySelectorAll(':invalid');
            invalids.forEach(field => {
                errors.push({
                    field: field.name,
                    message: field.validationMessage
                });
            });
        }

        // Custom validations
        const customValidations = form.querySelectorAll('[data-validate]');
        customValidations.forEach(field => {
            const rules = field.dataset.validate.split(',');
            rules.forEach(rule => {
                const value = field.value.trim();

                switch (rule) {
                    case 'email':
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                            errors.push({
                                field: field.name,
                                message: 'Please enter a valid email address'
                            });
                        }
                        break;
                    case 'phone':
                        if (!/^[\d\s\-\+\(\)]+$/.test(value)) {
                            errors.push({
                                field: field.name,
                                message: 'Please enter a valid phone number'
                            });
                        }
                        break;
                    case 'number':
                        if (isNaN(value) || value === '') {
                            errors.push({
                                field: field.name,
                                message: 'Please enter a valid number'
                            });
                        }
                        break;
                    case 'min-amount':
                        const minAmount = parseFloat(field.dataset.minAmount || 0);
                        if (parseFloat(value) < minAmount) {
                            errors.push({
                                field: field.name,
                                message: `Amount must be at least ${minAmount}`
                            });
                        }
                        break;
                }
            });
        });

        return errors;
    },

    // Display validation errors
    showErrors(form, errors) {
        // Clear previous errors
        form.querySelectorAll('.field-error').forEach(el => el.remove());
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        if (errors.length === 0) return;

        errors.forEach(error => {
            const field = form.querySelector(`[name="${error.field}"]`);
            if (field) {
                field.classList.add('error');
                const errorMsg = document.createElement('span');
                errorMsg.className = 'field-error';
                errorMsg.textContent = error.message;
                field.parentNode.appendChild(errorMsg);
            }
        });

        // Focus first error field
        const firstError = form.querySelector('.error');
        if (firstError) {
            firstError.focus();
        }
    },

    // Mock submit - DEMO MODE (shows alert instead of saving)
    async mockSubmit(form, storageKey, successMessage = 'Submitted successfully') {
        const errors = this.validate(form);

        if (errors.length > 0) {
            this.showErrors(form, errors);
            return { success: false, errors };
        }

        // Show loading state
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        // Simulate network latency (600-900ms)
        const latency = 600 + Math.random() * 300;
        await new Promise(resolve => setTimeout(resolve, latency));

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // DEMO MODE: Show alert instead of saving to localStorage
        // localStorage.setItem(storageKey, JSON.stringify(items));

        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Show demo mode alert
        if (window.UI && window.UI.toast) {
            window.UI.toast('🎭 DEMO MODE: Form submission disabled for presentation', 'info');
        } else {
            alert('🎭 DEMO MODE\n\nThis is a presentation demo. Form submissions are disabled.\n\nIn the live version, this would save your data.');
        }

        // DON'T reset form in demo mode so they can see their inputs
        // form.reset();

        return { success: true, data };
    },

    // Setup form with auto-validation and submission - DEMO MODE
    setup(formSelector, options = {}) {
        const form = typeof formSelector === 'string'
            ? document.querySelector(formSelector)
            : formSelector;

        if (!form) return;

        const {
            storageKey = null,
            successMessage = 'Submitted successfully',
            onSuccess = null,
            onError = null
        } = options;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const result = await this.mockSubmit(form, storageKey, successMessage);

            if (result.success) {
                if (onSuccess) {
                    onSuccess(result.data);
                }
            } else {
                if (onError) {
                    onError(result.errors);
                }
            }
        });

        // Real-time validation on blur
        form.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('blur', () => {
                const errors = this.validate(form);
                const fieldErrors = errors.filter(e => e.field === field.name);

                // Remove previous errors for this field
                const existingError = field.parentNode.querySelector('.field-error');
                if (existingError) {
                    existingError.remove();
                }
                field.classList.remove('error');

                // Show new errors if any
                if (fieldErrors.length > 0) {
                    field.classList.add('error');
                    const errorMsg = document.createElement('span');
                    errorMsg.className = 'field-error';
                    errorMsg.textContent = fieldErrors[0].message;
                    field.parentNode.appendChild(errorMsg);
                }
            });
        });
    },

    // Handle bid submission - DEMO MODE
    async submitBid(itemId, amount, itemTitle, brand) {
        // Simulate latency
        await new Promise(resolve => setTimeout(resolve, 700));

        // DEMO MODE: Show alert instead of adding bid
        console.log('[DEMO] Bid submission disabled');

        if (window.UI && window.UI.toast) {
            window.UI.toast('🎭 DEMO MODE: Bid submission disabled', 'info');
        }

        return { success: false, message: 'Demo mode - submissions disabled' };
    },

    // Handle interest/lead submission - DEMO MODE
    async submitInterest(itemId, itemTitle, contactInfo) {
        await new Promise(resolve => setTimeout(resolve, 600));

        // DEMO MODE: Show alert instead of adding lead
        console.log('[DEMO] Interest submission disabled');

        if (window.UI && window.UI.toast) {
            window.UI.toast('🎭 DEMO MODE: Interest submission disabled', 'info');
        }

        return { success: false, message: 'Demo mode - submissions disabled' };
    },

    // Handle product submission (seller) - DEMO MODE
    async submitProduct(productData) {
        await new Promise(resolve => setTimeout(resolve, 800));

        // DEMO MODE: Show alert instead of adding submission
        console.log('[DEMO] Product submission disabled');

        if (window.UI && window.UI.toast) {
            window.UI.toast('🎭 DEMO MODE: Product submission disabled', 'info');
        }

        return { success: false, message: 'Demo mode - submissions disabled' };
    },

    // Handle contact form - DEMO MODE
    async submitContact(contactData) {
        await new Promise(resolve => setTimeout(resolve, 650));

        // DEMO MODE: Show alert instead of adding lead
        console.log('[DEMO] Contact submission disabled');

        if (window.UI && window.UI.toast) {
            window.UI.toast('🎭 DEMO MODE: Contact form disabled', 'info');
        }

        return { success: false, message: 'Demo mode - submissions disabled' };
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.Forms = Forms;
}
