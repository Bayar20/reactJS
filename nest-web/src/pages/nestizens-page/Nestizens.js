import _ from "lodash";
import React from "react";
import Header from "../../pages/home-page/Header";
import Footer from "../../pages/home-page/Footer";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Container,
  Stack,
  Margin,
  Text,
  Center,
  Grid,
  GridPlace,
  Padding,
  Box,
  ImageContainer,
  useMobile,
  BannerContainer
} from "../../components";
import { Loading } from "../../components/basic/loading";
import { GlobalThemeStyle, Theme } from "../../theme";
import useContentful from "../../useContentful";

const queryForMVP = `{
  nestizensMvpCollection {
    items {
      firstName
      status
      description
      image{
        url
      }
    }
  }
}`;
const queryForMeetNestizens = `{
  nestizensCurrentStudentCollection {
    items {
      image{
        url
      }
      subHead
      description
      
    }
  }
}`;

const BannerWeb = () => {
  const { loading, data } = useContentful("nestizensMvp", queryForMVP);
  const isMobile = useMobile("927px");

  if (isMobile) {
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          data && (
            <>
              {/*write your sentence separated by letters to array  by string*/}
              <BannerContainer
                brand
                bannerImage={_.last(data).image.url}
                bannerText={["Most", "Valuable", "Player"]}
                height="500px"
              />
              <Margin mobileSize={[2, 2]} tabletSize={[2, 2]}>
                <Stack size={4}>
                  <Text type="headline" bold alignment>
                    {_.last(data).firstName}
                  </Text>
                  <Text type="callout">{_.last(data).status}</Text>
                  <Text type="body">{_.last(data).description}</Text>
                </Stack>
              </Margin>
            </>
          )
        )}
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "auto",
          width: "auto",
          backgroundColor: "#00DCF0"
        }}
      >
        <Container>
          <Center width="100%" height="83vh">
            {loading ? (
              <Loading />
            ) : (
              data && (
                <Grid repeatColumn={2} space={5} align="center">
                  <GridPlace>
                    <div
                      style={{
                        borderRadius: "8px",
                        float: "right",
                        backgroundImage: `url("${_.last(data).image.url}")`,
                        height: "60vh",
                        width: "25rem",
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                      }}
                    ></div>
                  </GridPlace>
                  <GridPlace>
                    <Stack size={2}>
                      {isMobile ? (
                        <>
                          <Text nowrap="normal" type="headline" bold>
                            {_.last(data).firstName}
                          </Text>
                          <Text type="subHeading">{_.last(data).status}</Text>
                          <Text type="callout">{_.last(data).description}</Text>
                        </>
                      ) : (
                        <>
                          <Text nowrap="normal" type="title1" bold>
                            {_.last(data).firstName}
                          </Text>
                          <Text type="title3">{_.last(data).status}</Text>
                          <Text type="title3">{_.last(data).description}</Text>
                        </>
                      )}
                    </Stack>
                  </GridPlace>
                </Grid>
              )
            )}
          </Center>
        </Container>
      </div>
    );
  }
};
const VideoPlayer = () => {
  return (
    <Margin mobileSize={[0, 2]} tabletSize={[0, 2]}>
      {/*We can use Contentful to add video urls for Reactplayer*/}
      <Box ratio={0.5}>
        <ReactPlayer
          url={[
            "https://youtu.be/2ZFry1qPRoI",
            "https://youtu.be/OyrVwM4WRxU",
            "https://youtu.be/BCyYGo2NWhE"
          ]}
          width="100%"
          height="100%"
          controls={true}
        />
      </Box>
    </Margin>
  );
};
const NestizensBody = () => {
  const { loading, data } = useContentful(
    "nestizensCurrentStudent",
    queryForMeetNestizens
  );
  const isMobile = useMobile();

  return (
    <Container>
      <Grid repeatColumn={12}>
        <Margin
          size={[20, 0, 0, 0]}
          mobileSize={[12, 0, 0, 0]}
          tabletSize={[12, 0, 0, 0]}
        />
        <GridPlace gridColumn="1/ span 12">
          <Margin size={[8, 2]} mobileSize={[0, 2]} tabletSize={[0, 2]}>
            {isMobile ? (
              <Text type="title1" bold role="">
                Meet Nestizens
              </Text>
            ) : (
              <Center>
                <Text alignment="center" type="title1" bold>
                  Meet Nestizens
                </Text>
              </Center>
            )}
          </Margin>
        </GridPlace>
        <GridPlace gridColumn="1/ span 12">
          <Padding size={2}>
            <Grid repeatColumn={2} justify="center">
              {loading ? (
                <Loading />
              ) : (
                data &&
                _.map(data, (content) => {
                  return (
                    <GridPlace>
                      <Link to="/nestizens/meetnestizens">
                        <ImageContainer
                          bordered
                          image={content.image.url}
                          textTop={content.subHead}
                          textBottomFirst={content.description}
                        />
                      </Link>
                    </GridPlace>
                  );
                })
              )}
            </Grid>
          </Padding>
        </GridPlace>
        <Margin
          size={[20, 0, 0, 0]}
          mobileSize={[12, 0, 0, 0]}
          tabletSize={[12, 0, 0, 0]}
        />
        <GridPlace gridColumn="1/ span 12">
          <Margin size={[0, 2]} mobileSize={[0, 2]} tabletSize={[0, 2]}>
            {isMobile ? (
              <Text type="title1" bold role="">
                Our student's works
              </Text>
            ) : (
              <Center>
                <Text alignment="center" type="title1" bold>
                  Our student's works
                </Text>
              </Center>
            )}
          </Margin>
        </GridPlace>
        <GridPlace placeSelf="stretch" gridColumn="3/ span 8">
          <Margin
            size={[7, 0, 0, 0]}
            mobileSize={[1, 0, 0, 0]}
            tabletSize={[1, 0, 0, 0]}
          />
          <VideoPlayer />
        </GridPlace>
        <GridPlace placeSelf="stretch" gridColumn="3/ span 8">
          <Margin
            size={[7, 0, 0, 0]}
            mobileSize={[3, 0, 0, 0]}
            tabletSize={[3, 0, 0, 0]}
          />
        </GridPlace>
      </Grid>
      <Margin
        size={[0, 0, 9, 0]}
        mobileSize={[0, 0, 7, 0]}
        tabletSize={[0, 0, 7, 0]}
      />
    </Container>
  );
};
export const Nestizens = () => {
  return (
    <Theme>
      <GlobalThemeStyle />
      <Header />
      <BannerWeb />
      <NestizensBody />
      <Footer />
    </Theme>
  );
};
