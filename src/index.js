import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import { BaseProvider } from 'baseui';
import { Auth0Provider } from "@auth0/auth0-react";
import {colors} from 'baseui/tokens';
import {createTheme, lightThemePrimitives} from 'baseui';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const ThemeContext = React.createContext('light');
  export { ThemeContext };
const engine = new Styletron();

const primitives = {
  ...lightThemePrimitives,
  primary: colors.platinum800,
  buttonPrimaryFill: '#253A47',
  buttonPrimaryHover: '#30424D',
  colorPrimary: colors.platinum800,
  background: '#66A3BB',
  primary50: colors.platinum50,
  primary100: colors.platinum100,
  primary200: colors.platinum200,
  primary300: colors.platinum300,
  primary400: colors.platinum400,
  primary500: colors.platinum500,
  primary600: colors.platinum600,
  primary700: colors.platinum700,
};
const theme = createTheme(primitives);


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
        <BaseProvider theme={theme}>
          <Provider store={store}>
            <ThemeContext.Provider value="#66A3BB">
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
