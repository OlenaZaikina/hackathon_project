export const requestsConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    },
    proxyurl: 'https://cryptic-mesa-87242.herokuapp.com/'
}
