import React, { useState } from 'react';
import Dashboard from "../dashboard";
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Badges from './pages/Badges';
import MyGoals from './pages/MyGoals';
import NewGoal from './pages/NewGoal';
import Progress from './pages/Progress';
import UpdateProgress from './pages/UpdateProgress';
import MyOffice from './pages/MyOffice';
import CreateContainer from '../create-goal/CreateContainer';
import './style.scss';
const user = JSON.parse(localStorage.getItem('user'));

function MainContainer() {

    const [openSidenav, setOpenSidenav] = useState(false);

    console.log(user)

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
                                border: '1px solid black',
                                margin: '50px 20px 50px 70px',
                                marginLeft: toggleNav().margin,
                                transition: 'all 0.5s linear'
                            }
                        }>
                            {/* <h1>Hello { user._profile.firstName }!</h1> */}
                            <Switch>
                                <Route path='/dashboard' exact component={Dashboard} />
                                <Route path='/badges' exact component={Badges} />
                                <Route path='/myGoals' exact component={MyGoals} />
                                <Route path='/newGoal' exact component={CreateContainer} />
                                <Route path='/progress' exact component={Progress} />
                                <Route path='/updateProgress' exact component={UpdateProgress} />
                                <Route path='/myOffice' exact component={MyOffice} />
                            </Switch>
                        </div>
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
