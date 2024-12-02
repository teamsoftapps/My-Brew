import { Box, Button, InputBase, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import coverImage from "../assets/Images/forgetPasswordImg.png";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import { useVerifyOTpMutation } from "../redux/apis/UserAuth";
import { useSelector } from "react-redux";
const ForgetPassword = () => {
  const location = useLocation();
  const email = location.state?.email;
  console.log("firstsdsdsdsdsdsdsdsds", email);
  const [OTP, setOTP] = useState("");
  const navigation = useNavigate();
  const [VerifyOtp] = useVerifyOTpMutation();

  const HandleOTP = async () => {
    let payload = {
      email: email,
      otp: OTP,
    };
    try {
      const result = await VerifyOtp(payload);
      if (result?.data) {
        navigation("/ResetPassword", { state: { email: email } });
      }
      console.log("result of verify otp:", result);
    } catch (error) {
      console.log("error in verify otp: ", error);
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
            <PasswordOutlinedIcon
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
            Check Your Email
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#000", fontSize: { xs: 15, md: 15 } }}
          >
            Please check your email for OTP!
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%" },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 15, md: 15 }, my: { xs: 2, md: 2 } }}
            >
              OTP
            </Typography>
            <InputBase
              fullWidth
              onChange={(e) => {
                setOTP(e.target.value);
              }}
              value={OTP}
              placeholder="OTP"
              sx={{
                width: "100%",
                height: "2.7rem",
                padding: "0 8px",
                fontSize: "0.8rem",
                borderColor: "#bbbbbb",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "15px",
                backgroundColor: "#fff",
              }}
            />
          </Box>
          <Button
            onClick={HandleOTP}
            variant="contained"
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#FF6F61",
              px: 8,
              py: 1.5,
              borderRadius: 6,
            }}
          >
            Verify
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ForgetPassword;
