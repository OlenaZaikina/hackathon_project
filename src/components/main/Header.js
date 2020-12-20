import React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { useUserUpdate } from '../../UserContext'

import './style.scss';

function Header({ openSidenavFunc, opened }) {
    //const user = useUser()
    const toggleUser = useUserUpdate()
    const localOpened = opened;
    let history = useHistory();

    return (
        <>
            <header className="main-header">
                <div className="header-container">
                    <div className="header-icon-bar">
                        
                        <Link to="/signin" onClick={() => { 
                            toggleUser(null)
                            localStorage.removeItem('user');
                            //history.push('/signin')
                            }}><span><i className="fas fa-sign-out-alt"></i></span></Link>
                        <Link to="/my-profile"><span><i className="fa fa-user" aria-hidden="true"></i></span></Link>
                        
                    </div>
                    <div className="sidenav-button" onClick={() => {
                        openSidenavFunc(!localOpened);
                        }
                    } >
                        <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                    </div>
                </div>

            </header>
        </>
    )
}
export default Header;