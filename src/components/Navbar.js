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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import brewLogo from "../assets/Images/breLogoBlack.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/Images/avatar.png";
import beer from "../assets/Images/beer.png";
import noteBook from "../assets/Images/notebook.png";
import overView from "../assets/Images/overview.png";
import exit from "../assets/Images/exit.png";
import setting from "../assets/Images/settings.png";

const Nav = ({ isAuthenticated, onLogout }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const navigation = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSignIn = () => {
    navigation("/SignIn");
  };

  const handleNavigate = (path) => {
    navigation(path);
    setDrawerOpen(false);
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
          px={{ xs: 2, sm: 2, md: 12 }}
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
            sm={8}
            md={8}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={() => handleNavigate("/MyNotes")}
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
              {isAuthenticated ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    ml: 4,
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setTooltipVisible(true)}
                >
                  <Box
                    sx={{
                      width: { xs: "35px", sm: "50px", md: "50px" },
                      height: { xs: "35px", sm: "50px", md: "50px" },
                      borderRadius: "50%",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={avatar}
                      alt="Avatar"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {tooltipVisible && (
                    <Box
                      onMouseEnter={() => setTooltipVisible(true)}
                      onMouseLeave={() => setTooltipVisible(false)}
                      sx={{
                        opacity: 1,
                        transform: "translateY(0)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        position: "absolute",
                        top: "100%",
                        transform: "translateX(-50%) translateY(10px)",
                        backgroundColor: "#fff",
                        padding: 2,
                        borderRadius: 2,
                        border: "0.5px solid #bfbfbf",
                        zIndex: 1,
                        width: "250%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Tooltip content */}
                      <Box
                        onClick={() => {
                          navigation("/BrewCollection");
                        }}
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <img
                          src={beer}
                          alt="My Brews"
                          style={{
                            width: "15%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography
                          sx={{ mt: 1, color: "#000", width: "100%" }}
                        >
                          My Brews
                        </Typography>
                      </Box>

                      <Box
                        onClick={() => {
                          navigation("/ExploreBrews");
                        }}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <img
                          src={overView}
                          alt="View Brews"
                          style={{
                            width: "15%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography
                          sx={{ mt: 1, color: "#000", width: "100%" }}
                        >
                          View Brews
                        </Typography>
                      </Box>

                      <Box
                        onClick={() => {
                          navigation("/MyNotes");
                        }}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <img
                          src={noteBook}
                          alt="My Notes"
                          style={{
                            width: "20%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography
                          sx={{ mt: 1, color: "#000", width: "100%" }}
                        >
                          My Notes
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <img
                          src={setting}
                          alt="My Notes"
                          style={{
                            width: "20%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography
                          sx={{ mt: 1, color: "#000", width: "100%" }}
                        >
                          Settings
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          border: "1px solid lightgray",
                          my: 1,
                        }}
                      />
                      <Box
                        onClick={onLogout}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <img
                          src={exit}
                          alt="My Notes"
                          style={{
                            width: "20%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography
                          sx={{ mt: 1, color: "#000", width: "100%" }}
                        >
                          Sign Out
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              ) : (
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
              )}
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
          <ListItem button onClick={() => handleNavigate("/MyNotes")}>
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
