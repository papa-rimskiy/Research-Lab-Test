import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserPage from "./UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { rootReducer } from "./redux/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);