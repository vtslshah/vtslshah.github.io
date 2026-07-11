import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioCard({ project, onClick, delay = 0 }) {
  return (
    <motion.div
      className="portfolio-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="portfolio-thumbnail">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="portfolio-content">
        <span className="portfolio-category">{project.category}</span>
        <h4 className="portfolio-title">
          {project.title} <ArrowUpRight size={16} />
        </h4>
      </div>
    </motion.div>
  );
}
