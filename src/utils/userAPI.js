import { useState, useEffect } from 'react';
import { useUser } from '../UserContext';

   let userToken = localStorage.getItem('user');
    console.log(userToken)

function GetAPI(sufix) {
    const user = useUser()
    const [userData, setUserData] = useState({});
    const getData = async () => {
        let headers = new Headers;
        headers.append('Content-Type', 'application/json');
        headers.append('authorization', 'Bearer ' + user);
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://34.222.107.139:8080/goaltracker/api' + sufix;
        const response = await fetch(proxyurl + url, {method: 'GET', headers})
        const jsonData = await response.json();
        setUserData(jsonData)
    }
    useEffect(() => {
    getData();
        }, []);
    return userData
    }
  export default GetAPI;