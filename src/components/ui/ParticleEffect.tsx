import React, { memo, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

type Preset = "constellation";

type Props = {
  preset?: Preset;
  className?: string;
  style?: React.CSSProperties;
};

const PRESETS: Record<Preset, ISourceOptions> = {
  constellation: {
    fullScreen: { enable: true, zIndex: -1},
    particles: {
      number: { value: 70, density: { enable: true, width: 800 } },
      color: { value: "#8B008B" },
      links: { enable: true, distance: 140, color: "#9ca3af", opacity: 0.35, width: 1 },
      move: { enable: true, speed: 0.9, outModes: { default: "out" } },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.10 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } },
      modes: { grab: { distance: 150, links: { opacity: 0.6 } }, push: { quantity: 4 } },
    },
  },

};

const ParticleEffect: React.FC<Props> = ({ preset = "constellation", className, style }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(() => PRESETS[preset], [preset]);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className={className}
      style={style}
    />
  );
};

export default memo(ParticleEffect);
