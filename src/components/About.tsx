// src/components/About.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Grid, Link, styled, useMediaQuery } from "@mui/material";
import { Facebook, GitHub, LinkedIn, Telegram } from "@mui/icons-material";

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

const About: React.FC = () => {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <Box my={4}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ borderBottom: "1px solid #b5b3b3", paddingBottom: "10px" }}
      >
        About Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: isTablet ? 20 : 5,
          flexDirection: isTablet ? "row" : "column",
        }}
      >
        <div>
          <Typography variant="body1" paragraph>
            I am a full stack developer with core technical skills,
            organizational ethics and discipline. I pursue to advance my career
            and I am ready to be flexible for this. My goal is to get a job in a
            company where I can use my skills and knowledge to deliver good
            results in the long term.
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Link
                href="https://www.linkedin.com/in/alina-pishak/"
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
                href="https://github.com/Alina-Pishak"
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
                href="https://t.me/Alina_Pishak"
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
                href="https://www.facebook.com/profile.php?id=61556659925696"
                target="_blank"
                color="inherit"
              >
                <SocialIcon>
                  <Facebook fontSize="large" sx={{ color: "#ffffff" }} />
                </SocialIcon>
              </Link>
            </Grid>
          </Grid>
        </div>
        <Avatar
          src="/img/Alina-Pishak.jpg"
          alt="Alina Pishak"
          sx={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            margin: "0 auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
