import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
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
  BannerContainer,
  Button,
  Border,
  Queue
} from "../../components";
import { Loading } from "../../components/basic/loading";
import { GlobalThemeStyle, Theme } from "../../theme";
import useContentful from "../../useContentful";
import { ButtonTrailingIcon } from "../../assets";
import { Carousel } from "../../components/basic/carousel";

const queryForBanner = `{
    homeBannerCollection{
        items{
          banner{
            url
          }
          bannerText
          bannerTitle
        }
      }
}`;

const queryForPartners = `{
    ourPartnersCollection{
        items{
          companyName{
            url
          }
        }
      }
}`;

const queryForWhatWeOffer = `{
    missionCollection{
        items{
            mainTitle
            image{
                url
            }
            title
            description
        }
      }
}`;

const queryForStudentsSay = `{
    studentsSayCollection{
        items{
          profilePic{
            url
         }
          name
          status
          studentsSay
        }
      }
}`;
const BannerCarousel = () => {
  const { loading, data } = useContentful("ourPartners", queryForPartners);

  return (
    <div
      style={{
        width: "100%",
        height: "50px"
      }}
    >
      <Carousel
        center
        centerSlidePercentage={50}
        swipe
        showIndicators
        showThumb
        autoPlay
        infiniteLoop
      >
        {data &&
          _.map(data, (el) => {
            return (
              <div
                style={{
                  height: "80px"
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "30px",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url("${el.companyName.url}")`
                  }}
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

const CommentCarousel = () => {
  const isMobile = useMobile("600px");
  const { loading, data } = useContentful("studentsSay", queryForStudentsSay);
  return (
    <div
      style={{
        width: "100%",
        height: "350px"
      }}
    >
      <Carousel swipe autoPlay infiniteLoop interval={5000}>
        {data &&
          _.map(data, (el) => (
            <Margin size={[2, 2]} mobileSize={[1, 1]}>
              <Border
                height="315px"
                width="100%"
                radius="border"
                shadow={
                  isMobile
                    ? "0px 0px 2px rgba(23, 43, 77, 0.25), 0px 2px 4px rgba(23, 43, 77, 0.15)"
                    : "0px"
                }
              >
                <Stack size={[3]}>
                  <Queue size={1}>
                    <Border radius="circle" width="88px" height="88px">
                      <Box radius="50" image={el.profilePic.url}></Box>
                    </Border>
                    <Stack width="50%" size={1}>
                      <Text type="headline" bold>
                        {el.name}
                      </Text>
                      <Text type="footnote">{el.status}</Text>
                    </Stack>
                  </Queue>
                  <Center>
                    <Border borderSize={[1, 0, 0, 1]} role="line" width="95%" />
                  </Center>
                </Stack>
                <Padding size={[2, 1, 5, 1]}>
                  <Center>
                    <Text type="body" alignment="justify">
                      {el.studentsSay}
                    </Text>
                  </Center>
                </Padding>
              </Border>
            </Margin>
          ))}
      </Carousel>
    </div>
  );
};

const HomeBanner = () => {
  const { loading, data } = useContentful("homeBanner", queryForBanner);
  const isMobile = useMobile("927px");

  if (isMobile) {
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          data && (
            <>
              <Margin mobileSize={[1, 1]}>
                <BannerContainer
                  brand
                  bannerImage={_.last(data).banner.url}
                  bannerText={["Nest for", "Future", "Engineers"]}
                  height="493px"
                />

                <Margin mobileSize={[1, 14, 0, 1]} tabletSize={[1, 1]}>
                  <Stack size={[3]}>
                    <Text role="blackPrimary" type="callout">
                      {_.last(data).bannerText}
                    </Text>
                    <Link to="/courses/main-course/">
                      <Button
                        type="primary"
                        buttonStyle="fill"
                        size="small"
                        trailingIcon={<ButtonTrailingIcon />}
                      >
                        Find a course
                      </Button>
                    </Link>
                  </Stack>
                </Margin>
                <Margin mobileSize={[9, 1, 7, 1]} tabletSize={[1, 1]}>
                  <BannerCarousel />
                </Margin>
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
          backgroundColor: "#FFFFFF"
        }}
      >
        <Container>
          <Center width="100%" height="90vh">
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
                        backgroundImage: `url("${_.last(data).banner.url}")`,
                        height: "60vh",
                        width: "20rem",
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                      }}
                    ></div>
                  </GridPlace>
                  <GridPlace>
                    <Stack size={2}>
                      <Text role="blackPrimary" type="largeTitleBold" bold>
                        {_.last(data).bannerTitle}
                      </Text>
                      <Text role="blackPrimary" type="callout">
                        {_.last(data).bannerText}
                      </Text>
                      <Link to="/courses/main-course/">
                        <Button
                          type="primary"
                          buttonStyle="fill"
                          size="small"
                          trailingIcon={<ButtonTrailingIcon />}
                        >
                          Find a course
                        </Button>
                      </Link>
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

const HomeBody = () => {
  const { loading, data } = useContentful("mission", queryForWhatWeOffer);
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
          <Margin size={[4, 0, 4, 0]} mobileSize={[0, 2]} tabletSize={[0, 2]}>
            {isMobile ? (
              <Text type="body" bold role="blackPrimary">
                WHAT WE OFFER
              </Text>
            ) : (
              <Center>
                <Text
                  alignment="center"
                  type="largeTitle"
                  bold
                  role="blackPrimary"
                >
                  WHAT WE OFFER
                </Text>
              </Center>
            )}
          </Margin>
        </GridPlace>
        <GridPlace gridColumn="1/ span 12">
          <Padding size={2}>
            <Grid
              repeatColumn={3}
              tabletRepeatColumn={1}
              mobileRepeatColumn={1}
              justify="center"
              space={6}
              mobileGridGap={8}
            >
              {loading ? (
                <Loading />
              ) : (
                data &&
                _.map(data, (el) => {
                  return (
                    <GridPlace>
                      <Link to="/nestizens/meetnestizens">
                        {isMobile ? (
                          <>
                            <ImageContainer
                              image={el.image.url}
                              textTop={el.title}
                              textBottomFirst={el.description}
                              marginFromImage={[2, 0, 0, 0]}
                              marginFromTopText={[1, 0, 0, 0]}
                            />
                          </>
                        ) : (
                          <ImageContainer
                            bordered
                            containerHeight="380px"
                            image={el.image.url}
                            textTop={el.title}
                            textBottomFirst={el.description}
                          />
                        )}
                      </Link>
                    </GridPlace>
                  );
                })
              )}
            </Grid>
          </Padding>
        </GridPlace>
        <GridPlace gridColumn="1/ span 12">
          <Margin
            size={[20, 0, 0, 0]}
            mobileSize={[12, 18, 1, 2]}
            tabletSize={[0, 2]}
          >
            {isMobile ? (
              <Text type="callout" bold role="blackPrimary">
                WHAT OUR STUDENTS SAY
              </Text>
            ) : (
              <Center>
                <Text
                  alignment="center"
                  type="largeTitle"
                  bold
                  role="blackPrimary"
                >
                  WHAT OUR STUDENTS SAY
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
        </GridPlace>
      </Grid>

      <Margin size={[0, 2]}>
        <Center>
          {isMobile ? (
            <Center height="400px" width="100%">
              <CommentCarousel />
            </Center>
          ) : (
            <div style={{ width: "600px" }}>
              <CommentCarousel />
            </div>
          )}
        </Center>
      </Margin>
      <Margin
        size={[0, 0, 9, 0]}
        mobileSize={[0, 0, 7, 0]}
        tabletSize={[0, 0, 7, 0]}
      />
    </Container>
  );
};
function HomeMobile() {
  return (
    <Theme>
      <GlobalThemeStyle />
      <HomeBanner />
      <HomeBody />
    </Theme>
  );
}

export default HomeMobile;
