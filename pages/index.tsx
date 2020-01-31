import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Project from "../components/Project";
import ToC from "../components/ToC";

import ThemeSwitcher from "../components/ThemeSwitcher";
import GlobalStyles from "../components/styles/GlobalStyles";
import { light } from "../components/styles/themes";

import projects from "../data/projects";
const Container = styled.div`
  width: 90vw;
  margin: auto;
`;

function Home() {
  const [theme, setTheme] = useState(light);
  const refs = projects.reduce((acc, project) => {
    acc[project.title] = React.createRef();
    return acc;
  });
  const handleClick = title =>
    refs[title].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeSwitcher setTheme={setTheme} theme={theme} />
      <Container>
        <Head>
          <title>Ben Simmons | Portfolio</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Kumar+One+Outline|Roboto&display=swap"
            rel="stylesheet"
          />
          <meta
            name="Description"
            content="Ben Simmons is a full stack developer who works primarily with React, Typescript and GraphQL."
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=%your code here%"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "UA-157528793-1");
    `
            }}
          ></script>
        </Head>
        <Nav />
        <Hero>
          <p>
            Hi there, I'm Ben, <br />a <span>Full Stack Developer</span>
            <br />
            from Montreal, QC
          </p>
        </Hero>
        <div style={{ position: "relative", display: "flex" }}>
          <ToC>
            <p>Projects</p>
            <ul>
              {projects.map(project => (
                <li key={project.title}>
                  <a href={"#" + project.title}>{project.title} </a>
                </li>
              ))}
              <li>
                <a href="#">Back to Top</a>
              </li>
            </ul>
          </ToC>
          <div id="projects">
            {projects.map(project => (
              <Project {...project} key={project.title} />
            ))}
          </div>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
