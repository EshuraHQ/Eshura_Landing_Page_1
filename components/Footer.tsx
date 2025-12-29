
import React from 'react';

const FooterLogo: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 relative flex items-center justify-center">
      <svg className="w-full h-full text-white fill-none stroke-current" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 25V75L75 35" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M75 75V25L25 65" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span className="text-2xl font-bold tracking-tight text-white uppercase font-display">ESHURA</span>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-12">
      <div className="bg-[#0F1115] dark:bg-black rounded-5xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden border border-gray-800/50">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <FooterLogo />

          <nav className="flex flex-wrap gap-6 md:gap-10 text-sm md:text-base font-medium text-gray-400">
            {[
              { name: 'About us', href: '#about-us' },
              { name: 'Services', href: '#services' },
              { name: 'Use Cases', href: '#use-cases' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Blog', href: '/blog' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors underline decoration-1 underline-offset-4 decoration-transparent hover:decoration-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {[
              { id: 'linkedin', path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" },
              { id: 'facebook', path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
              { id: 'x', path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" }
            ].map((social) => (
              <a
                key={social.id}
                href="#"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group shadow-lg"
              >
                <svg className="w-4 h-4 fill-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="mb-6 inline-block bg-primary text-black font-bold px-3 py-1 rounded text-sm uppercase tracking-wider">
              Contact us:
            </div>
            <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed">
              <p>Email: <a href="mailto:contact@eshura.com" className="text-white hover:text-primary transition-colors">contact@eshura.com</a></p>
              <p>Phone: <span className="text-white">+91 86701 79031</span></p>
              <div className="pt-2 text-white/90">
                <p>Address: Barasat,</p>
                <p>Kolkata, West Bengal, Pin - 700126</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#191A23] rounded-3xl p-8 lg:p-12 h-full flex items-center border border-gray-800/50">
              <form className="w-full flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/20 whitespace-nowrap"
                >
                  Subscribe to news
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/80 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>© 2025 ESHURA. All Rights Reserved.</p>
          <a href="#" className="hover:text-primary transition-colors underline underline-offset-4 decoration-transparent hover:decoration-primary">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
