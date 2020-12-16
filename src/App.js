import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingContainer from './components/LandingPage/LandingContainer/index';
import './App.scss';
import SignUp from './components/login/FormSignUp';
import SignIn from './components/login/FormSignIn';
import Dashboard from './components/login/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
