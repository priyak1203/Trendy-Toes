import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductsProvider } from './context/products_context.jsx';
import { FliterProvider } from './context/filter_context.jsx';
import { CartProvider } from './context/cart_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <FliterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FliterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
