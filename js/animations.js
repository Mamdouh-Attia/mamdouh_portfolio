/**
 * Animations - Scroll reveal and counter animations
 */

class AnimationManager {
    constructor() {
        this.observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupScrollReveal();
            this.setupCounters();
            this.setupParallax();
        });
    }

    setupScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Optionally unobserve after revealing
                        // observer.unobserve(entry.target);
                    }
                });
            }, this.observerOptions);

            revealElements.forEach(el => observer.observe(el));
        } else {
            // Fallback for older browsers
            revealElements.forEach(el => el.classList.add('visible'));
        }
    }

    setupCounters() {
        const counterElements = document.querySelectorAll('.counter');

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.dataset.counted) {
                        entry.target.dataset.counted = 'true';
                        this.animateCounter(entry.target);
                    }
                });
            }, this.observerOptions);

            counterElements.forEach(el => observer.observe(el));
        } else {
            // Fallback
            counterElements.forEach(el => {
                el.textContent = el.dataset.target || el.textContent;
            });
        }
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.target, 10);
        const duration = parseInt(element.dataset.duration, 10) || 2000;
        const suffix = element.dataset.suffix || '';
        const prefix = element.dataset.prefix || '';

        if (isNaN(target)) return;

        const startTime = performance.now();
        const startValue = 0;

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (target - startValue) * easeOut);

            element.textContent = prefix + currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = prefix + target.toLocaleString() + suffix;
            }
        };

        requestAnimationFrame(updateCounter);
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');

        if (parallaxElements.length === 0) return;

        let ticking = false;

        const updateParallax = () => {
            const scrollY = window.scrollY;

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.speed) || 0.5;
                const offset = scrollY * speed;
                el.style.transform = `translateY(${offset}px)`;
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
    }
}

// Typing effect helper
function typeText(element, text, speed = 50) {
    return new Promise((resolve) => {
        let index = 0;
        element.textContent = '';

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        };

        type();
    });
}

// Staggered reveal helper
function staggerReveal(container, delay = 100) {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
        child.style.transitionDelay = `${index * delay}ms`;
        child.classList.add('visible');
    });
}

// Initialize animation manager
const animationManager = new AnimationManager();

// Export helpers
export { typeText, staggerReveal };
export default animationManager;
