import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import loginImg from '../../img/hero-shape1.svg';
import useLoginForm from './useLoginForm';
import validateSignIn from './validateSignIn';

const SignIn = ({ submitForm }) => {
    const {handleChange, values, handleSubmit, errors } = useLoginForm(
        submitForm,
        validateSignIn
    );
        return (
            <div className='base-container'>
            <div className='login-container'>
                <div className='login-header'>Login</div>
                <div className='login-content'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input 
                            id='email' 
                            type='email' 
                            name='email' 
                            placeholder='email address*'
                            defaultValue={values.email}
                            onChange={handleChange} />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className='form-group'>
                            <input 
                            id='password' 
                            type='password' 
                            name='password' 
                            placeholder='password*'
                            defaultValue={values.password}
                            onChange={handleChange} />
                            {errors.password && <p>{errors.password}</p>} 
                        </div>
                        <div className='login-footer'>
                            <button type='submit' className='login-btn'>Login</button>
                        </div>
                    </form>
                    <div className='login-image'>
                        <img src={loginImg} />
                        <p>Don't yet have an account? <NavLink to="/signup">Sign Up</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn;