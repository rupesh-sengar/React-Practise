import { useState, useEffect, useRef } from "react";
import "./App.css";
import { ProgressBar } from "./components/progress-bar/ProgressBar";

function App() {
  const [percentage, setPercentage] = useState<number>(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    // Set up the interval only once when the component mounts
    intervalRef.current = setInterval(() => {
      setPercentage((prevPercentage) =>
        prevPercentage >= 100 ? 0 : prevPercentage + 10
      );
    }, 2000);

    // Cleanup the interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // empty dependency array ensures this effect runs only once

  return (
    <div className="app-container">
      <ProgressBar percentage={percentage} />
    </div>
  );
}

export default App;
