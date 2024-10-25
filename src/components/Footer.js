import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import brewLogo from "../assets/Images/breLogoBlack.png";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F8F9FA",
        // backgroundColor: "red",
        padding: "2rem 0",
        width: "100%",
        position: "relative",
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-around",
      }}
    >
      <Grid2 container spacing={3}>
        {/* Footer Item 1 */}
        <Grid2 item xs={12} sm={6} md={4}>
          <img
            src={brewLogo}
            alt=""
            style={{ height: "5rem", width: "15vw" }}
          />
          <Typography
            variant="body2"
            sx={{ width: "16vw", mt: 1.5, color: "#343A40" }}
          >
            Join a community of passionate brewers where every brew tells a
            story.At My Brew Page, we make it easy to document, share, and
            connect with fellow enthusiasts.
          </Typography>
          <Typography variant="body2" sx={{ mt: 3, color: "#343A40" }}>
            Copyright @ MyBrewPage
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2>
        {/* Footer Item 2 */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Quick Links
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1.5, color: "#343A40" }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1, color: "#343A40" }}
          >
            Blog
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1, color: "#343A40" }}
          >
            Support
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1, color: "#343A40" }}
          >
            Conatct Us
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2>
        {/* Footer Item 3 */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Follow Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1.5, color: "#343A40" }}
          >
            Facebook
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1, color: "#343A40" }}
          >
            Instagram
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1, color: "#343A40" }}
          >
            Youtube
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2>
        {/* Footer Item 4 */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1.5, color: "#343A40" }}
          >
            Support@mybrewpage.com
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mt: 1, color: "#343A40" }}
          >
            +1(123) 550-1234
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Footer;
