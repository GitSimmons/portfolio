import Link from "next/link";
import styled from "styled-components";
const StyledNav = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  line-height: 2;
  font-size: 16px;
  text-transform: uppercase;
}
  a {
    text-decoration: none;
    padding: 0 1rem 0 1rem;
    display: block;
    text-align: center;
  }
`;

const StyledNavLinks = styled.ul`
  list-style-type: none;
  justify-content: space-between;
  margin: 0 1rem 0 1rem;
  li {
    float: left;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/">Ben Simmons</Link>
      <StyledNavLinks>
        <li>
          <Link href="/">About</Link>
        </li>

        <li>
          <Link href="/">Portfolio</Link>
        </li>
        <li>
          <Link href="/">GitHub</Link>
        </li>
      </StyledNavLinks>
      <Link href="/">Contact</Link>
    </StyledNav>
  );
};

export default Nav;
