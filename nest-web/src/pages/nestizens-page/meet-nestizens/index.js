import React, { useState } from "react";
import _ from "lodash";
import Footer from "../../home-page/Footer";
import Header from "../../home-page/Header";
import Banner from "./Banner";
import BoxItem from "./BoxItem";
import { Theme, GlobalThemeStyle } from "../../../theme";
import {
  Stack,
  Border,
  Margin,
  InteractiveText,
  Text,
  Container,
  Grid,
  GridPlace,
  Loading,
  useMobile
} from "../../../components";
import useContentful from "../../../useContentful";
import {
  MeetNestizensMobile,
  TabSectionMobile,
  CurrentStudentContentMobile,
  NestTeamContentMobile
} from "./MeetNestizensMobile";

export const MeetNestizensBody = () => {
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
  const [content, setContent] = useState([]);
  const [type, setType] = useState("Current Students");
  const [tabs, setTabs] = useState([
    {
      tabTitle: "Current Students"
    },
    {
      tabTitle: "Nest Team"
    }
  ]);
  const [activeTab, setActiveTab] = useState([
    {
      tabTitle: "Current Students"
    }
  ]);

  const isMobile = useMobile("927px");

  const activateTab = (type) => {
    const activeValue = _.filter(tabs, (tab) => tab.tabTitle === type);
    setActiveTab(activeValue);
    const activeContent = _.filter(data, (data) => data.tabTitle === type);
    setContent(activeContent);
    setType(type);
  };

  if (loading) {
    return <Loading />;
  }

  if (data && _.isEmpty(content)) {
    setContent(_.filter(data, (data) => data.tabTitle === type));
  }

  if (isMobile) {
    return <MeetNestizensMobile />;
  } else {
    return (
      <Container>
        <Grid columns={[1, 10, 1]}>
          <TabSection
            tabs={tabs}
            activeTab={activeTab}
            activateTab={activateTab}
          />
          {type === "Current Students" && (
            <CurrentStudentContentSection content={content} />
          )}
          {type === "Nest Team" && <NestTeamContentSection content={content} />}
          <Margin size="12" />
        </Grid>
      </Container>
    );
  }
};

const TabSection = ({ tabs, activeTab, activateTab }) => {
  const isMobile = useMobile("927px");
  if (isMobile) {
    return <TabSectionMobile />;
  } else {
    return (
      <GridPlace gridColumn="1 / span 3">
        <Margin size={[10, 0, 0]}>
          <Grid repeatColumn="2" space="0">
            {_.map(tabs, (tab, i) => (
              <Stack size="1">
                <InteractiveText
                  key={i}
                  bold={
                    _.first(activeTab).tabTitle === tab.tabTitle ? "title2" : ""
                  }
                  role={
                    _.first(activeTab).tabTitle === tab.tabTitle
                      ? "blackPrimary"
                      : "darkGrey"
                  }
                  alignment="center"
                  type="title2"
                  onClick={() => activateTab(tab.tabTitle)}
                >
                  {tab.tabTitle}
                </InteractiveText>
                <Border
                  borderSize={
                    _.first(activeTab).tabTitle === tab.tabTitle
                      ? [0, 0, 2]
                      : [0, 0, 1]
                  }
                  role={
                    _.first(activeTab).tabTitle === tab.tabTitle
                      ? "blackPrimary"
                      : "lightGrey"
                  }
                />
              </Stack>
            ))}
          </Grid>
        </Margin>
      </GridPlace>
    );
  }
};

export const CurrentStudentContentSection = ({ content }) => {
  const isMobile = useMobile("927px");
  const subTitles = [
    { subTitle: "Leap 1st year" },
    { subTitle: "Leap 2nd year" }
  ];

  if (isMobile) {
    return <CurrentStudentContentMobile />;
  } else {
    return (
      content && (
        <GridPlace gridColumn="1 / span 3">
          {subTitles.map((item, index) => {
            return (
              <>
                <Margin size={[6, 0, 0]}>
                  <Text key={index} type="title3" bold>
                    {item.subTitle}
                  </Text>
                </Margin>
                <Grid repeatColumn="4" space="2.5">
                  {content
                    .filter((data) => data.department === `${item.subTitle}`)
                    .map((data, i) => (
                      <BoxItem data={data} key={i} />
                    ))}
                </Grid>
              </>
            );
          })}
        </GridPlace>
      )
    );
  }
};

export const NestTeamContentSection = ({ content }) => {
  const isMobile = useMobile("927px");
  const subTitles = [
    { subTitle: "Management Team" },
    { subTitle: "Masters" },
    { subTitle: "Instructor" }
  ];

  if (isMobile) {
    return <NestTeamContentMobile />;
  } else {
    return (
      content && (
        <GridPlace gridColumn="1 / span 3">
          {subTitles.map((item, index) => {
            return (
              <>
                <Margin size={[6, 0, 0]}>
                  <Text key={index} type="title3" bold>
                    {item.subTitle}
                  </Text>
                </Margin>
                <Grid repeatColumn="4" space="2.5">
                  {content
                    .filter((data) => data.department === `${item.subTitle}`)
                    .map((data, i) => (
                      <BoxItem data={data} key={i} />
                    ))}
                </Grid>
              </>
            );
          })}
        </GridPlace>
      )
    );
  }
};

export const MeetNestizens = () => {
  return (
    <Theme>
      <GlobalThemeStyle />
      <Header />
      <Banner />
      <MeetNestizensBody />
      <Footer />
    </Theme>
  );
};
