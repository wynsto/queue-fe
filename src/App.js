import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';
import { Queue } from './features/queue/Queue';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <LogoutButton />
        <Queue />
        <QRCode value="https://queu.eu/" />
      </header>
    </div>
  );
}

export default App;
