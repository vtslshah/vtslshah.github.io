import { motion } from 'framer-motion';

const styles = `
.section-title.text-center {
  text-align: center;
}

.section-subtitle {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
}

.section-heading {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: white;
}
`;

export default function SectionTitle({ subtitle, title, centered = true }) {
  return (
    <>
      <style>{styles}</style>
      <motion.div
        className={`section-title ${centered ? 'text-center' : ''}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">{subtitle}</span>
        <h2 className="section-heading">{title}</h2>
      </motion.div>
    </>
  );
}
