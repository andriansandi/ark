import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )

// ReactDOM.render(routing, document.getElementById('root'));

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(routing, rootElement);
} else {
  render(routing, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
