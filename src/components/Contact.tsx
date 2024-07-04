// src/components/Contact.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Contact: React.FC = () => {
  return (
    <Box my={4}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ borderBottom: "1px solid #b5b3b3", paddingBottom: "10px" }}
      >
        Contact
      </Typography>
      <Typography variant="body1" paragraph>
        You can reach me at alinapishak@icloud.com.
      </Typography>
    </Box>
  );
};

export default Contact;
