import React, { useEffect } from "react";
import Moment from "react-moment";
import styled from "styled-components";
import { mapRoleToBackgroundColor } from "../theme";
import { InteractiveStyle } from "./basic";
import { useMediaQuery } from "react-responsive";

export const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (!ref.current) {
      return;
    }
    if (ref.current.contains(e.target)) {
      return;
    }

    callback();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, true);
    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, [ref, callback]);
};

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const IndicatorBar = styled.div`
  height: 6px;
  width: 30px;
  background-color: ${({ role }) =>
    mapRoleToBackgroundColor(role || "primary")};
  border-radius: 4px;
`;

export const InteractiveIcon = styled.div`
  ${InteractiveStyle}
`;

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const TimeFormat = ({ serverTimestamp, format, className }) => {
  if (!serverTimestamp) {
    return <span />;
  }
  return (
    <Moment className={`${className}`} format={format}>
      {new Date(serverTimestamp.toDate()).toISOString()}
    </Moment>
  );
};

export const TimeAgo = ({ serverTimestamp }) => {
  if (!serverTimestamp) {
    return <span />;
  }
  return (
    <Moment fromNow>{new Date(serverTimestamp.toDate()).toISOString()}</Moment>
  );
};

export const HideItemWhenMobile = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ShowItemWhenMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const useMobile = (maxWidth) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${maxWidth || "414px"})`
  });
  return isMobile;
};
