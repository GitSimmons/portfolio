import styled from "styled-components";
const StyledHero = styled.div`
  display: flex;
  align-items: center;
  background-image: radial-gradient(circle at left, #fff, #ddd);
  padding: 2rem;
  margin-bottom: 1rem;

  span {
    /* width: 100%; */
    font-weight: 900;
    font-size: 5vw;
  }
`;

const Hero = ({ children }) => <StyledHero>{children}</StyledHero>;
export default Hero;
