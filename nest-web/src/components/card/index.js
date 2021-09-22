import React from "react";
import { Border, Shadow, Text } from "../basic";
import {
  Center,
  Margin,
  Overlay,
  Padding,
  Queue,
  Stack
} from "../layout";
import { InteractiveStyle } from "../basic";
import { AnimatedToggleView } from "../animation";
import styled, { css } from "styled-components";

import { Button } from "../form";
import { useMobile } from "../utility";
import BrandLogo from "../../assets/Images/logo.png";

export const Card = ({ children, radius, size, role }) => {
  return (
    <Shadow width="100%">
      <Border
        radius={radius || "small"}
        borderSize={[1, 1, 1, 1]}
        width="100%"
        role={role}
      >
        <Padding size={size || 5}>{children}</Padding>
      </Border>
    </Shadow>
  );
};

export const ModalCard = ({ children, width }) => {
  return (
    <Shadow width="100%">
      <Border
        backgroundRole="boneWhite"
        radius="normal"
        borderSize={[1, 1, 1, 1]}
        width={width}
      >
        {children}
      </Border>
    </Shadow>
  );
};

export const SelectableCardRaw = ({
  children,
  className,
  selected,
  radius = "medium",
  paddingSize = [2, 1],
  ...props
}) => {
  return (
    <Border
      {...props}
      className={className}
      role="primary"
      radius={radius}
      borderSize={[2]}
    >
      <AnimatedToggleView visible={selected}>
        <Overlay left={0} right={0} top={-3}>
          <Center>
            <Border
              backgroundRole="primary"
              className={className}
              role="primary"
              radius="small"
              borderSize={[1]}
            >
              <Padding size={paddingSize}>
                <Text role="secondary" type="primary6">
                  Selected
                </Text>
              </Padding>
            </Border>
          </Center>
        </Overlay>
      </AnimatedToggleView>
      <Padding size={4}>{children}</Padding>
    </Border>
  );
};

export const SelectableCard = styled(SelectableCardRaw)`
  ${InteractiveStyle}
`;
const bannerStyle = css`
  white-space: nowrap;
  display: inline;
  position: absolute;
  padding: 0 8px 0 0;
  color: #172b4d;
  left: 0;
  font-weight: bold;
  font-family: Montserrat;
  font-size: 48px;
  line-height: 130%;
  letter-spacing: 0.374px;
`;

const BannerText = styled.span`
  ${({ length, word }) =>
    length === 3
      ? ` 
      & {
        
        background: white;
        bottom: 130px;
        ${bannerStyle}
      }
      &:before {
        content: "${word[1]}";
        background: white;
        bottom: -60px;
        ${bannerStyle}
      }
      &:after {
        content: "${word[2]}";
        background: white;
        bottom: -115px;
        ${bannerStyle}  
      }    
      `
      : length === 2
        ? ` & {
        background: white;
        bottom: 60px;
        ${bannerStyle}
      }
      &:before {
        content: "${word[1]}";
        background: white;
        bottom: -60px;
        ${bannerStyle}
      }
    `
        : ` 
      background: white;
      bottom: -8px;
      ${bannerStyle}
    `}
`;
export const BannerLogo = styled.div`
  position: absolute;
  margin: 0px;
  bottom: ${({ imgHeight, height }) =>
    imgHeight ? "-10px" : height ? "35px" : "-10px"};
  right: ${({ right }) => right || "-8px"};
  width: 110px;
  height: 110px;
  background-image: url(${BrandLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 99999;
`;
const BannerImage = styled.div`
  & {
    position: relative;
    margin: 8px;
    width: 77%;
    height: ${({ imgHeight }) => imgHeight || "412px"};
    background-image: url(${({ image }) => image});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &:after {
    content: " ";
    position: absolute;
    top: -8px;
    right: -8px;
    width: 100%;
    height: ${({ imgHeight }) => imgHeight || "412px"};
    border: 1px solid #172b4d;
    z-index: -1;
  }
`;

export const BannerContainer = (props) => {
  const {
    bannerText,
    bannerImage,
    height,
    imageWidth,
    imageHeight,
    brand
  } = props;
  //Suggested height 500px if your text have 3 words.
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          margin: 0,
          padding: 0,
          position: "relative",
          display: "flex",
          width: "100%",
          height: height || "100%",
          justifyContent: "flex-end"
        }}
      >
        <div
          style={{
            margin: "16px 16px",
            position: "relative",
            display: "flex",
            width: "100%",
            height: height || "100%",
            justifyContent: "flex-end"
          }}
        >
          <BannerImage
            imgWidth={imageWidth}
            imgHeight={imageHeight}
            image={bannerImage}
          ></BannerImage>

          <BannerText word={bannerText} length={bannerText.length}>
            {bannerText[0]}
          </BannerText>
        </div>
        {brand ? <BannerLogo imgHeight={imageHeight} height={height} /> : null}
      </div>
    </>
  );
};
export const ImageContainer = (props) => {
  const isMobile = useMobile("450px");
  const {
    containerWidth,
    containerHeight,
    imgWidth,
    imgHeight,
    image,
    textTop,
    textBottomFirst,
    textBottomSecond,
    marginFromImage,
    marginFromTopText,
    bordered,
    useButton,
    buttonText,
    marginForButton
  } = props;
  if (bordered) {
    return (
      <Border borderSize={0} radius="large" shadow="0px 2px 4px 0px #172B4D26">
        <Stack
          width={containerWidth || isMobile ? "100%" : "400px"}
          height={containerHeight || "20rem"}
        >
          <Margin mobileSize={1.25} tabletSize={1.25} size={1.25}>
            <Border radius="large">
              <Center>
                <div
                  style={{
                    borderRadius: "8px",
                    height: imgHeight || "190px",
                    width: imgWidth || "100%",
                    backgroundImage: `url("${image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              </Center>
            </Border>

            <Margin
              mobileSize={marginFromImage || [2, 0, 0, 0]}
              tabletSize={marginFromImage || [2, 0, 0, 0]}
              size={marginFromImage || [2, 0, 0, 0]}
            />
            <Text alignment="left" type="title3" bold>
              {textTop}
            </Text>
            <Margin
              mobileSize={marginFromTopText || [0.25, 0, 0, 0]}
              tabletSize={marginFromTopText || [0.25, 0, 0, 0]}
              size={marginFromTopText || [0.25, 0, 0, 0]}
            />
            <Text alignment="left" type="body">
              {textBottomFirst}
            </Text>
          </Margin>
        </Stack>
      </Border>
    );
  } else {
    return (
      <Stack
        width={containerWidth || isMobile ? "100%" : "400px"}
        height={containerHeight}
      >
        <Center>
          <div
            style={{
              height: imgHeight || "298px",
              width: imgWidth || "100%",
              backgroundImage: `url("${image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />
        </Center>
        <Margin
          mobileSize={marginFromImage || [2, 0, 0, 0]}
          tabletSize={marginFromImage || [2, 0, 0, 0]}
          size={marginFromImage || [2, 0, 0, 0]}
        />
        <Text alignment="left" type="title1" bold>
          {textTop}
        </Text>
        <Margin
          mobileSize={marginFromTopText || [0.25, 0, 0, 0]}
          tabletSize={marginFromTopText || [0.25, 0, 0, 0]}
          size={marginFromTopText || [0.25, 0, 0, 0]}
        />
        <Text alignment="left" type="body">
          {textBottomFirst}
        </Text>
        {textBottomSecond ? (
          <>
            <Margin
              mobileSize={marginFromTopText || [3, 0, 0, 0]}
              tabletSize={marginFromTopText || [3, 0, 0, 0]}
              size={marginFromTopText || [3, 0, 0, 0]}
            />
            <Text alignment="left" type="body">
              {textBottomSecond}
            </Text>
          </>
        ) : null}

        {useButton ? (
          <>
            <Margin
              mobileSize={marginForButton || [4, 0, 0, 0]}
              tabletSize={marginForButton || [4, 0, 0, 0]}
              size={marginForButton || [4, 0, 0, 0]}
            />
            <Queue justifyContent="start">
              <Button size="large" type="primary" buttonStyle="fill">
                {buttonText || "Learn more"}
              </Button>
            </Queue>
          </>
        ) : null}
      </Stack>
    );
  }
};
export const LessonCard = styled.div`
  width: ${(props) =>
    (props.width && `${props.theme.baseSpace * props.width}px`) || "100%"};
  height: ${(props) =>
    (props.width && `${props.theme.baseSpace * props.width}px`) || "92px"};
  grid-gap: ${({ theme, size }) => theme.baseSpace * size}px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(23, 43, 77, 0.25),
    0px 2px 4px rgba(23, 43, 77, 0.15);
  border-radius: 8px;
`;


export const CardDesign = styled.div`
border-radius: 4px;
background-color: #FFFFFF;
`
export const TextCard = ({ title, paragraph }) => {
  return (
    <CardDesign>
      <Padding size={[2, 0, 0.125, 2]}>
        <Text role="blackPrimary" type="body" bold>{title}</Text>
      </Padding>
      <ul>
        {
          paragraph.map((p) => {
            return (
              <Padding size={[0.75, 3, 0.75, 4]}>
                <li><Text role="blackPrimary" type="body">{p}</Text></li>
              </Padding>
            )
          })
        }
      </ul>
    </CardDesign>
  );
};