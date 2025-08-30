import { useRef } from "react";
import { Settings } from "lucide-react";

import Dropdown from "../components/Dropdown";
import useDropdown from "../hooks/useDropDown";
import NavSections from "../components/NavSections"; // extracted sections

const Nav = ({ setActiveView }) => {
  const settingsTriggerRef = useRef(null);
  const {
    open: settingsOpen,
    toggle: toggleSettings,
    dropdownRef: settingsRef,
  } = useDropdown(settingsTriggerRef);

  return (
    <nav className="font-mons relative flex items-center justify-start p-4 bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary z-50">
      <div className="flex items-center gap-2">
        <h2 className="text-[1.6rem] font-bold">Digital Clock</h2>
        <Settings
          ref={settingsTriggerRef}
          className="w-6 h-6 hover:opacity-80 hover:rotate-90 transition-transform duration-300 cursor-pointer"
          onClick={toggleSettings}
        />
      </div>

      <Dropdown
        open={settingsOpen}
        dropdownRef={settingsRef}
        toggleDropdown={toggleSettings}
      >
        <NavSections setActiveView={setActiveView} />
      </Dropdown>
    </nav>
  );
};

export default Nav;
