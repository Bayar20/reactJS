import React, { useState } from "react";
import { Stack, Margin, Queue, Text, Box } from "../../../components";
import {
  GithubIcon,
  LinkedIn,
  DribbbleIcon,
  BehanceIcon,
  ProgrammingIcon,
  DesignIcon
} from "../../../assets";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Link = styled.a`
  color: transparent;
`;

const Image = styled.div`
  border-radius: ${({ radius }) => radius || "8px"};
  height: ${({ height }) => height || "224px"};
  width: 100%;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
  background-position: center;
`;

const BoxItem = ({ data }) => {
  const switchIcon = () => {
    switch (data.status) {
      case "Programming":
        return (
          <>
            <ProgrammingIcon />
            <Text role="darkGrey" type="callout" bold>
              {data.status}
            </Text>
          </>
        );
        break;
      case "Design":
        return (
          <>
            <DesignIcon />
            <Text role="darkGrey" type="callout" bold>
              {data.status}
            </Text>
          </>
        );
        break;
      default:
        return (
          <Text role="darkGrey" type="callout" bold>
            {data.status}
          </Text>
        );
        break;
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  });

  return (
    <>
      {isMobile ? (
        <Stack width="100%" size="1">
          <Margin size="0.38" />
          <Image image={data.profileImage.url} />
          <Text type="headline" bold>
            {data.firstname} {data.lastname}
          </Text>
          <Queue size="1">{switchIcon()}</Queue>
          <Queue size="1.75">
            {data.linkedinLink && (
              <Link target="_blank" href={data.linkedinLink}>
                <LinkedIn />
              </Link>
            )}
            {data.dribbbleLink && (
              <Link target="_blank" href={data.dribbbleLink}>
                <DribbbleIcon />
              </Link>
            )}
            {data.behanceLink && (
              <Link target="_blank" href={data.behanceLink}>
                <BehanceIcon />
              </Link>
            )}
          </Queue>
        </Stack>
      ) : (
        <Stack width="100%" size="1">
          <Margin size="2" />
          <Image image={data.profileImage.url} height="400px" radius="4px"/>
          <Text type="headline" bold>
            {data.firstname} {data.lastname}
          </Text>
          <Queue size="1">{switchIcon()}</Queue>
          <Queue size="2">
            {data.githubLink && (
              <a target="_blank" href={data.githubLink}>
                <GithubIcon role="darkGrey" />
              </a>
            )}
            {data.linkedinLink && (
              <a target="_blank" href={data.linkedinLink}>
                <LinkedIn />
              </a>
            )}
            {data.dribbbleLink && (
              <Link target="_blank" href={data.dribbbleLink}>
                <DribbbleIcon />
              </Link>
            )}
            {data.behanceLink && (
              <Link target="_blank" href={data.behanceLink}>
                <BehanceIcon />
              </Link>
            )}
          </Queue>
        </Stack>
      )}
    </>
  );
};

export default BoxItem;
