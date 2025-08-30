// src/context/TimeFormatContext.jsx
import { createContext, useContext, useState } from "react";

const TimeFormatContext = createContext();

export const TimeFormatProvider = ({ children }) => {
  const [is24Hour, setIs24Hour] = useState(false);

  return (
    <TimeFormatContext.Provider value={{ is24Hour, setIs24Hour }}>
      {children}
    </TimeFormatContext.Provider>
  );
};

export const useTimeFormat = () => useContext(TimeFormatContext);
