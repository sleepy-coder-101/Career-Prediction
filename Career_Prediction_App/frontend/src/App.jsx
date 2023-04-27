import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Results, AboutUs, AboutModel } from "./pages/index";
import { Navbar } from "./components/index";

// import ResultBar from "./components/ResultBar/ResultBar";

// import { Container, Button } from "@mui/material/";
// import { questions } from "./constants/data";
// import QuestionCard from "./components/QuestionCard/QuestionCard";

const App = () => {
  // const navigate = useNavigate();

  // const [allQuestions, setAllQuestions] = useState([]);
  // const [responses, setResponses] = useState([]);

  // const submitResponse = async (event) => {
  //   event.preventDefault();

  //   const res = await fetch("http://localhost:5000/answer/submit-response", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       answerArray: responses,
  //     }),
  //   });

  //   if (res.status !== 200) {
  //     console.log("Error in sending responses");
  //   } else {
  //     console.log("Data was sent to Backend");
  //   }

  //   navigate("/results");
  // };

  // const handleFormChange = (data) => {
  //   // console.log("Answer were recieved here", data);

  //   let newArray = responses.filter((response) => {
  //     return response.no !== data.no;
  //   });
  //   setResponses([...newArray, data]);

  //   console.log(responses);
  // };

  // const fetchQuestions = async () => {
  //   const response = await fetch(
  //     "http://localhost:5000/question/fetch-question",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   if (response.status !== 200) {
  //     console.log("Something wrong");
  //   } else {
  //     const res = await response.json();
  //     const { data } = res;
  //     setAllQuestions(data);
  //   }
  // };

  // useEffect(() => {
  //   fetchQuestions();
  // }, []);

  return (
    <div>
      <Navbar />
      {/* <ResultBar /> */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/results" exact element={<Results />} />
        <Route path="/aboutUs" exact element={<AboutUs />} />
        <Route path="/aboutModel" exact element={<AboutModel />} />
      </Routes>
      {/* <Container
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
      </Container> */}
    </div>
  );
};

export default App;
