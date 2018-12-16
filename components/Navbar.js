import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  background: transparent;
  z-index: 1000;
  @media (max-width: 600px) {
    justify-content: space-around;
  }
  a {
    margin-left: 2.6rem;
    color: inherit;
    text-decoration: none;
    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Link href="/" passHref>
        <a>HOME</a>
      </Link>
      <Link href="/work" passHref>
        <a>WORK</a>
      </Link>
      <Link href="/about" passHref>
        <a>ABOUT</a>
      </Link>
      <Link href="/contact" passHref>
        <a>CONTACT</a>
      </Link>
    </StyledNav>
  );
};

export default Navbar;
