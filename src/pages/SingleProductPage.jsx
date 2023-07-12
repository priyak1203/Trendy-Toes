import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useEffect } from 'react';
import { single_product_url as url } from '../utils/constants';
import {
  AddToCart,
  Error,
  Loading,
  PageHero,
  ProductImages,
  Stars,
} from '../components';
import { styled } from 'styled-components';
import { formatPrice } from '../utils/helpers';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    fetchSingleProduct,
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = useProductsContext();

  // fetch product details
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  // redirect after 3s in case of an error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    stars,
    reviews,
    price,
    description,
    stock,
    id: sku,
    brand,
    images,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>available : </span>
              {stock > 0 ? 'in stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>sku : </span>
              {sku}
            </p>
            <p className="info">
              <span>brand : </span>
              {brand}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
