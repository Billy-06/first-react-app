import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
  // Add router togive access to the router
  <Router>
    <App admin={false} userName="Billy-06"/>
  </Router>
  ,
  document.getElementById('root'),
  document.getElementById('about')
);

