import React, { useState } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '../constants/navigation';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <footer className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 pb-6">
      <div className="bg-black dark:bg-card-dark rounded-3xl md:rounded-5xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden transition-colors duration-300">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
  <Logo variant="light" />
  <b className="text-lg font-semibold">Eshura</b>
</div>
            <div className="space-y-6 text-gray-400">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Contact</span>
                <p className="hover:text-white transition-colors">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-white">{CONTACT_INFO.email}</a>
                </p>
                <p className="hover:text-white transition-colors mt-1">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>{CONTACT_INFO.phone}</a>
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Address</span>
                <p className="text-gray-400 leading-relaxed">
                  {CONTACT_INFO.address.line1}<br />
                  {CONTACT_INFO.address.line2}
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white text-gray-400 hover:text-black flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-white"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Column (Span 4 - Centered) */}
          <div className="lg:col-span-4 lg:flex lg:justify-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider hidden lg:block">Explore</span>
              <nav className="flex flex-col gap-4" aria-label="Footer navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors font-medium text-base w-fit"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter Column (Span 4) */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold font-display mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-6">Get the latest AI insights and product updates delivered to your inbox.</p>

              <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none text-white focus:border-primary/50 focus:bg-white/10 transition-all w-full placeholder:text-gray-600"
                    required
                    disabled={status === 'loading' || status === 'success'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`
                    font-bold py-3.5 rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-2
                    ${status === 'success'
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-primary text-black hover:bg-white'
                    }
                    ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}
                  `}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {/* Subscribed! - Text visual only if needed, iconic is cleaner */}
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} ESHURA. All Rights Reserved.</p>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
