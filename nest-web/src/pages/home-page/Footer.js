import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  NestLogo,
  NestLogoName
} from "../../assets";
import {
  Border,
  Padding,
  Queue,
  Text,
  Stack,
  Container,
  Grid,
  GridPlace,
  Margin,
  useMobile
} from "../../components";
import { Theme, GlobalThemeStyle } from "../../theme";

function Footer() {
  const isMobile = useMobile("927px");
  return (
    <Theme>
      <GlobalThemeStyle />
      {isMobile ? (
        <div style={{ width: "100%", backgroundColor: "#172B4D" }}>
          <Container>
            <Padding size={2}>
              <Grid>
                <GridPlace gridColumn="1/ span 4" gridRow="1/ span 1">
                  <Stack size={2.33}>
                    <Queue>
                      <Link to="/">
                        <NestLogo width="34" height="32" />
                      </Link>
                      <Padding size={[0, 0, 0, 1]}>
                        <NestLogoName />
                      </Padding>
                    </Queue>
                    <Queue>
                      <Text role="tertiary" type="caption1">
                        ©NEST CORE ACADEMY 2021
                      </Text>
                    </Queue>
                    <Queue size={3}>
                      <a href="https://www.facebook.com/nestacademy.mn">
                        <FacebookIcon />
                      </a>
                      <a href="https://www.instagram.com/nestacademymn/">
                        <InstagramIcon />
                      </a>
                      <a href="https://www.linkedin.com/company/nestacademy">
                        <LinkedInIcon />
                      </a>
                    </Queue>
                  </Stack>
                </GridPlace>
                <GridPlace gridColumn="5/ span 4" gridRow="1/ span 1">
                  <Stack size="2">
                    <Queue>
                      <Text role="light" type="subHeading" bold>
                        COMPANY
                      </Text>
                    </Queue>
                    <Border
                      borderSize={[1, 0, 0, 1]}
                      role="line"
                      width="284px"
                    />
                    <Queue>
                      <Link to="/about-us">
                        <Text role="light" type="body">
                          About us
                        </Text>
                      </Link>
                    </Queue>
                    <Queue>
                      <Link to="/registration">
                        <Text role="light" type="body">
                          Registration
                        </Text>
                      </Link>
                    </Queue>
                    <Queue>
                      <Link to="/nestizens">
                        {" "}
                        <Text role="light" type="body">
                          Nestizens
                        </Text>
                      </Link>
                    </Queue>
                    <Queue>
                      <Link to="/scholarship">
                        <Text role="light" type="body">
                          Scholarship
                        </Text>
                      </Link>
                    </Queue>
                    <Queue>
                      <Link to="/career">
                        <Text role="light" type="body">
                          Career
                        </Text>
                      </Link>
                    </Queue>
                    <Queue>
                      <Link to="/slack-community">
                        {" "}
                        <Text role="light" type="body">
                          Slack community
                        </Text>
                      </Link>
                    </Queue>
                  </Stack>
                </GridPlace>
                <GridPlace gridColumn="8/ span 4" gridRow="1/ span 1">
                  <Stack size="2">
                    <Queue>
                      <Text role="light" type="subHeading" bold>
                        COURSES
                      </Text>
                    </Queue>
                    <Border
                      borderSize={[1, 0, 0, 1]}
                      role="line"
                      width="284px"
                    />
                    <Queue>
                      <Link to="/courses/micro-lessons">
                        <Text role="light" type="body">
                          Micro Lessons
                        </Text>
                      </Link>
                    </Queue>
                    <Queue>
                      <Link to="/courses/hop">
                        <Text role="light" type="body">
                          HOP
                        </Text>
                      </Link>
                    </Queue>
                    <Queue>
                      <Link to="/courses/leap">
                        <Text role="light" type="body">
                          Leap
                        </Text>
                      </Link>
                    </Queue>
                    <Margin size={1} />
                    <Queue>
                      <Link to="/courses/leap">
                        <Text role="foot" type="footnote">
                          Made with ❤️ by the Nest Leap 1 2021
                        </Text>
                      </Link>
                    </Queue>
                  </Stack>
                </GridPlace>
              </Grid>
              <Margin size={3} />
            </Padding>
          </Container>
        </div>
      ) : (
        <div
          style={{ width: "100%", height: "241px", backgroundColor: "#172B4D" }}
        >
          <Container>
            <Padding size={[4, 0, 0, 0]} />
            <Grid repeatColumn="repeat(12, 1fr)">
              <GridPlace gridColumn="1/ span 4" gridRow="1/ span 1">
                <Stack size={2}>
                  <Queue>
                    <Link to="/">
                      <NestLogo width="34" height="32" />
                    </Link>
                    <Padding size={[0, 0, 0, 3]}>
                      <NestLogoName />
                    </Padding>
                  </Queue>
                  <Queue>
                    <Text role="tertiary" type="caption1">
                      ©NEST CORE ACADEMY 2021
                    </Text>
                  </Queue>
                  <Queue size={3}>
                    <a href="https://www.facebook.com/nestacademy.mn">
                      <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/nestacademymn/">
                      <InstagramIcon />
                    </a>
                    <a href="https://www.linkedin.com/company/nestacademy">
                      <LinkedInIcon />
                    </a>
                  </Queue>
                </Stack>
              </GridPlace>
              <GridPlace gridColumn="5/ span 4" gridRow="1/ span 1">
                <Stack size="1">
                  <Queue>
                    <Link to="/about-us">
                      <Text role="tertiary" type="headline">
                        About us
                      </Text>
                    </Link>
                  </Queue>
                  <Queue>
                    <Link to="/registration">
                      <Text role="tertiary" type="headline">
                        Registration
                      </Text>
                    </Link>
                  </Queue>
                  <Queue>
                    <Link to="/nestizens">
                      {" "}
                      <Text role="tertiary" type="headline">
                        Nestizens
                      </Text>
                    </Link>
                  </Queue>
                  <Queue>
                    <Link to="/scholarship">
                      <Text role="tertiary" type="headline">
                        Scholarship
                      </Text>
                    </Link>
                  </Queue>
                  <Queue>
                    <Link to="/career">
                      <Text role="tertiary" type="headline">
                        Career
                      </Text>
                    </Link>
                  </Queue>
                  <Queue>
                    <Link to="/slack-community">
                      {" "}
                      <Text role="tertiary" type="headline">
                        Slack community
                      </Text>
                    </Link>
                  </Queue>
                </Stack>
              </GridPlace>
              <GridPlace gridColumn="8/ span 4" gridRow="1/ span 1">
                <Stack size="2">
                  <Queue>
                    <Link to="/courses/main-course">
                      <Text role="tertiary" type="headline">
                        Courses
                      </Text>
                    </Link>
                  </Queue>
                  <Border borderSize={[1, 0, 0, 0]} role="line" />
                  <Queue>
                    <Link to="/courses/coding-video-lessons">
                      <Text role="light" type="headline">
                        Coding video lessons
                      </Text>
                    </Link>
                  </Queue>
                  <Queue>
                    <Link to="/courses/ui-ux-design-video-lessons">
                      <Text role="light" type="headline">
                        UI/UX design video lessons
                      </Text>
                    </Link>
                  </Queue>
                  <Queue>
                    <Link to="/courses/hop">
                      <Text role="light" type="headline">
                        HOP
                      </Text>
                    </Link>
                  </Queue>
                  <Queue>
                    <Link to="/courses/leap">
                      <Text role="light" type="headline">
                        Leap
                      </Text>
                    </Link>
                  </Queue>
                </Stack>
              </GridPlace>
            </Grid>
          </Container>
        </div>
      )}
    </Theme>
  );
}

export default Footer;
