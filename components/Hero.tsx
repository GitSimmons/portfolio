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

const Hero = () => (
  <StyledHero>
    <span>
      Hi there, I'm Ben <br />
      a Full Stack Developer
      <br />
      from Montreal, QC
    </span>
  </StyledHero>
);
export default Hero;
