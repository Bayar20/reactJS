import React from "react";
import { Stack, Margin, Queue, Text, useMobile } from "../../components";
import { FacebookIcon, LinkedInIcon } from "../../assets";

const StudentItem = ({ d, width }) => {
  const isMobile = useMobile("");
  return (
    <Stack width={width || "100%"} size="2">
      <div
        style={{
          borderRadius: "8px",
          height: isMobile ? "224px" : "310px",
          width: "100%",
          backgroundImage: `url("${d.profileImage.url}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      />
      {isMobile ? (
        <>
          <Text type="headline" bold>
            {d.firstname} {d.lastname}
          </Text>
          <Text type="callout">{d.status}</Text>
        </>
      ) : (
        <>
          <Text type="title3" bold>
            {d.firstname} {d.lastname}
          </Text>
          <Text type="body">{d.status}</Text>
        </>
      )}

      <Queue>
        <a target="_blank" href={d.facebookLink}>
          <FacebookIcon role="success" />
        </a>
        <Margin size={[0, 5, 0, 0]}></Margin>
        <a target="_blank" href={d.linkedinLink}>
          <LinkedInIcon role="success" />
        </a>
      </Queue>
    </Stack>
  );
};

export default StudentItem;
