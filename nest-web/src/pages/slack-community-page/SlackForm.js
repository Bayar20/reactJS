import { useState } from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import Footer from "../home-page/Footer";
import Header from "../home-page/Header";
import {
  Theme,
  GlobalThemeStyle,
  FontStyle,
  mapRoleToTextColor
} from "../../theme";
import {
  Button,
  Center,
  Stack,
  ModalCard,
  Text,
  InteractiveText,
  Padding,
  Container,
  Overlay,
  Grid,
  GridPlace,
  Margin,
  useMobile,
  Loading,
  Queue
} from "../../components";
import { CloseIcon, Cross, LeadingIcon, LogoSymbol, Slack } from "../../assets";
import { Link } from "react-router-dom";
import UseAirtable from "../../useAirtable";
import useContentful from "../../useContentful";

const TextStyle = css`
  font-family: "Montserrat";
  ${({ fontType }) => {
    return FontStyle[fontType] || FontStyle.default;
  }}
`;

const SlackInput = styled.input`
  border: 1px solid #8f9cb2;
  height: ${({ height }) => height || "58px"};
  width: ${({ width }) => width || "25em"};
  padding: 17px 12px 17px 14px;
  border-radius: 4px;
  color: ${({ role }) => mapRoleToTextColor(role)} !important;
  ${TextStyle}
`;

const TextArea = styled.textarea`
  border: 1px solid #8f9cb2;
  width: ${({ width }) => width || "25em"};
  border-radius: 4px;
  padding: 17px 12px 0px 14px;
  color: ${({ role }) => mapRoleToTextColor(role)} !important;
  ${TextStyle}
`;
export const SlackForm = (props) => {
  const queryForm = `{
    joinOurSlackCommunityCollection{
      items{
        logoImage{
          url
        }
        title
        description
      }
    }
  }`;

  const { loading, data } = useContentful("joinOurSlackCommunity", queryForm);
  const [datas, setDatas] = useState({
    name: "",
    email: "",
    jobRole: "",
    description: ""
  });
  const [active, setActive] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    UseAirtable(datas);
    setShowSuccess(true);
    setActive(true);
  };

  const isMobile = useMobile("927px");
  if (isMobile) {
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          data && (
            <Theme>
              <GlobalThemeStyle />
              <Header />
              <Stack backgroundRole="whitePrimary">
                <Margin size={2}>
                  <Grid repeatColumn="4">
                    <GridPlace>
                      <Link to="slack-community">
                        <Queue size="2.02">
                          <InteractiveText>
                            <LeadingIcon />
                          </InteractiveText>
                          <InteractiveText type="callout" role="darkGrey">
                            Back
                          </InteractiveText>
                        </Queue>
                      </Link>
                    </GridPlace>
                    <Margin size={[5, 0, 0]} />
                    <GridPlace mobileGridColumn="1/4">
                      <Center>
                        <Queue size={3}>
                          <Slack />
                          <Cross />
                          <LogoSymbol />
                        </Queue>
                      </Center>
                    </GridPlace>
                    <GridPlace mobileGridColumn="1/4">
                      <Stack size={1.3}>
                        <Text
                          type="title2"
                          alignment="center"
                          bold
                          role="blackPrimary"
                        >
                          {_.first(data).title}
                        </Text>
                        <Text type="body" alignment="center">
                          {_.first(data).description}
                        </Text>
                      </Stack>
                    </GridPlace>
                    <GridPlace mobileGridColumn="1/ 4">
                      <Stack size={1}>
                        <SlackInput
                          width="100%"
                          type="text"
                          placeholder="Name"
                          fontType="body"
                          role="grey"
                        />
                        <SlackInput
                          width="100%"
                          type="email"
                          placeholder="Email"
                          fontType="body"
                          role="grey"
                        />
                        <SlackInput
                          width="100%"
                          type="text"
                          placeholder="Job Role"
                          fontType="body"
                          role="grey"
                        />
                        <TextArea
                          width="100%"
                          placeholder="Motivation of Joining"
                          fontType="body"
                          role="grey"
                        />
                        <Link to="/slack-success">
                          <Margin size={[3, 0, 0, 0]} />
                          <Button
                            type="primary"
                            buttonStyle="fill"
                            size="small"
                            buttonWidth="100%"
                          >
                            Join for free
                          </Button>
                        </Link>
                      </Stack>
                    </GridPlace>
                    <Margin size={[0, 0, 12]} />
                  </Grid>
                </Margin>
              </Stack>
              <Footer />
            </Theme>
          )
        )}
      </>
    );
  } else {
    return (
      <Theme>
        <GlobalThemeStyle />
        <Container style={{ display: active ? "none" : "block" }}>
          <Grid repeatColumn="12" justify="center">
            <GridPlace gridColumn="6 / span 2">
              <ModalCard width="48em">
                <Overlay absolute top="10px" left="94%" zIndex="10">
                  <InteractiveText onClick={props.handleClose}>
                    <CloseIcon width="30" height="30" role="darkGrey" />
                  </InteractiveText>
                </Overlay>
                <Margin size={[13, 0, 0]} />
                <Queue size={4} justifyContent="center">
                  <Slack width="90" height="85" /> <Cross />{" "}
                  <LogoSymbol width="90" height="85" />
                </Queue>
                <Padding size={[7, 6, 2]}>
                  {_.first(data) && (
                    <Stack size={1}>
                      <Text
                        role="blackPrimary"
                        bold
                        type="title1"
                        alignment="center"
                      >
                        {_.first(data).title}
                      </Text>
                      <Text alignment="center" type="headline">
                        <Padding size={[3, 7, 3]}>
                          {_.first(data).description}
                        </Padding>
                      </Text>
                    </Stack>
                  )}
                </Padding>
                <Margin size={[0, 0, 8]}>
                  <Grid columns={[1]} space="3" justify="center">
                    <SlackInput
                      type="text"
                      placeholder="Name"
                      fontType="body"
                      role="grey"
                    />
                    <SlackInput
                      type="email"
                      placeholder="Email"
                      fontType="body"
                      role="grey"
                    />
                    <SlackInput
                      type="text"
                      placeholder="Job Role"
                      fontType="body"
                      role="grey"
                    />
                    <TextArea
                      placeholder="Motivation of Joining"
                      fontType="body"
                      role="grey"
                    />
                  </Grid>
                  <Padding size="4" />
                  <Center>
                    <Button
                      radius="border"
                      backgroundRole="blackPrimary"
                      width="15em"
                      height="3em"
                      onClick={handleSuccess}
                    >
                      <Text type="headline" role="boneWhite" bold>
                        JOIN FOR FREE
                      </Text>
                    </Button>
                  </Center>
                </Margin>
              </ModalCard>
            </GridPlace>
          </Grid>
        </Container>
        <SlackSuccess
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
        />
      </Theme>
    );
  }
};

export const SlackSuccess = ({ showSuccess, setShowSuccess }) => {
  const querySuccess = `{
    thankYouCollection{
      items{
        title
        description
      }
    }
  }`;

  const { loading, data } = useContentful("thankYou", querySuccess);
  const isMobile = useMobile("927px");
  if (isMobile) {
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          data && (
            <Theme>
              <GlobalThemeStyle />
              <Header />
              <Stack backgroundRole="whitePrimary">
                <Grid tabletGriddGap="0" mobiletGriddGap="3">
                  <GridPlace>
                    <Margin size={[2.06, 3]}>
                      <Link to="/slack-form">
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
                  </GridPlace>
                  <GridPlace mobileGridColumn="1/4">
                    <Margin size={[5, 0, 5]}>
                      <Center>
                        <Queue size={3}>
                          <Slack />
                          <Cross />
                          <LogoSymbol />
                        </Queue>
                      </Center>
                    </Margin>
                  </GridPlace>
                  <GridPlace mobileGridColumn="1/4">
                    <Stack size={1.3}>
                      <Text
                        type="title2"
                        alignment="center"
                        bold
                        role="blackPrimary"
                      >
                        {_.first(data).title}
                      </Text>
                      <Padding size={[1, 6]}>
                        <Center>
                          <Text type="body" alignment="center">
                            {_.first(data).description}
                          </Text>
                        </Center>
                      </Padding>
                    </Stack>
                  </GridPlace>
                  <Margin size={[5, 5, 12, 16]}>
                    <Button type="primary" buttonStyle="fill" size="small">
                      Join For Free
                    </Button>
                  </Margin>
                </Grid>
              </Stack>
              <Footer />
            </Theme>
          )
        )}
      </>
    );
  } else {
    return (
      <Container style={{ display: showSuccess ? "block" : "none" }}>
        <Grid repeatColumn="12" justify="center" align="center">
          <GridPlace gridColumn="6 / span 2">
            <ModalCard width="45em">
              <Overlay absolute top="10px" left="94%" zIndex="10">
                <InteractiveText onClick={() => setShowSuccess(false)}>
                  <CloseIcon width="30" height="30" role="darkGrey" />
                </InteractiveText>
              </Overlay>
              <Margin size={[10, 0, 0]} />
              <Queue size={4} justifyContent="center">
                <Slack width="70" height="70" /> <Cross />{" "}
                <LogoSymbol width="70" height="70" />
              </Queue>
              {_.first(data) && (
                <Stack size={3}>
                  <Text
                    type="largeTitle"
                    alignment="center"
                    role="blackPrimary"
                    bold
                  >
                    <Padding size={[6, 0, 0]}>{_.first(data).title}</Padding>
                  </Text>
                  <Text alignment="center" type="headline">
                    <Padding size={[0, 10]}>
                      {_.first(data).description}
                    </Padding>
                  </Text>
                  <Margin size={[2, 0, 9]}>
                    <Center>
                      <Button
                        backgroundRole="blackPrimary"
                        width="14em"
                        height="3em"
                        onClick={() => setShowSuccess(false)}
                      >
                        <Text type="headline" role="boneWhite" bold>
                          Join For Free
                        </Text>
                      </Button>
                    </Center>
                  </Margin>
                </Stack>
              )}
            </ModalCard>
          </GridPlace>
        </Grid>
      </Container>
    );
  }
};
