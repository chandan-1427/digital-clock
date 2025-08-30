import React, { useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import useTimer from "../hooks/useTimer";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const initialMs = hours * 3600000 + minutes * 60000 + seconds * 1000;
  const { timeLeft, isRunning, start, pause, reset } = useTimer(initialMs);

  // Breakdown of remaining time
  const h = Math.floor(timeLeft / 3600000);
  const m = Math.floor((timeLeft % 3600000) / 60000);
  const s = Math.floor((timeLeft % 60000) / 1000);
  const ms = Math.floor((timeLeft % 1000) / 10);

  const format = (num, digits = 2) => String(num).padStart(digits, "0");

  const handleSetTime = () => {
    const total = hours * 3600000 + minutes * 60000 + seconds * 1000;
    reset(total);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSetTime();
      start();
    }
  };

  return (
    <div className="flex flex-col font-roboto items-center justify-center p-4 sm:p-6 bg-primary dark:bg-primary-dark dark:text-primary gap-6 w-full min-h-screen">
      {/* Time Display */}
      <h1 className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-bold tracking-wider text-center leading-tight">
        {h > 0 && `${format(h)}:`}
        {format(m)}:{format(s)}.
        <span className="text-[24px] sm:text-[36px] md:text-[50px] lg:text-[60px] font-normal">
          {format(ms)}
        </span>
      </h1>

      {/* Inputs */}
      <div
        className={`flex gap-3 sm:gap-4 md:gap-6 w-full justify-center transition-all duration-300 ${
          isRunning ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ minHeight: "80px" }}
      >
        {[
          { label: "H", value: hours, setter: setHours },
          { label: "M", value: minutes, setter: setMinutes },
          { label: "S", value: seconds, setter: setSeconds },
        ].map(({ label, value, setter }) => (
          <div
            key={label}
            className="flex flex-col items-center w-16 sm:w-20 md:w-24"
          >
            <input
              type="number"
              min="0"
              value={value === 0 ? "" : value}
              onChange={(e) => {
                const val =
                  e.target.value === "" ? 0 : Number(e.target.value);
                setter(val);
              }}
              onKeyDown={handleKeyPress}
              className="w-full text-center text-lg sm:text-xl md:text-2xl font-semibold bg-transparent border-b-2 border-gray-400 focus:outline-none hide-arrows py-1 sm:py-2"
              placeholder="0"
            />
            <span className="text-xs sm:text-sm md:text-base">{label}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center font-inter font-semibold">
        {!isRunning ? (
          <button
            onClick={() => {
              handleSetTime();
              start();
            }}
            className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 
                      bg-primary-dark text-white rounded-full hover:opacity-85 
                      dark:bg-primary dark:border-primary-dark transition-transform 
                      text-base sm:text-lg md:text-xl"
          >
            <Play className="w-5 h-5 dark:bg-primary dark:text-black bg-primary-dark sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        ) : (
          <button
            onClick={pause}
            className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 
                      bg-yellow-500 text-white rounded-full hover:opacity-85 
                      transition-transform text-base sm:text-lg md:text-xl"
          >
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        )}
        <button
          onClick={handleSetTime}
          className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 
                    bg-red-500 text-white rounded-full hover:opacity-85 
                    transition-transform text-base sm:text-lg md:text-xl"
        >
          <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>
      </div>

      {/* Remove arrows in number inputs */}
      <style jsx>{`
        .hide-arrows::-webkit-inner-spin-button,
        .hide-arrows::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .hide-arrows {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default Timer;
