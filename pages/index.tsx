import styled from "styled-components";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Project from "../components/Project";
import GlobalStyles from "../components/styles/GlobalStyles";

import projects from "../data/projects";

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
        {/* <Hero /> */}
        {projects.map(project => (
          <Project {...project} />
        ))}
      </Container>
    </>
  );
}

export default Home;
