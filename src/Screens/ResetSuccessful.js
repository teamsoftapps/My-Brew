import { Box, Button, InputBase, Typography, Grid } from "@mui/material";
import React from "react";
import coverImage from "../assets/Images/forgetPasswordImg.png";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useNavigate } from "react-router-dom";
const ResetSuccessfull = () => {
  const navigation = useNavigate();
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
            <CheckCircleOutlinedIcon
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
            Password Reset
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#000", fontSize: { xs: 15, md: 15 } }}
          >
            Your password has been successfully reset. Click below to log in.
          </Typography>
          <Button
            onClick={() => {
              navigation("/SignIn");
            }}
            variant="contained"
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#FF6F61",
              px: 8,
              py: 1.5,
              borderRadius: 6,
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResetSuccessfull;
