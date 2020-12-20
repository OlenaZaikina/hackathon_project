const token = 'Bearer ' + JSON.parse(localStorage.getItem('user')).token;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');

// console.log(token)

export const getUserBadges = async () => {
    try {
        console.log('request')
        const url = 'http://34.222.107.139:8080/goaltracker/api/user/badges';
        console.log('in user request')
        const response = await fetch(url, {
            headers: {
                authorization: token
            }
        })

        const data = await response.json();
        return data;
    } catch (err) {
        return err.message;
    }
}