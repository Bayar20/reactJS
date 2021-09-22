import React, { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useMeasure } from "react-use";
import {
  Container,
  Margin,
  Queue,
  Box,
  Stack,
  Text,
  InteractiveBorder,
  InteractiveText,
  Grid,
  Button,
  GridPlace,
  Padding,
  Border,
  Center,
  useMobile,
  Overlay,
  Tab,
  TextCard,
  Loading,
  BannerContainer
} from "../../components";
import Header from "../home-page/Header";
import Footer from "../home-page/Footer";
import useContentful from "../../useContentful";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  HopLogo,
  LeadingIcon,
  BrandIcon,
  ButtonTrailingIcon,
  CarouselIcon
} from "../../assets";
import { GlobalThemeStyle, Theme } from "../../theme";
import { Carousel } from "../../components/basic/carousel";
const query = `{
  hopCollection {
      items{
       bannerImage {
         url
       }
       hopTitle
       enrollments
       courseDuration
       completeProgram
       fallSummer
       hours
       courses
       whatShouldIExpect
       whatShouldIExpectText
       courseType
       courseTitle
       courseText1
       courseText2
       teacherImage1 {
         url
       }
      }
    }
  }`;
const MobileVersion = (props) => {
  const [ref, { width, height }] = useMeasure();
  const { dataFromProps } = props;
  return (
    <>
      {dataFromProps
        .filter((el) => el.courseType === "mainData")
        .map((el) => {
          const {
            hopTitle,
            enrollments,
            fallSummer,
            courseDuration,
            hours,
            completeProgram,
            courses,
            whatShouldIExpect,
            whatShouldIExpectText
          } = el;
          const { url } = el.bannerImage;
          return (
            <>
              <Padding size={[2, 2]}>
                <Link to="/courses/main-course">
                  <Queue size={1}>
                    <LeadingIcon />
                    <InteractiveText>Back</InteractiveText>
                  </Queue>
                </Link>
              </Padding>
              <BannerContainer
                bannerImage={url}
                bannerText={["Hop"]}
                imageHeight="206px"
                brand
              />
              <Padding size={[0, 2]}>
                <Margin size={[2, 0, 0, 0]} />
                <Grid mobileRepeatColumn={4} mobiletGriddGap={0}>
                  <GridPlace mobileGridColumn="1/5">
                    <Padding size={[0, 8, 0, 0]}>
                      <Text type="body">{hopTitle}</Text>
                    </Padding>
                  </GridPlace>
                  <Margin size={[4, 0, 0, 0]} />
                  <GridPlace mobileGridColumn="1/3">
                    <Link to="/registration">
                      <Button size="small" type="primary" buttonStyle="fill">
                        Register <ButtonTrailingIcon />
                      </Button>
                    </Link>
                  </GridPlace>
                </Grid>
              </Padding>
              <Margin size={[10, 0, 0, 0]} />
              <Padding size={[0, 2]}>
                <Grid mobileGridColumn={4} mobiletGriddGap={0}>
                  <GridPlace mobileGridColumn="1/5">
                    <Overlay relative top={0} right={-1}>
                      <Border borderSize={[1]} role="blackPrimary" width="100%">
                        <Overlay top={1} right={1} relative zIndex="99">
                          <Padding
                            size={[4, 2]}
                            backgroundRole="blackPrimary"
                            width="100%"
                          >
                            <Stack size={4}>
                              <Stack>
                                <Text role="light" type="footnote">
                                  {enrollments}
                                </Text>
                                <Text role="light" type="title2">
                                  {fallSummer}
                                </Text>
                                <Margin mobileSize={[2, 0]}></Margin>
                                <hr></hr>
                              </Stack>
                              <Stack>
                                <Text role="light" type="footnote">
                                  {courseDuration}
                                </Text>
                                <Text role="light" type="title2">
                                  {hours}
                                </Text>
                                <Margin mobileSize={[2, 0]}></Margin>
                                <hr></hr>
                              </Stack>
                              <Stack>
                                <Text role="light" type="footnote">
                                  {completeProgram}
                                </Text>
                                <Text role="light" type="title2">
                                  {courses}
                                </Text>
                              </Stack>
                            </Stack>
                          </Padding>
                        </Overlay>
                      </Border>
                    </Overlay>
                  </GridPlace>
                </Grid>
              </Padding>
              <Margin size={[12, 0, 0, 0]} />
              <Padding size={[0, 2]}>
                <Grid mobileRepeatColumn={4}>
                  <GridPlace mobileGridColumn="1/5">
                    <Stack size={1}>
                      <Padding size={[0, 3, 0, 0]}>
                        <Text type="title1" role="blackPrimary" bold>
                          {whatShouldIExpect}
                        </Text>
                      </Padding>
                      <Padding size={[0, 8, 0, 0]}>
                        <Text type="body">{whatShouldIExpectText}</Text>
                      </Padding>
                    </Stack>
                  </GridPlace>
                </Grid>
              </Padding>
            </>
          );
        })}
      <Margin size={[4, 0, 0, 0]} />
      <Padding size={[0, 2]}>
        <Grid mobileGridColumn={4}>
          <GridPlace mobileGridColumn="1/5">
            <InteractiveBorder>
              <Tab
                asFalseName="UI/UX design"
                asFalse={<MobileCourses type="design" data={dataFromProps} />}
                asTrueName="Programming"
                asTrue={<MobileCourses type="program" data={dataFromProps} />}
              ></Tab>
            </InteractiveBorder>
          </GridPlace>
        </Grid>
      </Padding>
      <Margin size={[9, 0, 0, 0]} />
      <Margin size={[0, 2]}>
        <MobileTeachers />
        <Margin size={[5, 0]} />
      </Margin>
    </>
  );
};
const MobileCourses = (props) => {
  const { data, type } = props;
  const reversedData = data.reverse();
  return (
    <>
      {type === "design" &&
        reversedData
          .filter((el) => el.courseType === type)
          .map((data) => {
            const { courseTitle, courseText1, courseText2 } = data;
            return (
              <>
                <Margin size={1} />
                <TextCard
                  title={courseTitle}
                  paragraph={[courseText1, courseText2]}
                ></TextCard>
              </>
            );
          })}
      {type === "program" &&
        data
          .filter((el) => el.courseType === type)
          .reverse()
          .map((data) => {
            const { courseTitle, courseText1, courseText2 } = data;
            return (
              <>
                <Margin size={1} />
                <TextCard
                  title={courseTitle}
                  paragraph={[courseText1, courseText2]}
                ></TextCard>
              </>
            );
          })}
    </>
  );
};
const MobileTeachers = () => {
  const queryNest = `{
      nestizensNestTeamCollection{
        items{
          firstname
          lastname
          profileImage{
            url
          }
          status
          department
          dribbbleLink
          linkedinLink
          behanceLink
          githubLink
          tabTitle
        }
      }
    }`;

  const { loading, data } = useContentful("nestizensNestTeam", queryNest);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Margin size={[14, 2, 1.5, 2]}>
        <Text role="blackPrimary" type="title1" bold>
          Teachers
        </Text>
      </Margin>
      <Carousel autoPlay infiniteLoop swipe center>
        {data &&
          data
            .filter((el) => el.department === "Masters")
            .map((data) => {
              const { lastname, firstname, status } = data;
              const { url } = data.profileImage;
              return (
                <Margin size={[0, 1]}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "end",
                      borderRadius: "4px",
                      backgroundImage: `url("${url}")`,
                      height: "320px",
                      width: "100%",
                      backgroundSize: "cover",
                      padding: "246px 16px 16px 16px"
                    }}
                  >
                    <Stack>
                      <Text type="headline" role="boneWhite">
                        {lastname} {firstname}
                      </Text>
                      <Queue>
                        <CarouselIcon />
                        <Text type="headline" bold role="nest" fontWeight="900">
                          {status}
                        </Text>
                      </Queue>
                    </Stack>
                  </div>
                </Margin>
              );
            })}
      </Carousel>
      <Margin size={12}></Margin>
    </>
  );
};

const WebBanner = (props) => {
  return (
    <>
      <Grid columns={[1, 10, 1]}>
        <GridPlace gridColumn="1 / span 3">
          <Queue
            backgroundRole="nest"
            width="100%"
            height="35em"
            justifyContent="space-around"
          >
            <Stack size={7}>
              <HopLogo />
              <Stack width="24em" size={6}>
                <Text type="title1">Hop is the way to go ... </Text>
                <Link to="/registration">
                  <Button size="small" type="primary" buttonStyle="fill">
                    Register <ButtonTrailingIcon />
                  </Button>
                </Link>
              </Stack>
            </Stack>
            <Stack size={6}>
              <Stack>
                <Text type="headline">Enrollments</Text>
                <Text type="headline">Fall & Summer</Text>
              </Stack>
              <Stack>
                <Text type="headline">Course duration</Text>
                <Text type="headline">400 hours</Text>
              </Stack>
              <Stack>
                <Text type="headline">Complete program</Text>
                <Text type="headline">4 courses</Text>
              </Stack>
            </Stack>
          </Queue>
        </GridPlace>
      </Grid>
    </>
  );
};
const CoursesTitle = () => {
  const { data } = useContentful("hop", query);
  const isMobile = useMobile();
  return (
    <>
      {data &&
        data
          .filter((el) => el.courseType === "mainData")
          .map((el) => (
            <>
              <Padding size={[0, 5]}>
                <Margin
                  size={[9, 0, 5, 0]}
                  mobileSize={[6, 0]}
                  tabletSize={[9, 0, 5, 0]}
                />
                <Grid columns={[1, 10, 1]} mobileRepeatColumn={4}>
                  <GridPlace gridColumn="2 / 3" mobileGridColumn="1 / 5">
                    <Stack size={!isMobile ? 6 : 4}>
                      <Text alignment={"center"} type={"largeTitleBold"}>
                        {el.whatShouldIExpect}
                      </Text>
                      <Text type="title1">{el.whatShouldIExpectText}</Text>
                    </Stack>
                  </GridPlace>
                </Grid>
              </Padding>
            </>
          ))}
      {!data && <Loading />}
    </>
  );
};
const TabControl = (props) => {
  const isMobile = useMobile();
  const [isDesign, setisDesign] = useState(true);
  const [isBorderActive, setIsBorderActive] = useState(isMobile ? 4 : 6);
  const switchToDesign = (status) => {
    setisDesign(status);
    setIsBorderActive(6);
    isMobile && setIsBorderActive(4);
  };
  return (
    <Padding size={[0, 5]}>
      {!isMobile && (
        <Margin size={[7, 0]} tabletSize={[7, 0]}>
          <Grid columns={[6, 6]} space={0}>
            <GridPlace gridColumn="1 / 2">
              <Stack size={5} width="100%">
                <Padding size={[0, 4]}>
                  <Center>
                    <InteractiveText
                      onClick={() => switchToDesign(true)}
                      role={isDesign && "highlight"}
                      type="title1"
                    >
                      Programming
                    </InteractiveText>
                  </Center>
                </Padding>
                <InteractiveBorder
                  role={isDesign ? "nest" : "line"}
                  borderSize={
                    isDesign ? [0, 0, isBorderActive, 0] : [0, 0, 2, 0]
                  }
                  onClick={() => switchToDesign(true)}
                />
              </Stack>
            </GridPlace>
            <GridPlace gridColumn="2/3">
              <Stack width="100%" size={5}>
                <Padding size={[0, 4]}>
                  <Center>
                    <InteractiveText
                      onClick={() => switchToDesign(false)}
                      role={!isDesign && "highlight"}
                      alignment="center"
                      type="title1"
                    >
                      UI/UX design
                    </InteractiveText>
                  </Center>
                </Padding>
                <InteractiveBorder
                  role={!isDesign ? "nest" : "line"}
                  borderSize={
                    !isDesign ? [0, 0, isBorderActive, 0] : [0, 0, 2, 0]
                  }
                  width="100%"
                  onClick={() => switchToDesign(false)}
                />
              </Stack>
              <Margin size={[6, 0]} tabletSize={[6, 0]} />
            </GridPlace>
          </Grid>
        </Margin>
      )}
      <Courses isDesign={isDesign ? "program" : "design"} />
    </Padding>
  );
};
const Courses = (props) => {
  const { data } = useContentful("hop", query);
  const isMobile = useMobile();
  const { isDesign } = props;
  let { span, span2 } = "";
  return (
    <>
      <Margin size={[6, 0]} mobileSize={[6, 0]} tabletSize={[6, 0]} />
      <Grid mobileRepeatColumn={12}>
        {data &&
          data
            .filter((data) => data.courseType === isDesign)
            .reverse()
            .map(
              (el, index) => (
                index % 2 === 0 ? (span = 1) : (span = 7),
                span === 1 ? (span2 = 6) : (span2 = 12),
                (
                  <GridPlace gridColumn={`${span} / ${span2} `} key={index}>
                    <Margin size={[0, 0, 7, 0]} tabletSize={[0, 0, 7, 0]}>
                      <Stack size={!isMobile ? 5 : 4}>
                        <Text type="title1" bold>
                          {el.courseTitle}
                        </Text>
                        <Text type="title2">{el.courseText1}</Text>
                        <Text type="title2"> {el.courseText2}</Text>
                      </Stack>
                    </Margin>
                  </GridPlace>
                )
              )
            )}
      </Grid>
    </>
  );
};
const Teachers = (props) => {
  const isMobile = useMobile();
  const teachersDataQuery = `{
    nestizensTeachersCollection {
      items {
        firstname
        lastname
        profileImage {
          url
        }
        status
        facebookLink
        linkedinLink
        twitterLink
      }
    }
  }`;
  const { data } = useContentful("nestizensTeachers", teachersDataQuery);
  return (
    <>
      {data && (
        <>
          <Padding size={[0, 5]}>
            <Margin size={[10, 0]} mobileSize={[7, 0]} />
            <Grid mobileRepeatColumn={12}>
              <GridPlace gridColumn="6/8">
                <Text type="display" bold>
                  Teachers
                </Text>
              </GridPlace>
              <Margin size={[6, 0]} />
              <GridPlace gridColumn="1/13">
                <Grid
                  columns={[3, 3, 3, 3]}
                  tabletRepeatColumn={2}
                  mobileRepeatColumn={2}
                  space={5}
                  tabletGriddGap={5}
                >
                  {data.map((el, index) => {
                    return (
                      <TeachersInfo
                        key={index}
                        picture={el.profileImage.url}
                        firstname={el.firstname}
                        lastname={el.lastname}
                        status={el.status}
                        facebookLink={el.facebookLink}
                        linkedinLink={el.linkedinLink}
                        twitterLink={el.twitterLink}
                      />
                    );
                  })}
                </Grid>
              </GridPlace>
            </Grid>
            <Margin
              size={[0, 0, 10, 0]}
              mobileSize={[0, 0, 7, 0]}
              tabletSize={[0, 0, 7, 0]}
            />
          </Padding>
        </>
      )}
    </>
  );
};
const TeachersInfo = (props) => {
  const isMobile = useMobile();
  const {
    picture,
    firstname,
    lastname,
    status,
    facebookLink,
    linkedinLink,
    twitterLink
  } = props;
  return (
    <Stack size={2}>
      <Box image={picture} ratio={1} />
      <Stack>
        <Queue>
          <Text type="title2">{firstname} &nbsp;</Text>
          <Text type="title2">{lastname}</Text>
        </Queue>
        <Text type="title2">{status}</Text>
      </Stack>
      <Queue size={5}>
        {facebookLink && (
          <a href={facebookLink} target="_blank" rel="noreferrer">
            <LinkedInIcon role="#52575C" />
          </a>
        )}
        {linkedinLink && (
          <a href={linkedinLink} target="_blank" rel="noreferrer">
            <InstagramIcon role="#52575C" />
          </a>
        )}
        {twitterLink && (
          <a href={twitterLink} target="_blank" rel="noreferrer">
            <FacebookIcon role="#52575C" />
          </a>
        )}
      </Queue>
    </Stack>
  );
};
const Hop = () => {
  const isMobile = useMobile();
  const { loading, data } = useContentful("hop", query);
  return _.first(data) ? (
    <>
      <Header />
      <Theme>
        <GlobalThemeStyle />
        {isMobile && <MobileVersion dataFromProps={data} />}
        {!isMobile && <WebBanner data={data} />}
        <Container>
          {!isMobile && (
            <>
              <CoursesTitle />
              <TabControl />
              <Teachers />
            </>
          )}
        </Container>
        <Footer />
      </Theme>
    </>
  ) : (
    <>
      <Loading />
    </>
  );
};
export default Hop;
