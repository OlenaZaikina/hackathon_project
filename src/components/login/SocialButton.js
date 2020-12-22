import React from 'react';
import './style.scss';
import SocialLogin from 'react-social-login';

class SocialButton extends React.Component {

    render() {
        return (
            <div className='login-facebook'>
                <button className='login-facebook-btn' 
                onClick={this.props.triggerLogin} 
                {...this.props}>
                { this.props.children }
                </button>
            </div>
        );
    }
}

export default SocialLogin(SocialButton);
