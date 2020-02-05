import styled from 'styled-components';

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  color: ${(props): string => props.theme.colors.textColor};
  background-image: ${(props): string => props.theme.colors.gradient};
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: 900;
  font-size: 7vw;
  @media (min-width: 900px) {
    font-size: 4rem;
  }
  span {
    color: ${(props): string => props.theme.colors.buttonColor};
  }
`;
const Hero: React.FC = ({ children }: { children: React.ReactNode }) => (
  <StyledHero>
    <div id="about">{children}</div>
  </StyledHero>
);
export default Hero;
