import useClock from "../hooks/useClock"

const Date = () => {
  const time = useClock();
  return (
    <p className="text-[1.3rem] pt-2 dark:text-gray-50 font-lato tracking-widest font-medium">
      {time.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
  );
}

export default Date