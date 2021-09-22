import React from 'react'
import { Theme, GlobalThemeStyle } from '../../theme'
import { ButtonTrailingIcon, CarouselIcon, LeadingIcon } from '../../assets'
import { Link } from 'react-router-dom'
import { Carousel } from "../../components/basic/carousel"
import {

    Stack,
    Queue,
    Border,
    Text,
    Button,
    Overlay,
    Center,
    Margin,
    Padding,
    InteractiveText,
    Grid,
    GridPlace,
    useMobile,
    BannerContainer,
    Loading,
    TextCard,
} from '../../components'
import Header from '../home-page/Header';
import Footer from '../home-page/Footer';
import useContentful from '../../useContentful';

function Leap() {

    const queryText = `{
        codingCoursePlanCollection{
            items{
              title
              description
              image{url}
              description2
            }
        }
    }`

    const { loading, data } = useContentful('codingCoursePlan', queryText);

    const isMobile = useMobile();
    const MobileBanner = () => {
        if (loading) {
            return <Loading />
        }
        return (
            <div>
                <Padding size={2}>
                    <Link to="/courses/main-course">
                        <Queue size={1}>
                            <LeadingIcon />
                            <InteractiveText>Back</InteractiveText>
                        </Queue>
                    </Link>
                </Padding>
                {data && (
                    <BannerContainer
                        bannerImage={data.filter((d) => d.image !== null)[0].image.url}
                        bannerText={["Leap"]}
                        imageHeight="206px"
                        brand
                    />
                )}
            </div>
        )
    }

    const MobileTitle = () => {
        return (
            <Stack>
                <Stack size={4}>
                    <Padding size={[2, 7.5, 0, 0]}>
                        <Queue>
                            <Text type="body">NEST Academy is nurturing a passion for tech and development in 10’000 young IT engineers who will pioneer the developments of the tech industry.</Text>
                        </Queue>
                    </Padding>
                    <Queue>
                        <Link>
                            <Button size="small" type="primary" buttonStyle="fill" trailingIcon={<ButtonTrailingIcon />}>
                                <Text type="subHeading" role="boneWhite" bold>REGISTER</Text>
                            </Button>
                        </Link>
                    </Queue>
                </Stack>
                <Margin size={[12, 0, 0, 0]}>
                    <Grid mobileRepeatColumn={4} mobiletGriddGap={1}>
                        <GridPlace mobileGridColumn="1 / 5">
                            <Overlay relative top={0} right={-1}>
                                <Border borderSize={[1]} role="blackPrimary" width="100%">
                                    <Overlay top={1} right={1} relative zIndex="99">
                                        <Stack backgroundRole="darkBlue" size={5} width="100%">
                                            <Padding size={[4, 1, 4, 2]}>
                                                <Stack size={3}>
                                                    <Stack>
                                                        <Stack><Text role="boneWhite" type="footnote">Enrollments</Text></Stack>
                                                        <Stack><Text role="light" type="title2" bold>Fall & Summer</Text></Stack>
                                                    </Stack>
                                                    <Border role="grey" borderSize={[0, 0, 1, 0]} />
                                                    <Stack>
                                                        <Stack><Text role="boneWhite" type="footnote">Course duration</Text></Stack>
                                                        <Stack><Text role="light" type="title2" bold>400 hours</Text></Stack>
                                                    </Stack>
                                                    <Border role="grey" borderSize={[0, 0, 1, 0]} />
                                                    <Stack>
                                                        <Stack><Text role="boneWhite" type="footnote">Complete program</Text></Stack>
                                                        <Stack><Text role="light" type="title2" bold>4 courses</Text></Stack>
                                                    </Stack>
                                                </Stack>
                                            </Padding>
                                        </Stack>
                                    </Overlay>
                                </Border>
                            </Overlay>
                        </GridPlace>
                    </Grid>
                </Margin >
            </Stack>
        )
    }

    const MobileCourses = () => {
        return (
            <div>
                <Grid mobileRepeatColumn={4} mobiletGriddGap={2}>
                    <GridPlace mobileGridColumn="1/ 5">
                        <Margin size={[12, 0, 0, 0]}>
                            <Stack size={3}>
                                <Text role="blackPrimary" bold type="title1">What should I expect?</Text>
                                <Padding size={[0, 7.5, 0, 0]}>
                                    <Text type="body">
                                        Learn stages of developing mobile application and web design and produce application design individually.
                                    </Text>
                                </Padding>
                            </Stack>
                        </Margin>
                    </GridPlace>
                </Grid>
                <Margin size={[3.5, 0, 1.5, 0,]}>
                    <Center>
                        <Text type="headline" role="blackPrimary" fontWeight="900">Programming</Text>
                    </Center>
                </Margin>
                <Border borderSize={[0, 0, 2, 0]} role="blackPrimary" />

                <Stack size={1}>
                    {data && (
                        data.map((data) => {
                            return (
                                <TextCard title={data.title} paragraph={[data.description, data.description2]} ></TextCard>
                            )
                        })
                    )}
                </Stack>
            </div >
        )
    }

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
          }`

        const { loading, data } = useContentful("nestizensNestTeam", queryNest);
        if (loading) {
            return <Loading />
        }
        return (
            <>
                <Margin size={[14, 2, 1.5, 2]}>
                    <Text role="blackPrimary" type="title1" bold>Teachers</Text>
                </Margin>
                <Carousel autoPlay infiniteLoop swipe center>
                    {data &&
                        data
                            .filter((el) => el.department === "Masters")
                            .map((data) => (
                                <Margin size={[0, 1]}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "end",
                                            borderRadius: "4px",
                                            backgroundImage: `url("${data.profileImage.url}")`,
                                            height: "320px",
                                            width: "100%",
                                            backgroundSize: "cover",
                                            padding: "246px 16px 16px 16px"
                                        }}
                                    >
                                        <Stack>
                                            {" "}
                                            <Text type="headline" role="boneWhite">
                                                {data.lastname} {data.firstname}
                                            </Text>
                                            <Queue>
                                                <CarouselIcon />
                                                <Text type="headline" bold role="nest" fontWeight="900">
                                                    {data.status}
                                                </Text>
                                            </Queue>
                                        </Stack>
                                    </div>
                                </Margin>
                            ))}
                </Carousel>
                <Margin size={12}></Margin>
            </>
        )
    }


    return (
        <Theme>
            <GlobalThemeStyle />
            <Header />
            {isMobile ? (
                <>
                    <MobileBanner />
                    <Margin size={[0, 2]}>
                        <MobileTitle />
                        <MobileCourses />
                    </Margin>
                    <MobileTeachers />
                </>
            ) : (<></>)}
            <Footer />
        </Theme >
    )
}
export default Leap;