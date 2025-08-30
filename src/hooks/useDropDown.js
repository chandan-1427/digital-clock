import { useState, useRef, useEffect } from "react";

export default function useDropdown(triggerRef) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      // If click is outside dropdown AND not on the trigger → close
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        (!triggerRef?.current || !triggerRef.current.contains(event.target))
      ) {
        close();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, triggerRef]);

  return { open, toggle, close, dropdownRef };
}
