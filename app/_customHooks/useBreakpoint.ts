import { useState, useEffect } from "react";

// Define the breakpoints
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Custom hook to get the status of all breakpoints
export function useBreakpoint() {
  const [breakpointStatus, setBreakpointStatus] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  useEffect(() => {
    const calculateBreakpoint = () => {
      const width = window.innerWidth;
      const newBreakpointStatus = {
        sm: width >= parseInt(breakpoints.sm),
        md: width >= parseInt(breakpoints.md),
        lg: width >= parseInt(breakpoints.lg),
        xl: width >= parseInt(breakpoints.xl),
        "2xl": width >= parseInt(breakpoints["2xl"]),
      };
      setBreakpointStatus(newBreakpointStatus);
    };

    // Listen for window resize events
    window.addEventListener("resize", calculateBreakpoint);

    // Call the function initially
    calculateBreakpoint();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", calculateBreakpoint);
    };
  }, []);

  return breakpointStatus;
}
