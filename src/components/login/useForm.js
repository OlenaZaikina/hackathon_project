import { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const useForm = (callback, validateSignIn) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  let history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  async function executeRegistration({username, email, password}) {
    let headers = new Headers();
    const body = JSON.stringify({
              "name": username,
              "email": email,
              "password": password
          })
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    console.log(headers, body)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://34.222.107.139:8080/goaltracker/api/login';
    let response = await fetch(proxyurl + 'http://34.222.107.139:8080/goaltracker/api/register', { method: 'POST', 
    body,
    headers })
    let json
    if (response.ok) {
      json = response.json();
      console.log(json)
    } else return 
    return json;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setErrors(validateSignIn(values));

    let result = await executeRegistration(values);
    if (result) {
      //do redurect to Sign In temmperary
      console.log("do redirect to Sign In temmperary")
      return (
        <>
      <Redirect to='/signin' />
      {history.push('/signin')}
      </>
        )
    } else {
      //show error for user
      console.log("Registration failed from server")
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

export default useForm;
