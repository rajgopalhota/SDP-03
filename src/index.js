import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import './Styles/Animations.css';
import App from './Vajra';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

