import Time from "../components/Time";
import Date from "../components/Date";
import Stopwatch from "../components/Stopwatch";
import Timer from "../components/Timer"; // new component

const Main = ({ activeView }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full bg-primary dark:bg-primary-dark dark:text-gray-200 gap-4">
      {activeView === "clock" && (
        <>
          <Time />
          <Date />
        </>
      )}
      {activeView === "stopwatch" && <Stopwatch />}
      {activeView === "timer" && <Timer />}
    </div>
  );
};

export default Main;
