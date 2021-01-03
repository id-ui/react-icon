import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Container = styled.div`
  display: inline-block;
  color: ${prop('color')};
  cursor: ${prop('cursor')};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${prop('hoverColor')};
  }
  svg {
    display: inherit;
  }
`;
