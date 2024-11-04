import React from "react";
import { Box, Button, Grid, InputBase, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import brewVideo from "../assets/Videos/brewVideo.mp4";
import leave_01 from "../assets/Images/leave_01.png";
import leave_02 from "../assets/Images/leave_02.png";
import leave_03 from "../assets/Images/leave_03.png";
import leave_04 from "../assets/Images/leave_04.png";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  const navigation = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#F8F9FA" }}>
      <Grid
        container
        spacing={2}
        sx={{
          px: { xs: 3, sm: 3, md: 15 },
          py: 5,
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 30, sm: 35, md: 50, lg: 70 },
              }}
            >
              Manage Your
            </Typography>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: { xs: 30, sm: 35, md: 50, lg: 70 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#FF6F61",
                  fontSize: { xs: 30, sm: 35, md: 50, lg: 70 },
                  mr: 1,
                }}
              >
                Brews
              </Typography>{" "}
              With Ease.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "#343A40", px: { xs: 0, sm: 0, md: 0 } }}>
              The all-in-one tool for documenting your brews and sharing them
              with the world.
            </Typography>
            <Button
              onClick={() => {
                navigation("/BrewCollection");
              }}
              variant="outlined"
              sx={{
                mt: 4,
                borderColor: "#000000",
                color: "#000",
                borderRadius: "20px",
                width: "150px",
                height: "40px",
                fontFamily: "Poppins",
              }}
              endIcon={<ArrowOutwardIcon />}
            >
              GET STARTED
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Video Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: { xs: "80%", sm: "50%", md: "45%" },
          height: 0,
          overflow: "hidden",
        }}
      >
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          loop
          muted
        >
          <source src={brewVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Email Section */}
      <Box
        sx={{
          width: "100%",
          height: "40rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 30, md: 50 },
            }}
          >
            Stay Updated On The
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 30, md: 50 },
            }}
          >
            Latest Brewing
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 30, md: 50 },
            }}
          >
            Trends
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            textAlign: { xs: "center" },
            px: { xs: 5 },
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#343A40", fontSize: { xs: 15, md: 20 } }}
          >
            Subscribe to our newsletter for expert tips, exclusive content, and
            the latest{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#343A40", fontSize: { xs: 15, md: 20 } }}
          >
            Brewing trends delivered strainght to your inbox{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            alignItems: "center",
            height: "3.5rem",
            width: { xs: "70%", md: "40%" },
            borderRadius: { xs: 8, md: 10 },
            backgroundColor: "#fff",
            px: 2,
            mt: 7,
          }}
        >
          <InputBase
            placeholder="Enter your email address"
            sx={{
              flex: 1,
              height: "100%",
              border: "none",
              padding: "0 8px",
              "&:focus": {
                outline: "none",
              },
              color: { xs: "#000", md: "#000" },
            }}
          />
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
              ml: { md: 2 },
              borderColor: "#000000",
              backgroundColor: "#FF6F61",
              color: "#F0F0F0",
              borderRadius: "20px",
              width: "150px",
              height: "40px",
              fontFamily: "Poppins",
              "&:hover": {
                backgroundColor: "#FF4F51",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
        <Button
          variant="contained"
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
            ml: { md: 2 },
            borderColor: "#000000",
            backgroundColor: "#FF6F61",
            color: "#F0F0F0",
            borderRadius: "20px",
            width: "150px",
            height: "40px",
            fontFamily: "Poppins",
            "&:hover": {
              backgroundColor: "#FF4F51",
            },
            my: { xs: 2 },
          }}
        >
          Subscribe
        </Button>
        <img
          src={leave_01}
          alt="Loading..."
          className="responsive-image img-1"
        />
        <img
          src={leave_02}
          alt="Loading..."
          className="responsive-image img-2"
        />
        <img
          src={leave_03}
          alt="Loading..."
          className="responsive-image img-3"
        />
        <img
          src={leave_04}
          alt="Loading..."
          className="responsive-image img-4"
        />
      </Box>
      <Box sx={{ px: { xs: 3 } }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
