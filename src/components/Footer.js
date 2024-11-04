import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import brewLogo from "../assets/Images/breLogoBlack.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: "#ffffff",
        padding: "2rem 0",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "baseline",
        justifyContent: "space-around",
        // px: { xs: "1rem", sm: "2rem", md: "4rem", lg: "6rem" },
      }}
    >
      {/* Footer Item 1 */}
      <Grid item xs={12} sm={6} md={4}>
        <img
          src={brewLogo}
          alt="Logo"
          style={{
            maxWidth: "150px",
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#343A40",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            width: { sm: "70%" },
          }}
        >
          Join a community of passionate brewers where every brew tells a story.
          At My Brew Page, we make it easy to document, share, and connect with
          fellow enthusiasts.
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Typography
            variant="body2"
            sx={{
              mt: 3,
              color: "#343A40",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            Copyright @ MyBrewPage
          </Typography>
        </Box>
      </Grid>

      {/* Footer Item 2 */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "baseline",
          my: { xs: 3, sm: 3 },
        }}
      >
        <Grid item xs={6} sm={6} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            Quick Links
          </Typography>
          {["About Us", "Blog", "Support", "Contact Us"].map((link, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                mt: 1.5,
                color: "#343A40",
              }}
            >
              {link}
            </Typography>
          ))}
        </Grid>

        {/* Footer Item 3 */}
        <Grid item xs={6} sm={6} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            Follow Us
          </Typography>
          {["Facebook", "Instagram", "YouTube"].map((platform, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                mt: 1.5,
                color: "#343A40",
              }}
            >
              {platform}
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Footer Item 4 */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
            mt: { xs: 1.5 },
            color: "#343A40",
          }}
        >
          Support@mybrewpage.com
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
            mt: { xs: 1 },
            color: "#343A40",
          }}
        >
          +1(123) 550-1234
        </Typography>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <Typography
            variant="body2"
            sx={{
              mt: { xs: 1 },
              color: "#343A40",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            Copyright @ MyBrewPage
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
