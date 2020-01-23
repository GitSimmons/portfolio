import styled from "styled-components";

const StyledHero = styled.div`
  background-image: radial-gradient(circle at left, #fff, #ddd);
  padding: 1rem;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 0.62em;
    width: 100%;
    position: relative;
  }
  h3 {
    display: block;
    margin: 0;
    font-size: 3.5rem;
    /* text-transform: uppercase; */
    font-family: "Kumar One Outline", cursive;
  }
  header:after {
    content: "";
    flex: auto;
    display: inline-block;
    height: 0.1rem;
    margin-left: 1rem;
    background-color: #000;
  }
  a {
    text-decoration: none;
    color: #be5657;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    text-transform: uppercase;
    list-style-type: none;
    li {
      display: inline-block;
      &:not(:last-child) {
        &:after {
          content: "/";
          margin: 0 0.5rem;
        }
      }
    }
  }
  .views {
    color: #be5657;
  }
  .tools {
    color: #777;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;
  display: flex;
  margin: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const Hero = () => (
  <StyledHero>
    <header>
      <h3>Ragnarok MVP Tracker</h3>
    </header>
    <ImageContainer>
      <div style={{ padding: "0.2rem" }}>
        <img src="/images/projects/ragnarok/ragnarok-fullwidth.jpg" />
      </div>
      <div style={{ padding: "0.2rem" }}>
        <img src="/images/projects/ragnarok/ragnarok-tablet.jpg" />
      </div>
      <div style={{ padding: "0.2rem" }}>
        <img src="/images/projects/ragnarok/ragnarok-narrow.jpg" />
      </div>
    </ImageContainer>
    <ul className="views">
      <li>Single Page App</li>
    </ul>
    <ul className="tools">
      <li>React</li>
      <li>Next</li>
      <li>Styled-Components</li>
      <li>Puppeteer</li>
      <li>FireStore</li>
      <li>AWS Lambda</li>
    </ul>
    <h4>Description</h4>
    <p>
      Ragnarok is an online game with server wide bosses to hunt. This tool
      helps players to see which bosses are available at a glance rather than
      spending time consulting the previous solution - a manually updated google
      spreadsheet. <br /> This is accomplished by scraping an online page that
      lists the latest kills of these bosses with Puppeteer running on AWS
      Lambda and then updating a FireStore database. On the front-end, NextJS
      renders out the basic table and pulls the data through a subscription to
      FireStore. Because NextJS uses SSR, requests to the database are kept
      constant rather than based on current users.
    </p>
    <h4>Links</h4>
    <ul>
      <li>
        <a href="https://r0mvptracker.now.sh/">Live Site</a>
      </li>
      <li>Front-end GitHub</li>
      <li>Back-end GitHub</li>
    </ul>
  </StyledHero>
);
export default Hero;
