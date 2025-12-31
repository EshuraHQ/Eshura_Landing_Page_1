export interface NavLink {
    name: string;
    href: string;
}

/**
 * Main navigation links used in Navbar and Footer
 */
export const NAV_LINKS: NavLink[] = [
    { name: 'About us', href: '/#about-us' },
    { name: 'Services', href: '/#services' },
    { name: 'Use Cases', href: '/#use-cases' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
];

/**
 * Social media links for Footer
 */
export const SOCIAL_LINKS = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/eshura',
        path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
    },
    {
        id: 'facebook',
        label: 'Facebook',
        href: 'https://facebook.com/eshura',
        path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
    },
    {
        id: 'x',
        label: 'X (Twitter)',
        href: 'https://x.com/eshura',
        path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    },
];

/**
 * Contact information
 */
export const CONTACT_INFO = {
    email: 'contact@eshura.com',
    phone: '+91 86701 79031',
    address: {
        line1: 'Barasat,',
        line2: 'Kolkata, West Bengal, Pin - 700126',
    },
};
