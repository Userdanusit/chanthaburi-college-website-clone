// Main JavaScript file for Chanthaburi Technical College website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website initialized successfully');
    
    // Initialize all components
    initializeSlider();
    initializeMobileNavigation();
    initializeScrollEffects();
    initializeImageLazyLoading();
});

// Image Slider/Carousel functionality
function initializeSlider() {
    try {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (slides.length === 0) {
            console.warn('No slides found for slider initialization');
            return;
        }
        
        let currentSlide = 0;
        let slideInterval;
        
        // Function to show specific slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }
        
        // Function to go to next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Function to go to previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Auto-advance slides
        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 5000); // 5 seconds per slide
        }
        
        // Stop auto-advance
        function stopSlideshow() {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        }
        
        // Event listeners for manual controls
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                stopSlideshow();
                nextSlide();
                startSlideshow();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                stopSlideshow();
                prevSlide();
                startSlideshow();
            });
        }
        
        // Pause slideshow on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopSlideshow);
            heroSection.addEventListener('mouseleave', startSlideshow);
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                stopSlideshow();
                prevSlide();
                startSlideshow();
            } else if (e.key === 'ArrowRight') {
                stopSlideshow();
                nextSlide();
                startSlideshow();
            }
        });
        
        // Start the slideshow
        startSlideshow();
        
        console.log('Slider initialized successfully with', slides.length, 'slides');
        
    } catch (error) {
        console.error('Error initializing slider:', error);
    }
}

// Mobile Navigation Toggle
function initializeMobileNavigation() {
    try {
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (!menuToggle || !navMenu) {
            console.warn('Mobile navigation elements not found');
            return;
        }
        
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            
            // Update button text for accessibility
            const isOpen = navMenu.classList.contains('open');
            menuToggle.textContent = isOpen ? 'Close' : 'Menu';
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                menuToggle.textContent = 'Menu';
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('open');
                menuToggle.textContent = 'Menu';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('open');
                menuToggle.textContent = 'Menu';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        console.log('Mobile navigation initialized successfully');
        
    } catch (error) {
        console.error('Error initializing mobile navigation:', error);
    }
}

// Scroll effects and animations
function initializeScrollEffects() {
    try {
        // Smooth scrolling for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Header background change on scroll
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.backgroundColor = '#ffffff';
                    header.style.backdropFilter = 'none';
                }
            });
        }
        
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.news-card, .content-text, .content-image');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
        
        console.log('Scroll effects initialized successfully');
        
    } catch (error) {
        console.error('Error initializing scroll effects:', error);
    }
}

// Lazy loading for images
function initializeImageLazyLoading() {
    try {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
            
            console.log('Image lazy loading initialized for', lazyImages.length, 'images');
        }
    } catch (error) {
        console.error('Error initializing image lazy loading:', error);
    }
}

// Form validation (for future contact form)
function validateForm(form) {
    try {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            const errorElement = field.parentNode.querySelector('.error-message');
            
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                
                if (!errorElement) {
                    const error = document.createElement('div');
                    error.className = 'error-message';
                    error.textContent = 'This field is required';
                    field.parentNode.appendChild(error);
                }
            } else {
                field.classList.remove('error');
                if (errorElement) {
                    errorElement.remove();
                }
            }
        });
        
        // Email validation
        const emailFields = form.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
            if (field.value && !isValidEmail(field.value)) {
                isValid = false;
                field.classList.add('error');
                
                const errorElement = field.parentNode.querySelector('.error-message');
                if (!errorElement) {
                    const error = document.createElement('div');
                    error.className = 'error-message';
                    error.textContent = 'Please enter a valid email address';
                    field.parentNode.appendChild(error);
                }
            }
        });
        
        return isValid;
    } catch (error) {
        console.error('Error validating form:', error);
        return false;
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Error handling for images
function handleImageError(img) {
    img.style.display = 'none';
    console.warn('Failed to load image:', img.src);
    
    // Create placeholder
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.style.cssText = `
        width: 100%;
        height: 200px;
        background-color: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
        font-size: 0.875rem;
    `;
    placeholder.textContent = 'Image not available';
    
    img.parentNode.insertBefore(placeholder, img);
}

// Add error handlers to all images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            handleImageError(this);
        });
    });
});

// Performance monitoring
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page load time:', loadTime + 'ms');
            }, 0);
        });
    }
}

// Initialize performance monitoring
logPerformance();

// Export functions for potential external use
window.ChanthaburiTech = {
    initializeSlider,
    initializeMobileNavigation,
    validateForm,
    isValidEmail
};
