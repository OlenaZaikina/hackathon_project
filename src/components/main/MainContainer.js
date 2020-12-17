import Header from './Header';
import React from 'react'

function MainContainer() {
    let user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <Header />
            <h1>Hello { user._profile.firstName }!</h1>
        </>
    );
}

export default MainContainer;