import {
  Queue,
  Stack,
  Text,
  Button,
  Margin,
  Loading,
  BannerContainer,
  AccordionText
} from "../../components";
import { Theme, GlobalThemeStyle } from "../../theme";
import { ButtonTrailingIcon, HashtagIcon } from "../../assets";
import useContentful from "../../useContentful";
import _ from "lodash";

const careerHead = `{
  careerHeadCollection{
    items {
      bannerImage{
        url
      }
      title
      description
    }
  }

}`;
const query = `{
  careersCollection{
    items{
      jobTitle
      jobDescription
      jobRequirements
    }
  }
}`;

const CareerMobile = () => {
  const { loading, data } = useContentful("careerHead", careerHead);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        data && (
          <Theme>
            <GlobalThemeStyle />
            <BannerContainer
              brand
              bannerText={["Become", "one of us"]}
              bannerImage={_.last(data).bannerImage.url}
            />
            <Margin mobileSize={[2, 2]} tabletSize={[2, 2]}>
              <Stack>
                <Text type="body">{_.last(data).description}</Text>
                <Margin size={[4, 0, 12, 0]}>
                  <Button
                    type="primary"
                    buttonStyle="fill"
                    size="small"
                    trailingIcon={<ButtonTrailingIcon />}
                  >
                    Send CV
                  </Button>
                </Margin>
              </Stack>
            </Margin>
            <CareerJobs />
          </Theme>
        )
      )}
    </div>
  );
};

const CareerJobs = () => {
  const { loading, data } = useContentful("careers", query);
  return (
    <Margin size={[12, 2, 12, 2]}>
      <Text type="title1" bold role="blackPrimary">
        We're looking for
      </Text>
      {loading ? (
        <Loading />
      ) : (
        data && (
          <>
            {data.map((item) => {
              return (
                <Margin size={[1, 0, 0, 0]}>
                  <AccordionText.TextProvider>
                    <AccordionText.TextTrigger>
                      <Queue>
                        <HashtagIcon width="15px" />
                        <Text type="body" bold>
                          {item.jobTitle}
                        </Text>
                      </Queue>
                    </AccordionText.TextTrigger>
                    <AccordionText.TextContent>
                      <Stack size={4}>
                        <Text type="body">{item.jobDescription}</Text>
                        <Text type="body" bold>
                          Requirements
                        </Text>
                        <Text type="body">{item.jobRequirements}</Text>
                      </Stack>
                    </AccordionText.TextContent>
                  </AccordionText.TextProvider>
                </Margin>
              );
            })}
          </>
        )
      )}
      <Margin size={[5, 0]} />
      <Button type="primary" buttonStyle="fill" size="large" buttonWidth="100%">
        Send Cv
      </Button>
    </Margin>
  );
};

export default CareerMobile;
