import Link from "next/link";
import styled from "styled-components";
const StyledHeader = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  line-height: 2;
  font-family: "Open Sans", Lato, Arial, Helvetica, sans-serif;
  font-size: 14px;
  @media (min-width: 768px) {
    width: 70%;
  }
  padding: 2rem 0 2rem 0;
`;

const Nav = () => {
  return (
    <StyledHeader>
      <Link href="/">Ben Simmons</Link>
      <Link href="/">About</Link>
      <Link href="/">Portfolio</Link>
      <Link href="/">GitHub</Link>
    </StyledHeader>
  );
};

export default Nav;
