import React from "react";
import {
  Grid,
  GridPlace,
  Margin,
  Stack,
  Text,
  Center,
  Queue,
  Button
} from "../../../components";
import {
  NestExamProcess1,
  NestExamProcess2,
  NestExamProcess3,
  NestExamProcess4
} from "../../../assets";

const StepProcess = ({ step, handleChange }) => {
  const process = [
    {
      warningText: "Cанамж 1",
      contentText:
        "Элсэлтийн онлайн шалгалтыг нэг хүн нэг л удаа өгөх боломжтой.",
      component: <NestExamProcess1 />
    },
    {
      warningText: "Cанамж 2",
      contentText: "Шалгалт 30 асуултаас бүрдэх ба 30 минутад хийж гүйцэтгэнэ.",
      component: <NestExamProcess2 />
    },
    {
      warningText: "Cанамж 3",
      contentText:
        "Та шалгалтаас гарсан тохиолдолд таны оноо гүйцэтгэсэн ажлаар дүгнэгдэх болно.",
      component: <NestExamProcess3 />
    },
    {
      warningText: "Cанамж 4",
      contentText: "Хугацаа, Асуулт",
      answerText: "30 мин, 30 асуулт",
      component: <NestExamProcess4 />
    }
  ];
  return (
    <Grid>
      <GridPlace>
        {step === process.length - 1 ? (
          <>
            <Margin size={[2, 2]}>
              <Queue justifyContent="space-around">
                <Stack>
                  <Text type="body">
                    {process[step].contentText.split(",")[0]}
                  </Text>
                  <Text type="body" bold role="blackPrimary">
                    {process[step].answerText.split(",")[0]}
                  </Text>
                </Stack>
                <Stack>
                  <Text type="body">
                    {process[step].contentText.split(",")[1]}
                  </Text>
                  <Text type="body" bold role="blackPrimary">
                    {process[step].answerText.split(",")[1]}
                  </Text>
                </Stack>
              </Queue>
            </Margin>
            <Stack>
              <Center>{process[step].component}</Center>
            </Stack>
          </>
        ) : (
          <>
            <Margin size={[2, 2]}>
              <Text type="body" bold role="blackPrimary">
                {process[step].warningText}:
              </Text>
              <Text type="body"> {process[step].contentText}</Text>
            </Margin>
            <Stack>
              <Center>{process[step].component}</Center>
            </Stack>
          </>
        )}
      </GridPlace>
      <GridPlace>
        <Margin size={[2, 0]}>
          <Queue justifyContent="space-between">
            <Button
              width="47%"
              size="large"
              type="primary"
              buttonStyle="ghost"
              onClick={() => handleChange(process.length)}
            >
              Өмнөх
            </Button>
            <Button
              width="47%"
              size="large"
              type="primary"
              buttonStyle="fill"
              onClick={() => handleChange(process.length)}
            >
              Дараах
            </Button>
          </Queue>
        </Margin>
      </GridPlace>
    </Grid>
  );
};

export default StepProcess;
