import React from "react";
import {
  Center,
  Container,
  Text,
  Grid,
  GridPlace,
  Margin
} from "../../components";
import AwardBox from "./AwardBox";
import useContentful from "../../useContentful";
function ScholarshipAward({ width }) {
  const query = `{
		scholarshipAwardsWinnerCollection {
		  items{
			firstname
			lastname
			profileImage {
			  url
			}
			status
			facebookLink
			linkedinLink
			twitterLink
		  }
		}
	}`;
  const { loading, data } = useContentful("scholarshipAwardsWinner", query);

  return (
    <Container>
      <Grid columns={12} gridRowGap="50px">
        <GridPlace gridColumn="5 / span 4" gridRow="3 / span 1">
          <Margin size={[10, 0, 10, 0]} />
          <Center>
            <Text type="largeTitle" bold>
              Award Winners
            </Text>
          </Center>
        </GridPlace>
        <GridPlace gridColumn="1 / span 12" gridRow="4 / span 1">
          <Margin size={[0, 2]}>
            <Grid
              repeatColumn={4}
              mobileRepeatColumn={2}
              tabletRepeatColumn={2}
            >
              {data && data.map((d, idx) => <AwardBox d={d} />)}
            </Grid>
          </Margin>
        </GridPlace>
      </Grid>
    </Container>
  );
}

export default ScholarshipAward;
