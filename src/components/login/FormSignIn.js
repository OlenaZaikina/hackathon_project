import React, { useState } from 'react';
import './style.scss';
import SignIn from './SignIn';
import { Redirect } from "react-router-dom";
import { useUser } from '../../UserContext'

const FormSignIn = () => {
  //const isUserAuthenticated = useContext(AuthContext)

  const [isSubmitted, setIsSubmitted] = useState(false);
  const user = useUser()
 // const toggleUser = useUserUpdate()

  function submitForm() {
    setIsSubmitted(true);
    //isUserAuthenticated.toggleAuth(true)
  }

  return (
    <>
      <div className='form-container'>
        {!user ? (
          <SignIn submitForm={submitForm} />
        ) : (
          <Redirect to="/dashboard" />                  
        )}
      </div>
    </>
  );
};

export default FormSignIn;
