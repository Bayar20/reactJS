import React, { useState } from "react";
import {
  Border,
  Box,
  Center,
  Container,
  Grid,
  GridPlace,
  InteractiveBorder,
  InteractiveText,
  Margin,
  Queue,
  Stack,
  Text,
  useMobile,
  AccordionCard,
  Padding
} from "../../components";
import { GlobalThemeStyle, Theme } from "../../theme";
import useContentful from "../../useContentful";
import _ from "lodash";
import BoxItem from "../nestizens-page/meet-nestizens/BoxItem";

const DonorPart = (props) => {
  const { Donor } = props;
  const queryforscholarshipDonors = `{
    scholarshipDonorsCollection{
      items{
        firstname
        lastname
        amount
        donorsImage{
          url
        }
        donorType
      }
    }
  }`;
  const { loading, data } = useContentful(
    "scholarshipDonors",
    queryforscholarshipDonors
  );
  const isMobile = useMobile();

  const subTitles = [
    { subTitle: "Individuals" },
    { subTitle: "Organizations" }
  ];

  return (
    <div style={{ width: "100%" }}>
      <Margin size={[2, 2]}>
        <Grid mobiletGriddGap={1.25} repeatColumn={4} tabletRepeatColumn={2}>
          {isMobile
            ? subTitles.map((item, index) => {
                return (
                  <Padding size={[1.12, 0, 0]}>
                    <AccordionCard.CardProvider>
                      <AccordionCard.CardTrigger>
                        <Text key={index}>{item.subTitle}</Text>
                      </AccordionCard.CardTrigger>
                      <AccordionCard.CardContent>
                        <Grid
                          tabletRepeatColumn="2"
                          tabletGriddGap="1.25"
                          mobileRepeatColumn="2"
                          mobiletGriddGap="1.25"
                        >
                          {data &&
                            data
                              .filter((el) => el.donorType === item.subTitle)
                              .map((e, i) => (
                                <Stack size={isMobile ? 1 : 2}>
                                  <div
                                    style={{
                                      borderBottomLeftRadius: "8px",
                                      borderBottomRightRadius: "8px",
                                      height: isMobile ? "224px" : "310px",
                                      width: isMobile ? "100%" : "100%",
                                      backgroundImage: `url("${e.donorsImage.url}")`,
                                      backgroundSize: "cover",
                                      backgroundPosition: "center center",
                                      backgroundRepeat: "no-repeat"
                                    }}
                                  />
                                  <Queue>
                                    <Text type="title3" bold>
                                      {e.firstname} &nbsp;
                                    </Text>
                                    <Text type="title3" bold>
                                      {e.lastname}
                                    </Text>
                                  </Queue>
                                  <Text type="title3" bold>
                                    {e.amount} ₮
                                  </Text>
                                </Stack>
                              ))}
                        </Grid>
                      </AccordionCard.CardContent>
                    </AccordionCard.CardProvider>
                  </Padding>
                );
              })
            : data &&
              data
                .filter((data) => data.donorType === Donor)
                .map((e) => (
                  <Stack size={isMobile ? 1 : 2}>
                    <div
                      style={{
                        borderRadius: "8px",
                        height: isMobile ? "224px" : "310px",
                        width: isMobile ? "100%" : "100%",
                        backgroundImage: `url("${e.donorsImage.url}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />

                    <Queue>
                      <Text type="title2" bold>
                        {e.firstname} &nbsp;
                      </Text>
                      <Text type="title2" bold>
                        {e.lastname}
                      </Text>
                    </Queue>
                    <Text type="title3" bold>
                      {e.amount} ₮
                    </Text>
                  </Stack>
                ))}
        </Grid>
      </Margin>
    </div>
  );
};
export default function Donors() {
  const queryforOurDonors = `{
        ourDonorsCollection{
          items{
            title
            description
          }
        }
      }`;
  const [Donor, setDonor] = useState(true);
  const switchToDonor = (status) => {
    setDonor(status);
  };

  const { loading, data } = useContentful("ourDonors", queryforOurDonors);
  const isMobile = useMobile("");
  return (
    <Theme>
      <GlobalThemeStyle />
      <Container>
        <Grid repeatColumn={12}>
          <GridPlace gridColumn="1/ span 12">
            <Margin
              size={[7, 0, 0, 0]}
              mobileSize={[6, 2, 0, 2]}
              tabletSize={[6, 2, 0, 2]}
            >
              {data && (
                <Stack size={5}>
                  <Center>
                    {_.first(data) &&
                      (isMobile ? (
                        <Text type="title1" bold>
                          {_.first(data).title}
                        </Text>
                      ) : (
                        <Text type="largeTitleBold" bold>
                          {_.first(data).title}
                        </Text>
                      ))}
                  </Center>

                  {_.first(data) &&
                    (isMobile ? (
                      <Text type="body">{_.first(data).description}</Text>
                    ) : (
                      <Text type="largeTitleBold" alignment="center">
                        {_.first(data).description}
                      </Text>
                    ))}
                </Stack>
              )}
            </Margin>
          </GridPlace>
          <Margin size={[7, 0, 0, 0]} />
          {isMobile ? null : (
            <GridPlace gridColumn="1/ span 12">
              <Margin size={[0, 0, 5, 0]}>
                <Grid repeatColumn="2" space="0" justify="center">
                  <Stack width="100%" size={5}>
                    <InteractiveText
                      alignment="center"
                      type="title2"
                      bold
                      onClick={() => switchToDonor(true)}
                      role={Donor && " "}
                    >
                      Individuals
                    </InteractiveText>
                    <InteractiveBorder
                      role={Donor ? "nest" : "line"}
                      onClick={() => switchToDonor(true)}
                      borderSize={[0, 0, 4, 0]}
                    />
                  </Stack>
                  <Stack width="100%" size={5}>
                    <InteractiveText
                      alignment="center"
                      type="title2"
                      bold
                      role={!Donor && " "}
                      onClick={() => switchToDonor(false)}
                    >
                      Organizations
                    </InteractiveText>
                    <InteractiveBorder
                      role={!Donor ? "nest" : "line"}
                      onClick={() => switchToDonor(false)}
                      borderSize={[0, 0, 4, 0]}
                    />
                  </Stack>
                </Grid>
              </Margin>
            </GridPlace>
          )}
        </Grid>
        <DonorPart Donor={Donor ? "Individuals" : "Organizations"} />
        <Margin size={[0, 0, 8, 0]} />
      </Container>
    </Theme>
  );
}
