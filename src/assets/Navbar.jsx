import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { text: "HOME", link: "/" },
    { text: "SERVICES", link: "/services" },
    { text: "EDUCATION", link: "/education" },
    { text: "PROJECTS", link: "/projects" },
    { text: "CONTACT", link: "/contact" },
  ];

  return (
    <Grid container sx={{ paddingTop: "1rem", width: "100%", height: "40%" }}>
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "50%" },
          display: { xs: "flex", md: "block" },
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            left: 0,
          }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon sx={{ color: "#00ffee" }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: "4rem",
            color: "#00ffee",
            paddingLeft: "40px",
            fontWeight: "800",
            cursor: "pointer",
            fontFamily: "Roboto",
            transition: "0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              color: "#00ffee",
            },
          }}
        >
          ABDULLAH <span>.</span>
        </Typography>
      </Grid>

      <Grid
        container
        item
        sx={{
          width: "50%",
          listStyle: "none",
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          gap: "1.5rem",
          fontSize: "100%",
          fontWeight: "400",
        }}
      >
        {navItems.map((item) => (
          <Box
            component="li"
            key={item.text}
            sx={{
              cursor: "pointer",
              position: "relative",
              padding: "0.5rem",
              transition: "color 0.3s, transform 0.3s",
              "&:hover": {
                color: "#00ffee",
                transform: "scale(1.1)",
              },
              "&:hover::after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "#00ffee",
                transform: "scaleX(1)",
                transition: "transform 0.3s ease-in-out",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "#00ffee",
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <Link
              to={item.link}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {item.text}
            </Link>
          </Box>
        ))}
      </Grid>

      {/* Drawer for mobile screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.text}>
                <Link
                  to={item.link}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                  }}
                >
                  <ListItemText primary={item.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Grid>
  );
};

export default Navbar;
