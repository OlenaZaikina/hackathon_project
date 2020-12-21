// const token = 'Bearer ' + JSON.parse(localStorage.getItem('user')).token;
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// let headers = new Headers();

// headers.append('Content-Type', 'application/json');
// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
// headers.append('Access-Control-Allow-Credentials', 'true');

const requestConfig = {
    proxyurl: 'https://cryptic-mesa-87242.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        // 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
    },
    // token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
}

export default requestConfig;