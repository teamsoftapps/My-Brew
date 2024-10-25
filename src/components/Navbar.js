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
const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FFFFFF", py: 2, boxShadow: "none" }}
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
          alt="nothing"
          style={{ height: "3rem", width: "10vw", color: "#000" }}
        />

        {/* Tabs for larger screens */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Tabs value={false}>
            <Tab
              label="About"
              sx={{ color: "#000000", fontFamily: "Poppins" }}
            />
            <Tab
              label="Blog"
              sx={{ color: "#000000", fontFamily: "Poppins" }}
            />
            <Tab
              label="Contact"
              sx={{ color: "#000000", fontFamily: "Poppins" }}
            />
            <Button
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
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="About" sx={{ fontFamily: "Poppins" }} />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Blog" sx={{ fontFamily: "Poppins" }} />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Contact" sx={{ fontFamily: "Poppins" }} />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Button
              variant="contained"
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
