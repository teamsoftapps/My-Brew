import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
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
      <Toolbar>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          px={{ xs: 2, sm: 2, md: 4 }}
        >
          {/* Logo */}
          <Grid item xs={4} sm={2} md={2}>
            <Box
              sx={{
                maxWidth: { xs: "110px", sm: "140px", md: "220px" },
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={brewLogo}
                alt="Logo"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          {/* Tabs for larger screens */}
          <Grid
            item
            sm={8} // Show on small screens and up
            md={8}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }} // Use flex to align items
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              {/* Flexbox for horizontal alignment */}
              <Button
                onClick={() => handleNavigate("/about")}
                sx={{ color: "#000000", fontFamily: "Poppins" }}
              >
                About
              </Button>
              <Button
                onClick={() => handleNavigate("/blog")}
                sx={{ color: "#000000", fontFamily: "Poppins", mx: 2 }}
              >
                Blog
              </Button>
              <Button
                onClick={() => handleNavigate("/contact")}
                sx={{ color: "#000000", fontFamily: "Poppins" }}
              >
                Contact
              </Button>
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
            </Box>
          </Grid>

          {/* Hamburger menu for small screens */}
          <Grid
            item
            xs={2}
            sx={{ display: { xs: "block", sm: "none" } }} // Show on xs only
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: "#000000" }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
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
