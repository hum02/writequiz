import React from 'react';
import App from './shared/App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { Provider } from 'react-redux';

import store from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import Root from './client/Root';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
