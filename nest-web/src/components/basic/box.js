import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: ${(props) =>
    (props.width && `${props.theme.baseSpace * (props.width)}px`) ||
    "100%"};
  height: 0;
  overflow: hidden;
  position: relative;
  border-radius: ${(props) =>
    props.radius
      ? `${props.radius}px`
      : `${({ theme: { baseSpace } }) => baseSpace}px`};
  background: url(${({ image }) => image}) no-repeat center;
  background-size: contain;
  background-position-x: center;
  padding-top: ${(props) =>
    props.width
      ? `${props.theme.baseSpace * (props.width) * props.ratio || 0}px`
      : `${(props.ratio || 1) * 100}%`};
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
`;

export const Box = ({ children, ...props }) => (
  <BoxContainer {...props}>
    <BoxWrapper>{children}</BoxWrapper>
  </BoxContainer>
);

export const TextBox = styled.div`
  width: ${(props) =>
    (props.width && `${props.theme.baseSpace * (props.width)}px`) ||
    "100%"};
  height: 100%;
  grid-gap: ${({ theme, size }) => theme.baseSpace * (size)}px;
  background: #fafafa;
  box-shadow: 0px 0px 2px rgba(23, 43, 77, 0.25),
    0px 2px 4px rgba(23, 43, 77, 0.15);
  border-radius: 4px;
`;
