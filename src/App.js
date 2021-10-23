import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.png';
import './App.css';
import { Queue } from './features/queue/Queue';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"/>
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
        <Queue />
        <QRCode value="https://queu.eu/" />
      </header>
    </div>
  );
}

export default App;
