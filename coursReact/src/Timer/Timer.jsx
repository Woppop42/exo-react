import { useState, useEffect } from "react";
export function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <p>Temps écoulé depyuis le montage du component : {seconds}</p>;
}
    