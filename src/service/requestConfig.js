

// const requestConfig = {
//     proxyurl: 'https://cryptic-mesa-87242.herokuapp.com/',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:3000',
//         'Access-Control-Allow-Credentials': 'true',
//         'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
//     },
//     token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
// }
const token = 'Bearer ' + JSON.parse(localStorage.getItem('user')).token;
export const requestConfig = {
    proxyurl: 'https://cryptic-mesa-87242.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': token
    },
    token
}
