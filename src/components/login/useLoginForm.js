import { useState, useEffect } from 'react';
import { useUser, useUserUpdate } from '../../UserContext';
import { Redirect, useHistory } from 'react-router-dom';

const useLoginForm = (callback, validateSignIn) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  let history = useHistory();
  const oldUser = useUser()
    const toggleUser = useUserUpdate()

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  async function executeLogin({ email, password}) {
    let headers = new Headers();
    const body = JSON.stringify({
              "email": email,
              "password": password
          })
    headers.append('Content-Type', 'application/json');
    //headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //headers.append('Access-Control-Allow-Credentials', 'true');
    console.log(headers, body)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://34.222.107.139:8080/goaltracker/api/login';
    console.log(body,
    headers)
    let response = await fetch(proxyurl + 'http://34.222.107.139:8080/goaltracker/api/login', { method: 'POST', 
    body,
    headers })
    let json
    if (response.ok) {
      console.log('resp ok')
      json = response.json();
      let resHeader = response.headers;
      console.log('resHeader', resHeader)
      console.log('json', json)
    } else {
      console.log('resp not ok')
      console.log("response", response)
    } 
    return json;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setErrors(validateSignIn(values));

    let result = await executeLogin(values);
    if (result) {
      console.log(result)
      localStorage.setItem('user', JSON.stringify(values));
      toggleUser(values.email)
      return (
        <>
        <Redirect to='/dashboard' />
        {history.push('/signin')}
      </>
      )
      //do redurect to Dashboard
      console.log("do redirect to Dashboard")
    } else {
      //show error for user
      console.log("Login failed from server")
    }
    console.log(result)

    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useLoginForm;
