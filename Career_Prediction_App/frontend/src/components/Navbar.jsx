import React from "react";

import {
  Toolbar,
  AppBar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          mx: { xs: "1rem", md: "3rem" },
          my: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "1.7rem", md: "2.7rem" } }}
        >
          Career Prediction
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* <Button color="inherit" sx={{ fontSize: "1.1rem", ml: "2rem" }}>
            Features
          </Button> */}
          <Button color="inherit" sx={{ fontSize: "1.1rem", ml: "2rem" }}>
            About Model
          </Button>
          <Button color="inherit" sx={{ fontSize: "1.1rem", ml: "2rem" }}>
            About Us
          </Button>
        </Box>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
