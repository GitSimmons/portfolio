import router from 'next/router';
import styled from 'styled-components';
import { useLocale } from './useLocale';
import { locales } from '../data/locales';

const LocaleButton = styled.button`
  position: fixed;
  right: 0.5rem;
  top: calc(1rem + 32px + 5px);
  line-height: 2;
  font-size: 16px;
  z-index: 1;
  cursor: pointer;
  color: ${(props): string => props.theme.colors.textColor};
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

const LocaleSwitcher: React.FC = () => {
  const { locale: currentLocale } = useLocale();
  return (
    <>
      {locales
        .filter((testLocale) => testLocale !== currentLocale)
        .map((locale) => (
          <LocaleButton key={locale} onClick={(): Promise<boolean> => router.push(`/${locale}`)}>
            {locale}
          </LocaleButton>
        ))}
    </>
  );
};

export default LocaleSwitcher;
