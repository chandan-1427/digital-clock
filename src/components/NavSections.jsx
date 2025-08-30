import { useState, useRef, useEffect } from "react";
import {
  Info,
  ChevronDown,
  ChevronUp,
  Timer as TimerIcon,
  Clock3,
  Clock,
} from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";

import ThemeToggle from "../components/ThemeToggle";
import TimeFormat from "../components/TimeFormat";

const NavSections = ({ setActiveView, isSidebarOpen }) => {
  const [showAbout, setShowAbout] = useState(false);
  const aboutRef = useRef(null);

  // 🟢 Close About when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setShowAbout(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🟢 Reset About when sidebar closes
  useEffect(() => {
    if (!isSidebarOpen) {
      setShowAbout(false);
    }
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col gap-4 p-4 text-xs sm:text-sm">
      {/* Theme Toggle */}
      <div>
        <h3 className="mb-1 text-sm font-semibold">Theme</h3>
        <ThemeToggle />
      </div>

      {/* Time Format */}
      <div>
        <h3 className="mb-1 text-sm font-semibold">Time Format</h3>
        <div className="flex justify-start">
          <TimeFormat />
        </div>
      </div>

      {/* Clock Toggle */}
      <div>
        <button
          onClick={() => setActiveView("clock")}
          className="flex cursor-pointer w-full items-center gap-1.5 rounded px-2 py-1 text-sm font-semibold hover:opacity-90"
        >
          <Clock className="h-4 w-4" />
          Clock
        </button>
      </div>

      {/* Stopwatch Toggle */}
      <div>
        <button
          onClick={() => setActiveView("stopwatch")}
          className="flex w-full items-center gap-1.5 cursor-pointer rounded px-2 py-1 text-sm font-semibold hover:opacity-90"
        >
          <TimerIcon className="h-4 w-4" />
          Stopwatch
        </button>
      </div>

      {/* Timer Toggle */}
      <div>
        <button
          onClick={() => setActiveView("timer")}
          className="flex w-full items-center gap-1.5 cursor-pointer rounded px-2 py-1 text-sm font-semibold hover:opacity-90"
        >
          <Clock3 className="h-4 w-4" />
          Timer
        </button>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="transition-all">
        <button
          onClick={() => setShowAbout(!showAbout)}
          aria-expanded={showAbout}
          className="flex w-full cursor-pointer items-center justify-between text-sm font-semibold hover:opacity-80"
        >
          <span className="flex items-center gap-1.5">
            About <Info className="h-4 w-4" />
          </span>
          {showAbout ? (
            <ChevronUp className="h-3.5 w-3.5" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" />
          )}
        </button>

        {/* Collapsible content */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            showAbout ? "max-h-48 sm:max-h-60 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {/* Scrollable inner content */}
          <div className="flex flex-col gap-2 pt-2 text-xs sm:text-sm leading-relaxed overflow-y-auto pr-2 max-h-48 sm:max-h-60">
            <p>
              <span className="font-semibold">Digital Clock</span> lets you see
              the <strong>real-time date & time</strong> instantly. You can
              easily toggle between <strong>12-hour</strong> and{" "}
              <strong>24-hour</strong> formats.
            </p>
            <p>
              The <span className="font-semibold">Stopwatch</span> is perfect
              for tracking activities or laps, with{" "}
              <strong>start, pause, reset</strong>, and{" "}
              <strong>lap recording</strong> features.
            </p>
            <p>
              The <span className="font-semibold">Timer</span> helps you stay
              productive — set a countdown, get notified when time’s up, and
              manage your sessions more effectively.
            </p>
            <p className="flex items-center gap-1.5">
              Built with
              <FaReact className="text-sky-500" title="React" /> +
              <SiVite className="text-yellow-400" title="Vite" /> +
              <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />
            </p>
            <p>
              Hi 👋, I'm <span className="font-bold">Chandan</span>. This is a
              small <strong>React + Vite project</strong> I built to explore
              time-based features. If you like it, check out my other creations!
            </p>
            <a
              href="https://portfolio-vite-orcin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary-dark dark:bg-primary dark:text-primary-dark px-3 py-1.5 text-center font-semibold text-white transition-all hover:opacity-90 text-xs sm:text-sm mt-1"
            >
              Visit my page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSections;
