import styled, { css } from "styled-components";
import { mapRoleToBorderColor } from "../../theme";
import _ from "lodash";
import { BackgroundStyle, DimensionStyle } from "../layout";

const mapBorderRadius = {
  circle: "50%",
  small: "3px",
  medium: "5px",
  large: "8px",
  xlarge: "100px",
  normal: "24px",
  border: "4px"
};

const mapBorderRadiusByType = (type) => mapBorderRadius[type] || "0px";

export const BorderStyle = css`
  border-radius: ${({ radius }) => mapBorderRadiusByType(radius)};
  border-width: ${({ borderSize }) =>
    _.flow((borderSize) =>
      _.map(borderSize, (value) => {
        return `${value}px`;
      }).join(" ")
    )(borderSize)};
  border-color: ${({ role }) => mapRoleToBorderColor(role)};
  border-style: ${({ borderStyle }) => borderStyle || "solid"};
  position: relative;
  overflow: ${({ overflow }) => overflow};
  box-shadow: ${({ shadow }) => shadow || "0px"};
`;
export const HoverBorder = styled.div`
  &:hover {
    border-left: ${({ borderLeft }) => borderLeft || "5px solid #074EE8"};
    background-color: #e0eaff;
  }
`;

export const Border = styled.div`
  transition: all ${({ animationDelay }) => animationDelay || "0.0"}s;
  ${BorderStyle}
  ${DimensionStyle} 
    ${BackgroundStyle}
`;

export const InteractiveBorder = styled.div`
  cursor: pointer;
  outline: none;
  ${BorderStyle}
  ${DimensionStyle} 
    ${BackgroundStyle}
`;
