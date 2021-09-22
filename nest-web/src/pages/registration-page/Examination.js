import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { GlobalThemeStyle, Theme } from "../../theme";
import { Container } from "../../components";
import Header from "../home-page/Header";
import Footer from "../home-page/Footer";
import { useToggle } from "react-use";
import Question from "./Questions/Question";
import StepProcess from "./Questions/StepProcess";
import Modal from "./Questions/Modal";

const Examination = (props) => {
  const [visible, toggle] = useToggle(false);
  const [step, setStep] = useState(0);
  const [preProcess, setPreProcess] = useState(true);
  const [testFinish, setTestFinish] = useState(false);

  const [isOverTime, setIsOverTime] = useState(false);
  const [seconds, setSeconds] = useState(20);

  const handleChange = (count) => {
    if (!(step < count - 1)) {
      toggle(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    let myTimer = null;
    if (seconds === 0) {
      console.log("Pause or Overtime");
      setTestFinish(true);
      clearInterval(myTimer);
    } else if (isOverTime) {
      if (seconds === 10) {
      }
      myTimer = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    return () => {
      clearInterval(myTimer);
    };
  }, [isOverTime, seconds]);

  const startTest = () => {
    toggle(false);
    setPreProcess(false);
    setIsOverTime(true);
  };

  const finish = () => {
    setTestFinish(false);
    props.history.push("/");
  };

  return (
    <Theme>
      <GlobalThemeStyle />
      <Modal
        visible={visible}
        onFirstBtnClick={startTest}
        subTitle="Баталгаажуулах"
        subContent="Та шалгалтаа эхлэхдээ итгэлтэй байна уу?"
        firstBtnText="ЭХЛЭХ"
        secondBtnText="БОЛИХ"
      />
      <>
        <Header />
        <Container>
          {preProcess ? (
            <StepProcess handleChange={handleChange} step={step} />
          ) : (
            <>
              <Modal
                visible={testFinish}
                onFirstBtnClick={finish}
                subTitle="Анхааруулга"
                subContent="Та шалгалтыг дуусгахдаа итгэлтэй байна уу?"
                firstBtnText="ДУУСГАХ"
                secondBtnText="БОЛИХ"
              />
              <Question />
            </>
          )}
        </Container>
        <Footer />
      </>
    </Theme>
  );
};

export default withRouter(Examination);
