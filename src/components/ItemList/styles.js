import styled from "styled-components";

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-left: 1.938rem;
  height: 3.438rem;
  width: 38rem;
p{
  margin-left: 0.875rem;
  cursor: ${props => (props.editable ? 'pointer' : 'none')};
  width: 32.5rem;
}
strike {
  margin-left: 0.875rem;
  cursor: ${props => (props.editable ? 'pointer' : 'none')};
  width: 32.5rem;
}
  img {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    float: right;
  }
`;

export const Line = styled.div`
  width: 38rem;
  height: 0px;
margin-left: 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
