import React from "react";
import {
  Overlay,
  Text,
  Box,
  Center,
  HideItemWhenMobile
} from "../../../components";
import meetNestizensImage from "../../../assets/Images/MeetNestizens.png";

const Banner = () => {
  return (
    <HideItemWhenMobile>
      <Center width="100%">
        <Box image={meetNestizensImage} ratio={0.35}>
          <Overlay zIndex="2" top="45%" right="42%">
            <Text alignment="center" type="display" bold role="blackPrimary">
              Nestizens
            </Text>
          </Overlay>
        </Box>
      </Center>
    </HideItemWhenMobile>
  );
};

export default Banner;
