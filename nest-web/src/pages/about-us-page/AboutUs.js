import * as React from "react";
import { useState, useEffect } from "react";
import _ from "lodash";
import useContentful from "../../useContentful";
import {
  Grid,
  GridPlace,
  Overlay,
  Padding,
  Queue,
  Text,
  Stack,
  Margin,
  Border,
  Box,
  BannerContainer
} from "../../components";
import { CheckCircleIcon, BrandIcon } from "../../assets/icons";
import { GlobalThemeStyle, Theme } from "../../theme";
import { useMediaQuery } from "react-responsive";
import Header from "../home-page/Header";
import Footer from "../home-page/Footer";
import { Loading } from "../../components/basic/loading";
function AboutUs() {
  return (
    <>
      <Header />
      <Theme>
        <GlobalThemeStyle />
        <MobileVersion />
      </Theme>
    </>
  );
}
export default AboutUs;
const MobileVersion = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 414px)"
  });
  const aboutUsData = `{
      aboutUsCollection {
        items {
          bannerImage {
            url
          }
          whatMakesUsText
          mission
          missionText
           values
          valuesText
          valuesText2
          valuesText3
          whatMakesUsTitle
        }
      }
  }
  `;
  const { loading, data } = useContentful("aboutUs", aboutUsData);
  return isMobile && data ? (
    <>
      <BannerContainer
        brand
        bannerImage={_.first(data).bannerImage.url}
        bannerText={["Road", "To 10K", "Engineers"]}
        height="510px"
      />
      <Margin size={[7, 0, 0, 0]} />
      <Padding size={[0, 2]}>
        <Grid mobileRepeatColumn={4} mobiletGriddGap={0}>
          <GridPlace mobileGridColumn="1/5">
            <Padding size={[0, 5, 0, 0]}>
              <Stack size={1}>
                <Text type="title1" bold role="blackPrimary">
                  {_.first(data).whatMakesUsTitle}
                </Text>
                <Text type="headline">{_.first(data).whatMakesUsText}</Text>
              </Stack>
            </Padding>
          </GridPlace>
          <Margin size={[7, 0, 0, 0]} />
          <GridPlace mobileGridColumn="1/  5">
            <Overlay relative top={0} right={-1}>
              <Border borderSize={[1]} role="blackPrimary" width="100%">
                <Overlay top={1} right={1} relative zIndex="99">
                  <Queue
                    width="100%"
                    backgroundRole="blackPrimary"
                    height="113px"
                    justifyContent="space-evenly"
                  >
                    <Stack>
                      <Text
                        alignment="center"
                        role="boneWhite"
                        type="title2"
                        bold
                      >
                        25
                      </Text>
                      <Text role="boneWhite" type="footnote">
                        strong people
                      </Text>
                    </Stack>
                    <Stack>
                      <Text
                        alignment="center"
                        role="boneWhite"
                        type="title2"
                        bold
                      >
                        +124
                      </Text>
                      <Text role="boneWhite" type=" footnote">
                        active students
                      </Text>
                    </Stack>
                  </Queue>
                </Overlay>
              </Border>
            </Overlay>
          </GridPlace>
          <Margin size={[12, 0, 0, 0]} />
          <GridPlace mobileGridColumn="1/5">
            <Padding size={[0, 5, 0, 0]}>
              <Stack size={1}>
                <Text type="title1" bold role="blackPrimary">
                  {_.first(data).mission}
                </Text>
                <Text type="headline">{_.first(data).missionText}</Text>
              </Stack>
            </Padding>
          </GridPlace>
          <Margin size={[12, 0, 0, 0]} />
          <GridPlace mobileGridColumn="1/5">
            <Stack size={1}>
              <Text type="title1" bold role="blackPrimary">
                {_.first(data).values}
              </Text>
              <Queue alignVertical="flex-start" size={2}>
                <Queue width="10%">
                  <CheckCircleIcon />
                </Queue>
                <Queue width="80%">
                  <Text type="headline">{_.first(data).valuesText}</Text>
                </Queue>
              </Queue>
              <Queue alignVertical="flex-start" size={2}>
                <Queue width="10%">
                  <CheckCircleIcon />
                </Queue>
                <Queue width="80%">
                  <Text type="headline">{_.first(data).valuesText2}</Text>
                </Queue>
              </Queue>
              <Queue alignVertical="flex-start" size={2}>
                <Queue width="10%">
                  <CheckCircleIcon />
                </Queue>
                <Queue width="80%">
                  <Text>{_.first(data).valuesText3}</Text>
                </Queue>
              </Queue>
            </Stack>
          </GridPlace>
          <Margin size={[0, 0, 12, 0]} />
        </Grid>
      </Padding>
      <Footer />
    </>
  ) : (
    <>{loading && <Loading />}</>
  );
};
