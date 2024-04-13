import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import './index.css';
import App from './App';
import ShopContextProvider from './context/ShopContext';
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <App/>
  </ShopContextProvider>
);

reportWebVitals(); // Call reportWebVitals function
