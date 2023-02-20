// Entry point for the build script in your package.json
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./redux/configureStore";




const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);