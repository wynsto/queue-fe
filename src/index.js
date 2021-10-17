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



const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const ThemeContext = React.createContext('light');
  export { ThemeContext };
const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug}>
      <BaseProvider theme={LightTheme}>
        <Provider store={store}>
          <ThemeContext.Provider value="red">
            <App />
          </ThemeContext.Provider>
        </Provider>
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
