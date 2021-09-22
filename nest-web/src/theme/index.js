import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
export * from "./typography";
export const GlobalThemeStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.2;
    }
    a {
      text-decoration: none;
    }
    .ais-SearchBox { margin: 1em 0; }
`;
export const colors = {
  carbon: "#ffffff",
  primary: "#074EE8",
  subtle: "#767676",
  primaryBackground: "#E0EAFF",
  secondary: "#5A48E7",
  black: "#000000",
  red: "rgb(206, 69, 42)",
  green: "rgb(108, 181, 79)",
  gray: "#9EA7BC",
  purple: "#EBE9FF",
  purple2: "#9A45D7",
  purple3: "rgba(186, 177, 255, 0.2)",
  purple4: "rgb(90, 72, 231, 0.25)",
  purple5: "#BAB1FF",
  transparent: "transparent",
  orange: "#FFBA69",
  blue: "#2F80ED",
  background: "#534999",
  line: "#AAAAAA",
  footer: "#303030",
  account: "#074EE8",
  boneWhite: "#FAFAFA",
  blackPrimary: "#172B4D",
  whitePrimary: "#F7FBFF",
  darkGrey: "#52575C",
  grey: "#8F9CB2",
  nest: "#00DCF0",
  nestscholarship: "#1F1659",
  lightGrey: "#E8E8E8",
  info: "#F7FBFF",
  caution: "#FCF0CD",
  destructive: "#FBEAE5",
  success: "#E3F1DE",
  darkBlue: "rgb(27, 43, 74)",
  yellow: "rgb(231, 194, 65)",
  foot: "#E6EBF2",
  disable: "#E6EBF2",
  required: "#BF0A12",
  backgroundPrimary: "#E4E4E4",
  accordion: " #E8E8E8",
  successLine: "#4FB83D"
};
const mapRoleToBorder = {
  success: "green",
  critical: "red",
  info: "darkBlue",
  warning: "yellow",
  primary: "primaryBackground",
  primary3: "primary",
  secondary: "carbon",
  info: "tertiary",
  error: "red",
  line: "line",
  background: "background",
  blackPrimary: "blackPrimary",
  grey: "grey",
  nest: "nest",
  nestscholarship: "nestscholarship",
  lightGrey: "lightGrey",
  green: "green",
  red: "red",
  darkBlue: "darkBlue",
  yellow: "yellow",
  disable: "disable",
  accordion: "accordion"
};
const mapRoleToText = {
  nest: "nest",
  foot: "foot",
  success: "green",
  light: "carbon",
  primary: "primary",
  primary3: "primary",
  info: "default",
  error: "red",
  secondary: "carbon",
  tertiary: "gray",
  highlight: "blue",
  language: "subtle",
  line: "line",
  whitePrimary: "whitePrimary",
  blackPrimary: "blackPrimary",
  boneWhite: "boneWhite",
  grey: "grey",
  lightGrey: "lightGrey",
  required: "required",
  darkGrey: "darkGrey",
  footer: "footer"
};

const mapRoleToBackground = {
  success: "success",
  primary: "purple",
  primary2: "purple2",
  primary3: "primary",
  tertiary: "purple3",
  tertiary2: "purple5",
  info: "info",
  critical: "destructive",
  warning: "caution",
  error: "red",
  light: "carbon",
  transparent: "transparent",
  secondary: "secondary",
  lightSecondary: "purple4",
  alert: "orange",
  highlight: "blue",
  black: "black",
  footer: "footer",
  account: "account",
  blackPrimary: "blackPrimary",
  boneWhite: "boneWhite",
  darkGrey: "darkGrey",
  nest: "nest",
  nestscholarship: "nestscholarship",
  lightGrey: "lightGrey",
  green: "green",
  red: "red",
  darkBlue: "darkBlue",
  yellow: "yellow",
  whitePrimary: "whitePrimary",
  backgroundPrimary: "backgroundPrimary",
  successLine: "successLine"
};

export const mapRoleToBorderColor = (type) =>
  colors[mapRoleToBorder[type]] || "white";

export const mapRoleToTextColor = (type) =>
  colors[mapRoleToText[type] || "black"];

export const mapRoleToBackgroundColor = (type) =>
  colors[mapRoleToBackground[type] || "transparent"];

export const DEFAULT = {
  baseSpace: 8,
  desktop: 1300,
  colors
};
export const Theme = ({ children }) => {
  return <ThemeProvider theme={DEFAULT}>{children}</ThemeProvider>;
};
