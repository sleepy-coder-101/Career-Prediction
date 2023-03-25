import React, { useEffect, useState } from "react";

import { Typography, Box } from "@mui/material";

import { ResultBar } from "../../components/index";

const Results = () => {
  const [scores, setScores] = useState([]);

  const fetchResults = async () => {
    const response = await fetch(
      // "http://localhost:5000/answer/get-personality",
      "https://career-prediction-backend.sleepycoder101.xyz/answer/get-personality",
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
      const { data } = res;
      console.log(data);
      setScores(data);
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
          sx={{ fontSize: "2.1rem", fontWeight: "400", mt: "5rem", mb: "2rem" }}
        >
          Your Personality Score is:
        </Typography>

        {scores.map((score) => {
          return (
            <ResultBar percentage={score.percentage} trait={score.trait} />
          );
        })}
      </Box>
    </Box>
  );
};

export default Results;
