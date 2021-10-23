import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import { Auth0Provider } from "@auth0/auth0-react";


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const ThemeContext = React.createContext('light');
  export { ThemeContext };
const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
      domain="dev-mmfk4f-p.us.auth0.com"
      clientId="hfvpZ7WxUbRDCNp616omPqj8s0bsHRi3"
      redirectUri={window.location.origin}
      useRefreshTokens={true}
      audience="https://api.queu.eu/"
      >
      <StyletronProvider value={engine} debug={debug}>
        <BaseProvider theme={LightTheme}>
          <Provider store={store}>
            <ThemeContext.Provider value="red">
              <App />
            </ThemeContext.Provider>
          </Provider>
        </BaseProvider>
      </StyletronProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
