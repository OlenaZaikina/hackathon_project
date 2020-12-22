import { useState, useEffect } from 'react';
import { useUser } from '../UserContext';

let userToken = localStorage.getItem('user');

function GetAPI(sufix) {
    const user = useUser()
    const [userData, setUserData] = useState({});

    const getData = async () => {
        let headers = new Headers;
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + user);
        const proxyurl = "https://cryptic-mesa-87242.herokuapp.com/";
        const url = 'http://34.222.107.139:8080/goaltracker/api' + sufix;
        const response = await fetch(proxyurl + url, { method: 'GET', headers }).then(response => response.json())

        setUserData(response)
    }
    useEffect(() => {
        getData();
    }, []);
    return userData
}
export default GetAPI;


