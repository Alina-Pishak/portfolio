// src/components/About.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const About: React.FC = () => {
  return (
    <Box my={4}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ borderBottom: "1px solid #b5b3b3", paddingBottom: "10px" }}
      >
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I am a frontend developer with experience in React and TypeScript. I
        have worked on various projects and enjoy creating user-friendly and
        responsive web applications.
      </Typography>
    </Box>
  );
};

export default About;
