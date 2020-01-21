import styled from "styled-components";
import Nav from "../components/Nav";
import GlobalStyles from "../components/styles/GlobalStyles";
const StyledDiv = styled.div`
  color: red;
`;

function Home() {
  return (
    <>
      <GlobalStyles />
      <Nav />
    </>
  );
}

export default Home;
