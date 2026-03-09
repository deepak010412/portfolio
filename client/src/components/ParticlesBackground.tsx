import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const checkDarkMode = () => {
      setIsDark(
        document.documentElement.getAttribute('data-theme') === 'dark' ||
        document.documentElement.classList.contains('dark') ||
        !document.documentElement.getAttribute('data-theme')
      );
    };

    checkDarkMode();
    window.addEventListener('themechange', checkDarkMode);
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    });

    return () => {
      window.removeEventListener('themechange', checkDarkMode);
      observer.disconnect();
    };
  }, []);

  if (!init) {
    return null;
  }

  const bgColor = isDark ? "rgba(6, 20, 40, 0.1)" : "rgba(240, 248, 255, 0.1)";
  const particleColors = isDark
    ? ["#00AEEF", "#9B51E0", "#ffffff", "#00D9FF", "#7C3AED"]
    : ["#0066CC", "#6366F1", "#3B82F6", "#0080FF", "#5B21B6"];
  const linkColor = isDark ? "#00AEEF" : "#3B82F6";

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: bgColor,
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.9,
                  color: linkColor,
                },
              },
            },
          },
          particles: {
            color: {
              value: particleColors,
            },
            links: {
              color: linkColor,
              distance: 180,
              enable: true,
              opacity: isDark ? 0.15 : 0.2,
              width: 1.5,
              triangles: {
                enable: true,
                opacity: isDark ? 0.05 : 0.08,
              },
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 120,
            },
            opacity: {
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.2,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1.5, max: 4 },
              animation: {
                enable: true,
                speed: 0.8,
                minimumValue: 1,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
