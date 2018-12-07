import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  a {
    margin-left: 2.6rem;
    color: inherit;
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/work">
        <a>WORK</a>
      </Link>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/contact">
        <a>CONTACT</a>
      </Link>
    </StyledNav>
  );
};

export default Navbar;
