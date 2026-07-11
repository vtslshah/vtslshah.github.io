import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SocialLinks from '../ui/SocialLinks';
import { Clock, CalendarCheck, ShieldCheck, Compass, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import '../../styles/contact.css';

const bookingFeatures = [
  { icon: <Clock size={20} />, title: '60-Minute Session', desc: 'A focused conversation about your product or idea.' },
  { icon: <CalendarCheck size={20} />, title: 'Flexible Scheduling', desc: 'Pick a time that fits your calendar.' },
  { icon: <ShieldCheck size={20} />, title: 'No Pressure', desc: 'A relaxed call with zero commitment.' },
  { icon: <Compass size={20} />, title: 'Expert Guidance', desc: 'Architecture, APIs, scalability, delivery.' },
];

const topics = [
  'Web Application Development', 'Backend Systems', 'API Design',
  'React & Laravel', 'Scalable Architecture', 'Performance Optimization',
  'Database Design', 'MVP Development', 'SaaS Products', 'Technical Consulting',
];

export default function Contact() {
  return (
    <section id="contacts" className="contact-section section-separator">
      <div className="container section-gap">
        <SectionTitle subtitle="Contact" title="Let's Talk Business" />

        <div className="contact-grid">
          {/* PROFILE CARD */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card-header">
              <div className="contact-avatar-shell">
                <img src="/images/contact1.png" alt="Vatsal Shah" className="contact-avatar" />
                <span className="avatar-status" title="Available for new projects" />
              </div>
              <div>
                <h4 className="contact-name">Vatsal A. Shah</h4>
                <p className="contact-role">Senior Full Stack Developer</p>
                <div className="contact-stack">
                  <span>Laravel</span><span>React</span><span>Node.js</span>
                </div>
              </div>
            </div>

            <p className="contact-desc">
              I help founders and teams build modern web platforms with solid
              architecture, fast delivery, and clean implementation.
            </p>

            <div className="contact-divider" />

            <ul className="contact-details">
              <li>
                <span className="detail-icon"><Phone size={16} /></span>
                <a href="tel:+918160309471">+91 81603 09471</a>
              </li>
              <li>
                <span className="detail-icon"><Mail size={16} /></span>
                <a href="mailto:vatsalshah2020@gmail.com">vatsalshah2020@gmail.com</a>
              </li>
              <li>
                <span className="detail-icon"><MapPin size={16} /></span>
                <span>Based in India · Remote-friendly</span>
              </li>
            </ul>

            <div className="contact-divider" />

            <div className="contact-social">
              <span className="contact-social-label">Find me online</span>
              <SocialLinks />
            </div>
          </motion.div>

          {/* BOOKING CARD */}
          <motion.div
            className="booking-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="booking-badge">Free Discovery Call</div>
            <h3 className="booking-title">
              Build Smarter Products with <span className="gradient-text">Clear Strategy</span>
            </h3>
            <p className="booking-subtitle">
              Let's discuss your idea, product goal, or technical challenge —
              and shape a practical path forward.
            </p>

            {/* <div className="booking-features">
              {bookingFeatures.map((feat) => (
                <div className="booking-feature" key={feat.title}>
                  <div className="feature-icon">{feat.icon}</div>
                  <div className="feature-text">
                    <strong>{feat.title}</strong>
                    <span>{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="booking-topics">
              <p className="topics-label">Popular discussion topics</p>
              <div className="topics-tags">
                {topics.map((topic) => (
                  <span className="topic-tag" key={topic}>{topic}</span>
                ))}
              </div>
            </div>

            <a
              href="https://calendar.app.google/kF1VLas693N767xG9"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-cta"
            >
              <CalendarCheck size={18} />
              Book Your Free 60-Min Call
              <ArrowRight size={18} className="cta-arrow" />
            </a>
            <p className="booking-note">Fast replies · Clear advice · No pressure</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}