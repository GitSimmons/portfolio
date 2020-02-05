import styled from 'styled-components';

const StyledToC = styled.div`
  position: sticky;
  position: -webkit-sticky;
  align-self: flex-start;
  top: 6rem;
  padding: 2rem 1rem;
  font-size: 1rem;
  /* text-align: right; */
  p {
    color: ${(props): string => props.theme.colors.textColor};
  }
  ul {
    list-style: none;
  }
  li:last-child {
    padding-top: 1rem;
  }
  a {
    color: ${(props): string => props.theme.colors.buttonColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    display: none;
    min-width: 0px;
  }
  min-width: 225px;
`;
const ToC: React.FC = ({ children }: { children: React.ReactNode }) => {
  return <StyledToC>{children}</StyledToC>;
};

export default ToC;
