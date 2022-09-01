import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

window.renderApp2 = (containerId, { messages }) => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  root.render(<App messages={messages} />);
};

window.unmountApp2 = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("App2-container")) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}
