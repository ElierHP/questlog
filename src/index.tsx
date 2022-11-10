import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.scss";
import "./css/index.scss";
import App from "./app/App";
import { Provider } from "react-redux";
import { setupStore } from "./app/store";
import { BrowserRouter } from "react-router-dom";

// Setup redux store.
const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
