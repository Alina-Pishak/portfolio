// src/components/Projects.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { styled } from "@mui/material/styles";
import projects from "../data/projects.json";

const HoverCard = styled(Card)({
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const Projects: React.FC = () => {
  return (
    <Box my={4}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          borderBottom: "1px solid #b5b3b3",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HoverCard>
              <CardActionArea
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: 485 }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </HoverCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
