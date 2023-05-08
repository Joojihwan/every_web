import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {MainPage, LoginPage} from "./pages";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div id="main_body">
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

