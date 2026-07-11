import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SocialLinks from '../ui/SocialLinks';

export default function MobileMenu({ isOpen, onClose, navLinks, activeSection, onNavClick }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-header">
              <a href="#home" className="header-logo" onClick={(e) => { onNavClick(e, '#home'); }}>
                VATSAL SHAH
              </a>
              <button className="mobile-close-btn" onClick={onClose} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav">
              <ul>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className={activeSection === link.href.slice(1) ? 'active' : ''}
                      onClick={(e) => onNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mobile-menu-footer">
              <a
                className="btn-download-cv"
                href="/images/vatsal_shah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <div className="mobile-social">
                <span className="label">Find with me</span>
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
