import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.scss";

function Goal({ config }) {
  const { goal, percentage } = config;

  return (
    <div className="goal">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={4}
      />
      {goal}
    </div>
  );
}

export default Goal;
