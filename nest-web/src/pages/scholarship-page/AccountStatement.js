import React from "react";

import {
  Stack,
  Text,
  Padding,
  Margin,
  Grid,
  GridPlace,
  useMobile
} from "../../components";
import { Theme, GlobalThemeStyle } from "../../theme";

import useContentful from "../../useContentful";
import { Loading } from "../../components/basic/loading";
import AccountStatementMobile from "./AccountStatementMobile";

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
    <Grid>
      <GridPlace gridColumn="1/ span 12" placeSelf="center">
        <Margin size={[10, 0, 6, 0]}>
          <Text
            style={{
              fontFamily: "Montserrat",
              fontWeight: "800",
              fontSize: "36px",
              lineHeight: "22px"
            }}
            role="light"
            type="heading9"
          >
            Account Statement
          </Text>
        </Margin>
      </GridPlace>

      <GridPlace gridColumn="1/ span 12">
        <Margin size={[0, 0, 4.5, 0]}>
          <Grid repeatColumn="2" tabletRepeatColumn="2" mobileRepeatColumn="2">
            {data &&
              data.map((data) => {
                return (
                  <Stack size={2.5}>
                    <Text
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        fontSize: "48px",
                        lineHeight: "26px"
                      }}
                      role="light"
                      type="heading3"
                      alignment="center"
                    >
                      {data.number}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "normal",
                        fontSize: "24px",
                        lineHeight: "26px"
                      }}
                      role="light"
                      type="primary4"
                      alignment="center"
                    >
                      {data.text}
                    </Text>
                  </Stack>
                );
              })}
          </Grid>
        </Margin>
      </GridPlace>

      <GridPlace gridColumn="1/ span 12">
        <Margin size={[0, 9]}>
          <hr
            style={{ border: 1 + "px" + " " + "dashed" + " " + "#AAAAAA" }}
          ></hr>
        </Margin>
      </GridPlace>
    </Grid>
  );
}
const AccountStatementBottom = () => {
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
    <GridPlace gridColumn="1/ span 12">
      <Padding size={[5, 0, 11, 0]}>
        <Grid repeatColumn="3" tabletRepeatColumn="3" mobileRepeatColumn="3">
          {data.map((el) => {
            return (
              <Stack size={1.5}>
                <Text
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "36px",
                    lineHeight: "26px"
                  }}
                  role="light"
                  type="primary6"
                  alignment="center"
                >
                  {el.number}
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "normal",
                    fontSize: "18px",
                    lineHeight: "26px"
                  }}
                  role="light"
                  type="primary13"
                  alignment="center"
                >
                  {el.text}
                </Text>
              </Stack>
            );
          })}
        </Grid>
      </Padding>
    </GridPlace>
  );
};

export default function AccountStatement() {
  const isMobile = useMobile("927px");

  if (isMobile) {
    return <AccountStatementMobile />;
  }
  return (
    <Theme>
      <GlobalThemeStyle />
      <Padding backgroundRole="account" size={1}>
        <AccountStatementTop></AccountStatementTop>
        <AccountStatementBottom></AccountStatementBottom>
      </Padding>
    </Theme>
  );
}
