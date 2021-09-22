import React from "react";
import { Center } from "../layout";
import { Spinner } from "../basic";

export const Loading = ({ height }) => {
  return (
    <Center height={height || "100vh"}>
      <Spinner width="100px" />
    </Center>
  );
};
