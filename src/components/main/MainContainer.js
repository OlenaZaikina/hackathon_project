import React, { useState } from 'react';
import Dashboard from "../dashboard";
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Badges from './pages/Badges';
import MyGoals from './pages/MyGoals';
import NewGoal from './pages/NewGoal';
import Progress from './pages/Progress';
import UpdateProgress from './pages/UpdateProgress';
import './style.scss';

function MainContainer() {

    const [openSidenav, setOpenSidenav] = useState(false);

    // let user = JSON.parse(localStorage.getItem('user'));

    function toggleNav() {
        return openSidenav ? { width: '250px', margin: '280px' } : { width: '40px', margin: '70px' }
    }

    return (
        <>
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
          <Route path='/newGoal' exact component={NewGoal} />
          <Route path='/progress' exact component={Progress} />
          <Route path='/updateProgress' exact component={UpdateProgress} />
    </Switch>
    </div>
           </Router>     
            
        </>
    );
}

export default MainContainer;