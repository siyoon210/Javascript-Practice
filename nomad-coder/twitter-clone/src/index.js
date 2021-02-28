import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppRouter from './components/Router';
import firebase from "./firebase";

console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
