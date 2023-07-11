import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductsProvider } from './context/products_context.jsx';
import { FliterProvider } from './context/filter_context.jsx';
import { CartProvider } from './context/cart_context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context.jsx';

const domain = `${import.meta.env.VITE_APP_AUTH_DOMAIN}`;
const clientID = `${import.meta.env.VITE_APP_AUTH_CLIENT_ID}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FliterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FliterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
