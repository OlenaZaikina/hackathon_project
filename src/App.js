import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingContainer from './components/landingPage/LandingContainer';
import './App.scss';
import SignUp from './components/login/FormSignUp';
import SignIn from './components/login/FormSignIn';
import MainContainer from './components/main/MainContainer';

function App() {
  return (
        <div className="App">
          <Router>
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/dashboard" component={MainContainer} />
          </Router>
        </div>
  );
}

export default App;
