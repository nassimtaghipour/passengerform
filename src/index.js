import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Terminate from "./components/Terminate";
import { BrowserRouter as Router, Route } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/Terminate" exact component={Terminate} />
  </Router>,
  document.getElementById("root")
);


serviceWorker.unregister();
