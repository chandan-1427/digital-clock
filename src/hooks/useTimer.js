import { useState, useEffect, useRef } from "react";

export default function useTimer(initialMs = 60000) {
  const [timeLeft, setTimeLeft] = useState(initialMs); // in ms
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = (newTime = initialMs) => {
    setIsRunning(false);
    setTimeLeft(newTime);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 10) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 10; // decrease every 10ms
        });
      }, 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return { timeLeft, isRunning, start, pause, reset, setTimeLeft };
}
