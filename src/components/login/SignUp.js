import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import loginImg from '../../assets/hero-shape1.svg';
import useForm from './useForm';
import validateSignUp from './validateSignUp';

const SignUp = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm,
        validateSignUp
    );
    return (
        <div className='base-container'>
            <div className='login-container'>
                <div className='login-header'>Create an account</div>
                <div className='login-content'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input
                                id='username'
                                type='text'
                                name='username'
                                placeholder='username*'
                                defaultValue={values.username}
                                onChange={handleChange} />
                            {errors.username && <p>{errors.username}</p>}
                        </div>
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
                                placeholder='password must have at least 6 characters*'
                                defaultValue={values.password}
                                onChange={handleChange} />
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <div className='form-group'>
                            <input
                                id='password2'
                                type='password'
                                name='password2'
                                placeholder='confirm password*'
                                defaultValue={values.password2}
                                onChange={handleChange} />
                            {errors.password2 && <p>{errors.password2}</p>}
                        </div>
                        <div className='login-footer'>
                            <button type='submit' className='login-btn'>Register</button>
                        </div>

                    </form>
                    <div className='login-image'>
                        <img src={loginImg} alt="login" />
                        <p>Already have an account? <NavLink to='signin'>Sign in</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp;