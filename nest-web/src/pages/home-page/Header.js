import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, NestLogo } from "../../assets";
import { NestAcademy } from "../../assets/illustrations";
import {
  Border,
  Padding,
  Queue,
  Text,
  Shadow,
  Stack,
  Center,
  HoverBorder,
  Container,
  Grid,
  GridPlace,
  DropDown,
  Margin,
  InteractiveText,
  Button,
  useMobile
} from "../../components";
import { Theme, GlobalThemeStyle } from "../../theme";
import { Sling as Hamburger } from "hamburger-react";
import { useToggle } from "react-use";

export const HamburgerMenu = (props) => {
  const { setToggle } = props;
  return (
    <div
      style={{
        position: "absolute",
        right: "8px",
        top: "12px",
        zIndex: "99999999"
      }}
    >
      <Hamburger
        direction="right"
        size={24}
        duration={0.8}
        onToggle={(toggled) => {
          if (toggled) {
            setToggle(true);
          } else {
            setToggle(false);
          }
        }}
      />
    </div>
  );
};

export const HamburgerItemProvider = (props) => {
  const { items, toggled } = props;
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row-reverse",
        position: "absolute",
        top: "0px",
        right: "0px",
        zIndex: "9999999",
        width: toggled ? "100%" : "0px",
        height: "100%",
        transition: "width 0.5s ease 0s"
      }}
    >
      <div
        style={{
          width: toggled ? "100%" : "0px",
          height: "100%",
          backgroundColor: "rgba(23, 43, 77, 0.5)",
          opacity: toggled ? "1" : "0",
          transition: "opacity 0.5s ease 0s, width 0.5s ease "
        }}
      >
        <div
          style={{
            display: toggled ? "flex" : "none",
            position: "absolute",
            zIndex: "99999999",
            right: "0px",
            width: "300px",
            height: "100%",
            backgroundColor: "#FAFAFA"
          }}
        >
          {items}
        </div>
      </div>
    </div>
  );
};

function Header() {
  const isMobile = useMobile("927px");
  const [toggled, setToggle] = useToggle(false);

  return (
    <Theme>
      <GlobalThemeStyle />

      {isMobile ? (
        <div>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              height: "72px",
              width: "100%",
              backgroundColor: "#fafafa",
              boxShadow: "0px 1px 4px 0px #0000001A"
            }}
          >
            <Grid justify="space-between" align="center">
              <GridPlace
                placeSelf="center start"
                tabletGridRow="1/ span 1"
                mobileGridRow="1/ span 1"
              >
                <Link to="/">
                  <Margin mobileSize={[0, 2]} tabletSize={[0, 2]}>
                    <Center>
                      <NestAcademy />
                    </Center>
                  </Margin>
                </Link>
              </GridPlace>
              <GridPlace tabletGridRow="1/ span 1" mobileGridRow="1/ span 1">
                <Center>
                  <HamburgerMenu setToggle={setToggle} />
                </Center>
              </GridPlace>
            </Grid>
          </div>
          <HamburgerItemProvider
            items={
              <Grid tabletGriddGap={0} mobiletGriddGap={0} rows="74px 70vh">
                <GridPlace tabletGridRow="1/ span 1" mobileGridRow="1/ span 1">
                  <Margin mobileSize={[2.5, 2]} tabletSize={[2.5, 2]}>
                    <Stack size={3}>
                      <Margin size={[0.5, 0, 6, 0]}>
                        <Link to="/">
                          <Text type="title2" bold role="blackPrimary">
                            Home
                          </Text>
                        </Link>
                      </Margin>
                      <Link to="/about-us">
                        <Text type="title2" role="blackPrimary">
                          About us
                        </Text>
                      </Link>
                      <Link to="/courses/main-course">
                        <Text type="title2" role="blackPrimary">
                          Courses
                        </Text>
                      </Link>
                      <Link to="/registration">
                        <Text type="title2" role="blackPrimary">
                          Registration
                        </Text>
                      </Link>
                      <Link to="/nestizens">
                        <Text type="title2" role="blackPrimary">
                          Nestizens
                        </Text>
                      </Link>
                      <Link to="/scholarship">
                        <Text type="title2" role="blackPrimary">
                          Scholarship
                        </Text>
                      </Link>
                      <Link to="/career">
                        <Text type="title2" role="blackPrimary">
                          Career
                        </Text>
                      </Link>
                      <Link to="/slack-community">
                        <Text type="title2" role="blackPrimary">
                          Slack community
                        </Text>
                      </Link>
                      <Margin size={[8, 0, 0, 0]} />
                      <Queue>
                        <Text type="headline" bold role="blackPrimary">
                          ENG&nbsp;
                        </Text>
                        <Text type="headline" role="blackPrimary">
                          |&nbsp;MN
                        </Text>
                      </Queue>
                      <Margin size={[4, 0, 0, 0]} />
                      <Button size="small" type="primary" buttonStyle="fill">
                        LOGIN
                      </Button>
                    </Stack>
                  </Margin>
                </GridPlace>
              </Grid>
            }
            toggled={toggled}
          />
        </div>
      ) : (
        <Container>
          <div
            style={{
              textAlign: "center",
              display: "grid",
              alignItems: "center",
              height: "74px",
              width: "100%"
            }}
          >
            <Grid align="center" justify="space-between">
              <GridPlace gridRow="1/span1" placeSelf="center start">
                <Link to="/">
                  <NestLogo height={50} width={50} color="#00DCF0" />
                </Link>
              </GridPlace>
              <GridPlace gridRow="1/span1">
                <Link to="/about-us">
                  <Border>
                    <Padding>
                      <Text type="body">About us</Text>
                    </Padding>
                  </Border>
                </Link>
              </GridPlace>
              <GridPlace gridRow="1/ span 1">
                <DropDown.Provider>
                  <DropDown.Trigger>
                    <Border borderStyle="none">
                      <Text type="primary7">Courses</Text>
                    </Border>
                  </DropDown.Trigger>
                  <DropDown.Content width="17vw" scroll="hidden">
                    <Shadow>
                      <Border borderStyle="none" width="100%">
                        <Stack width="100%">
                          <Link to="/courses/coding-video-lessons">
                            <HoverBorder borderLeft="none">
                              <Border
                                width="100%"
                                height="48px"
                                borderStyle="none"
                              >
                                <Text type="primary2">
                                  <Padding size={[2, 1, 1, 1]}>
                                    Coding video lessons
                                  </Padding>
                                </Text>
                              </Border>
                            </HoverBorder>
                          </Link>
                          <Link to="/courses/ui-ux-design-video-lessons">
                            <HoverBorder borderLeft="none">
                              <Border
                                width="100%"
                                height="48px"
                                borderStyle="none"
                              >
                                <Text type="primary2">
                                  <Padding size={[2, 1, 1, 1]}>
                                    UI/UX design video lessons
                                  </Padding>
                                </Text>
                              </Border>
                            </HoverBorder>
                          </Link>
                          <Link to="/courses/hop">
                            <HoverBorder borderLeft="none">
                              <Border
                                width="100%"
                                height="48px"
                                borderStyle="none"
                              >
                                <Text type="primary2">
                                  <Padding size={[2, 1, 1, 1]}>HOP</Padding>
                                </Text>
                              </Border>
                            </HoverBorder>
                          </Link>
                          <Link to="/courses/leap">
                            <HoverBorder borderLeft="none">
                              <Border
                                width="100%"
                                height="48px"
                                borderStyle="none"
                              >
                                <Text type="primary2">
                                  <Padding size={[2, 1, 1, 1]}>Leap</Padding>
                                </Text>
                              </Border>
                            </HoverBorder>
                          </Link>
                        </Stack>
                      </Border>
                    </Shadow>
                  </DropDown.Content>
                </DropDown.Provider>
              </GridPlace>
              <GridPlace gridRow="1/span1">
                <Link to="/registration">
                  <Text type="primary7">Registration</Text>
                </Link>
              </GridPlace>
              <GridPlace gridRow="1/span1">
                <Link to="/nestizens">
                  <Text type="primary7">Nestizens</Text>
                </Link>
              </GridPlace>
              <GridPlace gridRow="1/span1">
                <Link to="/scholarship">
                  <Text type="primary7">Scholarship</Text>
                </Link>
              </GridPlace>
              <GridPlace gridRow="1/span1">
                <Link to="/career">
                  <Text type="primary7">Career</Text>
                </Link>
              </GridPlace>
              <GridPlace gridRow="1/span1">
                <Link to="/slack-community">
                  <Text type="primary7">Slack community</Text>
                </Link>
              </GridPlace>
              <GridPlace gridRow="1/span1" placeSelf="center end">
                <Queue justifyContent="center">
                  <InteractiveText type="primary5" role="grey">
                    ENG
                  </InteractiveText>
                  <ChevronRightIcon />
                </Queue>
              </GridPlace>
            </Grid>
          </div>
        </Container>
      )}
    </Theme>
  );
}

export default Header;
