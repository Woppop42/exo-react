import { useState, useEffect } from "react";
export function WindowWidthTracker() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <p>Largeur de la fenêtre {width}px</p>;
}