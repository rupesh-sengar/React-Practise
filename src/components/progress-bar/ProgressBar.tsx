import "./ProgressBar.css";

interface IProgressBar {
  percentage: number;
}
export const ProgressBar = ({ percentage }: IProgressBar) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
      </div>
        <span>{percentage}%</span>
    </div>
  );
};


