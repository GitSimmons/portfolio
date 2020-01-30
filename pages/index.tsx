import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Project from "../components/Project";
import ThemeSwitcher from "../components/ThemeSwitcher";
import GlobalStyles from "../components/styles/GlobalStyles";
import projects from "../data/projects";
import { light } from "../components/styles/themes";
const Container = styled.div`
  width: 90vw;
  margin: auto;
`;

function Home() {
  const [theme, setTheme] = useState(light);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ThemeSwitcher setTheme={setTheme} theme={theme} />
        <Container>
          <Head>
            <title>Ben Simmons | Portfolio</title>
            <link rel="icon" type="image/png" href="/favicon.png" />
          </Head>
          <Nav />
          <Hero>
            <p>
              Hi there, I'm Ben, <br />a <span>Full Stack Developer</span>
              <br />
              from Montreal, QC
            </p>
          </Hero>
          <div id="projects">
            {projects.map(project => (
              <Project {...project} key={project.title} />
            ))}
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Home;
