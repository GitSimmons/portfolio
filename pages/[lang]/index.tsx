import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Nav from '../../components/Nav';
import Project from '../../components/Project';
import ToC from '../../components/ToC';
import useTranslation from '../../components/useTranslation';
import LocaleSwitcher from '../../components/LocaleSwitcher';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import GlobalStyles from '../../components/styles/GlobalStyles';
import { light, Theme } from '../../components/styles/themes';

import projects from '../../data/projects';

const Container = styled.div`
  width: 90vw;
  margin: auto;
`;

const Home: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(light);
  const { t, locale } = useTranslation();
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
            src="https://www.googletagmanager.com/gtag/js?id=UA-157528793-1"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "UA-157528793-1");
    `
            }}
          />
        </Head>
        <Nav />
        <Hero>
          <p>
            {t('header1')} <br />
            {t('header2')} <span>{t('headerTitle')} </span>
            <br />
            {t('header3')}
          </p>
        </Hero>
        <LocaleSwitcher />
        <div style={{ position: 'relative', display: 'flex' }}>
          <ToC>
            <p>{t('projects')}</p>
            <ul>
              {projects[locale].map((project) => (
                <li key={project.title}>
                  <a href={`#${project.title}`}>{project.title} </a>
                </li>
              ))}
              <li>
                <a href="#top">{t('top')}</a>
              </li>
            </ul>
          </ToC>
          <div id="projects">
            {projects[locale].map(({ title, views, tools, lead, description, links }) => (
              <Project title={title} tools={tools} views={views} lead={lead} description={description} links={links} key={title} />
            ))}
          </div>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
