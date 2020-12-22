

const GoalInformation = ({ goal }) => {

    console.log('goal in goals information', goal)
    return (
        <div className="tracking-goal-information">
            <h4>{goal.title}</h4>
            <p><span>Duration:</span> {goal.estimate}</p>
            <p>Want to update your progress? </p>
            <button className="update-goal">Upgrade progress</button>
            <button className="delete-goal">Delete goal</button>
        </div>
    )
}

export default GoalInformation;