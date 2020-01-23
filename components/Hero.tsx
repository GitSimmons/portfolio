import styled from "styled-components";
const StyledHero = styled.div`
  background-image: radial-gradient(circle at left, #fff, #ddd);
  padding: 1rem;
  margin-bottom: 1rem;
  height: 30rem;
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

const Hero = () => <StyledHero></StyledHero>;
export default Hero;
