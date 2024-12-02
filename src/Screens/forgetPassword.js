import { Box, Button, InputBase, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import coverImage from "../assets/Images/forgetPasswordImg.png";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForgetPasswordMutation } from "../redux/apis/UserAuth";
const ForgetPassword = () => {
  const [isEmail, setEmail] = useState("");
  const navigation = useNavigate();
  const [ForgetPassword] = useForgetPasswordMutation();
  const handleForgetPassword = async () => {
    console.log("first", isEmail);
    try {
      const result = await ForgetPassword({ isEmail: isEmail });
      if (result?.data) {
        navigation("/Otp", { state: { email: isEmail } });
      }
      console.log("result in forget screen:", result);
    } catch (error) {
      console.log("error:", error);
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
            Forget Password?
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#000", fontSize: { xs: 15, md: 15 } }}
          >
            No Worries, we'll send you reset instructions.
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
              Email
            </Typography>
            <InputBase
              fullWidth
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={isEmail}
              placeholder="Enter Your email"
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
            onClick={handleForgetPassword}
            variant="contained"
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#FF6F61",
              px: 8,
              py: 1.5,
              borderRadius: 6,
            }}
          >
            Send OTP
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ForgetPassword;
