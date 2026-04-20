/**
 * Internationalization (i18n) - Language switching and translations
 */

const LANG_KEY = 'portfolio-lang';
const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'ar'];

class I18nManager {
    constructor() {
        this.currentLang = this.getStoredLang() || this.getBrowserLang() || DEFAULT_LANG;
        this.translations = {};
        this.init();
    }

    async init() {
        // Load translations
        await this.loadTranslations(this.currentLang);

        // Apply language on DOM ready or immediately if already loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onReady());
        } else {
            this.onReady();
        }
    }

    onReady() {
        this.applyLanguage(this.currentLang);
        this.setupToggles();

        // Signal that i18n is ready
        window.i18nReady = true;
        document.dispatchEvent(new CustomEvent('i18nReady'));
    }

    getStoredLang() {
        try {
            const stored = localStorage.getItem(LANG_KEY);
            return SUPPORTED_LANGS.includes(stored) ? stored : null;
        } catch {
            return null;
        }
    }

    getBrowserLang() {
        const browserLang = navigator.language.split('-')[0];
        return SUPPORTED_LANGS.includes(browserLang) ? browserLang : null;
    }

    async loadTranslations(lang) {
        try {
            // Try relative path first (works with file:// protocol)
            const basePath = window.location.pathname.includes('/pages/') ? '../' : './';
            const response = await fetch(`${basePath}i18n/${lang}.json`);
            if (!response.ok) throw new Error('Failed to load translations');
            this.translations = await response.json();
            return this.translations;
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fall back to English
            if (lang !== 'en') {
                return this.loadTranslations('en');
            }
            return {};
        }
    }

    async setLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) {
            console.warn(`Unsupported language: ${lang}`);
            return;
        }

        await this.loadTranslations(lang);
        this.applyLanguage(lang);

        try {
            localStorage.setItem(LANG_KEY, lang);
        } catch {
            // localStorage not available
        }

        // Notify dynamic content (e.g. JS-rendered cards) to re-render
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    applyLanguage(lang) {
        this.currentLang = lang;

        // Set document direction and language
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        // Update all translatable elements
        this.translatePage();

        // Update toggle button text
        this.updateToggleText();
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.get(key);
            if (translation) {
                el.textContent = translation;
            }
        });

        // Handle placeholders
        const inputElements = document.querySelectorAll('[data-i18n-placeholder]');
        inputElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.get(key);
            if (translation) {
                el.placeholder = translation;
            }
        });

        // Handle aria-labels
        const ariaElements = document.querySelectorAll('[data-i18n-aria]');
        ariaElements.forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const translation = this.get(key);
            if (translation) {
                el.setAttribute('aria-label', translation);
            }
        });
    }

    get(key, fallback = '') {
        const keys = key.split('.');
        let value = this.translations;

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return fallback || key;
            }
        }

        return value || fallback || key;
    }

    toggle() {
        const newLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.setLanguage(newLang);
    }

    setupToggles() {
        const toggles = document.querySelectorAll('.lang-toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => this.toggle());
        });
        this.updateToggleText();
    }

    updateToggleText() {
        const toggles = document.querySelectorAll('.lang-toggle');
        toggles.forEach(toggle => {
            // Show the language to switch TO
            const targetLang = this.currentLang === 'en' ? 'ع' : 'EN';
            toggle.textContent = targetLang;
        });
    }
}

// Initialize i18n manager
const i18n = new I18nManager();

// Helper function for templates
window.t = (key, fallback) => i18n.get(key, fallback);

// Export for use in other modules
export default i18n;
