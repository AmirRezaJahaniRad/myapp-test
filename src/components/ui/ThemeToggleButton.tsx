import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";

type Props = {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
  size?: "xxs";
};

const ThemeToggleButton = ({
  isDark,
  onToggle,
  className = "",
  size = "xxs",
}: Props) => {
  const knobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { 
    if (!knobRef.current) return;
    knobRef.current.classList.remove("animate-knob-forward", "animate-knob-back");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    knobRef.current.offsetWidth;
    knobRef.current.classList.add(isDark ? "animate-knob-forward" : "animate-knob-back");
  }, [isDark]);

  const dims = {
  xxs: {
    trackW: "w-10", 
    trackH: "h-4",
    knob: "w-2 h-2", 
  },
}[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Typography
        className={`select-none text-lg font-bold transition-colors`}
        color={isDark ? "#999999" : "#000000"}
      >
        Light
      </Typography>

      <button
        type="button"
        aria-pressed={isDark}
        aria-label="Toggle light / dark"
        onClick={onToggle}
        className={`relative ${dims.trackW} ${dims.trackH} rounded-full overflow-hidden flex-shrink-0 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 
          transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-r from-violet-800 to-violet-600"
              : "bg-gray-200"
          }`}
      >
        <div
          ref={knobRef}
          className={`absolute top-1 left-1 ${dims.knob} rounded-full bg-white shadow-md`}
        />
      </button>

      <Typography
        className={`select-none text-lg font-bold transition-colors`}
        color={isDark ? "#ffffff" : "#999999"}
      >
        Dark
      </Typography>
    </div>
  );
}

export default ThemeToggleButton;