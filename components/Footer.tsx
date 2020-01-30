import styled from "styled-components";
const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textColor};
  background-image: ${props => props.theme.colors.gradient};
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  height: 100vh;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 1rem;
  }
  a {
    color: ${props => props.theme.colors.buttonColor};
  }
`;
const Footer = () => (
  <StyledFooter>
    <div id="contact">
      Congrats, you made it to the bottom of the page! <br /> Thanks for
      checking out my portfolio. <br />✋
      <br />
      If you're looking to get in touch, don't hesitate to send me an email at:
      &nbsp;
      <a href="mailto:ben.ryan.simmons@gmail.com">ben.ryan.simmons@gmail.com</a>
      !
    </div>
  </StyledFooter>
);
export default Footer;
