import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { servicesData } from '../../data/services';
import '../../styles/features.css';

export default function Features() {
  return (
    <section id="features" className="features-section section-separator">
      <div className="container section-gap">
        <SectionTitle
          subtitle="Features"
          title="My Expertise"
          centered={false}
        />
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
