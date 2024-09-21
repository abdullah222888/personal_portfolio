import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const ProjectCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  borderRadius: "10px",
  overflow: "hidden",
  borderColor: "#00ffee",
  borderWidth: "3px",
  borderStyle: "solid",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column", // Stack image and content vertically
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
}));

// Ensure the image takes up full width and maintains its aspect ratio
const ProjectImage = styled(CardMedia)({
  width: "100%",
  height: "auto", // Allow the height to adjust automatically based on the image
  objectFit: "contain", // Contain the image without cropping
  aspectRatio: "16/9", // Ensures the aspect ratio stays consistent
});

const ProjectCardContent = styled(CardContent)(({ theme }) => ({
  padding: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "100%", // Ensure content covers the full card height
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // Align content at the bottom
  "&:hover": {
    opacity: 1,
  },
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  marginRight: "10px",
  backgroundColor: "#00ffee",
  color: "black",
  "&:hover": {
    backgroundColor: "#00c6c6",
    color: "black",
  },
}));

const Projects = () => {
  const projectData = [
    {
      image: "logo_transparent.png",
      name: "INTERIOR-CROWD",
      description:
        "An innovative platform featuring a diverse selection of designers and products to enhance interior designs.",
      link: "https://github.com/abdullah222888/zgolli_fe",
    },
    {
      image: "rafflepro.png",
      name: "RAFFLE-MANIA",
      description:
        "An engaging e-commerce app with a sleek frontend using HTML, CSS, JavaScript, and Material-UI.",
      link: "https://github.com/abdullah222888/Raffle_mania",
    },
    {
      image: "To-DO-list.png",
      name: "TO-DO-LIST",
      description:
        "A versatile To-Do List app with an exercise section and a notes feature for organizing tasks.",
      link: "https://github.com/abdullah222888/To-Do-List",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontSize: "40px", fontWeight: "800" }}
            >
              PROJECTS
            </Typography>
          </Grid>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard>
                <ProjectImage
                  component="img"
                  image={project.image}
                  alt={project.name}
                />
                <ProjectCardContent>
                  <Typography variant="h6" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <Box sx={{ mt: 2 }}>
                    <ProjectButton
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </ProjectButton>
                    <ProjectButton variant="contained">Read More</ProjectButton>
                  </Box>
                </ProjectCardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Projects;
