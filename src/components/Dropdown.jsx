import React from "react";

const Dropdown = ({ open, dropdownRef, children, toggleDropdown }) => {
  return (
    <>
      {/* Sidebar (under nav, left) */}
      <div
        ref={dropdownRef}
        className={`
          fixed left-0 top-[64px] w-72 max-w-[90vw] z-40 transform transition-transform duration-300 ease-in-out
          bg-primary dark:bg-primary-dark shadow-lg
          ${open ? "translate-x-0" : "-translate-x-full"}
          overflow-y-auto rounded-b-lg
          max-h-[calc(100%-64px)] lg:h-[calc(100%-64px)]
        `}
      >
        {children}
      </div>
    </>
  );
};

export default Dropdown;
