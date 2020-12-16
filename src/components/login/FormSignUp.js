import React, { useState } from 'react';
import './style.scss';
import SignUp from './SignUp';
import { Redirect } from "react-router-dom";

const FormSignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <SignUp submitForm={submitForm} />
        ) : (
          <Redirect to="/dashboard" />          
        )}
      </div>
    </>
  );
};

export default FormSignUp;
