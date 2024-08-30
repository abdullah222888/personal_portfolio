import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./skills.css"; // Import custom CSS for additional styling

const skills = [
  { name: "React", logo: "logo192.png" },
  { name: "JavaScript", logo: "js2logo.png" },
  { name: "HTML", logo: "html1logo.png" },
  { name: "CSS", logo: "css1logo.png" },
  { name: "Material-UI", logo: "muilogo.png" },
  { name: "WordPress", logo: "wordlogo.png" },
];

const Skills = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Makes the box full screen height
        textAlign: "center",
        p: 3,
      }}
    >
      <Box>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          Skills
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="card-motion"
              >
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: "#f7f7f7",
                    width: "160px",
                    height: "200px",
                    transition: "background-color 0.3s, transform 0.3s",
                  }}
                  className="skill-card"
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="skill-logo"
                      />
                      <Typography
                        variant="h6"
                        sx={{ mt: 2, color: "#333", fontWeight: "500" }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
