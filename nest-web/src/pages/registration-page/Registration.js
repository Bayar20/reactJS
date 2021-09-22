import React from "react";
import {
  Container,
  Grid,
  GridPlace,
  Margin,
  useMobile
} from "../../components";
import { Theme } from "../../theme";
import Footer from "../../pages/home-page/Footer";
import Header from "../../pages/home-page/Header";
import { useMediaQuery } from "react-responsive";
import { Selection, MyProfile, Beginning, Main } from "./index";

const Content = () => {
  const isMobile = useMobile();
  const isTab = useMediaQuery({
    query: "(max-width: 1300px)"
  });
  if (isMobile) {
    return (
      <Grid mobileRepeatColumn={4}>
        <GridPlace mobileGridColumn="1 / span 4" gridRow="1 / span 1">
          <Main />
        </GridPlace>
      </Grid>
    );
  }
  return (
    <Grid columns={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}>
      <GridPlace gridColumn="1 / span 8" gridRow="1 / span 1">
        {isTab ? (
          <Margin size={[2, 6]}>
            <Selection />
          </Margin>
        ) : (
          <Selection />
        )}
      </GridPlace>
      <GridPlace gridColumn="9 / span 4" gridRow="1 / span 1">
        <MyProfile />
      </GridPlace>
    </Grid>
  );
};

export default function Registration() {
  return (
    <Theme>
      <Header />
      <Container>
        <Content />
      </Container>
      <Margin size={9} />
      <Footer />
    </Theme>
  );
}
