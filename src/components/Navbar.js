import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import brewLogo from "../assets/Images/breLogoBlack.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigation = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSignIn = () => {
    navigation("/SignIn");
  };

  const handleNavigate = (path) => {
    navigation(path);
    setDrawerOpen(false); // Close the drawer after navigation
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        py: 2,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginX: "8%",
        }}
      >
        <img
          src={brewLogo}
          alt="Logo"
          style={{
            maxWidth: "150px", // Adjust the maxWidth as needed
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />

        {/* Tabs for larger screens */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Tabs value={false}>
            <Tab
              label="About"
              sx={{ color: "#000000", fontFamily: "Poppins" }}
              onClick={() => handleNavigate("/about")}
            />
            <Tab
              label="Blog"
              sx={{ color: "#000000", fontFamily: "Poppins" }}
              onClick={() => handleNavigate("/blog")}
            />
            <Tab
              label="Contact"
              sx={{ color: "#000000", fontFamily: "Poppins" }}
              onClick={() => handleNavigate("/contact")}
            />
            <Button
              onClick={handleSignIn}
              variant="contained"
              sx={{
                ml: 4,
                borderColor: "#000000",
                backgroundColor: "#FF6F61",
                color: "#F0F0F0",
                borderRadius: "20px",
                width: "150px",
                height: "40px",
                fontFamily: "Poppins",
              }}
              endIcon={<ArrowOutwardIcon />}
            >
              Sign In
            </Button>
          </Tabs>
        </Box>

        {/* Hamburger menu for smaller screens */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ color: "#000000" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => handleNavigate("/about")}>
            <ListItemText primary="About" sx={{ fontFamily: "Poppins" }} />
          </ListItem>
          <ListItem button onClick={() => handleNavigate("/blog")}>
            <ListItemText primary="Blog" sx={{ fontFamily: "Poppins" }} />
          </ListItem>
          <ListItem button onClick={() => handleNavigate("/contact")}>
            <ListItemText primary="Contact" sx={{ fontFamily: "Poppins" }} />
          </ListItem>
          <ListItem button>
            <Button
              variant="contained"
              onClick={handleSignIn}
              sx={{ width: "100%", fontFamily: "Poppins" }}
            >
              Sign In
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Nav;
