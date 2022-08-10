import React from "react";
import ReactDOM, { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import "tachyons";
import App from "./Containers/App";
import { searchRobots, requestRobots } from "./Redux/reducers";
import reportWebVitals from "./reportWebVitals";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     rootElement
//   );
// } else {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     rootElement
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
