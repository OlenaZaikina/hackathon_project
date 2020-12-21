import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingContainer from './components/landingPage/LandingContainer';
import './App.scss';
import FormSignUp from './components/login/FormSignUp';
import FormSignIn from './components/login/FormSignIn';
import MainContainer from './components/main/MainContainer';
import { UserProvider } from './UserContext'

function App() { 
  
  console.log('app render')
  return (



        <div className="App">
          <Router>
            <UserProvider>
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/signup" component={FormSignUp} />
            <Route exact path="/signin" component={FormSignIn} />
            <Route exact path="/dashboard" component={MainContainer} />
            </UserProvider>
          </Router>
        </div>
  );
}

export default App;
