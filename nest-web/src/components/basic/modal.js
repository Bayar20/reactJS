import styled from "styled-components";
import {
    Shadow,
    Border,
    Margin,
    Text,
    Queue,
    Padding,
    Stack,
} from "../../components";
import { DimensionStyle } from "../layout";
import { InteractiveText } from "./text";

export const RawModal = ({
    children,
    leftIcon,
    radius = "small",
    size,
    space,
    type = "info",
    bannerRole,
    title,
    buttonText,
    content,
    titleType,
    contentType,
    buttonType,
    ...props
  }) => {
    switch(type) {
        case 'warning':
           bannerRole = "yellow";
        break;
        case 'success':
           bannerRole = "green";
        break;
        case 'info':
            bannerRole = "darkBlue";
        break;
        case 'critical': 
            bannerRole = "red";
        break;
      }
    return (
        <Shadow width="100%">
            <Border
                {...props}
                backgroundRole={bannerRole}
                role={bannerRole}
                radius={radius}
                borderSize={[6,0,0,0]}
            >  
                <Border
                    backgroundRole={type}
                    role={type}
                    borderSize={[1,0,0,0]}
                    radius={radius}
                >
                    <Padding size={size || [1, 2]}>
                        <Stack role={type}>
                            <Queue size={1}>
                                {leftIcon}
                                <Text role="blackPrimary" bold type={titleType || "headline"}>
                                    {title}
                                </Text>
                            </Queue> 
                            <Margin size={[0,2,0,5]}>
                                <Stack size={1.3}>
                                    <Text role="blackPrimary" type={contentType}>
                                        {content}
                                    </Text>
                                    {buttonText 
                                        &&
                                        <InteractiveText 
                                            bold 
                                            role="blackPrimary" 
                                            type={buttonType 
                                            || "subHeading"}
                                        >
                                            {buttonText}
                                        </InteractiveText>}
                                </Stack>
                            </Margin>
                        </Stack>  
                    </Padding>
                </Border>
            </Border>
        </Shadow>
    )
  }
  
export const Modal = styled(RawModal)`
  display: inline-block;
  ${DimensionStyle}
`
