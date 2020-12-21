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

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://34.222.107.139:8080/goaltracker/api/login';
    let response = await fetch(proxyurl + 'http://34.222.107.139:8080/goaltracker/api/login', { method: 'POST', 
    body,
    headers })
    if (response.ok) {
      let resHeader = response.headers;
     for (let pair of resHeader.entries()) {
       if (pair[0] === 'authorization') {
        return pair[1].substring(7)
      }        
    }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    async function waitForErrors() {
      return setErrors(validateSignIn(values));
    }
    await waitForErrors()
    if (Object.keys(errors).length > 0) {
      return
    }
    
    let result = await executeLogin(values);
    if (result) {
      localStorage.setItem('user', JSON.stringify({'token': result}));
      toggleUser(result)
      return (
        <>
        <Redirect to='/dashboard' />
        {history.push('/dashboard')}
      </>
      )
      //do redurect to Dashboard
    } else {
      //show error for user
      console.log("Login failed from server")
    }

    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    
    [errors],
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useLoginForm;
