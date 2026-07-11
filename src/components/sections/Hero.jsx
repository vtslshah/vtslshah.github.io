import { motion } from "framer-motion";
import TypeWriter from "../ui/TypeWriter";
import SocialLinks from "../ui/SocialLinks";
import ParticleBackground from "../ui/ParticleBackground";
import "../../styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <ParticleBackground />
      <div className="container hero-container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="hero-subtitle">
              Welcome to My Web Development Universe!
            </span>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Vatsal Shah</span>
              <br />
              <span className="hero-role">
                a{" "}
                <TypeWriter
                  words={[
                    "Laravel Artisan.",
                    "Node.js Ninja.",
                    "React Wizard.",
                  ]}
                />
              </span>
            </h1>
            <p className="hero-description">
              Crafting dynamic web solutions with Laravel, PHP, Node.js, and
              React. Full stack developer dedicated to building seamless digital
              experiences. Let's collaborate and bring your ideas to life!
            </p>

            <div className="hero-meta">
              <div className="hero-meta-block">
                <span className="meta-label">find with me</span>
                <SocialLinks />
              </div>
              <div className="hero-meta-block">
                <span className="meta-label">best skill on</span>
                <div className="skill-icons">
                  <img src="/images/laravel.svg" alt="Laravel" />
                  <img src="/images/node-js.svg" alt="Node.js" />
                  <img src="/images/react.svg" alt="React" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-avatar-col"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar-wrapper">
              <img
                src="/images/vatsal-shah.png"
                alt="Vatsal Shah — Full Stack Developer"
                className="hero-avatar"
              />
              <div className="avatar-badge">
                <span className="badge-dot" />
                Available for work
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
