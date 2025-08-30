import { useTimeFormat } from "../context/TimeFormatContext";

const TimeFormat = () => {
  const { is24Hour, setIs24Hour } = useTimeFormat();

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        onClick={() => setIs24Hour(prev => !prev)}
        className={`relative w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors 
          ${is24Hour ? "bg-gray-300" : "bg-gray-500"}`}
      >
        {/* Knob */}
        <div
          className={`absolute w-8 h-8 bg-white rounded-full shadow-md transform transition-transform 
            ${is24Hour ? "translate-x-10" : "translate-x-0"}`}
        />
        {/* Labels */}
        <span
          className={`text-xs font-semibold absolute left-2 transition-opacity dark:text-black
            ${is24Hour ? "opacity-0" : "opacity-100"}`}
        >
          12h
        </span>
        <span
          className={`text-xs font-bold absolute right-2 transition-opacity dark:text-black
            ${is24Hour ? "opacity-100" : "opacity-0"}`}
        >
          24h
        </span>
      </div>
    </div>
  );
};

export default TimeFormat;
