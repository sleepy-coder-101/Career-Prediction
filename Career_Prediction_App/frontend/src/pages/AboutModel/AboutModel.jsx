import React from "react";
import { Container, Typography, Button } from "@mui/material/";
import Carousell from "./carousell";

import { images } from "../../constants/";
import "./AboutModel.css";

const AboutModel = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ paddingLeft: "140px", paddingRight: "140px" }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginTop: "28px" }}
      >
        {/* Five Factor Model */}
      </Typography>

      <container maxWidth="sm" style={{ textAlign: "center" }}>
        <Carousell />
      </container>

      <container
        maxWidth="sm"
        style={{ paddingLeft: "70px", paddingRight: "70px" }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", fontWeight: "400", mt: "2rem", mb: "1rem" }}
        >
          The Five-Factor Model (FFM), also known as the Big Five personality
          traits, is a widely accepted model of personality that identifies five
          major dimensions of personality: openness, conscientiousness,
          extraversion, agreeableness, and neuroticism.
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", fontWeight: "400", mt: "2rem", mb: "1rem" }}
        >
          The FFM has been extensively studied and has been found to be
          applicable across cultures and age groups. It is commonly used in
          psychology, sociology, and other social sciences to study personality
          and its impact on behavior and outcomes.
        </Typography>
      </container>
    </Container>
  );
};

export default AboutModel;
