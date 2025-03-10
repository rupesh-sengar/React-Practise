import { useState } from "react";
import "./ProgressBar.css";

interface IProgressBar {
  percentage: number;
}
export const ProgressBar = ({ percentage }: IProgressBar) => {
  console.log({ percentage });
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};
