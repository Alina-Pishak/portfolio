// src/components/Footer.tsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { LinkedIn, GitHub, Telegram, Facebook } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const SocialIcon = styled(Box)({
  width: 50,
  height: 50,
  borderRadius: "50%",
  backgroundColor: "#424242",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 8px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#616161",
  },
});

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 4, mt: 4 }} component="footer">
      <Grid container justifyContent="center" spacing={2} sx={{ mb: 2 }}>
        <Grid item>
          <Link
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            color="inherit"
          >
            <SocialIcon>
              <LinkedIn fontSize="large" sx={{ color: "#ffffff" }} />
            </SocialIcon>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://github.com/your-github"
            target="_blank"
            color="inherit"
          >
            <SocialIcon>
              <GitHub fontSize="large" sx={{ color: "#ffffff" }} />
            </SocialIcon>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://t.me/your-telegram"
            target="_blank"
            color="inherit"
          >
            <SocialIcon>
              <Telegram fontSize="large" sx={{ color: "#ffffff" }} />
            </SocialIcon>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://facebook.com/your-facebook"
            target="_blank"
            color="inherit"
          >
            <SocialIcon>
              <Facebook fontSize="large" sx={{ color: "#ffffff" }} />
            </SocialIcon>
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body1" align="center" gutterBottom>
        Email:{" "}
        <Link href="mailto:alinapishak@icloud.com" color="inherit">
          alinapishak@icloud.com
        </Link>
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Phone:{" "}
        <Link href="tel:+380687335656" color="inherit">
          +38 068 733 56 56
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
