import styled from 'styled-components';

import { colors } from '../../styles/themes'

export const Checkbox = styled.div`
  /* -webkit-appearance: initial; */
  /* appearance: initial; */
  width: 15px;
  height: 17px;
  position: relative;
  margin-right: 0.6rem;
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.secondary};
  @media screen and (max-width: 600px) {
    width: 18px;
  }

  input[type='checkbox'] {
    -webkit-appearance: initial;
    width: 1rem;
    height: 100%;
  }

  input[type='checkbox']:checked {
    background-color: ${colors.secondary};
  }

  input[type='checkbox']:checked:after {
    /* Heres your symbol replacement */
    content: 'X';
    color: ${props => (props.type === 'white' ? colors.dark : colors.primary)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
    font-size: 10px;
  }
`;

// .checked {
//   border: 1px solid ${colors.secondary};
// }

// .not-checked {
//   border: 1px solid ${colors.light};
// }

// input[type='checkbox']:checked {
//   background: ${colors.primary};
// }