import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import './style.scss';

function TrackingPage() {

    const goal = {
        title: 'Title',
        progress: 71,
        estimate: '1 day'
    }

    return (
        <div className="tracking-container">
            <div className="tracking-goal-information">
                <h4>{goal.title}</h4>
                <p><span>Duration:</span> {goal.estimate}</p>
                <p>Want to update your progress? </p>
                <button>Click here</button>
            </div>
            <div className="tracking-progress-bar">
                <CircularProgressbar
                    value={goal.progress}
                    text={`${goal.title}
                    ${goal.progress}%`}
                    strokeWidth={4}
                    styles={buildStyles({
                        textSize: "10px",
                        pathColor: `rgba(162, 152, 199, ${goal.progress / 100})`,
                    })}
                />
            </div>
        </div>
    )
}

export default TrackingPage;