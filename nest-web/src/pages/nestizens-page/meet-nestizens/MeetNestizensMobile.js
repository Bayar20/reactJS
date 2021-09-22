import React, { useState } from "react";
import _ from "lodash";
import BoxItem from "./BoxItem";
import {
  Stack,
  Border,
  Margin,
  InteractiveText,
  Text,
  Grid,
  Queue,
  Padding,
  BannerLogo,
  Card
} from "../../../components";
import { LeadingIcon, ArrowRight, ArrowDown } from "../../../assets";
import { Link } from "react-router-dom";
import useContentful from "../../../useContentful";

export const MeetNestizensMobile = () => {
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

  const { data } = useContentful("nestizensNestTeam", queryNest);
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

  const activateTab = (type) => {
    const activeValue = _.filter(tabs, (tab) => tab.tabTitle === type);
    setActiveTab(activeValue);
    const activeContent = _.filter(data, (data) => data.tabTitle === type);
    setContent(activeContent);
    setType(type);
  };

  if (data && _.isEmpty(content)) {
    setContent(_.filter(data, (data) => data.tabTitle === type));
  }

  return (
    <Stack backgroundRole="whitePrimary">
      <Margin size={[2.06, 3, 8.56]}>
        <Link to="/nestizens">
          <Queue size="2.02">
            <InteractiveText>
              <LeadingIcon />
            </InteractiveText>
            <InteractiveText type="callout" role="darkGrey">
              Back
            </InteractiveText>
          </Queue>
        </Link>
      </Margin>
      <Padding size={[0, 2]}>
        <Text type="largeTitle" bold role="blackPrimary">
          Nestizens
        </Text>
        <BannerLogo right="0px" />
      </Padding>
      <TabSectionMobile
        tabs={tabs}
        activeTab={activeTab}
        activateTab={activateTab}
      />
      {type === "Current Students" && (
        <CurrentStudentContentMobile content={content} data={data} />
      )}
      {type === "Nest Team" && <NestTeamContentMobile content={content} />}
      <Margin size="12" />
    </Stack>
  );
};

export const TabSectionMobile = ({ tabs, activeTab, activateTab }) => {
  return (
    <Margin size={[5.625, 2.3, 0]}>
      <Grid
        tabletRepeatColumn="2"
        tabletGriddGap="0"
        mobileRepeatColumn="2"
        mobiletGriddGap="0"
        justify="stretch"
      >
        {_.map(tabs, (tab, i) => (
          <Border
            key={i}
            animationDelay="0.1"
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
          >
            <Padding size={[0, 0, 1.62]}>
              <Stack>
                <InteractiveText
                  animationDelay="0.1"
                  bold={
                    _.first(activeTab).tabTitle === tab.tabTitle
                      ? "headline"
                      : ""
                  }
                  fontWeight={
                    _.first(activeTab).tabTitle === tab.tabTitle ? "900" : ""
                  }
                  key={i}
                  role={
                    _.first(activeTab).tabTitle === tab.tabTitle
                      ? "blackPrimary"
                      : "darkGrey"
                  }
                  alignment="center"
                  type="headline"
                  onClick={() => activateTab(tab.tabTitle)}
                >
                  {tab.tabTitle}
                </InteractiveText>
              </Stack>
            </Padding>
          </Border>
        ))}
      </Grid>
    </Margin>
  );
};

export const CurrentStudentContentMobile = ({ content }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const subTitles = [
    { subTitle: "Leap 1st year" },
    { subTitle: "Leap 2nd year" }
  ];

  return (
    content && (
      <Margin size={[0, 2]}>
        {subTitles.map((item, index) => {
          return (
            <>
              <Padding size={[1.12, 0, 0]}>
                <AccordionMobile
                  clicked={clicked}
                  index={index}
                  text={item.subTitle}
                  onClick={() => toggle(index)}
                  key={index}
                />
              </Padding>
              <Grid
                tabletRepeatColumn="2"
                tabletGriddGap="1.25"
                mobileRepeatColumn="2"
                mobiletGriddGap="1.25"
              >
                {clicked === index ? (
                  <>
                    {content
                      .filter((data) => data.department == `${item.subTitle}`)
                      .map((data, i) => (
                        <BoxItem data={data} key={i} />
                      ))}
                  </>
                ) : null}
              </Grid>
            </>
          );
        })}
      </Margin>
    )
  );
};

export const NestTeamContentMobile = ({ content }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const subTitles = [
    { subTitle: "Management Team" },
    { subTitle: "Masters" },
    { subTitle: "Instructor" }
  ];

  return (
    content && (
      <Margin size={[0, 2]}>
        {subTitles.map((item, index) => {
          return (
            <>
              <Padding size={[1.12, 0, 0]}>
                <AccordionMobile
                  clicked={clicked}
                  index={index}
                  text={item.subTitle}
                  onClick={() => toggle(index)}
                  key={index}
                />
              </Padding>
              <Grid
                tabletRepeatColumn="2"
                tabletGriddGap="1.25"
                mobileRepeatColumn="2"
                mobiletGriddGap="1.25"
              >
                {clicked === index ? (
                  <>
                    {content
                      .filter((data) => data.department == `${item.subTitle}`)
                      .map((data, i) => (
                        <BoxItem data={data} key={i} />
                      ))}
                  </>
                ) : null}
              </Grid>
            </>
          );
        })}
      </Margin>
    )
  );
};

const AccordionMobile = ({ text, clicked, index, onClick }) => {
  return (
    <Stack backgroundRole="light">
      <Card radius="large" size="0" role="lightGrey">
        <Padding size={[2]}>
          <Queue justifyContent="space-between" onClick={onClick}>
            <InteractiveText type="body" bold role="footer">
              {text}
            </InteractiveText>
            <InteractiveText>
              {clicked === index ? <ArrowDown /> : <ArrowRight />}
            </InteractiveText>
          </Queue>
        </Padding>
      </Card>
    </Stack>
  );
};
