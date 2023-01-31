import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Context/Productcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>

);

reportWebVitals();
