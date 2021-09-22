import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import AppContainer from './#/AppContainer';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.css';
import { store } from './@store/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
