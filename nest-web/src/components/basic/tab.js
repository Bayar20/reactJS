import styled from "styled-components";
import { useToggle } from "react-use";
import { Queue, Stack, Text } from "../../components";
import { Border } from "./border";

export const RawTab = ({ asFalseName, asFalse, asTrue, asTrueName }) => {
  const [on, toggle] = useToggle(true);
  return (
    <>
      <Stack>
        <Queue width="100%" justifyContent="center">
          <Stack onClick={() => toggle(true)} width="50%">
            {on ? (
              <Text
                fontWeight="900"
                role="blackPrimary"
                type="headline"
                alignment="center"
              >
                {asTrueName}
              </Text>
            ) : (
              <Text type="headline" role="darkGrey" alignment="center">
                {asTrueName}
              </Text>
            )}
            {on ? (
              <Border
                width="100%"
                animationDelay={0.2}
                radius="border"
                role="blackPrimary"
                borderSize={[2]}
              />
            ) : (
              <Border size={[0, 0, 1]} />
            )}
          </Stack>
          <Stack onClick={() => toggle(false)} width="50%">
            {!on ? (
              <Text
                fontWeight="900"
                role="blackPrimary"
                type="headline"
                alignment="center"
              >
                {asFalseName}
              </Text>
            ) : (
              <Text type="headline" role="darkGrey" alignment="center">
                {asFalseName}
              </Text>
            )}
            {!on ? (
              <Border
                animationDelay={0.2}
                width="100%"
                radius="border"
                role="blackPrimary"
                borderSize={[2]}
              />
            ) : (
              <Border size={[0, 0, 1]} />
            )}
          </Stack>
        </Queue>
      </Stack>
      {on ? asTrue : asFalse}
    </>
  );
};
export const Tab = styled(RawTab)`
  display: inline-block;
`;
