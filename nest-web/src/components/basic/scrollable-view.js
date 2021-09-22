import styled from "styled-components";

export const ScrollableView = styled.div`
  overflow-y: ${({ overflowY }) => (overflowY ? `auto` : `hidden`)};
  overflow-x: ${({ overflowX }) => (overflowX ? `auto` : `hidden`)};
`;
