import { useState } from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { getUserGoals } from '../create-goal/CreateContainer';
import GoalInformation from './GoalInformation';
import './style.scss';

function TrackingPage() {
    const [goals, setGoals] = useState([]);
    const [isGoals, setIsGoals] = useState(false);

    const setInitialGoals = async () => {
        const initialGoals = await getUserGoals();
        setIsGoals(true);
        setGoals(initialGoals);
    }
    if (!isGoals) {
        setInitialGoals();
    }
    return (
        <div className="tracking-container">

            {!isGoals && <p>Loading</p>}
            {isGoals &&

                goals.map((goal, index) => {
                    return (
                        <div key={Date.now() + goal.id} className="tracking-goal-card">
                            <GoalInformation goal={goal} />
                            <div className="tracking-progress-bar">
                                <CircularProgressbar
                                    value={goal.progress || 0}
                                    text={`${goal.title}
                            ${goal.progress || 0}%`}
                                    strokeWidth={4}
                                    styles={buildStyles({
                                        textSize: "10px"
                                    })}
                                />
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default TrackingPage;