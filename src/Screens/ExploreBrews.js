import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Nav from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import filterPng from "../assets/Images/filter.png";
import cardImg from "../assets/Images/cardImg.png";
import Footer from "../components/Footer";
const Cats = [
  { id: 1, value: "ALL" },
  { id: 2, value: "TASTING" },
  { id: 3, value: "BOTTLING" },
];
const cards = [
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "In Stock",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Pre-Order",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  ,
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
];
const ExploreBrews = () => {
  const [selectedCat, setSelectedCat] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Box>
      <Nav />
      <Box
        sx={{
          px: { xs: "1rem", sm: "2rem", md: "4rem", lg: "6rem" },
          backgroundColor: "#F8F9FA",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginY: "2rem",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "3rem", sm: "2rem", md: "3.5rem" },
              }}
            >
              Explore Your Brews
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: { xs: 15, sm: 15, md: 20 },
                color: "gray",
                maxWidth: { xs: "90%", md: "40%" },
                // px: { sm: 50, md: 66 },
              }}
            >
              Browse through your crafted brews with a detailed, read-only view.
              Each brew tells a story—see your collection at a glance, complete
              with all the essential details.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid item xs={10} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: { xs: 1, sm: 2, md: 3, lg: 4 },
                overflowX: "hidden",
              }}
            >
              {Cats.map((item, index) => (
                <Box key={index}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor:
                        selectedCat === index ? "#FF6F61" : "transparent",
                      borderRadius: "1.5rem",
                      boxShadow: "none",
                      minWidth: { xs: "40px", sm: "auto" },
                    }}
                    onClick={() => setSelectedCat(index)}
                  >
                    <Typography
                      sx={{
                        color: selectedCat === index ? "#fff" : "#000",
                        fontWeight: "500",
                        fontSize: { xs: 13, sm: 16, md: 18, lg: 20 },
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Button>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1rem",
              marginTop: { xs: "1rem", sm: 0 },
            }}
          >
            <img
              src={filterPng}
              alt="Filter icon"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block", // Always display the filter icon
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#031D2D",
                "&:hover": {
                  backgroundColor: "#000000",
                  "& .MuiSvgIcon-root": {
                    animation: "rotate 0.5s ease-in-out",
                  },
                },
                display: "none",
                padding: { xs: "0.5rem 1rem", sm: "0.6rem 2rem" },
                position: { xs: "fixed", sm: "fixed", md: "static" },
                right: { xs: "1rem", sm: "2rem" },
                bottom: { xs: "1rem", sm: "2rem" },
                borderRadius: "1.5rem",
                maxWidth: "100%",
                minWidth: { xs: "0", sm: "15rem" },
                transition: "background-color 0.3s ease",
                zIndex: 1000,
                "@keyframes rotate": {
                  "0%": {
                    transform: "rotate(0deg)",
                  },
                  "100%": {
                    transform: "rotate(90deg)",
                  },
                },
              }}
              startIcon={<AddIcon />}
            >
              ADD NEW BREW
            </Button>
          </Grid>
        </Grid>

        {/* cards */}
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            my: 1,
          }}
        >
          {cards.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  padding: { xs: "12px", sm: "16px" },
                  borderRadius: "1rem",
                  borderColor: "#000",
                  borderWidth: hoveredIndex === index ? "0.05rem" : 0,
                  borderStyle: "solid",
                  transition: "border-width 0.3s, box-shadow 0.3s",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 4px 20px rgba(0, 0, 0, 0.1)"
                      : "none",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "500",
                        fontSize: { xs: "1.2rem", sm: "1.5rem" },
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FF6F61",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      }}
                    >
                      {item.status}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "7%",
                      justifyContent: "space-between",
                      //   width: "100%",
                    }}
                  >
                    <IconButton
                      sx={{
                        display: "flex",
                        backgroundColor: "#EBEDEF",
                      }}
                      aria-label="Heart"
                    >
                      <FavoriteBorderOutlinedIcon sx={{ color: "#031D2D" }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        display: { xs: "none", md: "none" },
                        backgroundColor: "#F6D9D6",
                        "&:hover": {
                          backgroundColor: "#FFE2DF",
                        },
                      }}
                      aria-label="delete"
                    >
                      <DeleteIcon sx={{ color: "#FF6F61" }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        display: { xs: "none", md: "none" },
                        backgroundColor: "#E1E3E5",
                        "&:hover": {
                          backgroundColor: "#CDD2D5",
                        },
                      }}
                      aria-label="edit"
                    >
                      <EditIcon sx={{ color: "#000" }} />
                    </IconButton>
                  </Box>
                </Box>
                {hoveredIndex === index ? (
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: "auto", sm: "17.1rem" }, // Responsive height
                      marginTop: "0.7rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      opacity: hoveredIndex === index ? 1 : 0,
                      transform:
                        hoveredIndex === index ? "scale(1)" : "scale(0.95)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "gray",
                        maxWidth: "22rem",
                        textAlign: "justify",
                        fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
                      }}
                    >
                      A light and refreshing ale with citrusy notes, perfect for
                      summer days. Brewed with the finest hops and a touch of
                      honey for a smooth finish.
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box>
                          <Typography variant="body2" sx={{ color: "gray" }}>
                            Bottle Size
                          </Typography>
                          <Typography variant="h6" sx={{ color: "#000" }}>
                            500ml
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            textAlign: "left",
                          }}
                        >
                          <Typography variant="body2" sx={{ color: "gray" }}>
                            Release Date
                          </Typography>
                          <Typography variant="h6" sx={{ color: "#000" }}>
                            June 2024
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      marginTop: "0.7rem",
                      transition: "transform 0.3s ease",
                      borderRadius: "1rem",
                    }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6F61",
              px: { xs: 6, sm: 8, md: 10 },
              py: 1.5,
              my: { xs: 3, sm: 4, md: 4 },
              borderRadius: 8,
            }}
          >
            <Typography>SHOW MORE</Typography>
          </Button>
        </Grid>
        <Footer />
      </Box>
    </Box>
  );
};

export default ExploreBrews;
