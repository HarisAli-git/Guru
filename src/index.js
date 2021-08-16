import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './nav.css'
import './header.css'
import './FilterBar.css'
import './footer.css'
import './main.css'
import './SignUp.css'
import AppMain from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppMain></AppMain>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
