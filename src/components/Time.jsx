import useClock from "../hooks/useClock";
import { useTimeFormat } from "../context/TimeFormatContext";

const Time = () => {
  const time = useClock();
  const { is24Hour } = useTimeFormat();

  const hours = is24Hour
    ? String(time.getHours()).padStart(2, "0")
    : String(((time.getHours() + 11) % 12) + 1).padStart(2, "0");

  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-roboto font-bold tracking-widest 
        text-5xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[200px]">
        {formattedTime}
      </h1>
    </div>
  );
};

export default Time;
