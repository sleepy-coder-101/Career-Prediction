import React, { useEffect, useState } from "react";

import { Typography, Box } from "@mui/material";

import { ResultBar } from "../../components/index";

const Results = () => {
  const [scores, setScores] = useState([]);
  const [mbtiPersonality, setMbtiPersonality] = useState("");

  const fetchResults = async () => {
    const response = await fetch(
      "http://localhost:5000/answer/get-personality",
      // "https://career-prediction-backend.sleepycoder101.xyz/answer/get-personality",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      console.log("Something wrong");
    } else {
      const res = await response.json();
      const { data, personalityType } = res;
      console.log(data);
      console.log(personalityType);
      setScores(data);
      setMbtiPersonality(personalityType);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "1000px",
          textAlign: "center",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "2.1rem", fontWeight: "400", mt: "3rem", mb: "2rem" }}
        >
          Your Personality Score is:
        </Typography>

        {scores.map((score) => {
          // console.log(scores);
          console.log(score);
          return (
            <ResultBar
              key={`${score.trait}-${score.percentage}`}
              percentage={score.percentage}
              trait={score.trait}
            />
          );
        })}

        <Typography
          variant="h5"
          sx={{ fontSize: "2.1rem", fontWeight: "400", mt: "3rem", mb: "2rem" }}
        >
          Your MBTI Personality Type is: {mbtiPersonality}
        </Typography>
      </Box>
    </Box>
  );
};

export default Results;
