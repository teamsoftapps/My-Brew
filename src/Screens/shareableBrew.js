// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useGetBrewMutation } from "../redux/apis/UserAuth";
// const ShareableBrew = () => {
//   const [brew, setBrew] = useState(null);
//   const [error, setError] = useState(null);
//   const [getBrew] = useGetBrewMutation();
//   const { slug } = useParams();
//   console.log("first", slug);
//   useEffect(() => {
//     const fetchBrew = async () => {
//       try {
//         const response = await getBrew(slug);
//         console.log("responce:", response.data);
//         await setBrew(response.data);
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchBrew();
//   }, [slug]);

//   return (
//     <div>
//       <h1>asas</h1>
//       <h1>{brew.brewName}</h1>
//     </div>
//   );
// };

// export default ShareableBrew;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetBrewMutation } from "../redux/apis/UserAuth";
import { Box, Grid, Typography } from "@mui/material";
import brewLogo from "../assets/Images/breLogoBlack.png";
import noteImage from "../assets/Images/linkNote.png";
import moment from "moment/moment";
const ShareableBrew = () => {
  const [brew, setBrew] = useState(null);
  const [error, setError] = useState(null);
  const [getBrew] = useGetBrewMutation();
  const { slug } = useParams();

  console.log("Slug from useParams:", slug);
  console.log("getBrew function: ", getBrew);
  useEffect(() => {
    const fetchBrew = async () => {
      try {
        const response = await getBrew(slug);
        console.log("Response:", response.data);
        setBrew(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching brew:", err);
      }
    };
    if (slug) {
      fetchBrew();
    } else {
      console.error("No slug found.");
    }
  }, [slug, getBrew]);
  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "70%", // 70% width on extra small screens
            sm: "50%", // 50% width on small screens
            md: "30%", // 30% width on medium screens
            lg: "20%", // 20% width on large screens
          },
        }}
      >
        <img
          src={brewLogo}
          alt="Brew Logo"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // border: "2px solid black",
            my: 5,
            flexDirection: {
              xs: "column", // Stack items vertically on small screens
              sm: "row", // Align horizontally from small screens and up
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6} // 6 out of 12 on medium screens
            lg={5}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              src={noteImage}
              alt="Note"
              style={{
                width: { xs: "100%", sm: "90%", md: "90%", lg: "80%" },
                height: "auto",
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6} // 6 out of 12 on medium screens
            lg={5}
            sx={{
              width: "100%",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ color: "#FF6F61" }}>{brew.status}</Typography>
              <Typography variant="h3" sx={{ color: "#000" }}>
                {brew.brewName}
              </Typography>
              <Typography
                sx={{
                  width: { xs: "90%", sm: "90%", md: "70%", lg: "55%" },
                  color: "#000",
                }}
              >
                {brew.description}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#8A8A8A" }}>Bottle Size</Typography>
              <Typography sx={{ color: "#000", fontWeight: "600" }}>
                {brew.bottleSize}ml
              </Typography>
              <Typography sx={{ color: "#8A8A8A", mt: 2 }}>
                Release Date
              </Typography>
              <Typography sx={{ color: "#000", fontWeight: "600" }}>
                {moment(brew.date).format("YYYY-MM-DD h:mm A")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default ShareableBrew;
