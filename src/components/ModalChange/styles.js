import styled from "styled-components";
import { Modal } from "@material-ui/core";

import { colors } from "../../styles/themes";
export const ModalCustom = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  flex-direction: column;
  width: 40.438rem;
  height: 17.5rem;
  z-index: 0;
`;
