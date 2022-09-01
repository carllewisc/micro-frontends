import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.renderApp1 = (containerId, {messages}) => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  root.render(
    <React.StrictMode>
      <App messages={messages} />
    </React.StrictMode>
  );
};

window.unmountApp1 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('App1-container')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
