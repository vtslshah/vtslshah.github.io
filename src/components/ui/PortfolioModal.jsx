import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function PortfolioModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';

      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };

      window.addEventListener('keydown', handleEsc);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="portfolio-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="portfolio-modal-header">
              <button
                className="portfolio-modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="portfolio-modal-body">
              <div className="portfolio-modal-grid">
                <img className="portfolio-modal-image" src={project.image} alt={project.title} />
                <div>
                  <h3>
                    <span>{project.techStack}</span>
                    {project.title}
                  </h3>
                  <p className="portfolio-modal-description">{project.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
