import {
  Box,
  Button,
  InputAdornment,
  InputBase,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import coverImage from "../assets/Images/signIn.png";
import googleIcon from "../assets/Images/google.png";
import faceBookIcon from "../assets/Images/facebook.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigate();
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };
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
          <Typography variant="body2" color="#8A8A8A">
            New User?
          </Typography>
          <Typography
            style={{ cursor: "pointer" }}
            variant="body2"
            onClick={() => {
              navigation("/SignUp");
            }}
          >
            Create an account
          </Typography>
        </div>

        <div style={{ height: "50%", width: "60%", backgroundColor: "#fff" }}>
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
          <Typography variant="body2" color="#8A8A8A" sx={{ mt: 7 }}>
            Or sign in using your email address
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mt: 3,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "600" }}>
                Your email
              </Typography>
              <InputBase
                placeholder="Tonynguyen@example.com"
                sx={{
                  width: "13vw",

                  flex: 1,
                  height: "2.5rem",
                  padding: "0 8px",
                  fontSize: "0.8rem",
                  borderColor: "#bbbbbb",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "600" }}>
                Your Password
              </Typography>
              <InputBase
                type={showPassword ? "text" : "password"}
                placeholder="********"
                sx={{
                  flex: 1,
                  height: "2.5rem",
                  padding: "0 8px",
                  fontSize: "0.8rem",
                  borderColor: "#bbbbbb",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  width: "13vw",
                  borderRadius: "10px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <span
                      onClick={handleTogglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </span>
                  </InputAdornment>
                }
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" color="#8A8A8A">
                    Remember Me
                  </Typography>
                }
              />
            </Box>
            <Typography variant="body2" sx={{ color: "#6149CD" }}>
              Forget password?
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => {
                navigation("/Home");
              }}
              variant="contained"
              sx={{
                borderColor: "#000000",
                backgroundColor: "#FF6F61",
                color: "#F0F0F0",
                borderRadius: "20px",
                width: "40%",
                height: "2.5rem",
                fontFamily: "Poppins",
                mt: 3,
              }}
            >
              Sign In
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
