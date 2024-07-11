import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ProjectCard = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  borderColor: "#00ffee",
  borderWidth: "3px",
  borderStyle: "solid",
  backgroundColor: theme.palette.background.paper,
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#fff",
  },
}));

const ProjectCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: "#00ffee",
  color: "black",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#00ffee",
    color: "black",
  },
  display: "block",
  margin: "20px auto 0",
}));

const ProjectImage = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
  backgroundSize: "contain", // Ensure the image fits within the card without cropping
});

const Projects = () => {
  const projectData = [
    {
      image: "logo_transparent.png",
      name: "INTERIOR-CROWD",
      description:
        "This is a detailed description for Project 1. Here you can add more information about the project, its objectives, outcomes, and any other relevant details.",
      link: "https://github.com/abdullah222888/zgolli_fe",
    },
    {
      image: "rafflepro.png",
      name: "RAFFLE-MANIA",
      description:
        "This is a detailed description for Project 2. Include specifics about the design, the process, and any challenges faced during the project.",
      link: "https://github.com/abdullah222888/Raffle_mania",
    },
    {
      image: "To-DO-list.png",
      name: "TO-DO-LIST",
      description:
        "This is a detailed description for Project 3. You can talk about the materials used, the inspiration behind the project, and the final result.",
      link: "https://github.com/abdullah222888/To-Do-List",
    },
    {
      image: "logo_transparent.png",
      name: "Project 4",
      description:
        "This is a detailed description for Project 4. Mention the team members involved, the timeline, and the feedback received.",
      link: "https://github.com/user/project-4",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Project 5",
      description:
        "This is a detailed description for Project 5. Highlight the key features, the functionality, and the impact of the project.",
      link: "https://github.com/user/project-5",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Project 6",
      description:
        "This is a detailed description for Project 6. Provide an overview of the project goals, the execution, and the final presentation.",
      link: "https://github.com/user/project-6",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
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
              <ProjectImage image={project.image} alt={project.name} />
              <ProjectCardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "30px" }}
                >
                  {project.name}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
                <ProjectButton
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </ProjectButton>
              </ProjectCardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
