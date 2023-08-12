import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import heroBcg from '../assets/about.jpg';
import heroBcg2 from '../assets/heroBcg2.jpg';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article>
        <h1>
          Flaunt Your <br />
          Classy Shoes
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="shoe store" className="main-img" />
        <img src={heroBcg2} alt="shoe display" className="accent-img" />
      </article>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .img-container {
    display: none;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 20%;
      height: 80%;
      bottom: 0%;
      left: -12%;
      background: var(--clr-primary-9);
      border-radius: var(--radius);
    }
  }
`;
