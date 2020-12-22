

const GoalInformation = ({ goal }) => {


    const goalId = () => {
        console.log(goal.id)
    }


    const updateGoalInfo = async () => {
        try {
            console.log(goal.daysPassed+1)
            const body = JSON.stringify({
                id: goal.id,
                daysPassed: goal.daysPassed + 1
            })
            console.log('goal id in request', goal.id)
            const response = await fetch('https://cryptic-mesa-87242.herokuapp.com/' + `http://34.222.107.139:8080/goaltracker/api/users/goals`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Credentials': 'true',
                    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
                },
                method: "PUT",
                body
            })


            console.log('response', response);

            const data = await response.json();
            console.log('data',data)
        } catch (err) {
            console.log(err.message)
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
            <button className="delete-goal">Delete goal</button>
        </div>
    )
}

export default GoalInformation;