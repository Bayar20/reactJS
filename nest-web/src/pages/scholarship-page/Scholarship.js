import React from "react";
import { GlobalThemeStyle, Theme } from "../../theme";
import Footer from "../home-page/Footer";
import Header from "../home-page/Header";
import ScholarshipAward from "./ScholarshipAward";
import ScholarshipBanner from "../scholarship-page/ScholarshipBanner";
import AccountStatement from "./AccountStatement";
import Donors from "./Donor";

function Scholarship() {
  return (
    <Theme>
      <GlobalThemeStyle />
      <Header />
      <ScholarshipBanner />
      <ScholarshipAward />
      <Donors />
      <AccountStatement />
      <Footer />
    </Theme>
  );
}

export default Scholarship;
