import _ from "lodash";
import { React } from "react";
import useContentful from "../../useContentful";
import { NestLogoWithText } from "../../assets";
import {
  BannerContainer,
  Center,
  Grid,
  GridPlace,
  Margin,
  Padding,
  Queue,
  Text,
  useMobile
} from "../../components";
import { Loading } from "../../components/basic/loading";
const queryForScholarship = `{
  scholarshipCollection {
    items {
      image{
        url
      }
      description
    }
  }
}`;
function ScholarshipBanner() {
  const isMobile = useMobile("927px");
  const { loading, data } = useContentful("scholarship", queryForScholarship);
  return isMobile ? (
    <div>
      {loading ? (
        <Loading />
      ) : (
        data && (
          <>
            <BannerContainer
              brand
              bannerImage={_.last(data).image.url}
              bannerText={["Scholarship"]}
            />
            <Margin mobileSize={[2, 2]} tabletSize={[2, 2]}>
              <Padding size={[0, 8, 0, 0]}>
                <Text type="body" alignment>
                  {_.last(data).description}
                </Text>
              </Padding>
            </Margin>
          </>
        )
      )}
    </div>
  ) : (
    <Center backgroundRole="nestscholarship" height="auto">
      <Padding size={[8, 0, 10, 0]}>
        <Grid
          columns={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          tabletRepeatColumn
          mobileRepeatColumn
        >
          <GridPlace gridColumn=" 6 / span 2">
            <Queue justifyContent="center" size={5}>
              <NestLogoWithText></NestLogoWithText>
            </Queue>
          </GridPlace>
          <GridPlace gridColumn=" 4/ span 6" placeSelf="center">
            <Padding size={[7, 0, 5, 0]}>
              <Center>
                <Text role="boneWhite" type="display" bold>
                  Scholarship
                </Text>
              </Center>
            </Padding>
          </GridPlace>
          <GridPlace gridColumn=" 4/ span 6" placeSelf="center">
            <Center>
              <Text type="title3" alignment="center" role="lightGrey">
                Nest Academies donors are generous individuals and organization
                who support young people to flourish something greater in the
                future.
              </Text>
            </Center>
          </GridPlace>
        </Grid>
      </Padding>
    </Center>
  );
}

export default ScholarshipBanner;
