import React, { useState } from "react";
import _ from "lodash";
import {
  Grid,
  GridPlace,
  Margin,
  Queue,
  Stack,
  Text,
  Button,
  Center,
  Loading
} from "../../../components";
import useContentful from "../../../useContentful";

const Question = () => {
  const [questions, setQuestions] = useState([]);

  const queryNest = `{
		entranceTestCollection {
      items {
        question { url }
        option1 { url }
        option2 { url }
        option3 { url }
        option4 { url }
        id
        title
        answer
      }
    }
	}`;

  const { loading, data } = useContentful("entranceTest", queryNest);

  if (loading) {
    return <Loading />;
  }

  if (data && _.isEmpty(questions)) {
    setQuestions(data);
  }

  return (
    <Grid>
      {data && (
        <GridPlace>
          {questions.map((question, k) => (
            <QuestionData key={k} data={question} id={k} />
          ))}
        </GridPlace>
      )}
    </Grid>
  );
};

export default Question;

const QuestionData = ({ data, id }) => {
  const [selectKey, setSelecKey] = useState("");

  const handleClick = (key, answer) => {
    setSelecKey(key);
  };

  return (
    <Stack size={2}>
      <Margin size={[2, 2]}>
        <Queue justifyContent="space-between">
          <Text type="body">Асуулт № {id + 1}</Text>
          <Text
            type="body"
            bold
            role={selectKey === "" ? "blackPrimary" : "success"}
          >
            {selectKey === "" ? "Хариулаагүй" : "Хариулcан"}
          </Text>
        </Queue>
        <Margin size={[2, 0]}>
          <Text type="body" bold role="blackPrimary">
            {data.title}
          </Text>
        </Margin>
        <Grid space={1} columns={1}>
          <GridPlace>
            <Margin size={[2, 0]}>
              <Center>
                <img
                  style={{
                    maxWidth: "364px",
                    minWidth: "100px",
                    width: "100%",
                    objectFit: "cover"
                  }}
                  src={data.question.url}
                  alt="question"
                />
              </Center>
            </Margin>
          </GridPlace>
          <GridPlace>
            <Stack>
              <Queue>
                <Text>A</Text>
                <Margin size={[0, 1]}>
                  <img
                    style={{
                      maxWidth: "50px",
                      minWidth: "50px",
                      width: "50px",
                      objectFit: "cover"
                    }}
                    src={data.option1.url}
                    alt=""
                  />
                </Margin>
              </Queue>
              <Queue>
                <Text>B</Text>
                <Margin size={[0, 1]}>
                  <img
                    style={{
                      maxWidth: "50px",
                      minWidth: "50px",
                      width: "50px",
                      objectFit: "cover"
                    }}
                    src={data.option2.url}
                    alt=""
                  />
                </Margin>
              </Queue>
              <Queue>
                <Text>C</Text>
                <Margin size={[0, 1]}>
                  <img
                    style={{
                      maxWidth: "50px",
                      minWidth: "50px",
                      width: "50px",
                      objectFit: "cover"
                    }}
                    src={data.option3.url}
                    alt=""
                  />
                </Margin>
              </Queue>
              <Queue>
                <Text>D</Text>
                <Margin size={[0, 1]}>
                  <img
                    style={{
                      maxWidth: "50px",
                      minWidth: "50px",
                      width: "50px",
                      objectFit: "cover"
                    }}
                    src={data.option4.url}
                    alt=""
                  />
                </Margin>
              </Queue>
            </Stack>
          </GridPlace>
        </Grid>
        <Queue justifyContent="space-between">
          <Button
            width="23%"
            size="large"
            type="primary"
            active={selectKey === "A" ? false : true}
            buttonStyle="ghost"
            onClick={(e) => handleClick("A", "option1")}
          >
            A
          </Button>
          <Button
            width="23%"
            size="large"
            type="primary"
            active={selectKey === "B" ? false : true}
            buttonStyle="ghost"
            onClick={(e) => handleClick("B", "option2")}
          >
            B
          </Button>
          <Button
            width="23%"
            size="large"
            type="primary"
            active={selectKey === "C" ? false : true}
            buttonStyle="ghost"
            onClick={(e) => handleClick("C", "option3")}
          >
            C
          </Button>
          <Button
            width="23%"
            size="large"
            type="primary"
            active={selectKey === "D" ? false : true}
            buttonStyle="ghost"
            onClick={(e) => handleClick("D", "option4")}
          >
            D
          </Button>
        </Queue>
      </Margin>
    </Stack>
  );
};
