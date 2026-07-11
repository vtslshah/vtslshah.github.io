import { useMemo } from 'react';

const styles = `
.particle-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: var(--color-primary);
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(30px, -50px);
  }
  50% {
    transform: translate(-20px, -100px);
  }
  75% {
    transform: translate(40px, -50px);
  }
  100% {
    transform: translate(0, 0);
  }
}
`;

export default function ParticleBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.05,
    }));
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="particle-bg" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
}
