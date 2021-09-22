import React, { useState } from "react";
import { Theme, GlobalThemeStyle } from "../../theme";
import { useHistory } from "react-router-dom";
import {
  Stack,
  Queue,
  GridPlace,
  Input,
  Text,
  InteractiveText,
  Padding,
  Margin,
  Button,
  Center,
  Grid,
  Overlay,
  Border,
  Container,
  Loading,
  Box,
  ProgressBarThin
} from "../../components";
import _ from "lodash";
import {
  EditIcon,
  UserIcon,
  UsersIcon,
  CheckboxIcon,
  MaleIcon,
  CheckIcon,
  FemaleIcon,
  NonBinaryIcon,
  RightChevronIcon,
  SuccessIconBackground,
  ShareIcon
} from "../../assets/icons";
import Airtable from "airtable";
import { useMediaQuery } from "react-responsive";
import useContentful from "../../useContentful";
import {
  Rectangle,
  PhoneRectangle,
  Triangle,
  NestLogoName,
  NestAcademy
} from "../../assets";
import { Link } from "react-router-dom";
const bases = new Airtable({ apiKey: "keyShGReYs9bAVhTj" }).base(
  "app03QcRleSyDvmdc"
);
const query = `
{
    selectionCollection {
      items {
        title
        bodyText
      }
    }
  }
`;
export const MyProfile = () => {
  const fields = [
    { val: "Full name", key: "fullName" },
    { val: "Birth", key: "birth" },
    { val: " E-mail", key: "eMail" },
    { val: "Phone number", key: "phoneNumber" },
    { val: "School", key: "school" }
  ];
  const [formData, setFormData] = useState({
    birth: "",
    fullName: "",
    school: "",
    phoneNumber: "",
    eMail: ""
  });
  const [clone, setClone] = useState();

  const handleSave = () => {
    setClone({ ...formData });
  };
  const handleCancel = () => {
    setFormData({ ...clone });
  };
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  return (
    <Center backgroundRole="whitePrimary">
      <Margin size={[4]}>
        <Text role="blackPrimary" type="title1">
          My profile
        </Text>
        <Padding size={[3, 0]}>
          {_.map(fields, (field) => (
            <MyProfileInput
              onChange={handleChange}
              name={field.key}
              value={formData[field.key]}
              labelName={field.val}
              onEdit={handleSave}
              onCancel={handleCancel}
            ></MyProfileInput>
          ))}
        </Padding>
      </Margin>
    </Center>
  );
};
export const MyProfileInput = (props) => {
  const [button, setButton] = useState();

  const handleEditState = (state, event) => {
    setButton(state);
    switch (event) {
      case "save":
        return console.log("saved");
      case "cancel":
        return props.onCancel();
      default:
        return props.onEdit();
    }
  };
  return (
    <Stack>
      {button === true ? (
        <Stack>
          <Stack>
            <Padding size={[4, 0, 0, 0]} />
            <Padding size={[1, 1, 1]}>
              <Input
                label={props.labelName}
                onChange={props.onChange}
                name={props.name}
                value={props.value}
                role={props.role}
                type="primary6"
                size={[0, 1, 0]}
              />
            </Padding>
            <Padding size={[2, 1]}>
              <Queue>
                <Button
                  size="small"
                  onClick={() => handleEditState(false, "save")}
                  width={10}
                  buttonStyle="fill"
                  type="primary"
                >
                  Save
                </Button>
                <Margin size={[0, 1]} />
                <Button
                  size="small"
                  onClick={() => handleEditState(false, "cancel")}
                  width={10}
                  buttonStyle="ghost"
                  type="primary"
                >
                  Cancel
                </Button>
              </Queue>
            </Padding>
          </Stack>
        </Stack>
      ) : (
        <Stack>
          <Queue justifyContent="flex-end">
            <Text></Text>
            <Queue size={0.5}>
              <EditIcon type="highlight"></EditIcon>
              <InteractiveText
                onClick={() => handleEditState(true)}
                type="primary5"
                role="blackPrimary"
              >
                Edit
              </InteractiveText>
            </Queue>
          </Queue>
          <Padding size={[1, 0, 1, 0]}>
            <Input
              label={props.labelName}
              size={[0, 0, 1]}
              onChange={props.onChange}
              name={props.name}
              value={props.value}
              role={props.role}
            />
          </Padding>
        </Stack>
      )}
    </Stack>
  );
};
export const Selection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  });
  const { data, loading } = useContentful("selection", query);
  if (loading) {
    return <Loading />;
  }
  return (
    <Center>
      <Stack size={6}>
        {isMobile ? (
          <Text role="blackPrimary" type="largeTitle">
            Selection process
          </Text>
        ) : (
          <Text role="blackPrimary" type="largeTitle">
            Selection process
          </Text>
        )}

        <Margin size={[5, 0, 0, 0]}>
          <Text type="title1">{_.first(data) && _.first(data).title}</Text>
        </Margin>
        <Text type="headline">{_.first(data) && _.first(data).bodyText}</Text>
        <Margin size={[1, 0]}>
          <Queue>
            <Link to="/examination">
              <Button
                radius="medium"
                width={14}
                size={[0.5, 1]}
                textRole="light"
                backgroundRole="blackPrimary"
              >
                <Center>
                  <Padding size={[2, 1]}>
                    <Text role="light" type="primary7">
                      Take test
                    </Text>
                  </Padding>
                </Center>
              </Button>
            </Link>
          </Queue>
        </Margin>
        <Margin size={[1, 0, 0]}>
          <Text type="title1">{_.first(data) && _.nth(data, 1).title}</Text>
        </Margin>
        <Margin size={[1, 0]}>
          <Text textRole="blackPrimary" type="headline">
            {_.first(data) && _.nth(data, 1).bodyText}
          </Text>
        </Margin>
      </Stack>
    </Center>
  );
};
export const Main = () => {
  const history = useHistory();
  const jumpToBeginning = () => {
    history.push("/registration/beginning");
  };
  return (
    <Stack>
      <Padding size={[0, 2]}>
        <Grid mobiletGriddGap="1" mobileRepeatColumn={4}>
          <GridPlace mobileGridColumn="2/4" gridRow="1 / span 1">
            <Margin size={[12, 0, 0]}>
              <Queue justifyContent="center">
                <Text alignment="center" bold role="blackPrimary" type="title3">
                  Registration not found
                </Text>
              </Queue>
            </Margin>
          </GridPlace>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <Margin size={[3.375, 9, 3.375, 8.625]}>
              <Queue justifyContent="center">
                <Text alignment="center">
                  Please register to continue selection process
                </Text>
              </Queue>
            </Margin>
          </GridPlace>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <Margin size={[1, 18, 7.5]}>
              <Queue justifyContent="center">
                <Button
                  onClick={jumpToBeginning}
                  type="primary"
                  buttonStyle="fill"
                  size="small"
                >
                  REGISTER
                </Button>
              </Queue>
            </Margin>
          </GridPlace>
        </Grid>
      </Padding>
      <PhoneRectangle />
      <Overlay bottom={0}>
        <Triangle />
      </Overlay>
      <Overlay right={0} bottom={0}>
        <Rectangle />
      </Overlay>
      <Overlay bottom={0} right={0}></Overlay>
    </Stack>
  );
};
export const Beginning = () => {
  const [status, setStatus] = useState("beginning");
  const [activeStep, setActiveStep] = useState(16.66);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 16.66);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 16.66);
  };
  return (
    <Theme>
      <GlobalThemeStyle />
      <Queue>
        <Padding size={[2.5, 2]}>
          <NestAcademy />
        </Padding>
      </Queue>
      <ProgressBarThin
        lineRole="successLine"
        lineHeight="4px"
        transition="0.5"
        progress={activeStep}
      />
      <Container>
        {status === "beginning" && (
          <ForWhoPage
            handleNext={handleNext}
            handleBack={handleBack}
            setStatus={setStatus}
          />
        )}
        {status === "name-changing" && (
          <NameChanging
            handleNext={handleNext}
            handleBack={handleBack}
            setStatus={setStatus}
          />
        )}
        {status === "info" && (
          <Informarion
            handleNext={handleNext}
            handleBack={handleBack}
            setStatus={setStatus}
          />
        )}
        {status === "personal-info" && (
          <PersonalInfoPage
            handleNext={handleNext}
            handleBack={handleBack}
            setStatus={setStatus}
          />
        )}
        {status === "second" && (
          <HopSecondPage
            handleNext={handleNext}
            handleBack={handleBack}
            setStatus={setStatus}
          />
        )}
        {status === "success" && (
          <SuccessPage
            handleNext={handleNext}
            handleBack={handleBack}
            setStatus={setStatus}
          />
        )}
      </Container>
      {status === "first" && (
        <HopFirstPage
          handleNext={handleNext}
          handleBack={handleBack}
          setStatus={setStatus}
        />
      )}
    </Theme>
  );
};
export const ForWhoPage = (props) => {
  const history = useHistory();
  const backToMainPage = () => {
    history.push("/registration");
    props.handleBack();
  };
  const [areYou, setYou] = useState(false);
  const [isOther, setOther] = useState(false);
  const handleCheckYou = () => {
    if (isOther) {
      setOther(false);
    }
    setYou(true);
  };
  const handleCheckOther = () => {
    if (areYou) {
      setYou(false);
    }
    setOther(true);
  };
  const handleClick = (status) => {
    props.setStatus(status);
    props.handleNext();
  };
  return (
    <Padding size={[0, 2]}>
      <Grid mobiletGriddGap="1" mobileRepeatColumn={4}>
        <GridPlace mobileGridColumn="1/4" gridRow="1 / span 1">
          <Text type="title3" bold role="blackPrimary">
            Та хэнд зориулж бүртгэл үүсгэж байна вэ ?
          </Text>
          <Margin size={3} />
        </GridPlace>
        <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
          <Border
            onClick={handleCheckYou}
            width="100%"
            radius="large"
            role={areYou ? "success" : "line"}
            borderStyle="solid"
            borderSize="1"
          >
            <Padding size={[3, 2.5, 2.5, 2.2]}>
              <Queue>
                <UserIcon />
                <Margin size={[0, 0, 0, 1]}>
                  <Stack>
                    <Text type="headline" bold>
                      Өөртөө
                    </Text>
                    <Padding size={0.3} />
                    <Text type="headline">Зөвхөн өөртөө</Text>
                  </Stack>
                </Margin>
                <Overlay right={3.375}>
                  {areYou ? <CheckboxIcon /> : <CheckIcon />}
                </Overlay>
              </Queue>
            </Padding>
          </Border>
          <Margin size={1.5} />
          <Border
            onClick={handleCheckOther}
            width="100%"
            radius="large"
            role={isOther ? "success" : "line"}
            borderStyle="solid"
            borderSize="1"
          >
            <Padding size={[3, 2.5, 2.5, 2.2]}>
              <Queue>
                <UsersIcon />
                <Margin size={[0, 0, 0, 1.75]}>
                  <Stack>
                    <Text type="headline" bold>
                      Бусад
                    </Text>
                    <Padding size={0.3} />
                    <Text type="headline">Хүүхэд, дүү, Найз</Text>
                  </Stack>
                </Margin>
                <Overlay right={3.375}>
                  {isOther ? <CheckboxIcon /> : <CheckIcon />}
                </Overlay>
              </Queue>
            </Padding>
          </Border>
          <Margin size={[27, 0]} />
        </GridPlace>
        <GridPlace mobileGridColumn="1/3" gridRow="1 / span 1">
          <Button
            onClick={backToMainPage}
            buttonWidth="100%"
            size="large"
            type="primary"
            buttonStyle="ghost"
          >
            Буцах
          </Button>
        </GridPlace>
        <GridPlace mobileGridColumn="3/5" gridRow="1 / span 1">
          <Button
            onClick={() => handleClick("name-changing")}
            buttonWidth="100%"
            disabled={isOther || areYou ? false : true}
            size="large"
            type="primary"
            buttonStyle="fill"
          >
            Дараах
          </Button>
        </GridPlace>
      </Grid>
    </Padding>
  );
};
export const NameChanging = (props) => {
  const handleBack = (status) => {
    props.setStatus(status);
    props.handleBack();
  };
  const handleNext = (status) => {
    props.setStatus(status);
    props.handleNext();
  };
  return (
    <Stack>
      <Padding size={[0, 2]}>
        <Grid mobiletGriddGap="1" mobileRepeatColumn={4}>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <NestLogoName />
          </GridPlace>
          <GridPlace mobileGridColumn="1/3" gridRow="1 / span 1">
            <Text type="title3" bold role="blackPrimary">
              Та энэ нэрээр үргэлжлүүлэх үү?
            </Text>
          </GridPlace>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <Margin size={[1.5, 0, 2]}>
              <Text type="body" fontFamily="Montserrat">
                Хэрвээ та өөр нэрээр бүртгүүлэх бол нэр засаж оруулна уу
              </Text>
            </Margin>
          </GridPlace>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <Input label="Овог нэр"></Input>
            <Margin size={[19, 0]}></Margin>
          </GridPlace>
          <GridPlace mobileGridColumn="1/3" gridRow="1 / span 1">
            <Button
              onClick={() => handleBack("beginning")}
              buttonWidth="100%"
              size="large"
              type="primary"
              buttonStyle="ghost"
            >
              Буцах
            </Button>
          </GridPlace>
          <GridPlace mobileGridColumn="3/5" gridRow="1 / span 1">
            <Button
              onClick={() => handleNext("info")}
              buttonWidth="100%"
              disabled={false}
              size="large"
              type="primary"
              buttonStyle="fill"
            >
              Дараах
            </Button>
          </GridPlace>
        </Grid>
      </Padding>
    </Stack>
  );
};
export const Informarion = (props) => {
  const handleBack = (status) => {
    props.setStatus(status);
    props.handleBack();
  };
  const handleNext = (status) => {
    props.setStatus(status);
    props.handleNext();
  };
  return (
    <Stack>
      <Padding size={[0, 2]}>
        <Grid mobiletGriddGap="1" mobileRepeatColumn={4}>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <NestLogoName />
          </GridPlace>
          <GridPlace mobileGridColumn="1/4" gridRow="1 / span 1">
            <Text type="title3" bold role="blackPrimary">
              Хувийн мэдээлэл
            </Text>
          </GridPlace>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <Margin size={[1.5, 0, 2]}>
              <Text type="body" fontFamily="Montserrat">
                Мэдээллийг үнэн зөв бөглсөнөөр бид танд тохирсон хөтөлбөрийг
                санал болгож чадах юм.
              </Text>
            </Margin>
          </GridPlace>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <Text type="body" bold role="blackPrimary">
              Төрсөн огноо
            </Text>
            <Margin size={1.5} />
            <Input label="YYYY/MM/DD"></Input>
            <Margin size={[1.5, 0]}></Margin>
          </GridPlace>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <Text type="body" bold role="blackPrimary">
              Хүйс
            </Text>
            <Margin size={1.5} />
            <Queue justifyContent="space-between">
              <SelectablePill icon={<MaleIcon />} text="Эрэгтэй" />
              <SelectablePill icon={<FemaleIcon />} text="Эмэгтэй" />
              <SelectablePill icon={<NonBinaryIcon />} text="Эмэгтэй" />
            </Queue>
            <Margin size={[10, 0]}></Margin>
          </GridPlace>
          <GridPlace mobileGridColumn="1/3" gridRow="1 / span 1">
            <Button
              onClick={() => handleBack("name-changing")}
              buttonWidth="100%"
              size="large"
              type="primary"
              buttonStyle="ghost"
            >
              Буцах
            </Button>
          </GridPlace>
          <GridPlace mobileGridColumn="3/5" gridRow="1 / span 1">
            <Button
              onClick={() => handleNext("first")}
              buttonWidth="100%"
              disabled={false}
              size="large"
              type="primary"
              buttonStyle="fill"
            >
              Дараах
            </Button>
          </GridPlace>
        </Grid>
      </Padding>
    </Stack>
  );
};
export const HopFirstPage = (props) => {
  const handleBack = (status) => {
    props.setStatus(status);
    props.handleBack();
  };
  const handleNext = (status) => {
    props.setStatus(status);
    props.handleNext();
  };
  return (
    <Stack>
      <Container>
        <Padding size={[0, 2]}>
          <Grid mobiletGriddGap="1" mobileRepeatColumn={4}>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <NestLogoName />
            </GridPlace>
            <GridPlace mobileGridColumn="1/4" gridRow="1 / span 1">
              <Text type="title3" bold role="blackPrimary">
                Танд санал болгож буй хөтөлбөр
              </Text>
            </GridPlace>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <Margin size={[1.5, 0, 2]}>
                <Text type="body" fontFamily="Montserrat">
                  14-17 насныханд зориулсан сурагч инжинер бэлтгэх хөтөлбөр.
                  Нийслэлийн авто замын түгжрэлийг бууруулах.
                </Text>
              </Margin>
            </GridPlace>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <Button
                trailingIcon={<RightChevronIcon width="16" height="16" />}
                buttonWidth="100%"
                size="large"
                type="primary"
                buttonStyle="ghost"
              >
                Дэлгэрэнгүй
              </Button>
              <Margin size={[12, 0]}></Margin>
            </GridPlace>
            <GridPlace mobileGridColumn="1/3" gridRow="1 / span 1">
              <Button
                onClick={() => handleBack("info")}
                buttonWidth="100%"
                size="large"
                type="primary"
                buttonStyle="ghost"
              >
                Буцах
              </Button>
            </GridPlace>
            <GridPlace mobileGridColumn="3/5" gridRow="1 / span 1">
              <Button
                onClick={() => handleNext("second")}
                buttonWidth="100%"
                disabled={false}
                size="large"
                type="primary"
                buttonStyle="fill"
              >
                Дараах
              </Button>
            </GridPlace>
          </Grid>
        </Padding>
      </Container>
    </Stack>
  );
};
export const PersonalInfoPage = (props) => {
  const handleBack = (status) => {
    props.setStatus(status);
    props.handleBack();
  };
  const handleNext = (status) => {
    props.setStatus(status);
    props.handleNext();
  };
  return (
    <Padding size={[0, 2]}>
      <Grid mobiletGriddGap="1" mobileRepeatColumn={4}>
        <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
          <NestLogoName />
        </GridPlace>
        <GridPlace mobileGridColumn="1/4" gridRow="1 / span 1">
          <Text type="title3" bold role="blackPrimary">
            Хувийн мэдээлэл
          </Text>
        </GridPlace>
        <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
          <Margin size={[1.5, 0, 2]}>
            <Text type="body" fontFamily="Montserrat">
              Та бидэнд үнэн зөв мэдээлэл өгсөнөөр бүртгэл амжилттай дуусна
            </Text>
          </Margin>
        </GridPlace>
        <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
          <Input label="Сургууль" />
          <Margin size={1} />
          <Input label="Анги" />
          <Margin size={[5, 0]}></Margin>
        </GridPlace>
        <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
          <Text bold type="headline" role="blackPrimary">
            Холбоо барих
          </Text>
          <Margin size={1.5} />
          <Input label="И-мейл" />
          <Margin size={1} />
          <Input label="Яааралтай үед холбоо барих" />
          <Margin size={[5, 0]}></Margin>
          <Text bold type="headline" role="blackPrimary">
            Хаанаас олж мэдсэн
          </Text>
          <Margin size={1.5} />
          <Input label="- Сонгоно уу" />
        </GridPlace>
        <GridPlace mobileGridColumn="1/3" gridRow="1 / span 1">
          <Button
            onClick={() => handleBack("first")}
            buttonWidth="100%"
            size="large"
            type="primary"
            buttonStyle="ghost"
          >
            Буцах
          </Button>
        </GridPlace>
        <GridPlace mobileGridColumn="3/5" gridRow="1 / span 1">
          <Button
            onClick={() => handleNext("second")}
            buttonWidth="100%"
            disabled={false}
            size="large"
            type="primary"
            buttonStyle="fill"
          >
            Дараах
          </Button>
        </GridPlace>
      </Grid>
    </Padding>
  );
};
export const HopSecondPage = (props) => {
  const handleBack = (status) => {
    props.setStatus(status);
    props.handleBack();
  };
  const handleNext = (status) => {
    props.setStatus(status);
    props.handleNext();
  };
  return (
    <Container>
      <Padding size={[0, 2]}>
        <Grid mobiletGriddGap="1" mobileRepeatColumn={4}>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <NestLogoName />
          </GridPlace>
          <GridPlace mobileGridColumn="1/4" gridRow="1 / span 1">
            <Text type="title3" bold role="blackPrimary">
              Танд санал болгож
              <br /> буй хөтөлбөр
            </Text>
            <Margin size={3} />
          </GridPlace>
          <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
            <Border
              radius="border"
              borderSize="1"
              borderStyle="solid"
              role="line"
            >
              <Margin size={2}>
                <Queue justifyContent="space-between">
                  <Stack size={1}>
                    <Queue>
                      <Text>HOP хөтөлбөр</Text>
                      <Text>
                        14-17 насныханд зориулсан
                        <br /> сурагч инжинер бэлтгэх хөтөлбөр.
                      </Text>
                    </Queue>
                  </Stack>
                </Queue>
                <Margin size={1.25} />
                <Button
                  buttonWidth="100%"
                  size="large"
                  type="primary"
                  buttonStyle="fill"
                >
                  Дэлгэрэнгүй
                </Button>
              </Margin>
            </Border>
            <Margin size={[12, 0]}></Margin>
          </GridPlace>
          <GridPlace mobileGridColumn="1/3" gridRow="1 / span 1">
            <Button
              onClick={() => handleBack("first")}
              buttonWidth="100%"
              size="large"
              type="primary"
              buttonStyle="ghost"
            >
              Буцах
            </Button>
          </GridPlace>
          <GridPlace mobileGridColumn="3/5" gridRow="1 / span 1">
            <Button
              onClick={() => handleNext("success")}
              buttonWidth="100%"
              disabled={false}
              size="large"
              type="primary"
              buttonStyle="fill"
            >
              Дараах
            </Button>
          </GridPlace>
        </Grid>
      </Padding>
    </Container>
  );
};
export const SuccessPage = (props) => {
  const handleBack = (status) => {
    props.setStatus(status);
    props.handleBack();
  };
  const handleNext = (status) => {
    props.setStatus(status);
    props.handleNext();
  };
  return (
    <Stack>
      <Container>
        <Padding size={[0, 2]}>
          <Grid mobiletGriddGap="1" mobileRepeatColumn={4}>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <NestLogoName />
            </GridPlace>
            <GridPlace mobileGridColumn="2/4" gridRow="1 / span 1">
              <SuccessIconBackground />
            </GridPlace>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <Margin size={[2, 0, 1.5]}>
                <Queue justifyContent="center">
                  <Text role="blackPrimary" type="title3" bold>
                    Бүртгэл амжилттай
                  </Text>
                </Queue>
              </Margin>
            </GridPlace>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <Queue justifyContent="center">
                <Text alignment="center" type="body" fontFamily="Montserrat">
                  Та HOPE хөтөлбөрт амжилттай <br />
                  бүртгүүллээ
                </Text>
              </Queue>
            </GridPlace>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <Margin size={[4.5, 0.3, 5]}>
                <Text bold alignment="center" type="headline">
                  Шалгалт өгөх
                </Text>
              </Margin>
              <Text type="body">
                Та шалгалтаа одоо өгч болно. Шалгалтаа одоо өгөх дараа өгөх ямар
                ч ялгаа байхгүй
              </Text>
            </GridPlace>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <Margin size={[2, 0, 5]}>
                <Link to="/examination">
                  <Button
                    buttonWidth="100%"
                    size="large"
                    type="primary"
                    buttonStyle="fill"
                  >
                    Товчлуур
                  </Button>
                </Link>
              </Margin>
              <Margin size={[0, 0, 3.5]}>
                <Text bold alignment="center" type="headline">
                  Шалгалт өгөх
                </Text>
              </Margin>
              <Text type="body">
                Элсэгч хаанаас ч энэ холбоосийг ашиглаж шалгалтаа өгч болно
              </Text>
            </GridPlace>
            <GridPlace mobileGridColumn="1/5" gridRow="1 / span 1">
              <Button
                leadingIcon={<ShareIcon />}
                onClick={() => handleNext("success")}
                buttonWidth="100%"
                size="large"
                type="primary"
                buttonStyle="ghost"
              >
                Share
              </Button>
            </GridPlace>
          </Grid>
        </Padding>
      </Container>
    </Stack>
  );
};
export const AirtableDataReader = (callback) => {
  bases("UserTable")
    .select({
      maxRecords: 1,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          const userData = [
            {
              birth: record.get("birth"),
              fullName: record.get("Fullname"),
              school: record.get("school"),
              phoneNumber: record.get("phonenumber"),
              eMail: record.get("email")
            }
          ];
          callback(userData);
        });

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};

export const AirtableDataUpdater = () => {
  bases("UserTable").update(
    "rec0rkGeLExlrmIyw",
    {
      Fullname: "Narantsatsralt",
      email: "narantsatsralt@gmail.com",
      school: "Mongolian-Russian joint school",
      birth: "2002-12-05",
      phonenumber: "99974374"
    },
    function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
};

export const AirtableDataCreater = (formData) => {
  bases("UserTable").create(
    {
      Fullname: `bumaa`,
      school: "bavuu",
      email: "todo@gmail.com",
      birth: "12/5/2002",
      phonenumber: "89374477"
    },
    function (err, record) {
      if (err) {
        console.log("err==>", err);
        return;
      }
      console.log("==> ", record.getId());
    }
  );
};

export const SelectablePill = ({ icon, text }) => {
  const [status, setStatus] = useState(false);
  const handleSelect = () => {
    setStatus(true);
  };
  if (status) {
    setStatus(false);
  }
  return (
    <Border
      width={15}
      radius="large"
      role={status ? "success" : "line"}
      borderStyle="solid"
      borderSize="1"
      onClick={handleSelect}
    >
      <Padding size={1.25}>
        <Margin size={1.75}>
          <Overlay right={1} top={1}>
            {status ? <CheckboxIcon /> : <CheckIcon />}
          </Overlay>
        </Margin>
        <Stack>
          <Margin size={0.75} />
          <Text alignment="center">{icon}</Text>
          <Margin size={[0, 1.75, 1.75]}>
            <Text alignment="center" type="headline">
              {text}
            </Text>
          </Margin>
        </Stack>
      </Padding>
    </Border>
  );
};
