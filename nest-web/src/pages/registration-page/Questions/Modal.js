import React from "react";
import { WarningIcon } from "../../../assets";
import {
  Button,
  Center,
  Margin,
  Text,
  AnimatedSlideDownView
} from "../../../components";
import styled from "styled-components";

const Modal = ({
  visible,
  onFirstBtnClick,
  onSecondBtnClick,
  subTitle,
  subContent,
  firstBtnText,
  secondBtnText
}) => {
  return (
    <AnimatedSlideDownView visible={visible}>
      <ModalWindow>
        <ModalContainer>
          <ModalContent>
            <Margin size={[7, 0, 0, 0]}>
              <Center>
                <WarningIcon width="64px" height="64px" />
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
                {firstBtnText}
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
                {secondBtnText}
              </Button>
            </Margin>
          </ModalContent>
        </ModalContainer>
      </ModalWindow>
    </AnimatedSlideDownView>
  );
};

export default Modal;

const ModalWindow = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  /* z-index: 1000; */
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  width: 90%;
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  border-radius: 8px;
  max-width: 382px;
  /* min-width: 300px; */
  /* z-index: 99; */
`;
