import React from 'react';
import './style.scss';
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import { NavLink } from 'react-router-dom';
import loginImg from '../../assets/hero-shape1.svg';
import useLoginForm from './useLoginForm';
import validateSignIn from './validateSignIn';
import SocialButton from './SocialButton'
import { useUser, useUserUpdate } from '../../UserContext'

const SignIn = ({ submitForm }) => {
    const oldUser = useUser()
    const toggleUser = useUserUpdate()
    const {handleChange, values, handleSubmit, errors } = useLoginForm(
        submitForm,
        validateSignIn
    );

    const handleSocialLogin = (user) => {
        if (user) {
            //store profile
            localStorage.setItem('user', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b3JkZGRkZGRAdWtyLm5ldCBVU0VSIn0.OSnv3rR4s9ugH5dYP4MGRUzbwW0UPwse0zkSyN3DpN9f4w8WOKPJMyyosq1BASIW_AlMxkRDr3CQiMFhnOTuig');
            toggleUser('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b3JkZGRkZGRAdWtyLm5ldCBVU0VSIn0.OSnv3rR4s9ugH5dYP4MGRUzbwW0UPwse0zkSyN3DpN9f4w8WOKPJMyyosq1BASIW_AlMxkRDr3CQiMFhnOTuig')
            }
        submitForm()
    }

    const handleSocialLoginGoogle = (user, err) => {
        console.log('google user', user)
        console.log(err)
    }

    const handleSocialLoginFailure = (err) => {
        console.error('err social login', err)
    }

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
                        <div className='loginBtn loginBtn--facebook'>
                                <SocialButton
                                    provider='facebook'
                                    appId='281272943330125'
                                    onLoginSuccess={handleSocialLogin}
                                >
                                    Login with Facebook
                                </SocialButton>
			            </div>
                        <div className='loginBtn loginBtn--google'> 
                            <SocialLogin
                                provider='google'
                                appId='con_VsAflWaiXW4i95S2'
                                onLoginSuccess={() => submitForm()}
                                >
                                <button>Login with Google</button>
                            </SocialLogin>
                        </div>
                    </form>
                    <div className='login-image'>
                        <img src={loginImg} alt="sign"/>
                        <p>Create an account <NavLink to="/signup">Sign Up</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn;