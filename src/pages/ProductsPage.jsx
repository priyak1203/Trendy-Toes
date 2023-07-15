import { styled } from 'styled-components';
import {
  Error,
  Filters,
  Loading,
  PageHero,
  ProductsList,
  Sort,
} from '../components';
import { useProductsContext } from '../context/products_context';

const ProductsPage = () => {
  const { products_loading: loading, products_error: error } =
    useProductsContext();

  if (loading) {
    return (
      <main>
        <PageHero title="products" />
        <Wrapper className="page">
          <Loading />;
        </Wrapper>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <PageHero title="products" />
        <Wrapper className="page">
          <Error />
        </Wrapper>
      </main>
    );
  }

  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductsPage;

const Wrapper = styled.section`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
