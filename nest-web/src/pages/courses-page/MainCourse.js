import React from "react";
import useContentful from "../../useContentful";
import { Theme, GlobalThemeStyle } from "../../theme";
import {
  Button,
  Container,
  Stack,
  Queue,
  Text,
  Border,
  Margin,
  TextBox,
  Grid,
  GridPlace,
  Padding,
  Box,
  useMobile,
  BannerContainer
} from "../../components";
import { HopLogo, LeapLogo } from "../../assets";
import { Link } from "react-router-dom";
import Footer from "../home-page/Footer";
import Header from "../home-page/Header";
import { Loading } from "../../components/basic/loading";

export default function MainCourse() {
  const isMobile = useMobile();
  return (
    <div className="navbar">
      <Theme>
        <GlobalThemeStyle />
        <Header />
        <MainCourseHeader />
        <Container>
          {isMobile ? (
            <Padding size={2}>
              <LeapHopCard />
            </Padding>
          ) : (
            <LeapHopCard />
          )}
        </Container>
        {isMobile ? <Margin /> : <Margin size={10} />}
        <WhatWeTeach />
        {isMobile ? <Margin /> : <Margin size={10} />}
        <Container>
          <CodingAndDesign />
        </Container>
        <Margin size={10} />
        <Footer />
      </Theme>
    </div>
  );
}
export function MainCourseHeader() {
  const isMobile = useMobile();
  const query = `{
    mainCourseHeaderCollection {
     items {
       description
       title
       image {
         url
       }
     }
   }
 }`;
  const { loading, data } = useContentful("mainCourseHeader", query);
  if (loading) {
    return <Loading />;
  }
  return (
    <Border role="info">
      {isMobile ? (
        <>
          {data &&
            data.map((data) => (
              <>
                <BannerContainer
                  bannerImage={data.image.url}
                  bannerText={["Courses"]}
                  brand
                />
                <Margin size={[1.75, 0, 0, 0]} />
                <Padding size={[0, 2]}>
                  <Grid mobileRepeatColumn={4} mobiletGriddGap={0}>
                    <GridPlace mobileGridColumn="1/5">
                      <Padding size={[0, 7.5, 0, 0]}>
                        <Stack size={1}>
                          <Text type="headline">{data.description}</Text>
                        </Stack>
                      </Padding>
                    </GridPlace>
                  </Grid>
                </Padding>
              </>
            ))}
          <Margin size={12} />
        </>
      ) : (
        <Queue
          height={62.5}
          width="100%"
          backgroundRole="nest"
          justifyContent="space-around"
        >
          <Stack size={7}>
            <Queue justifyContent="center">
              <Margin size={5}>
                <HopLogo />
              </Margin>
              <Border
                borderSize={[0, 1, 0, 0]}
                role="blackPrimary"
                height="80px"
              />
              <LeapLogo />
            </Queue>
            {data &&
              data.map((data) => (
                <Stack size={5}>
                  <Text type="largeTitleBold" bold alignment="center">
                    {data.title}
                  </Text>
                  <Text type="primary2" alignment="center">
                    {data.description}
                  </Text>
                </Stack>
              ))}
          </Stack>
        </Queue>
      )}
    </Border>
  );
}

export function LeapHopCard() {
  const isMobile = useMobile();
  const query = `{
    mainCoursesCollection {
      items {
        logo {
          url
        }
        title
        button
        description
        link
      }
    }
  }`;
  const { loading, data } = useContentful("mainCourses", query);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {isMobile ? (
        <Grid mobileRepeatColumn={4} mobiletGriddGap={0}>
          <GridPlace mobileGridColumn="1/ 5">
            <Text type="headline" bold>
              COURSES WE OFFER
            </Text>
            <Margin size={4.5} />
            <Stack size={9}>
              {data &&
                data.map((data) => (
                  <>
                    <Stack size={1}>
                      <Box image={data.logo.url} ratio={0.8} />
                      <Padding size={[2.75, 0, 0, 0]} />
                      <Text type="title2" bold>
                        {data.title}
                      </Text>
                      <Text type="headline">{data.description}</Text>
                      <Padding size={[3, 0, 0, 0]}>
                        <Link to={data.link}>
                          <Button
                            size="large"
                            type="primary"
                            buttonStyle="fill"
                          >
                            {data.button}
                          </Button>
                        </Link>
                      </Padding>
                    </Stack>
                  </>
                ))}
            </Stack>
          </GridPlace>
        </Grid>
      ) : (
        <Grid columns={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}>
          <GridPlace gridColumn="2 / span 10">
            <Margin size={5} />
            <Grid columns={[4, 4]}>
              {data &&
                data.map((data) => (
                  <TextBox>
                    <Margin size={6}>
                      <Stack size={3}>
                        <Text type="title2" bold>
                          {data.title}
                        </Text>
                        <Text type="headline">{data.description}</Text>
                        <Link to={data.link}>
                          <Button
                            size="large"
                            type="primary"
                            buttonStyle="fill"
                          >
                            {data.button}
                          </Button>
                        </Link>
                      </Stack>
                    </Margin>
                  </TextBox>
                ))}
            </Grid>
          </GridPlace>
        </Grid>
      )}
    </>
  );
}

export function WhatWeTeach(props) {
  const isMobile = useMobile();
  const query = `{
    whatWeTeachCollection {
     items {
       description
       title
     }
   }
 }`;
  const { loading, data } = useContentful("whatWeTeach", query);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {isMobile ? (
        <></>
      ) : (
        <>
          <Margin size={5} />
          <Border role="info">
            <Queue justifyContent="space-around">
              <Stack size={3}>
                {data &&
                  data.map((data) => (
                    <div>
                      <Stack size={5}>
                        <Text type="largeTitleBold" bold alignment="center">
                          {data.title}
                        </Text>
                        <Text type="headline" alignment="center">
                          {data.description}
                        </Text>
                      </Stack>
                    </div>
                  ))}
              </Stack>
            </Queue>
          </Border>
          <Margin size={5} />
        </>
      )}
    </div>
  );
}

export function CodingAndDesign() {
  const isMobile = useMobile();
  const query = `{
    mainCourseCodingAndDesignCollection {
      items {
        title
        button
        description
        link
        logo {
          url
        }
      }
    }
  }`;
  const { loading, data } = useContentful("mainCourseCodingAndDesign", query);
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {isMobile ? (
        <>
          <Margin size={4.5} />
          {data &&
            data.map((data) => (
              <>
                <BannerContainer
                  bannerImage={data.logo.url}
                  bannerText={["Micro", "Lessons"]}
                  imageHeight="206px"
                />
                <Padding size={2}>
                  <Stack size={4.8}>
                    <Text type="headline">{data.description}</Text>
                    <Queue alignItems="flex-start">
                      <Link to={data.link}>
                        <Button size="large" type="primary" buttonStyle="fill">
                          {data.button}
                        </Button>
                      </Link>
                    </Queue>
                  </Stack>
                </Padding>
              </>
            ))}
        </>
      ) : (
        <Grid columns={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}>
          <GridPlace gridColumn="2 / span 10">
            <Grid columns={[5, 5]}>
              {data &&
                data.map((data) => (
                  <TextBox>
                    <Margin size={6}>
                      <Stack size={4}>
                        <Text type="title2" bold>
                          {data.title}
                        </Text>
                        <Text type="headline">{data.description}</Text>
                        <Link to={data.link}>
                          <Button
                            size="large"
                            type="primary"
                            buttonStyle="fill"
                          >
                            {data.button}
                          </Button>
                        </Link>
                      </Stack>
                    </Margin>
                  </TextBox>
                ))}
            </Grid>
          </GridPlace>
        </Grid>
      )}
    </div>
  );
}
