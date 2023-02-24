import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Context/Productcontext';
import { FeatureProvider } from './Context/Featuredcontext';
import { CardProvider } from './Context/Card_context';
import { BannerProvider } from './Context/Bannercontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
    <FeatureProvider>
      <CardProvider>
        <BannerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BannerProvider>
      </CardProvider>
    </FeatureProvider>
  </AppProvider>

);

reportWebVitals();
