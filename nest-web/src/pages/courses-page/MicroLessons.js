import React from "react";
import { Theme, GlobalThemeStyle } from "../../theme";
import {
  Queue,
  Text,
  Margin,
  Padding,
  InteractiveText,
  useMobile,
  Tab,
  Overlay
} from "../../components";
import { Link } from "react-router-dom";
import { BrandIcon, LeadingIcon } from "../../assets";
import Footer from "../home-page/Footer";
import Header from "../home-page/Header";
import { CodingMicroLesson } from "./CodingLesson";
import { UXDesignMicroLesson } from "./DesignLesson";

export default function MicroLessons() {
  const isMobile = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Theme>
            <Header />
            <GlobalThemeStyle />
            <Padding size={2}>
              <Link to="/courses/main-course">
                <Queue size={1}>
                  <LeadingIcon />
                  <InteractiveText>Back</InteractiveText>
                </Queue>
              </Link>
            </Padding>
            <Padding size={[0, 0, 0, 2]}>
              <Queue height={20}>
                <Text type="largeTitleBold" bold role="blackPrimary">
                  Micro Lessons
                </Text>
                <Overlay right={0}>
                  <BrandIcon />
                </Overlay>
              </Queue>
            </Padding>
            <Margin size={3} />
            <Tab
              asTrueName="Programming"
              asTrue={<CodingMicroLesson />}
              asFalseName="UI/UX design"
              asFalse={<UXDesignMicroLesson />}
            ></Tab>
            <Footer />
          </Theme>
        </>
      )}
    </>
  );
}
