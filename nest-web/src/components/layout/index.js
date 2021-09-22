import styled, { css } from "styled-components";
import _ from "lodash";
import { mapRoleToBackgroundColor } from "../../theme";
import "./types";
export const fibonacci = _.memoize(function (n = 0) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

export const Grid = styled.div`
  display: grid;
  align-items: ${({ align }) => align};
  justify-items: ${({ justify }) => justify};
  grid-gap: ${({ theme, space = 3 }) => theme.baseSpace * space}px;
  grid-template-columns: ${({ columns, repeatColumn }) => {
    return _.isArray(columns)
      ? columns.map((d) => `${d || 1}fr`).join(" ")
      : `repeat(${repeatColumn}, 1fr)`;
  }};
  grid-template-rows: ${({ rows }) => rows};

  @media (max-width: 927px) {
    grid-template-columns: ${({ tabletRepeatColumn }) =>
      tabletRepeatColumn ? `repeat(${tabletRepeatColumn}, 1fr)` : "1fr"};
    grid-gap: ${({ theme, tabletGriddGap = 4 }) =>
      theme.baseSpace * tabletGriddGap}px;
  }
  @media (max-width: 414px) {
    grid-template-columns: ${({ mobileRepeatColumn }) =>
      mobileRepeatColumn ? `repeat(${mobileRepeatColumn}, 1fr)` : "1fr"};
    grid-gap: ${({ theme, mobiletGriddGap = 4 }) =>
      theme.baseSpace * mobiletGriddGap}px;
  }
`;

export const GridPlace = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  place-self: ${({ placeSelf }) => (placeSelf ? placeSelf : "auto")};
  /*PlaceSelf: The first value sets align-self, the second value justify-self*/
  @media (max-width: 927px) {
    grid-row: ${({ tabletGridRow }) => tabletGridRow || "auto/ span 1"};
    grid-column: ${({ tabletGridColumn }) =>
      tabletGridColumn ? tabletGridColumn : "auto / span 1"};
  }
  @media (max-width: 414px) {
    grid-row: ${({ mobileGridRow }) => mobileGridRow || "auto/ span 1"};
    grid-column: ${({ mobileGridColumn }) =>
      mobileGridColumn ? mobileGridColumn : "auto/ span 1"};
  }
`;

export const dimensionToStyle = (size, baseSpace) => {
  if (_.isUndefined(size)) {
    return;
  }
  return _.isString(size) ? size : `${size * baseSpace}px`;
};

export const DisabledStyle = css`
  opacity: ${({ disabled }) => (disabled ? "0.1" : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
`;
export const DimensionStyle = css`
  width: ${({ width, theme }) => dimensionToStyle(width, theme.baseSpace)};
  height: ${({ height, theme }) => dimensionToStyle(height, theme.baseSpace)};
  max-height: ${({ maxHeight }) => maxHeight};
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "visible")};
`;

export const BackgroundStyle = css`
  background-color: ${({ backgroundRole }) =>
    mapRoleToBackgroundColor(backgroundRole)};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.desktop}px;
  position: relative;
`;

export const Stack = styled.div`
  display: grid;
  grid-gap: ${({ theme, size }) => theme.baseSpace * size}px;
  grid-template-columns: 1fr;
  position: relative;
  ${DimensionStyle}
  ${BackgroundStyle}
`;

export const Queue = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-content: ${({ alignItems }) => alignItems === "right" && "flex-end"};
  & > * + * {
    margin-left: ${({ theme, size }) => theme.baseSpace * size}px;
  }
  align-items: ${({ alignVertical }) => alignVertical || "center"};
  // flex-wrap : ${({ wrap }) => wrap || "nowrap"};
  flex-wrap: wrap;
  ${DimensionStyle}
  ${BackgroundStyle}
`;

export const Margin = styled.div`
  margin: ${({ theme, size }) =>
    !_.isArray(size)
      ? `${size * theme.baseSpace}px`
      : size.map((d) => `${d * theme.baseSpace}px`).join(" ")};
  ${BackgroundStyle}
  ${DimensionStyle}
  @media (max-width: 927px) {
    margin: ${({ theme, tabletSize }) =>
      !_.isArray(tabletSize)
        ? `${tabletSize * theme.baseSpace}px`
        : tabletSize.map((d) => `${d * theme.baseSpace}px`).join(" ")};
    ${BackgroundStyle}
  }
  @media (max-width: 414px) {
    margin: ${({ theme, mobileSize }) =>
      !_.isArray(mobileSize)
        ? `${mobileSize * theme.baseSpace}px`
        : mobileSize.map((d) => `${d * theme.baseSpace}px`).join(" ")};
    ${BackgroundStyle}
  }
`;

export const Padding = styled.div`
  position: relative;
  padding: ${({ theme, size }) =>
    !_.isArray(size)
      ? `${size * theme.baseSpace}px`
      : size.map((d) => `${d * theme.baseSpace}px`).join(" ")};
  ${DimensionStyle}
  ${BackgroundStyle}
`;
const sideSpacing = (key) => ({ theme, ...props }) => {
  let side = _.property(key)(props);
  if (_.isUndefined(side)) {
    return;
  }
  return dimensionToStyle(side, theme.baseSpace);
};
export const Overlay = styled.div`
  position: ${({ relative }) => (relative ? "relative" : "absolute")};
  z-index: ${({ zIndex }) => zIndex};
  top: ${sideSpacing("top")};
  right: ${sideSpacing("right")};
  left: ${sideSpacing("left")};
  bottom: ${sideSpacing("bottom")};
  display: flex;
  ${DimensionStyle}
  ${BackgroundStyle}
`;

export const Center = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
  align-self: center;
  ${DimensionStyle}
  ${BackgroundStyle}
`;
