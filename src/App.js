import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';
import { Queue } from './features/queue/Queue';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Queue />
        <QRCode value="https://queu.eu/" />
      </header>
    </div>
  );
}

export default App;
