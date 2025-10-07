document.addEventListener('DOMContentLoaded', function() {

    // LUXURY BAG SILHOUETTES SHOWCASE SYSTEM
    const luxuryBags = [
        { name: 'neverfull', displayName: 'Louis Vuitton Neverfull', brand: 'Louis Vuitton' },
        { name: 'chanel', displayName: 'Chanel Classic Flap', brand: 'Chanel' },
        { name: 'birkin', displayName: 'Hermès Birkin', brand: 'Hermès' },
        { name: 'gucci', displayName: 'Gucci Jackie', brand: 'Gucci' }
    ];

    let currentBagIndex = 0;

    // Initialize random bag on page load with elegant cycling
    function initializeRandomBag() {
        // Get random bag or use stored preference
        const storedIndex = sessionStorage.getItem('seriae-current-bag');
        if (storedIndex !== null) {
            currentBagIndex = parseInt(storedIndex);
        } else {
            currentBagIndex = Math.floor(Math.random() * luxuryBags.length);
            sessionStorage.setItem('seriae-current-bag', currentBagIndex.toString());
        }

        // Show the selected bag
        showBag(currentBagIndex);
    }

    function showBag(index) {
        const bags = document.querySelectorAll('.product-3d');

        // Hide all bags with elegant transition
        bags.forEach(bag => {
            bag.classList.remove('active');
        });

        // Show selected bag with sophisticated fade-in
        setTimeout(() => {
            if (bags[index]) {
                bags[index].classList.add('active');

                // Optional: Add console log for development (can be removed in production)
                console.log(`✨ Now showcasing: ${luxuryBags[index].displayName} by ${luxuryBags[index].brand}`);
            }
        }, 800);
    }

    // Cycle to next bag every 18 seconds with luxury pacing
    function startBagCycle() {
        setInterval(() => {
            currentBagIndex = (currentBagIndex + 1) % luxuryBags.length;
            sessionStorage.setItem('seriae-current-bag', currentBagIndex.toString());
            showBag(currentBagIndex);
        }, 18000);
    }

    // Initialize the luxury bag showcase
    initializeRandomBag();
    startBagCycle();

    // Generate new random bag on page reload for variety
    window.addEventListener('beforeunload', function() {
        const newIndex = Math.floor(Math.random() * luxuryBags.length);
        sessionStorage.setItem('seriae-current-bag', newIndex.toString());
    });

    // Smooth scrolling for navigation links with luxury timing
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Refined navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 150) {
            navbar.style.transform = 'translateY(-100%)';
            navbar.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        }

        // Add background opacity based on scroll
        if (scrollTop > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }

        lastScrollTop = scrollTop;
    });

    // Refined countdown for exclusive auctions
    function updateCountdown() {
        const timeElements = document.querySelectorAll('.time-remaining');

        timeElements.forEach(element => {
            const timeText = element.textContent;

            if (timeText.includes('remaining')) {
                const parts = timeText.split(' ');
                if (parts[0].includes('h')) {
                    let hours = parseInt(parts[0].replace('h', ''));
                    let minutes = Math.floor(Math.random() * 60); // Simulate minutes

                    // Gradually decrease
                    if (Math.random() > 0.8) {
                        minutes = Math.max(0, minutes - Math.floor(Math.random() * 10));
                        if (minutes === 0 && hours > 0) {
                            hours--;
                            minutes = 59;
                        }

                        if (hours <= 0) {
                            element.textContent = 'Auction concluded';
                            element.style.color = 'var(--text-muted)';
                        } else {
                            element.textContent = `${hours}h remaining`;
                        }
                    }
                }
            }
        });
    }

    // Update countdown every 2 minutes for luxury pacing
    setInterval(updateCountdown, 120000);

    // Sophisticated auction card interactions
    const auctionCards = document.querySelectorAll('.auction-card');

    auctionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        });
    });

    // Refined interest submission
    const interestButtons = document.querySelectorAll('.auction-card .btn-primary');

    interestButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const card = this.closest('.auction-card');
            const itemName = card.querySelector('h3').textContent;
            const currentPrice = card.querySelector('.amount').textContent;

            // Luxury interaction feedback
            const originalText = this.textContent;
            const originalStyle = {
                backgroundColor: this.style.backgroundColor,
                color: this.style.color,
                borderColor: this.style.borderColor
            };

            this.textContent = 'Interest Registered';
            this.style.backgroundColor = 'var(--emerald)';
            this.style.color = 'var(--ivory)';
            this.style.borderColor = 'var(--emerald)';

            // Create elegant feedback animation
            card.style.transform = 'scale(1.02)';

            setTimeout(() => {
                card.style.transform = 'scale(1)';
                this.textContent = originalText;
                this.style.backgroundColor = originalStyle.backgroundColor;
                this.style.color = originalStyle.color;
                this.style.borderColor = originalStyle.borderColor;
            }, 3000);
        });
    });

    // Luxury hero interactions - now handled by onclick handlers in HTML

    // Enhanced intersection observer for luxury reveals
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            }
        });
    }, observerOptions);

    // Observe elements for sophisticated reveals
    const animatedElements = document.querySelectorAll('.auction-card, .philosophy-stat, .prestige-item');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transitionDelay = `${index * 0.1}s`; // Stagger effect
        observer.observe(el);
    });

    // Refined price movement simulation
    function simulateMarketActivity() {
        const priceElements = document.querySelectorAll('.amount');

        setInterval(() => {
            if (Math.random() > 0.85) { // 15% chance of price movement
                const randomPrice = priceElements[Math.floor(Math.random() * priceElements.length)];
                const currentAmount = parseFloat(randomPrice.textContent.replace('$', '').replace(',', ''));

                // Smaller, more realistic increments for luxury items
                const increment = Math.floor(Math.random() * 200) + 50;
                const newAmount = currentAmount + increment;

                randomPrice.textContent = `$${newAmount.toLocaleString()}`;

                // Subtle gold highlight effect
                randomPrice.style.color = 'var(--champagne-gold)';
                randomPrice.style.transition = 'color 0.8s ease';

                setTimeout(() => {
                    randomPrice.style.color = 'var(--ivory)';
                }, 2000);
            }
        }, 20000); // Check every 20 seconds for refined pacing
    }

    // Start market activity simulation
    simulateMarketActivity();

    // Enhanced parallax effect for 3D luxury showcase
    function initParallax() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-content');
            const luxuryShowcase = document.querySelector('.luxury-showcase');

            if (hero && scrolled < window.innerHeight) {
                // Parallax for background
                hero.style.transform = `translateY(${scrolled * 0.2}px)`;

                // Subtle movement for content
                heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;

                // 3D showcase responds to scroll for added depth
                if (luxuryShowcase) {
                    const rotationY = scrolled * 0.1;
                    const rotationX = scrolled * 0.05;
                    luxuryShowcase.style.transform = `
                        translate(-50%, -50%)
                        rotateY(${rotationY}deg)
                        rotateX(${rotationX}deg)
                    `;
                }
            }
        });
    }

    // Initialize parallax effect
    initParallax();

    // Performance optimization for 3D elements
    function optimizePerformance() {
        // Reduce animation complexity on lower-end devices
        const isLowPerformance = navigator.hardwareConcurrency < 4 ||
                                navigator.deviceMemory < 4;

        if (isLowPerformance) {
            // Disable complex animations for smoother experience
            const style = document.createElement('style');
            style.textContent = `
                .product-3d.active {
                    animation-duration: 30s !important;
                }
                .luxury-glow {
                    animation: none !important;
                    opacity: 0.3 !important;
                }
                .watch .second-hand {
                    animation-duration: 120s !important;
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Apply performance optimizations
    optimizePerformance();

    // Add subtle cursor tracking for cards
    function initCursorEffects() {
        const cards = document.querySelectorAll('.auction-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    // Initialize cursor effects
    initCursorEffects();

    // DROPDOWN MENU FUNCTIONALITY
    function initializeDropdowns() {
        const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

        dropdownTriggers.forEach(trigger => {
            const dropdown = trigger.closest('.nav-dropdown');
            const menu = dropdown.querySelector('.dropdown-menu');

            if (!menu) return;

            let hoverTimeout;

            // Show dropdown on hover with delay
            dropdown.addEventListener('mouseenter', function() {
                clearTimeout(hoverTimeout);
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.style.transform = 'translateY(0)';
            });

            // Hide dropdown on leave with delay for better UX
            dropdown.addEventListener('mouseleave', function() {
                hoverTimeout = setTimeout(() => {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.transform = 'translateY(-10px)';
                }, 150);
            });

            // Prevent dropdown from closing when hovering over menu
            menu.addEventListener('mouseenter', function() {
                clearTimeout(hoverTimeout);
            });

            // Handle dropdown item clicks
            const dropdownItems = menu.querySelectorAll('.dropdown-item');
            dropdownItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');

                    // Handle language selection
                    if (this.closest('.language-toggle')) {
                        e.preventDefault();
                        const langAttr = this.getAttribute('data-lang');

                        if (langAttr && window.Translation) {
                            // Switch language using Translation system
                            window.Translation.switchLanguage(langAttr);
                        }

                        // Close dropdown
                        menu.style.opacity = '0';
                        menu.style.visibility = 'hidden';
                        menu.style.transform = 'translateY(-10px)';
                    }
                });
            });
        });
    }

    // SIDEBAR NAVIGATION FUNCTIONALITY
    function initializeSidebar() {
        const sidebarLinks = document.querySelectorAll('.sidebar-link');

        sidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Update active state for sidebar navigation
                if (href && !href.includes('coming-soon.html') && href !== '#') {
                    // Remove active from all links
                    sidebarLinks.forEach(l => l.classList.remove('active'));
                    // Add active to clicked link
                    this.classList.add('active');
                }
            });

            // Add hover effects
            link.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = 'translateX(5px)';
                }
            });

            link.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = 'translateX(0)';
                }
            });
        });
    }

    // LUXURY FORM INTERACTIONS
    function initializeForms() {
        const formInputs = document.querySelectorAll('input, select');

        formInputs.forEach(input => {
            // Add focus/blur effects
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
                this.parentElement.style.transition = 'transform 0.3s ease';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });

        // Interest tag interactions
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.addEventListener('click', function() {
                this.classList.toggle('active');

                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(212, 175, 55, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.marginLeft = '-10px';
                ripple.style.marginTop = '-10px';

                this.style.position = 'relative';
                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // ENHANCED DASHBOARD CARDS
    function initializeDashboardCards() {
        const cards = document.querySelectorAll('.dashboard-card');

        cards.forEach(card => {
            // Add sophisticated hover parallax effect
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });

            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    // INITIALIZE ALL DASHBOARD FEATURES
    function initializeDashboardFeatures() {
        if (document.querySelector('.dashboard-layout')) {
            initializeDropdowns();
            initializeSidebar();
            initializeForms();
            initializeDashboardCards();

            console.log('✨ SERIAE Dashboard - Luxury management interface loaded');
        } else {
            // Still initialize dropdowns for main navigation
            initializeDropdowns();
        }
    }

    // Initialize dashboard features
    initializeDashboardFeatures();

    // Initialize Translation System
    if (window.Translation) {
        window.Translation.init();
        console.log('✨ Translation system initialized');
    }

    console.log('✨ SERIAE - Exclusive luxury experience loaded');
});