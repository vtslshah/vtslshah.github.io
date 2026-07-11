import { motion } from 'framer-motion';
import { CloudUpload, Database, Code, Server, Settings, HardDrive } from 'lucide-react';

const iconMap = { CloudUpload, Database, Code, Server, Settings, HardDrive };

export default function ServiceCard({ icon, title, description, delay = 0 }) {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="service-icon">
        {IconComponent && <IconComponent size={24} />}
      </div>
      <h4 className="service-title">{title}</h4>
      <p className="service-description">{description}</p>
    </motion.div>
  );
}
