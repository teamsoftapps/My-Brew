import React from "react";
import { Button, Typography } from "@mui/material";
//Images
import coverImage from "../assets/Images/signIn.png";
import faceBookIcon from "../assets/Images/facebook.png";
import googleIcon from "../assets/Images/google.png";
const Nav = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ height: "100vh", width: "50%" }}>
        <img
          src={coverImage}
          alt="waiting..."
          style={{ height: "99.6vh", width: "auto" }}
        />
      </div>
      <div
        style={{
          height: "100vh",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "10%",
            top: "3%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">New User?</Typography>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography variant="body1">Create an account</Typography>
          </a>
        </div>

        <div style={{ height: "50%", width: "80%", backgroundColor: "#fff" }}>
          <Typography variant="h5" fontWeight={"700"}>
            SignIn
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "15px",
              margin: " 25px 0px 25px 0px ",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF7164",
                width: "40%",
                height: "10%",
                textTransform: "none",
                borderRadius: "15px",
                fontWeight: "500",
              }}
            >
              <img
                src={googleIcon}
                style={{ height: "17px", marginRight: "10px" }}
              />
              Sign in with Google
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                width: "30%",
                height: "10%",
                textTransform: "none",
                borderRadius: "15px",
                color: "#6149CD",
                fontWeight: "500",
              }}
            >
              <img
                src={faceBookIcon}
                style={{ height: "17px", marginRight: "10px" }}
              />
              with facebook
            </Button>
          </div>
          <Typography variant="body2" color="#8A8A8A">
            Or sign in using your email address
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Nav;
