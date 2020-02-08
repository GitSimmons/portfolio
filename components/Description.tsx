import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDescriptionWrapper = styled.div`
  button {
    display: block;
    padding: 1rem 0rem;
  }
  p {
    display: ${(props): string => (props.visible ? 'block' : 'none')};
  }
  @media (min-width: 768px) {
    button {
      display: none;
    }
    p {
      display: block;
    }
  }
`;
const DescriptionWrapper: React.FC = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  return (
    <StyledDescriptionWrapper visible={visible}>
      <button type="button" onClick={(): void => setVisible(!visible)}>
        read {visible ? 'less ( - )' : 'more ( + )'}
        <br />
      </button>
      <p>{children}</p>
    </StyledDescriptionWrapper>
  );
};

export default DescriptionWrapper
