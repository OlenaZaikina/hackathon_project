import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function Header({ openSidenavFunc, opened }) {

    const localOpened = opened;
    return (
        <>
            <header className="main-header">
                <div className="header-container">
                    <div className="header-icon-bar">
                        <Link to='/signin' > <span><i className="fas fa-sign-out-alt"></i></span></Link>
                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                    </div>
                    <div className="sidenav-button" onClick={() => {
                        openSidenavFunc(!localOpened);
                        console.log('hi? ljgout')
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