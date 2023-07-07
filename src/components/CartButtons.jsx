import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const CartButtons = () => {
  const myUser = false;
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="cart" className="cart-btn">
        cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">6</span>
        </span>
      </Link>
      {myUser ? (
        <button type="button" className="auth-btn">
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type="button" className="auth-btn">
          Login
          <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

export default CartButtons;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    text-transform: capitalize;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
