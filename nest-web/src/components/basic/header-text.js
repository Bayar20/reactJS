import styled, { css } from "styled-components";
import { FontStyle, mapRoleToTextColor, FontWeightBold } from "../../theme";

export const TextStyle = css`
  font-family: ${({ fontfamily }) =>
    fontfamily ? "SF Pro Text" : "Montserrat"};
  text-decoration: ${({ underlined }) => underlined && "underline"};
  ${({ fontType }) => {
    return FontStyle[fontType] || FontStyle.default;
  }}
  white-space: ${({ nowrap }) => nowrap && "nowrap"};
  text-align: ${({ alignment }) => alignment || "left"};
  ${({ bold, fontType }) =>
    (bold && FontWeightBold[fontType]) || FontWeightBold.default};

  @media (max-width: 768px) {
    text-decoration: ${({ underlined }) => underlined && "underline"};
    text-align: ${({ alignment }) => alignment || "left"};
    ${({ tabletFontType }) => {
      return FontStyle[tabletFontType] || FontStyle.default;
    }};
    ${({ bold, tabletFontType }) =>
      (bold && FontWeightBold[tabletFontType]) || FontWeightBold.default};
  }

  @media (max-width: 414px) {
    text-decoration: ${({ underlined }) => underlined && "underline"};
    text-align: ${({ alignment }) => alignment || "left"};
    ${({ mobileFontType }) => {
      return FontStyle[mobileFontType] || FontStyle.default;
    }};
    ${({ bold, mobileFontType }) =>
      (bold && FontWeightBold[mobileFontType]) || FontWeightBold.default};
  }
`;

export const HeaderText = styled.span`
  ${TextStyle}
  color: ${({ role }) => mapRoleToTextColor(role)} !important;
`;
