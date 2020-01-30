import styled from "styled-components";
import { light, dark } from "./styles/themes";

const ThemeButton = styled.div`
  position: fixed;
  right: 0.5rem;
  top: 1rem;
  line-height: 2;
  font-size: 16px;
  z-index: 1;
  cursor: pointer;
  background: ${props => props.theme.colors.gradient};
  background-size: 32px 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.gradientEndColor};
  }
`;

const ThemeSwitcher = ({ setTheme, theme }) => {
  const handleClick = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };
  return (
    <ThemeButton>
      <span onClick={() => handleClick()}> {theme === dark ? `🌙` : `☀️`}</span>
    </ThemeButton>
  );
};

export default ThemeSwitcher;
