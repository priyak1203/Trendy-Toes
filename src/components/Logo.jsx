import { styled } from 'styled-components';

const Logo = () => {
  return (
    <Wrapper className="logo">
      <span>Trendy</span>Toes
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-3);
  span {
    color: var(--clr-primary-5);
  }
`;
