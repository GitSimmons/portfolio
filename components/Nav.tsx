import Link from "next/link";
import styled from "styled-components";
const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2;
  font-size: 16px;
  text-transform: uppercase;
  padding: 1rem;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.background};
}
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textColor};
    display: block;
    text-align: center;
    transition: all 0.2s ease;
  }
  a:hover {
    color: ${props => props.theme.colors.buttonColor};
  }
`;

const StyledNavLinks = styled.ul`
  list-style-type: none;
  justify-content: space-between;
  margin: 0 1rem 0 1rem;
  li {
    display: inline-block;
    padding: 0 1rem 0 1rem;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>Ben Simmons</a>
      </Link>
      <StyledNavLinks>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/GitSimmons/">
            <a>GitHub</a>
          </Link>
        </li>
      </StyledNavLinks>
      <Link href="/">
        <a>Contact</a>
      </Link>
    </StyledNav>
  );
};

export default Nav;
