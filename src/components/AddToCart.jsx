import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { styled } from 'styled-components';
import AmoutButtons from './AmoutButtons';
import { Link } from 'react-router-dom';

const AddToCart = ({ product }) => {
  const { colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
                className={
                  color === mainColor ? 'color-btn active' : 'color-btn'
                }
              >
                {color === mainColor ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmoutButtons amount={amount} />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
    text-align: center;
  }
`;
