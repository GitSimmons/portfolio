import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Project from "../components/Project";
import GlobalStyles from "../components/styles/GlobalStyles";
import Head from "next/head";
import projects from "../data/projects";
import { light, dark } from "../components/styles/themes";
const Container = styled.div`
  width: 90vw;
  margin: auto;
`;

function Home() {
  const [theme, setTheme] = React.useState(light);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Head>
            <title>Ben Simmons | Portfolio</title>
            <link rel="icon" type="image/png" href="/favicon.png" />
          </Head>
          <Nav />
          <Hero>
            <span>
              Hi there, I'm Ben <br />
              a Full Stack Developer
              <br />
              from Montreal, QC
            </span>
          </Hero>
          {projects.map(project => (
            <Project {...project} key={project.title} />
          ))}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Home;
