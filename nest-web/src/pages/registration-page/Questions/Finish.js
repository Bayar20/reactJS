import React from "react";
import { Link } from "react-router-dom";
import { Button, Center, Margin, Text } from "../../../components";
import { SuccessIcon } from "../../../assets";

const Finish = ({
  subTitle,
  subContent,
  onFirstBtnClick,
  onSecondBtnClick
}) => {
  return (
    <div>
      <Margin size={[7, 0, 0, 0]}>
        <Center>
          <SuccessIcon width="64px" height="64px" />
        </Center>
      </Margin>
      <Margin size={[3, 0, 0, 0]}>
        <Center>
          <Text type="title2" bold role="blackPrimary">
            {subTitle}
          </Text>
        </Center>
      </Margin>
      <Margin size={[2, 5]}>
        <Center>
          <Text type="body" alignment="center">
            {subContent}
          </Text>
        </Center>
      </Margin>
      <Margin size={[1, 1]}>
        <Button
          width="100%"
          size="large"
          type="primary"
          buttonStyle="fill"
          onClick={onFirstBtnClick}
        >
          Цаг товлох
        </Button>
      </Margin>
      <Margin size={[1, 1, 2, 1]}>
        <Button
          width="100%"
          size="large"
          type="primary"
          buttonStyle="ghost"
          onClick={onSecondBtnClick}
        >
          HOME-руу буцах
        </Button>
      </Margin>
    </div>
  );
};

export default Finish;
