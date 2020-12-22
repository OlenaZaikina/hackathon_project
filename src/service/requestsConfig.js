const requestsConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    }
}





export const getUserGoals = async () => {
    try {
        const response = await fetch('https://cryptic-mesa-87242.herokuapp.com/' + 'http://34.222.107.139:8080/goaltracker/api/users/goals', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            }
        }
        )
        const data = await response.json()
        return data;
    } catch (err) {
        return err.message;
    }
}

