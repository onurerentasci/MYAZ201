import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Counter from "./components/counter/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>
);