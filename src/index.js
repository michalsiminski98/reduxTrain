import React from "react";
import ReactDOM from "react-dom";
import Root from "./templates/Root";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
