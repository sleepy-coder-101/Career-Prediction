import React from "react";

import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-betwenn",
      }}
    >
      <Box sx={{ mr: "3rem", minWidth: "12rem" }}>
        <Typography
          variant="subtitle2"
          color="text.primary"
          sx={{ fontSize: "1.5rem", textAlign: "left" }}
        >
          {props.trait}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          my: "2rem",
        }}
      >
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            minHeight: "2rem",
            borderRadius: "10px",
            // backgroundColor: "#ff0000",
            // "& .MuiLinearProgress-bar": {
            //   backgroundColor: "green",
            // },
          }}
        />
      </Box>
      <Box sx={{ ml: "3rem" }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ fontSize: "1.1rem" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const ResultBar = ({ percentage, trait }) => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel value={percentage} trait={trait} />
      </Box>
    </div>
  );
};

export default ResultBar;
