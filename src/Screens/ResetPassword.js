import { Box, Button, InputBase, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import coverImage from "../assets/Images/forgetPasswordImg.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useResetPasswordMutation,
  useSignUpUserMutation,
} from "../redux/apis/UserAuth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const ResetPassword = () => {
  const location = useLocation();
  const email = location.state?.email;
  console.log("email in reset password screen; ", email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigate();
  const [ResetPassword] = useResetPasswordMutation();
  const HandleResetPassword = async () => {
    if (password === confirmPassword) {
      let payload = {
        email: email,
        isPassword: password,
      };
      try {
        const result = await ResetPassword(payload);
        if (result?.data) {
          navigation("/ResetSuccessfull");
        }
        console.log("Password changed: ", result);
      } catch (error) {
        console.log("Error in reset password:", error);
      }
    } else {
      console.log("Password must be same.");
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
          <Typography variant="body2">Back to</Typography>
          <Typography
            onClick={() => {
              navigation("/SignIn");
            }}
            variant="body2"
            sx={{
              color: "#6149CD",
              fontWeight: "600",
              ml: 1,
              cursor: "pointer",
            }}
          >
            Log in
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 2,
            gap: 3,
            width: "100%",
          }}
          item
          xs={12}
          sm={12}
          md={8}
        >
          <Box
            sx={{
              backgroundColor: "#F9E3E2",
              height: 60,
              width: 60,
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LockOutlinedIcon
              sx={{
                color: "#FF6F61",
                fontSize: {
                  xs: "24px",
                  sm: "30px",
                  md: "30px",
                  lg: "35px",
                },
              }}
            />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            Set New Password
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#000", fontSize: { xs: 15, md: 15 } }}
          >
            Your new password must be different to previously used passwords.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "flex-start", md: "space-between" },
              alignItems: "center",
              width: "100%",
              gap: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "45%" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1rem", md: "1rem" },
                  my: 1,
                }}
              >
                New Password
              </Typography>
              <InputBase
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                placeholder="Password"
                sx={{
                  width: "100%",
                  height: "2.7rem",
                  padding: "0 8px",
                  fontSize: "0.9rem",
                  borderColor: "#bbbbbb",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                }}
              />
            </Box>

            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "45%" }, // Adjust width for medium+ screens
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1rem", md: "1rem" },
                  my: 1,
                }}
              >
                Confirm Password
              </Typography>
              <InputBase
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
                placeholder="Confirm Password"
                sx={{
                  width: "100%",
                  height: "2.7rem",
                  padding: "0 8px",
                  fontSize: "0.9rem",
                  borderColor: "#bbbbbb",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                }}
              />
            </Box>
          </Box>

          <Button
            onClick={HandleResetPassword}
            variant="contained"
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#FF6F61",
              px: 8,
              py: 1.5,
              borderRadius: 6,
            }}
          >
            Reset Password
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResetPassword;
