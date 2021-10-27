import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import QueueDetail from './components/QueueDetail';
import Home from './components/Home';
import Nav from './components/Nav';
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Nav />
      <header className="App-header">
       
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
