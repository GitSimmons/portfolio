import styled from "styled-components";
const StyledHero = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.textColor};
  background-image: ${props => props.theme.colors.gradient};
  padding: 2rem;
  margin-bottom: 1rem;

  font-weight: 900;
  font-size: 5vw;

  span {
    color: ${props => props.theme.colors.buttonColor};
  }
`;

const Hero = ({ children }) => <StyledHero>{children}</StyledHero>;
export default Hero;
