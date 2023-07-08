import { styled } from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../context/filter_context';
import { products } from '../utils/products';
import { formatPrice, getUniqueValues } from '../utils/helpers';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      brand,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
  } = useFilterContext();

  const updateFilters = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
  };

  const categories = getUniqueValues(products, 'category');
  const brands = getUniqueValues(products, 'brand');
  const colors = getUniqueValues(products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input start */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              value={text}
              onChange={updateFilters}
              className="search-input"
            />
          </div>
          {/* end of search input */}
          {/* categories input start */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    onClick={updateFilters}
                    className={c === category ? 'active' : ''}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories input */}
          {/* brands start */}
          <div className="form-control">
            <h5>brand</h5>
            <select
              name="brand"
              value={brand}
              onChange={updateFilters}
              className="brand"
            >
              {brands.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of brands */}
          {/* colors start */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      type="button"
                      name="color"
                      data-color="all"
                      onClick={updateFilters}
                      className={c === color ? 'all-btn active' : 'all-btn'}
                    >
                      {c}
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    type="button"
                    name="color"
                    data-color={c}
                    onClick={updateFilters}
                    style={{ background: c }}
                    className={c === color ? 'color-btn active' : 'color-btn'}
                  >
                    <FaCheck />
                    {/* {c === color ? <FaCheck /> : null} */}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price start */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name={price}
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* end of price */}
          {/* shipping start */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              id="shipping"
              name="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button type="button" className="clear-btn">
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    outline: none;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .brand {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
    width: 170px;
    flex-wrap: wrap;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
