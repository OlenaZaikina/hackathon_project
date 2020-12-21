import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingContainer from './components/landingPage/LandingContainer';
import './App.scss';
import FormSignUp from './components/login/FormSignUp';
import FormSignIn from './components/login/FormSignIn';
import MainContainer from './components/main/MainContainer';
import MyGoals from './components/main/pages/MyGoals';
import { UserProvider } from './UserContext'

function App() { 
  
  console.log('app render')
  return (



        <div className="App">
          
            <Router>
              <Switch>
              <UserProvider>
              <Route exact path="/" component={LandingContainer} />
              <Route exact path="/signup" component={FormSignUp} />
              <Route exact path="/signin" component={FormSignIn} />
              <Route exact path="/dashboard" component={MainContainer} />
              <Route exact path="/myGoals" component={MainContainer} />
              <Route exact path="/newGoal" component={MainContainer} />
              <Route exact path="/progress" component={MainContainer} />
              <Route exact path="/updateProgress" component={MainContainer} />
              <Route exact path="/badges" component={MainContainer} />
              <Route exact path="/my-profile" component={MainContainer} />
              </UserProvider>
              </Switch>
            </Router>
        </div>
  );
}

export default App;
