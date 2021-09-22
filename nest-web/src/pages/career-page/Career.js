import React, { useState } from "react";
import {
  Container,
  Queue,
  Stack,
  Text,
  Button,
  Center,
  Margin,
  HoverBorder,
  Grid,
  GridPlace,
  useMobile
} from "../../components";
import { Theme, GlobalThemeStyle } from "../../theme";
import Header from "../home-page/Header";
import Footer from "../home-page/Footer";
import { JobHuntSVG } from "../../assets";
import CareerMobile from "./CareerMobile";
import useContentful from "../../useContentful";
import _ from "lodash";

function JobDesc({ job }) {
  return (
    <Stack size={5}>
      <Text type="title2" bold>
        {job.jobTitle}
      </Text>
      <Text type="title2">{job.jobDescription}</Text>
      <Text type="title2" bold>
        Requirements
      </Text>
      <Text type="title2">{job.jobRequirements}</Text>
    </Stack>
  );
}
const Content = () => {
  const query = `{
    careersCollection{
      items{
        jobTitle
        jobDescription
        
      }
    }
  }`;
  const { loading, data } = useContentful("careers", query);
  const filt = (type) => {
    if (!_.isEmpty(data)) {
      const jobFilter = data.filter((job) => job.jobTitle === type);
      setFiltered(jobFilter);
    } else return;
  };
  const isMobile = useMobile();
  const [filtered, setFiltered] = useState([]);
  if (isMobile) {
    return <CareerMobile />;
  } else {
    return (
      <div>
        <Queue backgroundRole="nest" height={62.5}>
          <Container>
            <Grid repeatColumn="12" rows={[1, 1, 1, 1, 1, 1]}>
              <GridPlace gridColumn="1/ span 1" gridRow="1/ span 5">
                <JobHuntSVG />
              </GridPlace>
              <GridPlace gridColumn="5/ span 2 " gridRow="3/ span 1">
                <Center>
                  <Text type="display" bold>
                    Career
                  </Text>
                </Center>
              </GridPlace>
              <GridPlace gridColumn="5/ span 6" gridRow="4/ span 1">
                <Margin size={[4, 0]} />
                <Button size="large" type="primary" buttonStyle="fill">
                  Send CV
                </Button>
              </GridPlace>
            </Grid>
          </Container>
        </Queue>
        <Margin size={8} />
        <Grid repeatColumn="12">
          <GridPlace gridColumn="2/ span 3 ">
            <Text type="largeTitleBold" bold>
              We're looking for
            </Text>
          </GridPlace>
          <GridPlace gridColumn="2/ span 3 ">
            <Grid gridRowGap="30px">
              {data &&
                data.map((job, i) => (
                  <HoverBorder
                    key={i}
                    borderLeft="none"
                    onClick={() => filt(job.jobTitle)}
                  >
                    <Text type="title2">{job.jobTitle}</Text>
                  </HoverBorder>
                ))}
            </Grid>
          </GridPlace>
          <GridPlace gridColumn="6/ span 6 ">
            {filtered.map((job) => (
              <JobDesc job={job} />
            ))}
          </GridPlace>
          <GridPlace gridColumn="6 / span 3 ">
            <Button size="large" type="primary" buttonStyle="fill">
              Send CV
            </Button>
          </GridPlace>
        </Grid>
        <Margin size={[0, 0, 10, 0]} />
      </div>
    );
  }
};

const Career = () => {
  return (
    <Theme>
      <GlobalThemeStyle />
      <Header />
      <Content />
      <Footer />
    </Theme>
  );
};

export default Career;
