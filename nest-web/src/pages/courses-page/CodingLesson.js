import React, { useState } from "react";
import { Theme, GlobalThemeStyle } from "../../theme";
import _ from "lodash";
import {
  Container,
  Stack,
  Queue,
  Text,
  Border,
  Margin,
  HoverBorder,
  InteractiveText,
  Grid,
  GridPlace,
  Padding,
  BannerContainer,
  ProgressBar,
  LessonCard,
  useMobile
} from "../../components";
import ReactPlayer from "react-player";
import Header from "../home-page/Header";
import { PlayCircle, MobilePlayCircle } from "../../assets";
import Footer from "../home-page/Footer";
import useContentful from "../../useContentful";
import { Loading } from "../../components/basic/loading";

export default function CodingLesson() {
  const isMobile = useMobile();
  return (
    <Theme>
      <Header />
      <CodingLessonHeader />
      {isMobile ? (
        <VideoLesson />
      ) : (
        <Container>
          <VideoLesson />
        </Container>
      )}
      <Footer />
    </Theme>
  );
}
export function CodingMicroLesson() {
  const isMobile = useMobile();
  return (
    <Theme>
      <CodingLessonHeader />
      {isMobile ? (
        <VideoLesson />
      ) : (
        <Container>
          <VideoLesson />
        </Container>
      )}
    </Theme>
  );
}
export function CodingLessonHeader() {
  const isMobile = useMobile();
  const query = `{
        codingLessonCollection {
          items {
            image {
              url
            }
            mobileImage {
              url
            }
            mobileDescription
            description
            title
          }
        }
      }`;

  const { loading, data } = useContentful("codingLesson", query);
  if (loading) {
    return <Loading />;
  }

  return (
    <Theme>
      <GlobalThemeStyle />
      {isMobile ? (
        <>
          {data &&
            data.map((data) => (
              <>
                <BannerContainer
                  bannerImage={data.mobileImage.url}
                  bannerText={["Coding"]}
                  imageHeight="206px"
                />
                <Margin size={[1.75, 0, 0, 0]} />
                <Padding size={[0, 2]}>
                  <Grid mobileRepeatColumn={4} mobiletGriddGap={0}>
                    <GridPlace mobileGridColumn="1/5">
                      <Padding size={[0, 7.5, 0, 0]}>
                        <Stack size={1}>
                          <Text type="headline">{data.mobileDescription}</Text>
                        </Stack>
                      </Padding>
                    </GridPlace>
                  </Grid>
                </Padding>
              </>
            ))}
        </>
      ) : (
        <Queue backgroundRole="nest" height={62.5}>
          <Container>
            <Grid>
              <GridPlace gridColumn="1/ span 12" gridRow="2/ span 1">
                {_.first(data) && (
                  <Grid columns={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}>
                    <GridPlace gridColumn="1/ span 4" gridRow="1/ span 4">
                      <img src={_.first(data).image.url} alt="img" />
                    </GridPlace>
                    <GridPlace gridColumn="5/ span 7" gridRow="2/ span 2">
                      <Stack size={6}>
                        <Text nowrap="normal" type="display" bold>
                          {_.first(data).title}
                        </Text>
                        <Text>{_.first(data).description}</Text>
                      </Stack>
                    </GridPlace>
                  </Grid>
                )}
              </GridPlace>
            </Grid>
          </Container>
        </Queue>
      )}
    </Theme>
  );
}

export const VideoLesson = () => {
  const isMobile = useMobile();
  const query = `{
        codingCourseCollection {
            items {
                videoUrl
                courseName
                videoLessonLong
                lessonImage {
                  url
                }
                lessonNumber
            }
        }
    }
    `;

  const { loading, data } = useContentful("codingCourse", query);

  const [video, setVideo] = useState(_.first(data));
  const [playedSec, setPlayedSec] = useState();
  const [duration, setDuration] = useState();

  const filterVideo = (type) => {
    const fVideo = _.filter(data, (data) => data.courseName === type);
    setVideo(_.first(fVideo));
    setPlayedSec(0);
  };
  if (loading) {
    return <Loading />;
  }
  if (data && !video) {
    setVideo(_.first(data));
  }
  const onProgress = ({ playedSeconds }) => {
    setPlayedSec(playedSeconds);
  };
  const value = (playedSec / duration) * 100;
  return (
    <div>
      <Margin size={8.75} />
      {isMobile ? (
        <>
          <Padding size={[2, 0, 0, 2]}>
            <Text type="title2" bold role="blackPrimary">
              What is Coding?
            </Text>
          </Padding>
          <Padding size={2}>
            <ReactPlayer
              controls
              width="100%"
              url={video && video.videoUrl}
              onProgress={onProgress}
              onDuration={(e) => setDuration(e)}
            />
          </Padding>
          <Margin size={2}>
            <Stack size={1}>
              <Text type="callout">RELATED LESSONS</Text>
              {data &&
                _.map(data, (data) => {
                  return (
                    <div>
                      <LessonCard>
                        <Padding size={[2, 0, 0, 2]}>
                          <Queue
                            width="95%"
                            onClick={() => filterVideo(data.courseName)}
                            justifyContent="space-between"
                          >
                            <Queue>
                              <img
                                src={
                                  (data.lessonImage.url &&
                                    data.lessonImage.url) ||
                                  ""
                                }
                                alt="img"
                              />
                              <Padding size={[0, 0, 0, 3]} />
                              <Stack>
                                <HoverBorder borderLeft="none">
                                  <InteractiveText
                                    type="headline"
                                    role="blackPrimary"
                                    bold
                                  >
                                    {data.courseName}
                                  </InteractiveText>
                                </HoverBorder>
                                <Text type="caption1">{data.lessonNumber}</Text>
                                <ProgressBar
                                  progress3={
                                    data?.videoUrl === video?.videoUrl
                                      ? value
                                      : 0
                                  }
                                />
                              </Stack>
                            </Queue>
                            <Queue>
                              <MobilePlayCircle />
                            </Queue>
                          </Queue>
                        </Padding>
                      </LessonCard>
                    </div>
                  );
                })}
            </Stack>
          </Margin>
        </>
      ) : (
        <Grid columns={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}>
          <GridPlace gridColumn="1 / span 5">
            <Text type="title1" bold>
              What is UI/UX design?
            </Text>
          </GridPlace>
          <GridPlace gridColumn="1 / span 8">
            <ReactPlayer
              controls
              width="100%"
              height="515px"
              url={video && video.videoUrl}
            />
          </GridPlace>
          <GridPlace gridColumn="9 / span 4">
            <Text type="title1" bold>
              Other video lessons
            </Text>
            {_.map(data, (data) => {
              return (
                <div>
                  <Margin size={3} />
                  <Queue
                    onClick={() => filterVideo(data.courseName)}
                    justifyContent="space-between"
                  >
                    <Queue size={2}>
                      <PlayCircle />
                      <HoverBorder borderLeft="none">
                        <InteractiveText type="body">
                          {data.courseName}
                        </InteractiveText>
                      </HoverBorder>
                    </Queue>
                    <Queue>
                      <InteractiveText type="body">
                        {data.videoLessonLong}
                      </InteractiveText>
                    </Queue>
                  </Queue>
                  <Margin size={2} />
                  <Border borderSize={[1, 0, 0, 0]} role="lightGrey" />
                </div>
              );
            })}
          </GridPlace>
        </Grid>
      )}
      <Margin size={10} />
    </div>
  );
};
