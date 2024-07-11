import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./ProfilePicture.css";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "auto",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "2rem 1rem", md: "0" },
      }}
    >
      {/* Profile Picture Section */}
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "auto", md: "70vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "2rem", md: "0" },
        }}
      >
        <Box
          sx={{
            width: { xs: 200, md: 300 },
            height: { xs: 200, md: 300 },
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          className="profile-border"
        >
          <img
            src="myImg.png"
            alt="Profile"
            style={{
              width: "90%",
              height: "90%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Grid>

      {/* Text Section */}
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "auto", md: "70vh" },
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          justifyContent: "center",
          paddingLeft: { xs: "0", md: "1.5rem" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontFamily: "YourChosenFont",
            color: "white",
          }}
        >
          HI, it's <strong style={{ color: "#00ffee" }}>ABDULLAH</strong>
        </Typography>
        <Typography
          sx={{
            fontSize: "2rem",
            fontFamily: "YourChosenFont",
            color: "white",
          }}
        >
          I'm a{" "}
          <strong style={{ color: "#00ffee" }} className="animate-text">
            Frontend Developer
          </strong>
        </Typography>
        <Typography
          sx={{
            fontFamily: "YourChosenFont",
            color: "white",
            marginTop: "1rem",
          }}
        >
          Passionate about crafting engaging and intuitive user experiences, I
          am a proficient frontend developer specializing in React, HTML, CSS,
          and JavaScript. With a keen eye for detail and a commitment to
          excellence, I transform ideas into elegant, functional, and responsive
          web applications. My journey in web development has equipped me with
          expertise in modern frontend technologies and frameworks, enabling me
          to create dynamic interfaces that captivate users. Whether it's
          building interactive single-page applications or optimizing UI/UX
          designs, I thrive on turning complex challenges into seamless
          solutions. Let's collaborate to bring your digital visions to life
          with creativity, precision, and a touch of innovation.
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <LinkedInIcon className="icon-hover" />
          <a
            href="https://github.com/abdullah222888"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="icon-hover" />
          </a>
          <a
            href="https://www.instagram.com/ibn.e.sanaullah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="icon-hover" />
          </a>
          <TwitterIcon className="icon-hover" />
        </Box>
        <Button
          variant="contained"
          color="primary"
          href="/Abdullah Resume.pdf"
          download="Abdullah_CV.pdf"
          sx={{
            backgroundColor: "black",
            color: "#00ffee",
            border: "2px solid #00ffee",
            borderRadius: "5px",
            marginTop: "1rem",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#00ffee",
              color: "black",
              transform: "scale(1.05)",
            },
          }}
        >
          Download CV
        </Button>
      </Grid>

      {/* Stats Section */}
      <Grid
        container
        sx={{
          width: "100%",
          marginTop: "2rem",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          paddingBottom: "2rem",
          gap: { xs: "1rem", md: "0" },
        }}
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#00ffee",
              textAlign: "center",
            }}
          >
            02
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "white", textAlign: "center" }}
          >
            Years
            <br />
            Experience
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#00ffee",
              textAlign: "center",
            }}
          >
            08
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "white", textAlign: "center" }}
          >
            Projects
            <br />
            Completed
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#00ffee",
              textAlign: "center",
            }}
          >
            10
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "white", textAlign: "center" }}
          >
            Technologies
            <br />
            Mastered
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#00ffee",
              textAlign: "center",
            }}
          >
            200+
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "white", textAlign: "center" }}
          >
            Code
            <br />
            Commits
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;