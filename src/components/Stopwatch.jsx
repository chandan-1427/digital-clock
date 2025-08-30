import useStopwatch from "../hooks/useStopwatch";
import { Play, Pause, Square, RotateCcw } from "lucide-react"; // Icons

export default function Stopwatch() {
  const { time, isRunning, start, stop, reset } = useStopwatch();

  // Time breakdown
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const format = (num, digits = 2) => String(num).padStart(digits, "0");

  return (
    <div className="flex flex-col font-roboto items-center justify-center p-6 bg-primary dark:bg-primary-dark dark:text-primary transition-colors">
      {/* Timer Display */}
      <h1 className="text-[80px] md:text-[150px] font-bold mb-6 tracking-wider select-none">
        {hours > 0 && `${format(hours)}:`}
        {format(minutes)}:{format(seconds)}.
        <span className="text-[40px] md:text-[60px] font-normal">
          {format(milliseconds)}
        </span>
      </h1>

      {/* Controls */}
      <div className="flex gap-6">
        {!isRunning ? (
          <button
            className="flex items-center gap-2 px-6 py-3 bg-primary-dark text-white rounded-full shadow-md 
                       dark:bg-primary dark:text-primary-dark hover:opacity-90 active:scale-95 transition-all duration-200"
            onClick={start}
          >
            <Play size={20} />
          </button>
        ) : (
          <button
            className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full shadow-md 
                       hover:bg-red-600 active:scale-95 transition-all duration-200"
            onClick={stop}
          >
            <Pause size={20} />
          </button>
        )}
        <button
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-dark rounded-full shadow-md 
                     dark:bg-gray-200 hover:opacity-90 active:scale-95 transition-all duration-200"
          onClick={reset}
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
}
