import { useState, useCallback } from 'react';
import SectionTitle from '../ui/SectionTitle';
import PortfolioCard from '../ui/PortfolioCard';
import PortfolioModal from '../ui/PortfolioModal';
import { portfolioData } from '../../data/portfolio';
import '../../styles/portfolio.css';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="portfolio" className="portfolio-section section-separator">
      <div className="container section-gap">
        <SectionTitle
          subtitle="Explore my portfolio and share your valuable feedback."
          title="Browse Portfolio"
        />
        <div className="portfolio-grid">
          {portfolioData.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>

      <PortfolioModal project={selectedProject} onClose={handleClose} />
    </section>
  );
}
