import React from 'react';
import logo from './logo.png';
import './App.css';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import QueueDetail from './components/QueueDetail';
import Home from './components/Home';
import history from "./utils/history";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router history={history}>
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"/>
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </header>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={Home} />
          <Route path="/q/:id" children={<QueueDetail />} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
