import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.scss";

function Goal({ config }) {
  const { goal, percentage } = config;

  return (
    <div className="goal">
      <CircularProgressbar
        value={percentage}
        text={`${goal}
        ${percentage}%`}
        strokeWidth={4}
        styles={buildStyles({
          textSize: "10px",
        })}
      />
    </div>
  );
}

export default Goal;
