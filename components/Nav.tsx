import Link from "next/link";
import styled from "styled-components";
import useTranslation from "./useTranslation";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2;
  font-size: 16px;
  text-transform: uppercase;
  padding: 1rem;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.background};
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
  @media (max-width: 768px) {
    a:last-child {
      padding-right: 1rem;
    }
  }
`;

const StyledNavLinks = styled.ul`
  @media (max-width: 768px) {
    display: none;
  }
  list-style-type: none;
  justify-content: space-between;
  margin: 0 1rem 0 1rem;
  li {
    display: inline-block;
    padding: 0 1rem 0 1rem;
  }
`;

const Nav = () => {
  const { t } = useTranslation();
  return (
    <StyledNav>
      <Link href="/">
        <a>Ben Simmons</a>
      </Link>
      <StyledNavLinks>
        <li>
          <Link href="#about">
            <a>{t("about")}</a>
          </Link>
        </li>

        <li>
          <Link href="#projects">
            <a>{t("portfolio")}</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>{t("contact")}</a>
          </Link>
        </li>
      </StyledNavLinks>
      <Link href="https://github.com/GitSimmons/">
        <a>Github</a>
      </Link>
    </StyledNav>
  );
};

export default Nav;
