import styled from "styled-components";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Project from "../components/Project";
import GlobalStyles from "../components/styles/GlobalStyles";
import Head from "next/head";
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
        <Head>
          <title>Ben Simmons | Portfolio</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <Nav />
        <Hero />
        {projects.map(project => (
          <Project {...project} key={project.title} />
        ))}
      </Container>
    </>
  );
}

export default Home;
