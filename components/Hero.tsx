import styled from "styled-components";

const StyledHero = styled.div`
  background-image: radial-gradient(circle at left, #fff, #ddd);
  h3 {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #be5657;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
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
`;

const ImageContainer = styled.div`
  max-width: 95%;
  display: flex;
  margin: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const Hero = () => (
  <StyledHero>
    <h3>Ragnarok MVP Tracker</h3>
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
    <ul>
      <li>Single Page App</li>
    </ul>
    <ul>
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
