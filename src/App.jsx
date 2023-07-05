import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Products,
  SingleProduct,
} from './pages';

function App() {
  return (
    <Router>
      <h1>Trendy Toes - Shoe Store</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
