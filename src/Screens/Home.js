import React from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import brewVideo from "../assets/Videos/brewVideo.mp4";
import leave_01 from "../assets/Images/leave_01.png";
import leave_02 from "../assets/Images/leave_02.png";
import leave_03 from "../assets/Images/leave_03.png";
import leave_04 from "../assets/Images/leave_04.png";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigation = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#F8F9FA" }}>
      <Nav />
      {/* get Started */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          px: 20,
          py: 5,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2">Manage Your</Typography>
          <Typography
            variant="h2"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h2" sx={{ color: "#FF6F61" }}>
              Brews
            </Typography>{" "}
            With Ease.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ width: "22vw", color: "#343A40" }}>
            The all in one tool for documenting your brews and sharing then with
            the world.
          </Typography>
          <Button
            onClick={() => {
              navigation("/BrewCollection");
            }}
            variant="outlined"
            sx={{
              ml: 4,
              borderColor: "#000000",
              color: "#000",
              borderRadius: "20px",
              width: "150px",
              height: "40px",
              fontFamily: "Poppins",
              mt: 4,
            }}
            endIcon={<ArrowOutwardIcon />}
          >
            GET STARTED
          </Button>
        </Box>
      </Box>
      {/* Video Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "45%",
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
          <source src={brewVideo} />
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
          }}
        >
          <Typography variant="h3">Stay Updated On The Latest </Typography>
          <Typography variant="h3">Brewing Trends </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: "#343A40" }}>
            Subscribe to our newsletter for expert tips, exclusive content, and
            the latest{" "}
          </Typography>
          <Typography variant="body1" sx={{ color: "#343A40" }}>
            Brewing trends delivered strainght to your inbox{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "3.5rem",
            width: "40%",
            borderRadius: "3vw",
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
            }}
          />
          <Button
            variant="contained"
            sx={{
              ml: 2,
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
        <img
          src={leave_01}
          alt="Loading..."
          style={{ position: "absolute", left: "12vw", top: 0 }}
        />
        <img
          src={leave_02}
          alt="Loading..."
          style={{ position: "absolute", left: 0, bottom: "7rem" }}
        />
        <img
          src={leave_03}
          alt="Loading..."
          style={{ position: "absolute", right: 0, top: "3rem" }}
        />
        <img
          src={leave_04}
          alt="Loading..."
          style={{ position: "absolute", right: "10vw", bottom: "3rem" }}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
