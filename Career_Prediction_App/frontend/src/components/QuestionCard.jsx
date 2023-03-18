import React from "react";

import {
  Box,
  Card,
  CardContent,
  FormControl,
  Radio,
  RadioGroup,
  Typography,
  FormControlLabel,
} from "@mui/material";

const QuestionCard = ({ question, onRadioClick, no }) => {
  const handleChange = (event) => {
    const answer = {
      no,
      value: event.target.value,
    };

    onRadioClick(answer);
  };

  return (
    <Box
      sx={{
        mx: { xs: "1rem", md: "3rem" },
        my: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "1000px",
          minHeight: "190px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1rem",
          border: "1px solid ",
          boxShadow: "3px 3px #c0c0c0",
          // backgroundColor: "yellow",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.4rem", md: "1.9rem" },
            }}
          >
            {question}
          </Typography>

          <FormControl
            sx={{
              width: "100%",
              mt: "1rem",
              mb: "0rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              Strongly Disagree
            </Typography>

            <RadioGroup
              row
              name="radio button"
              className="radio-group"
              onChange={handleChange}
              sx={{
                // width: "100%",
                mx: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "nowrap",
              }}
            >
              <FormControlLabel
                value="1"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 45,
                        color: "#FF8886",
                      },
                    }}
                  />
                }
                sx={{ m: "0rem" }}
              />
              <FormControlLabel
                value="2"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 35,
                        color: "#FF8886",
                      },
                    }}
                  />
                }
                sx={{ m: "0rem" }}
              />
              <FormControlLabel
                value="3"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 30,
                        color: "#838383",
                      },
                    }}
                  />
                }
                sx={{ m: "0rem" }}
              />
              <FormControlLabel
                value="4"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 35,
                        color: "#90EE90",
                      },
                    }}
                  />
                }
                sx={{ m: "0rem" }}
              />
              <FormControlLabel
                value="5"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 45,
                        color: "#90EE90",
                      },
                    }}
                  />
                }
                sx={{ m: "0rem" }}
              />
            </RadioGroup>

            <Typography
              variant="subtitle1"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              Strongly Agree
            </Typography>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuestionCard;
