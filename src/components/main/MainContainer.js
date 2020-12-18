import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "../dashboard";
import Header from './Header';
import Sidebar from './Sidebar';
import CreateContainer from '../create-goal/CreateContainer';
import './style.scss';


function MainContainer() {
    console.log('main render')
    const [openSidenav, setOpenSidenav] = useState(false);

    function toggleNav() {
        return openSidenav ? { width: '250px', margin: '280px' } : { width: '40px', margin: '70px' }
    }


    return (
        <>
            <Header openSidenavFunc={setOpenSidenav} opened={openSidenav} />
            <Sidebar width={toggleNav().width} opened={openSidenav} />
            <div style={
                {
                    border: '1px solid black',
                    margin: '50px 20px 50px 70px',
                    marginLeft: toggleNav().margin,
                    transition: 'all 0.5s linear'
                }
            }>
                <Dashboard />

                {/* <Route render={({ location }) => {
                    const { pathname } = location;
                    return (
                        <>
                            {pathname === "create-goal" && <CreateContainer />}
                        </>
                    )
                }} /> */}
                {/* <Route exact path="/create-goal" component={ } /> */}


            </div>
        </>
    );
}

export default MainContainer;