/**
 * Shared Navigation & Footer Component
 * Single source of truth for header and footer across all pages.
 * Usage: imported by main.js – injects into #site-header and #site-footer if present.
 */

const NAV_LINKS = [
    { href: 'index.html',       key: 'nav.home',         label: 'Home' },
    { href: 'projects.html',    key: 'nav.projects',     label: 'Projects' },
    { href: 'experience.html',  key: null,               label: 'Experience' },
    { href: 'learning.html',    key: 'nav.learning',     label: 'Learning' },
    { href: 'teaching.html',    key: 'nav.teaching',     label: 'Teaching' },
    { href: 'certificates.html',key: 'nav.certificates', label: 'Certificates' },
    { href: 'about.html',       key: 'nav.about',        label: 'About' },
    { href: 'contact.html',     key: 'nav.contact',      label: 'Contact' },
];

function buildAurora() {
    return `
    <div class="aurora-bg">
        <div class="aurora-blob aurora-blob--1"></div>
        <div class="aurora-blob aurora-blob--2"></div>
        <div class="aurora-blob aurora-blob--3"></div>
        <div class="aurora-blob aurora-blob--4"></div>
    </div>
    `;
}

function resolveRelativePath(href) {
    // Determine if we're in /pages/ subfolder
    const inPages = window.location.pathname.includes('/pages/');
    if (href === 'index.html') return inPages ? '../index.html' : './index.html';
    return inPages ? `./${href}` : `./pages/${href}`;
}

function getActivePage() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';
    return file;
}

function buildNavLinks(mobile = false) {
    const activePage = getActivePage();
    const cls = mobile ? 'mobile-nav-link' : 'nav-link';

    return NAV_LINKS.map(link => {
        const href = resolveRelativePath(link.href);
        const isActive = activePage === link.href || (activePage === '' && link.href === 'index.html');
        const activeClass = isActive ? ' active' : '';
        const i18nAttr = link.key ? ` data-i18n="${link.key}"` : '';
        return `<a href="${href}" class="${cls}${activeClass}"${i18nAttr}>${link.label}</a>`;
    }).join('\n        ');
}

function buildHeader() {
    return `
    <a href="#main-content" class="skip-link" data-i18n="accessibility.skipToContent">Skip to main content</a>

    <header class="header" id="site-header-el">
        <div class="header-inner">
            <a href="${resolveRelativePath('index.html')}" class="logo">
                <span class="logo-icon">M</span>
                <span>Mamdouh</span>
            </a>
            <nav class="nav">
                ${buildNavLinks(false)}
            </nav>
            <div class="header-actions">
                <button class="theme-toggle" aria-label="Toggle theme" data-i18n-aria="accessibility.themeToggle">
                    <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                    <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </button>
                <button class="lang-toggle" aria-label="Toggle language" data-i18n-aria="accessibility.langToggle">ع</button>
                <button class="menu-toggle" aria-label="Toggle menu" data-i18n-aria="accessibility.menuOpen">
                    <span class="menu-toggle-icon"><span></span><span></span><span></span></span>
                </button>
            </div>
        </div>
    </header>

    <nav class="mobile-menu" id="site-mobile-menu">
        <div class="mobile-nav">
            ${buildNavLinks(true)}
        </div>
    </nav>
    `;
}

function buildFooter() {
    return `
    <footer class="footer" id="site-footer-el">
        <div class="footer-inner">
            <div class="footer-content">
                <div class="footer-info">
                    <h3 class="footer-name">Mamdouh Ahmed Attia</h3>
                    <p class="footer-bio" data-i18n="footer.bio">Mobile Software Engineer specializing in Flutter</p>
                </div>
                <div class="footer-links">
                    <a href="${resolveRelativePath('projects.html')}" class="footer-link" data-i18n="nav.projects">Projects</a>
                    <a href="${resolveRelativePath('experience.html')}" class="footer-link">Experience</a>
                    <a href="${resolveRelativePath('about.html')}" class="footer-link" data-i18n="nav.about">About</a>
                    <a href="${resolveRelativePath('contact.html')}" class="footer-link" data-i18n="nav.contact">Contact</a>
                </div>
                <div class="footer-social">
                    <a href="https://github.com/Mamdouh-Attia" class="social-link" target="_blank" aria-label="GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/mamdouh-atia/" class="social-link" target="_blank" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="mailto:mamdouhattia31@gmail.com" class="social-link" aria-label="Email">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-copyright" data-i18n="footer.copyright">© 2024 Mamdouh Ahmed Attia. All rights reserved.</p>
                <div class="viewer-counter">
                    <span class="viewer-counter-dot"></span>
                    <span><span class="viewer-count">0</span> views</span>
                </div>
            </div>
        </div>
    </footer>
    `;
}

export function initSharedNav() {
    const headerSlot = document.getElementById('site-header');
    const footerSlot = document.getElementById('site-footer');

    // Inject Aurora background if not already present
    if (!document.querySelector('.aurora-bg')) {
        document.body.insertAdjacentHTML('afterbegin', buildAurora());
    }

    if (headerSlot) {
        headerSlot.outerHTML = buildHeader();
        initMobileMenu();
    }
    if (footerSlot) {
        footerSlot.outerHTML = buildFooter();
    }
}

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

export { buildHeader, buildFooter };
