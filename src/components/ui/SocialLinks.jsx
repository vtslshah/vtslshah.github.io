import { socialLinks } from '../../data/seo';

const styles = `
.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  transition: all var(--transition-base);
  text-decoration: none;
}

.social-link:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-3px);
}
`;

const iconComponents = {
  Github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3" />
      <path d="M15 21v-3.5a2.5 2.5 0 0 0-.5-1.7c3.5-.5 7.2-1.7 7.2-7.8a6.1 6.1 0 0 0-1.6-4.2 5.5 5.5 0 0 0-.1-4.2s-1.3-.4-4.2 1.6a14.4 14.4 0 0 0-7.4 0C4.7 1.7 3.4 2.1 3.4 2.1a5.5 5.5 0 0 0-.1 4.2A6.1 6.1 0 0 0 1.7 10.5c0 6.1 3.7 7.3 7.2 7.8a2.5 2.5 0 0 0-.5 1.7V21" />
    </svg>
  ),
  Linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M5 10h2v8H5z" />
      <path d="M11 10h2v1.1h.03c.3-.6 1.1-1.3 2.3-1.3 2.4 0 4.7 1.7 4.7 5.3V18h-2v-7.2c0-1.7-.1-3.9-2.4-3.9-2.5 0-2.8 1.8-2.8 3.7V18h-2z" />
    </svg>
  ),
  StackOverflow: (
    <svg width="18" height="18" viewBox="0 0 19 22" fill="currentColor">
      <path d="M16 20v-6h2v8H0v-8h2v6h14Z" opacity="0.5" />
      <path d="m12.72 0-1.57 1.17L17 9.05l1.57-1.18L12.72 0ZM4 18h10v-2H4v2Zm11.4-7.08L7.86 4.64l1.25-1.5 7.54 6.28-1.25 1.5Zm-10-1.91 8.9 4.14.82-1.78-8.9-4.14L5.4 9Zm8.63 6.27-9.9-1.67.4-1.92 9.63 1.92-.13 1.67Z" />
    </svg>
  ),
};

export default function SocialLinks({ className = '' }) {
  return (
    <>
      <style>{styles}</style>
      <div className={`social-links ${className}`}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.name}
            title={link.name}
          >
            {iconComponents[link.icon]}
          </a>
        ))}
      </div>
    </>
  );
}
