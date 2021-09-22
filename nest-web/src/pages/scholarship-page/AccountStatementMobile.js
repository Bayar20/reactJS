import React from "react";
import {
  Stack,
  Text,
  Center,
  Padding,
  Margin,
  Grid,
  useMobile
} from "../../components";
import { Loading } from "../../components/basic/loading";
import useContentful from "../../useContentful";
import styled from "styled-components";
import { GlobalThemeStyle, Theme } from "../../theme";

const BackgroundBorder = styled.div`
  & {
    position: relative;
    margin: 16px;
    width: 90%;
    background-image: url(${({ image }) => image});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &:after {
    content: " ";
    position: absolute;
    top: -8px;
    right: -7px;
    bottom: 8px;
    width: 100%;
    // height: ${({ height }) => height || "412px"};
    border: 1px solid #172b4d;
    z-index: -1;
  }
`;

function AccountStatementTop() {
  const query = `{
    accountStatementCollection{
      items{
        text
        number
      }
    }
  }
`;

  const { loading, data } = useContentful("accountStatement", query);
  if (loading) {
    return <Loading />;
  }
  if (typeof data === "undefined") {
    return <p></p>;
  }

  return (
    <div>
      <Padding size={[3, 2, 2]}>
        <Text role="light" type="title2" bold>
          Account Statement
        </Text>
      </Padding>
      <Padding size={[0, 0.5]}>
        <Center>
          <Grid
            mobiletGriddGap={3}
            repeatColumn="2"
            tabletRepeatColumn="2"
            mobileRepeatColumn="2"
          >
            {data &&
              data.map((data) => {
                return (
                  <Stack>
                    <Text
                      role="light"
                      type="largeTitleBold"
                      bold
                      alignment="center"
                    >
                      {data.number}
                    </Text>
                    <Text role="light" type="caption1" alignment="center">
                      {data.text}
                    </Text>
                  </Stack>
                );
              })}
          </Grid>
        </Center>
      </Padding>

      <Margin size={2}>
        <hr
          style={{ border: 1 + "px" + " " + "dashed" + " " + "#AAAAAA" }}
        ></hr>
      </Margin>
    </div>
  );
}

function AccountStatementBottom() {
  // const isMobile = useMobile("927px");

  const queryAccount = `{
        accountCollection{
          items{
            text
            number
          }
        }
     }`;

  const { loading, data } = useContentful("account", queryAccount);

  if (loading) {
    return <Loading />;
  }
  if (typeof data === "undefined") {
    return <p></p>;
  }

  return (
    <Padding size={[0, 2, 3]}>
      <Grid
        mobiletGriddGap={3}
        repeatColumn="3"
        tabletRepeatColumn="3"
        mobileRepeatColumn="3"
      >
        {data.map((d) => {
          return (
            <Stack>
              <Text role="light" type="headline" bold alignment="center">
                {d.number}
              </Text>
              <Text role="light" type="caption2" alignment="center">
                {d.text}
              </Text>
            </Stack>
          );
        })}
      </Grid>
    </Padding>
  );
}

export default function AccountStatementMobile() {
  return (
    <Theme>
      <GlobalThemeStyle />
      <Center>
        <BackgroundBorder>
          <Margin backgroundRole="blackPrimary">
            <AccountStatementTop />
            <AccountStatementBottom />
          </Margin>
        </BackgroundBorder>
      </Center>
      <Margin size={[3, 0]} />
    </Theme>
  );
}
