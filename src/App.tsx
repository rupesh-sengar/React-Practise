import { useState, useEffect, useRef } from "react";
import "./App.css";
import { ProgressBar } from "./components/progress-bar/ProgressBar";
import { BrowserRouter, Routes, Route } from "react-router";
import Table from "./components/table/table";
import { Loader1 } from "./components/loaders/loaders1";
import { WindowSize } from "./components/window-size/WindowSize";
import { Debounce } from "./components/debounce/Debounce";

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/progress-bar"
            element={<ProgressBar percentage={percentage} />}
          />
          <Route path="/table" element={<Table />} />
          <Route path="/loader1" element={<Loader1 />} />
          <Route path="window-size" element={<WindowSize />} />
          <Route path="/debounce" element={<Debounce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
