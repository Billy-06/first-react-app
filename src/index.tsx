import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";


ReactDOM.render(
  // Add router togive access to the router
  <React.StrictMode>
      <App />
  </React.StrictMode>
  
  ,
  document.getElementById('root')
);

