import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } fro/m 'react-router-dom';
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> / */}
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
);
