import { Sun, HatGlasses, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const options = [
    { key: "light", label: "Light", icon: <Sun size={20} /> },
    { key: "dark", label: "Dark", icon: <HatGlasses size={20} /> },
    { key: "system", label: "System", icon: <Monitor size={20} /> },
  ];

  return (
    <div className="flex gap-4">
      {options.map((opt) => (
        <button
          key={opt.key}
          onClick={() => setTheme(opt.key)}
          className={`group relative flex items-center justify-center px-3 py-2 rounded-lg transition-colors
            ${
              theme === opt.key
                ? "bg-gray-300 dark:bg-gray-700"
                : "hover:bg-gray-200 dark:hover:bg-gray-600"
            }
          `}
        >
          {opt.icon}

          {/* Tooltip-like label (shows on hover) */}
          <span
            className="absolute bottom-[-2rem] px-2 py-1 text-xs rounded-md 
                       bg-gray-800 text-white opacity-0 group-hover:opacity-100 
                       translate-y-1 group-hover:translate-y-0 transition-all"
          >
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
