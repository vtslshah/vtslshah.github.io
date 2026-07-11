import { motion } from 'framer-motion';

const styles = `
.resume-period {
  font-size: 0.8rem;
  color: var(--color-text-dim);
  margin-top: 4px;
}
`;

export default function ResumeItem({ item, type = 'education' }) {
  return (
    <>
      <style>{styles}</style>
      <motion.div
        className="resume-item"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="resume-item-heading">
          <div className="resume-item-title">
            <h4>{type === 'education' ? item.title : item.company}</h4>
            <span>{type === 'education' ? item.institution : item.role}</span>
          </div>
          <div className="resume-item-date">
            {type === 'education' ? item.score : item.period}
          </div>
        </div>
        {type === 'education' && (
          <div className="resume-period">{item.period}</div>
        )}
        <p className="resume-item-description">{item.description}</p>
      </motion.div>
    </>
  );
}
