import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  height: 600px;
  background-image: radial-gradient(circle at left, #fff, #ddd);
`;

const Hero = () => <StyledHero></StyledHero>;
export default Hero;
