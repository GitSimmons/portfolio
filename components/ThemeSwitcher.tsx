import React from 'react'
import styled from 'styled-components';
import { light, dark, Theme } from './styles/themes';

const ThemeButton = styled.button`
  position: fixed;
  right: 0.5rem;
  top: 1rem;
  line-height: 2;
  font-size: 16px;
  z-index: 1;
  cursor: pointer;
  background: ${(props): string => props.theme.colors.gradient};
  background-size: 32px 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    background: ${(props): string => props.theme.colors.gradientEndColor};
  }
`;

type ThemeSwitcherProps = {
  setTheme: (theme: Theme) => void,
  theme: Theme
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ setTheme, theme }: ThemeSwitcherProps) => {
  const handleClick: () => void = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };
  return (
    <ThemeButton type="button" onClick={(): void => handleClick()}>
      {theme === dark ? `🌙` : `☀️`}
    </ThemeButton>
  );
};

export default ThemeSwitcher;
