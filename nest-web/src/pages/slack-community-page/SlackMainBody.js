import { React, useState } from "react";
import { BannerContainer, Container, useMobile } from "../../components";
import { GlobalThemeStyle, Theme } from "../../theme";
import _ from "lodash";
import {
  Stack,
  Queue,
  Center,
  Margin,
  Grid,
  GridPlace,
  Padding,
  Overlay,
} from "../../components/layout/index";
import { AccordionText, Loading, Text } from "../../components/basic";
import Footer from "../home-page/Footer";
import Header from "../home-page/Header";
import { CheckCircleIcon, HashtagIcon } from "../../assets/icons";
import { Button } from "../../components/form/button";
import { SlackForm } from "./SlackForm";
import { ButtonTrailingIcon, NestLogoBlue, SlackLogoBlue } from "../../assets";
import useContentful from "../../useContentful";
import { useToggle } from 'react-use';
import { Link } from "react-router-dom";

const SlackBody = `{
  slackMainBodyCollection{
    items{
      whatCanITalkAboutHere
      whatCanITalkAboutHereDescription
      accordionTitle
      accordionDescription
    }
  }
}`


const SlackAccordionBody =()=>{
  const { loading, data } = useContentful("slackMainBody", SlackBody ); 
  return (
    <Margin size={[12,0,12,0]}>
        {loading ?(
          <Loading/>
        ):(data && (
          <>
          <Stack>
            <Text type="title1" bold role="blackPrimary">{_.last(data).whatCanITalkAboutHere}</Text>
            {console.log(data.whatCanITalkAboutHere)}
            <Text type="body">{_.last(data).whatCanITalkAboutHereDescription} </Text>
          </Stack>
          {data.map((item)=>{
            return(
              <Margin size={[1,0,0,0]}>
                <AccordionText.TextProvider>
                  <AccordionText.TextTrigger>
                    <Queue>
                    <HashtagIcon width="15px" />
                    <Text type="body" bold>{item.accordionTitle}</Text>
                    </Queue>
                  </AccordionText.TextTrigger>
                  <AccordionText.TextContent>
                    <Stack size={4}>
                      <Text type="body">{item.accordionDescription}</Text>
                    </Stack>
                  </AccordionText.TextContent>
                </AccordionText.TextProvider>
              </Margin>
            )
            })}
          </>
        )
        )}
    </Margin>
  )
  
}

const SlackCommunity=`{
  slackTagsCollection {
    items {
      bannerImage{
        url
      }
      nestizensSlackCommunityText
      whatIsNestSlack
      nestSlack1stText
      nestSlack2ndText
      nestSlack3rdText
      letsHaveAChat
      letsHaveAChatText
      
    }
  }

}`
const SlackBanner = (props)=>{
  const { loading, data } = useContentful("slackTags",SlackCommunity );
  const [isOpen, setIsOpen] = useState(false);    

    const togglePopup=()=>{
      setIsOpen(!isOpen);
    }
  const isMobile = useMobile("927px");

  if(isMobile){
    return(
      <div>
        {loading ? (
          <Loading/>
        ):(
          data && (
            <>
            <BannerContainer
            brand
            bannerText={["Nestizens", "Slack", "Community"]}
            bannerImage={_.last(data).bannerImage.url}
            height="500px"
            />
            <Margin mobileSize={[2, 2]} tabletSize={[2, 2]} >
              <Stack>
                    <Text type="body">{_.last(data).nestizensSlackCommunityText}</Text>
              <Link to="slack-form">
                <Margin size={[4,0,12,0]}>
                  <Button 
                    type="primary" 
                    buttonStyle="fill" 
                    size="small" 
                    trailingIcon={<ButtonTrailingIcon/>} >Join for free</Button>
                </Margin>
              </Link>
              </Stack>
            </Margin>
            <Margin size={2}>
              <Grid>
                <GridPlace mobileGridColumn="1/4">
                  <Margin size={[0,0,1,0]}>
                    <Text type="title1" bold role="blackPrimary">
                    {_.last(data).whatIsNestSlack}
                    </Text>
                  </Margin>
                  <Stack size={7}>
                    <Queue alignVertical="flex-start" size={2}>
                      <Queue width="10%">
                        <CheckCircleIcon />
                      </Queue>
                      <Queue width="80%">
                        <Text type="body">
                        {_.last(data).nestSlack1stText}
                        </Text>
                      </Queue>
                    </Queue>

                    <Queue alignVertical="flex-start" size={2}>
                      <Queue width="10%">
                        <CheckCircleIcon />
                      </Queue>
                      <Queue width="80%">
                        <Text type="body">
                        {_.last(data).nestSlack2ndText}
                        </Text>
                      </Queue>
                    </Queue>

                    <Queue alignVertical="flex-start" size={2}>
                      <Queue width="10%">
                        <CheckCircleIcon />
                      </Queue>
                      <Queue width="80%">
                        <Text type="body">
                        {_.last(data).nestSlack3rdText}
                        </Text>
                      </Queue>
                    </Queue>
                  </Stack>
                </GridPlace>
                <GridPlace mobileGridColumn="1/4">
                <SlackAccordionBody/>
                </GridPlace>
                <GridPlace mobileGridColumn="1/4">
                  <Stack size={1}>
                    <Text type="title1" bold role="blackPrimary">
                    {_.last(data).letsHaveAChat}
                    </Text>
                    <Text type="body">
                    {_.last(data).letsHaveAChatText}
                        </Text>
                    <Link to="slack-form">
                      <Margin size={[7,0,12,0]}>
                        <Button type="primary" buttonStyle="fill" size="small" trailingIcon={<ButtonTrailingIcon/>} >Join for free</Button>
                      </Margin>
                    </Link>
                  </Stack>
                </GridPlace>
              </Grid>
            </Margin>
            
                
            </>
          )
        )} 
      </div>
    )
  } else {
    return (
      <div>   
        <Overlay top={12} zIndex={99} backgroundRole="blackOpaciy"  height="100vh">
            { isOpen && <SlackForm handleClose={togglePopup}/>}
            </Overlay>
        
        <Center backgroundRole="nest" height="auto">
          <Padding size={[8,0,0,0]}>
            <Grid columns={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} tabletRepeatColumn mobileRepeatColumn>
              <GridPlace gridColumn=" 6 / span 2" >
                <Queue justifyContent="center" size={5}>
                  <SlackLogoBlue></SlackLogoBlue>
                  <Text type="title3"> X </Text>
                  <NestLogoBlue></NestLogoBlue>
                </Queue>
              </GridPlace>
              
              <GridPlace gridColumn=" 4/ span 6" placeSelf="center">
                <Padding size={[7,0,5,0]}>
                  <Center>
                    <Text type="display">Nestizens Slack Community</Text>
                  </Center>
                </Padding>  
              </GridPlace>
              <GridPlace gridColumn=" 4/ span 6" placeSelf="center">
                <Center>
                  <Text type="body" alignment="center">
                  Slack community is a place where you can network with people related to Nest and you may find relavant 
                  information if you connect with the right person. 
                  </Text>
                </Center>
              </GridPlace>

              <GridPlace gridColumn=" 6/ span 2">
              <Margin size={[7,0]}>
                <Button   type="primary" size="large" buttonStyle="fill" trailingIcon={<ButtonTrailingIcon/>} onClick={() => togglePopup(true)} >
                    Join for free
                </Button>
              </Margin>
              </GridPlace>
            </Grid>
          </Padding>
        </Center> 
        <Container>
          <Grid >
            <Margin size={[8, 0, 5, 0]}>
              <Center>
                <Text type="title1" bold>What is Nest slack?</Text>
              </Center>
            </Margin>
              
              <Grid columns={[1,3,1,3,1,3]}>
                <Queue justifyContent="flex-end" alignVertical="flex-start"> 
                    <CheckCircleIcon width="40%"></CheckCircleIcon> 
                </Queue>
                <Text type="body" >
                Space to hangout with like minded people
                </Text>

                <Queue justifyContent="flex-end" alignVertical="flex-start"> 
                    <CheckCircleIcon width="40%"></CheckCircleIcon> 
                </Queue>
                <Text type="body" >
                Get advice from professionals and hear others feedback.
                </Text>

                <Queue justifyContent="flex-end" alignVertical="flex-start"> 
                    <CheckCircleIcon width="40%"></CheckCircleIcon> 
                </Queue>
                <Text type="body" >   
                Connect with right people who may help to guide you for your future career. 
                </Text>                
            </Grid>
            <Margin size={[9, 0, 5, 0]}>   
              <Center>
                <Text alignment="justify" type="title1" bold>
                  What can i talk about here?
                </Text>
              </Center>
            </Margin>

            <Margin size={[0, 5, 7, 5]}>   
              <Center>
                <Text alignment="justify" type="body">
                  It is a space you can chat with like-minded people, share ideas and talk about technology related subject. 
                </Text>
              </Center>
            </Margin>

            <Margin size={[0, 3, 8, 3]}>
            <Grid columns={[1,1]} mobileRepeatColumn={2}>

              <Queue justifyContent="flex-start" alignVertical="flex-start">
                <Padding size={[0, 3, 0, 0]}>
                  <HashtagIcon></HashtagIcon>
                </Padding>
                <Padding size={[0.7, 0, 0, 0]}>
                  <Text type="body" bold>dev_corner</Text>
                </Padding>
                <Stack>
                
                  <Padding size={[0, 0, 0, 7]}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </Text>
                  </Padding>
                </Stack>
              </Queue>
              

              
              <Queue justifyContent="flex-start" alignVertical="flex-start">
                <Padding size={[0, 3, 0, 0]}>
                  <HashtagIcon></HashtagIcon>
                </Padding>
                <Padding size={[0.7, 0, 0, 0]}>
                  <Text type="body" bold>ux_kitchen</Text>
                </Padding>
                <Stack>
                
                  <Padding size={[0, 0, 0, 7]}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </Text>
                  </Padding>
                </Stack>
              </Queue>
              <Queue justifyContent="flex-start" alignVertical="flex-start">
                <Padding size={[0, 3, 0, 0]}>
                  <HashtagIcon></HashtagIcon>
                </Padding>
                <Padding size={[0.7, 0, 0, 0]}>
                  <Text type="body" bold>dev_corner</Text>
                </Padding>
                <Stack>
                
                  <Padding size={[0, 0, 0, 7]}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </Text>
                  </Padding>
                </Stack>
              </Queue>
              
              <Queue justifyContent="flex-start" alignVertical="flex-start">
                <Padding size={[0, 3, 0, 0]}>
                  <HashtagIcon></HashtagIcon>
                </Padding>
                <Padding size={[0.7, 0, 0, 0]}>
                  <Text type="body" bold>ux_kitchen</Text>
                </Padding>
                <Stack>
                
                  <Padding size={[0, 0, 0, 7]}>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </Text>
                  </Padding>
                </Stack>
              </Queue>
              
              
            </Grid>
            </Margin>
        </Grid>
      </Container>
      </div>
    )
  }
}
export const SlackMainBody =()=> {
  const [on, toggle] = useToggle(false);
  
    return (
      <Theme>
        <GlobalThemeStyle/>
        <Header/>
        {on ? <SlackForm clickClose={toggle} /> : <SlackBanner handleClose={toggle}/>}
        <Footer/>
      </Theme>
  );
};