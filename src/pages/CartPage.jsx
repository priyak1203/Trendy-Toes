import { styled } from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="page-100">
        <Wrapper>
          <h2 className="empty">Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </Wrapper>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

export default CartPage;

const Wrapper = styled.section`
  text-align: center;
  .empty {
    text-transform: none;
    margin-bottom: 1rem;
  }
`;
