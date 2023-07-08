import { styled } from 'styled-components';
import Product from './Product';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </Wrapper>
  );
};

export default GridView;

const Wrapper = styled.section`
  img {
    height: 175px;
  }
  display: grid;
  gap: 2rem 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
