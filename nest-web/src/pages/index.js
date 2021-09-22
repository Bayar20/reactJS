import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./home-page/HomePage";
import AboutUs from "./about-us-page/AboutUs";
import CodingLesson from "./courses-page/CodingLesson";
import DesignLesson from "./courses-page/DesignLesson";
import Hop from "./courses-page/Hop";
import Leap from "./courses-page/Leap";
import Registration from "./registration-page/Registration";
import { Nestizens } from "./nestizens-page/Nestizens";
import Scholarship from "./scholarship-page/Scholarship";
import Career from "./career-page/Career";
import SlackCommunity from "./slack-community-page/SlackCommunity";
import { SlackForm, SlackSuccess } from "./slack-community-page/SlackForm";
import { MeetNestizens } from "./nestizens-page/meet-nestizens";
import MainCourse from "./courses-page/MainCourse";
import Examination from "./registration-page/Examination";
import MicroLessons from "./courses-page/MicroLessons";
import { Beginning, NameChanging } from "./registration-page";

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/about-us" exact={true}>
          <AboutUs />
        </Route>
        <Route path="/courses/main-course" exact={true}>
          <MainCourse />
        </Route>
        <Route path="/courses/micro-lessons" exact={true}>
          <MicroLessons />
        </Route>
        <Route path="/courses/coding-video-lessons" exact={true}>
          <CodingLesson />
        </Route>
        <Route path="/courses/ui-ux-design-video-lessons" exact={true}>
          <DesignLesson />
        </Route>
        <Route path="/courses/hop" exact={true}>
          <Hop />
        </Route>
        <Route path="/courses/leap" exact={true}>
          <Leap />
        </Route>
        <Route path="/registration" exact={true}>
          <Registration />
        </Route>
        <Route path="/registration/beginning" exact={true}>
          <Beginning />
        </Route>
        <Route path="/examination" exact={true}>
          <Examination />
        </Route>
        <Route path="/nestizens" exact={true}>
          <Nestizens />
        </Route>
        <Route path="/nestizens/meetnestizens" exact={true}>
          <MeetNestizens />
        </Route>
        <Route path="/scholarship" exact={true}>
          <Scholarship />
        </Route>
        <Route path="/career" exact={true}>
          <Career />
        </Route>
        <Route path="/slack-community" exact={true}>
          <SlackCommunity />
        </Route>
        <Route path="/slack-form" exact={true}>
          <SlackForm />
        </Route>
        <Route path="/slack-success" exact={true}>
          <SlackSuccess />
        </Route>
      </Switch>
    </Router>
  );
}
