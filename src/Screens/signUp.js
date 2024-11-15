import {
  Box,
  Button,
  InputAdornment,
  InputBase,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import coverImage from "../assets/Images/signUp.png";
import faceBookIcon from "../assets/Images/facebook.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useSignUpUserMutation } from "../redux/apis/UserAuth";
const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [isName, setName] = useState("");
  const [isUserName, setUserName] = useState("");
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");

  const navigation = useNavigate();

  const [SignUpUser] = useSignUpUserMutation();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!isName || !isUserName || !isEmail || !isPassword) {
      console.error("All fields are required");
      return;
    }

    const payload = {
      isName: isName,
      isUsername: isUserName,
      isEmail: isEmail,
      isPassword: isPassword,
    };

    try {
      const response = await SignUpUser(payload);
      console.log("Sign-up successful:", response);
      navigation("/SignIn");
    } catch (err) {
      console.error("Error during sign-up:", err.message || err);
    }
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        overflow: { xs: "auto", sm: "auto", md: "hidden" },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={coverImage}
          alt="waiting..."
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          height: "100%",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <Grid
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "flex-end",
            py: 2,
            px: 2,
            width: "100%",
            position: "absolute",
            right: 0,
            top: 0,
          }}
        >
          <Typography variant="body2">Already a member? </Typography>
          <Typography
            onClick={() => {
              navigation("/SignIn");
            }}
            variant="body2"
            sx={{ color: "#6149CD", fontWeight: "600", ml: 1 }}
          >
            Sign In
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: 2,
            gap: 3,
            width: "100%",
          }}
          item
          xs={12}
          sm={12}
          md={8}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "600" }}>
            Sign Up
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "#FF7163",
                px: { xs: 2, sm: 3, md: 12 },
                py: 1.5,
                borderRadius: { xs: 3, md: 6 },
                flexGrow: 1,
                maxWidth: { xs: "100%", sm: "100%", md: "auto" },
                fontSize: { xs: 12, sm: 14, md: 14 },
                whiteSpace: "nowrap",
              }}
              variant="contained"
              startIcon={<GoogleIcon />}
            >
              <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                Sign Up with Google
              </Typography>
            </Button>

            <Button
              variant="contained"
              startIcon={
                <Box
                  component="img"
                  src={faceBookIcon}
                  alt="Facebook Icon"
                  sx={{
                    width: "16px",
                    height: "24px",
                  }}
                />
              }
              sx={{
                textTransform: "none",
                color: "#6149CD",
                backgroundColor: "#fff",
                px: { xs: 2, sm: 3, md: 10 },
                py: 1.5,
                borderRadius: { xs: 3, md: 6 },
                flexGrow: 1,
                maxWidth: { xs: "100%", sm: "100%", md: "auto" },
                fontSize: { xs: 12, sm: 14, md: 14 },
                whiteSpace: "nowrap",
              }}
            >
              <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                with Facebook
              </Typography>
            </Button>
          </Box>

          <Typography sx={{ mt: 2, color: "gray" }}>
            Or sign up using your email address
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  width: { xs: "100%", sm: "100%", md: "50%" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "600", my: { xs: 2, md: 2 } }}
                >
                  Name
                </Typography>
                <InputBase
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={isName}
                  placeholder="Tonynguyen"
                  sx={{
                    width: "100%",
                    height: "2.7rem",
                    padding: "0 8px",
                    fontSize: "0.8rem",
                    borderColor: "#bbbbbb",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                  }}
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  width: { xs: "100%", sm: "100%", md: "50%" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "600", my: { xs: 2, md: 2 } }}
                >
                  User Name
                </Typography>
                <InputBase
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  value={isUserName}
                  placeholder="Tonynguyen"
                  sx={{
                    width: "100%",
                    height: "2.7rem",
                    padding: "0 8px",
                    fontSize: "0.8rem",
                    borderColor: "#bbbbbb",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  width: { xs: "100%", sm: "100%", md: "50%" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "600", my: { xs: 2, md: 2 } }}
                >
                  Your email
                </Typography>
                <InputBase
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={isEmail}
                  placeholder="Tonynguyen@example.com"
                  sx={{
                    width: "100%",
                    height: "2.7rem",
                    padding: "0 8px",
                    fontSize: "0.8rem",
                    borderColor: "#bbbbbb",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                  }}
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  width: { xs: "100%", sm: "100%", md: "50%" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "600", my: { xs: 2, md: 2 } }}
                >
                  Your Password
                </Typography>
                <InputBase
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={isPassword}
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  sx={{
                    width: "100%",
                    height: "2.7rem",
                    padding: "0 8px",
                    fontSize: "0.8rem",
                    borderColor: "#bbbbbb",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
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
                mt: 2,
              }}
            >
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
              <Typography
                variant="body2"
                sx={{ color: "#6149CD", fontWeight: "600" }}
              >
                Forget password?
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              onClick={handleSignUp}
              variant="contained"
              sx={{
                width: { xs: "100%", md: "50%" },
                backgroundColor: "#FF6F61",
                px: 8,
                py: 1.5,
                borderRadius: 6,
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Grid
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "row",
              justifyContent: "center",
              py: 2,
              px: 2,
              width: "100%",
            }}
          >
            <Typography variant="body2">Already a member? </Typography>
            <Typography
              onClick={() => {
                navigation("/SignIn");
              }}
              variant="body2"
              sx={{ color: "#6149CD", fontWeight: "600", ml: 1 }}
            >
              Sign In
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
