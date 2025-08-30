import { useState } from "react";
import Nav from "../sections/Nav";
import Main from "../sections/Main";
import { TimeFormatProvider } from "../context/TimeFormatContext";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("clock"); // "clock" | "stopwatch" | "timer"

  return (
    <TimeFormatProvider>
      <div className="h-screen flex flex-col overflow-hidden">
        {/* Navbar + Sidebar */}
        <Nav
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setActiveView={setActiveView}
        />

        {/* Main content */}
        <div
          className={`flex-1 overflow-hidden transition-all duration-300 ${
            sidebarOpen ? "lg:ml-64 ml-0" : "ml-0"
          }`}
        >
          <Main activeView={activeView} />
        </div>
      </div>
    </TimeFormatProvider>
  );
};

export default AppLayout;
