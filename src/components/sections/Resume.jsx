import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ResumeItem from '../ui/ResumeItem';
import SkillBar from '../ui/SkillBar';
import { educationData, experienceData } from '../../data/experience';
import { designSkills, developmentSkills } from '../../data/skills';
import '../../styles/resume.css';

const tabs = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Professional Skills' },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="resume" className="resume-section section-separator">
      <div className="container section-gap">
        <SectionTitle
          subtitle="4.5+ Years of Professional Experience"
          title="My Resume"
        />

        <div className="resume-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="resume-content"
          >
            {activeTab === 'education' && (
              <div>
                {educationData.map((item, i) => (
                  <ResumeItem key={i} item={item} type="education" />
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div>
                {experienceData.map((item, i) => (
                  <ResumeItem key={i} item={item} type="experience" />
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="skills-grid">
                <div>
                  <p className="skills-section-subtitle">Features</p>
                  <h4 className="skills-section-title">Proficient in Design</h4>
                  {designSkills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
                <div>
                  <p className="skills-section-subtitle">Features</p>
                  <h4 className="skills-section-title">Development Skill</h4>
                  {developmentSkills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
