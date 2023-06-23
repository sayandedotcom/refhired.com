import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleSize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return windowSize;
};
