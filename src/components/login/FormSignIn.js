import React, { useState } from 'react';
import './style.scss';
import SignIn from './SignIn';
import { Redirect } from "react-router-dom";

const FormSignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  function logOut() {
    setIsSubmitted(false);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <SignIn submitForm={submitForm} />
        ) : (
          <Redirect to="/dashboard" />                  
        )}
      </div>
    </>
  );
};

export default FormSignIn;
