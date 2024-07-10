import '../styles.css';
import { createRoot } from 'react-dom/client';
import { Navigation } from './Components.jsx';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);