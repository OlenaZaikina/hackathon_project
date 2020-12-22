import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.scss";

function Goal({ config }) {
  const { title, percentage } = config;

  return (
    <div className="goal">
      <CircularProgressbar
        value={percentage || 0}
        text={`${percentage || 0}%`}
        strokeWidth={4}
      />
      {title}
    </div>
  );
}

export default Goal;
