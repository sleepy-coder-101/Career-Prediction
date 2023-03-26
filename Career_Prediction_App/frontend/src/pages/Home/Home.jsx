import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Button } from "@mui/material/";
import { QuestionCard } from "../../components/index";
import { questions } from "../../constants/index";

const Home = () => {
  const navigate = useNavigate();

  const [responses, setResponses] = useState([]);

  const submitResponse = async (event) => {
    event.preventDefault();

    // const res = await fetch("http://localhost:5000/answer/submit-response", {
    // https://career-prediction-backend.sleepycoder101.xyz/answer/submit-response
    const res = await fetch("http://localhost:5000/answer/submit-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answerArray: responses,
      }),
    });

    if (res.status !== 200) {
      console.log("Error in sending responses");
    } else {
      console.log("Data was sent to Backend");
    }

    navigate("/results");
  };

  const handleFormChange = (data) => {
    // console.log("Answer were recieved here", data);

    let newArray = responses.filter((response) => {
      return response.no !== data.no;
    });
    setResponses([...newArray, data]);

    console.log(responses);
  };

  return (
    <div>
      <Container
        // mxaWidth="false"
        component="form"
        onSubmit={submitResponse}
        sx={{
          minWidth: "100%",
          mx: "0rem",
          textAlign: "center",
        }}
      >
        {questions.map((question) => (
          <QuestionCard
            key={question.no}
            question={question.text}
            no={question.no}
            onRadioClick={handleFormChange}
          />
        ))}

        <Button
          type="submit"
          sx={{
            width: "9rem",
            fontSize: "1.2rem",
            p: "0.8rem",
            mb: "2rem",
            letterSpacing: "0.2rem",
          }}
          variant="contained"
          // onClick={submitResponse}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Home;
