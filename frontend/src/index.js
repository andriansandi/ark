import React from 'react';
import { hydrate, render } from "react-dom";

// styles
import 'reset-css';
import "./index.css";

import App from './App';
import * as serviceWorker from './serviceWorker';


// const routing = (
//     <Router>
//       <div>
//         <Route path="/" component={App} />
//         <Route path="/users" component={Users} />
//         <Route path="/contact" component={Contact} />
//       </div>
//     </Router>
//   )

// // ReactDOM.render(routing, document.getElementById('root'));

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
