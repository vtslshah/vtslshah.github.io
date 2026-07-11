import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillBar({ name, percentage, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar-label">
        <h6>{name}</h6>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
