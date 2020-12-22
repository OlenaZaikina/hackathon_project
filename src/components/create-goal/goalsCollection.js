import React from 'react';
import './style.scss';
import icon from '../../assets/goalIcon.png';

export default function GoalsCollection() {
    const goalscollection = ["Meditate every morning", "Read 20 pages per day", "30 days of yoga", "Quit smoking", "Cut out sugar", "No caffeine for a month", "Eat breakfast every morning", "Quit alcohol for 30 days"]

    return (
        <div className="goals-collection-container">
            <h1>Goals</h1>
            <h2>goal ideas to nourish your mind, body, and soul</h2>
            <div className="goals-collection">
                {goalscollection.map((goal, index) => {
                    return (
                        <div key={index} className="goal-card">
                            <img key={index} src={icon} alt='goal' style={{ width: "20%" }} />
                            <p>{goal}</p>
                            <button type='button'>Choose goal</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}