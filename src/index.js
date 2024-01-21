import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";
import "tachyons";
import App from "./components/App";

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
