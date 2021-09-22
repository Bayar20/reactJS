import React from "react";
import { Border, Text } from ".";
import { Center, Padding, Queue, Stack, Margin } from "../layout";
import { Button } from "../form";
import styled from "styled-components";

export const AdmissionShadow = styled.div`
  box-shadow: 0px 2px 4px 0px rgba(23, 43, 77, 0.15);
  border-radius: 4px;
`;

export const mapLozengeStatusColor = {
  success: "#E3F1DE",
  primary: "#E6EBF2",
  caution: "#FCF0CD",
  destructive: "#FBEAE5",
  defaultFont: "#172B4D",
  successFont: "#0F8043",
  cautionFont: "#9C6F19",
  destructiveFont: "#BF0A12",
  primaryFont: "#F7FBFF",
  successBold: "#4FB83D",
  defaultBold: "#172B4D",
  pendingBold: "#EDC200",
  dangerBold: "#DF3617"
};

// export const lozengeBackground = (background) =>
//   mapLozengeStatusColor[isSubtle[background].statusColor] || "#E6EBF2";

// export const lozengeColor = (color) =>
//   mapLozengeStatusColor[isSubtle[color].textColor] || "#E6EBF2";

export const subtle = {
  success: {
    textColor: "successFont",
    statusColor: "success",
    text: "амжилттай"
  },
  default: {
    textColor: "defaultFont",
    statusColor: "primary",
    text: "default"
  },
  pending: {
    textColor: "cautionFont",
    statusColor: "caution",
    text: "хүлээгдэж байна"
  },
  danger: {
    textColor: "destructiveFont",
    statusColor: "destructive",
    text: "амжилтгүй"
  }
};

export const bold = {
  success: {
    textColor: "primaryFont",
    statusColor: "successBold",
    text: "амжилттай"
  },
  default: {
    textColor: "primaryFont",
    statusColor: "defaultBold",
    text: "default"
  },
  pending: {
    textColor: "defaultFont",
    statusColor: "pendingBold",
    text: "хүлээгдэж байна"
  },
  danger: {
    textColor: "primaryFont",
    statusColor: "dangerBold",
    text: "амжилтгүй"
  }
};

export const LozengeStyle = styled.div`
  border-radius: 4px;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
`;

export const LozengeProvider = ({ status, isBold }) => {
  // console.log(isBold);
  const backgroundColor = isBold
    ? mapLozengeStatusColor[bold[status].statusColor]
    : mapLozengeStatusColor[subtle[status].statusColor];
  const textColor = isBold
    ? mapLozengeStatusColor[bold[status].textColor]
    : mapLozengeStatusColor[subtle[status].textColor];
  const text = isBold ? bold[status].text : subtle[status].text;
  console.log("back", backgroundColor);
  console.log("lool", textColor);
  console.log("text", text);
  return (
    <LozengeStyle backgroundColor={backgroundColor} textColor={textColor}>
      <Padding size={[0.5, 1]} text={text}>
        {text}
      </Padding>
    </LozengeStyle>
  );
};

export const Lozenge = ({ status, isBold }) => {
  // console.log(isBold);
  return <LozengeProvider status={status} isBold={isBold}></LozengeProvider>;
};

export const AdmissonProcessCard = ({
  headerText,
  text,
  status,
  lozengeText,
  both,
  heigth,
  width,
  singleButton,
  doubleButton,
  statusColor,
  textColor,
  isBold = false,
  ...props
}) => {
  return (
    <Center>
      <Stack width={width || "382px"} heigth={heigth || "114px"}>
        <AdmissionShadow>
          <Border role="lightGrey" radius="round" borderSize="1">
            {status && (
              <Margin size={[1.8, 2]}>
                <Queue justifyContent="space-between">
                  <Lozenge status={status} isBold={isBold}></Lozenge>
                  {both && (
                    <Text opacity="50%" type="subHeading">
                      HOPF21-0251
                    </Text>
                  )}
                </Queue>
              </Margin>
            )}
            <Border borderSize={[0, 0, 1]} role="lightGrey">
              <Margin size={[1, 0, 1.5, 2]}>
                <Text type="headline" bold>
                  {headerText}
                </Text>
              </Margin>
            </Border>
            <Margin size={2}>
              <Text type="footnote">{text}</Text>
            </Margin>
            <Margin size={2}>
              <Stack>
                {singleButton && (
                  <Button backgroundRole="black">
                    <Text role="light">Single </Text>
                  </Button>
                )}
                {doubleButton && (
                  <Queue width="100%" justifyContent="space-around">
                    <Button backgroundRole="black">
                      <Text role="light">Double</Text>
                    </Button>
                    <Button backgroundRole="light">
                      <Text>Double</Text>
                    </Button>
                  </Queue>
                )}
              </Stack>
            </Margin>
          </Border>
        </AdmissionShadow>
      </Stack>
    </Center>
  );
};
