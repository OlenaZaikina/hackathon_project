import React, { useState } from 'react';
import Dashboard from "../dashboard";
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BadgesPage from '../badges-page/BadgesPage';
import MyGoals from './pages/MyGoals';
import ProfilePage from './pages/ProfilePage';
import CreateContainer from '../create-goal/CreateContainer';
import MainFooter from './MainFooter';
import './style.scss';
import { useUser, useUserUpdate } from '../../UserContext'
import TrackingPage from '../tracking-progress/TrackingPage';



function MainContainer() {

    console.log('main render')
    let user = useUser()
    let toggleUser = useUserUpdate()
    if (!user) toggleUser(localStorage.getItem('user'))
    console.log(user)
    const [openSidenav, setOpenSidenav] = useState(false);

    function toggleNav() {
        return openSidenav ? { width: '250px', margin: '280px' } : { width: '40px', margin: '70px' }
    }

    return (
        <>
            {user
                ? (
                    <Router>
                        <Header openSidenavFunc={setOpenSidenav} opened={openSidenav} />
                        <Sidebar width={toggleNav().width} opened={openSidenav} />

                        <div style={
                            {
                                // border: '1px solid black',
                                margin: '50px 20px 50px 70px',
                                marginLeft: toggleNav().margin,
                                transition: 'all 0.5s linear',
                                background: "#F3F3F3",
                                minHeight: '70vh'
                            }
                        }>
                            <Switch>
                                <Route path='/dashboard' exact component={Dashboard} />
                                <Route path='/badges' exact component={BadgesPage} />
                                <Route path='/goals-collection' exact component={MyGoals} />
                                <Route path='/newGoal' exact component={CreateContainer} />
                                <Route path='/progress' exact component={TrackingPage} />
                                <Route path='/my-profile' exact component={ProfilePage} />
                            </Switch>
                        </div>
                        <MainFooter />
                    </Router>
                )
                : (
                    <Redirect to="/signin" />
                )
            }
        </>
    );
}

export default MainContainer;
