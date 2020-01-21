import styled from "styled-components";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import GlobalStyles from "../components/styles/GlobalStyles";

const Container = styled.div`
  width: 90vw;
  margin: auto;
`;

function Home() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Nav />
        <Hero />
      </Container>
    </>
  );
}

export default Home;
