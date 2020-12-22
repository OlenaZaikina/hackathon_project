

const GoalInformation = ({ goal }) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
    const proxyurl = 'https://cryptic-mesa-87242.herokuapp.com/' ;
    const updateGoalInfo = async () => {
        try {
            const body = JSON.stringify({
                daysPassed: goal.daysPassed + 1
            })
            const response = await fetch(proxyurl + `http://34.222.107.139:8080/goaltracker/api/users/goals/${goal.id}`, {
                headers,
                method: "PUT",
                body
            })
            const data = await response.json();
        } catch (err) {
            return err.message;
        }
    }

    const deleteGoal = async () => {
        try {
            const response = await fetch('https://cryptic-mesa-87242.herokuapp.com/' + `http://34.222.107.139:8080/goaltracker/api/users/goals/${goal.id}`, {
                headers,
                method: "DELETE"
            })
        } catch (err) {
            return err.message;
        }
    }

    return (
        <div className="tracking-goal-information">
            <p>Day Passed{goal.daysPassed}</p>
            <h4>{goal.title}</h4>
            <p><span>Duration:</span> {goal.estimate}</p>
            <p>{goal.id}</p>
            <p>Want to update your progress? </p>
            <button className="update-goal" onClick={() => updateGoalInfo()}>Upgrade progress</button>
            <button className="delete-goal" onClick={() => deleteGoal()}>Delete goal</button>
        </div>
    )
}

export default GoalInformation;