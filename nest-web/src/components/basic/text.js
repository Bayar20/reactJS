import styled, { css } from "styled-components";
import { FontWeightBold, FontStyle, mapRoleToTextColor } from "../../theme";

export const TextStyle = css`
  font-family: ${({ fontfamily }) =>
    fontfamily ? "SF Pro Text" : "Montserrat"};
  text-decoration: ${({ underlined }) => underlined && "underline"};
  ${({ type }) => {
    return FontStyle[type] || FontStyle.body;
  }}
  white-space: ${({ nowrap }) => nowrap && "nowrap"};
  text-align: ${({ alignment }) => alignment || "left"};
  ${({ bold, type }) =>
    (bold && FontWeightBold[type]) || FontWeightBold.default};
  opacity: ${({ opacity }) => opacity};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

// grid-template-columns: ${({ columns, repeatColumn }) => {
//   return _.isArray(columns)
//     ? columns.map((d) => `${d || 1}fr`).join(" ")
//     : `repeat(${repeatColumn}, 1fr)`;
// }};

export const Text = styled.span`
  transition: all ${({ animationDelay }) => animationDelay || "0.0"}s;
  ${TextStyle}
  color: ${({ role }) => mapRoleToTextColor(role)} !important;
`;

export const InteractiveStyle = css`
  cursor: pointer;
  outline: none;
`;

export const InteractiveText = styled(Text)`
  ${InteractiveStyle}
`;
