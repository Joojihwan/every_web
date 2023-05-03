import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pages from "./pages/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <pages.MainPage>

    </pages.MainPage>
  </React.StrictMode>
);
