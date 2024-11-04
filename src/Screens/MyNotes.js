import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Nav from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import Footer from "../components/Footer";
import noteImage from "../assets/Images/noteImage.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styled } from "@mui/material/styles";
const Tasting_Notes = [
  {
    cat: "Tasting Note",
    item: [
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Tasting",
        date: "September 12, 2024",
      },
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Tasting",
        date: "September 12, 2024",
      },
    ],
  },
];

const Brewing_Notes = [
  {
    cat: "Brewing Process",
    item: [
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Process",
        date: "September 12, 2024",
      },
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Process",
        date: "September 12, 2024",
      },
    ],
  },
];

const Fermentation_Notes = [
  {
    cat: "Fermentation",
    item: [
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Fermentation",
        date: "September 12, 2024",
      },
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Fermentation",
        date: "September 12, 2024",
      },
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Fermentation",
        date: "September 12, 2024",
      },
    ],
  },
];

const Bottling_Notes = [
  {
    cat: "Bottling",
    item: [
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Bottling",
        date: "September 12, 2024",
      },
      {
        img: noteImage,
        desc: "Aroma of citrus and pine. The taste is slightly bitter with a hint of caramel sweetness. Medium body with a clean finish. Perfect balance of hops and malt.",
        tag: "Bottling",
        date: "September 12, 2024",
      },
    ],
  },
];

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.grey[400],
    },
    "&:hover fieldset": {
      borderColor: "#007bff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF6F61",
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "#FF6F61",
    },
  },
}));

const backColours = [
  {
    col: "255, 111, 97",
  },
  {
    col: "255, 171, 42",
  },
  {
    col: "97, 73, 205",
  },
  {
    col: "3, 29, 45",
  },
  {
    col: "91, 210, 233",
  },
  {
    col: "114, 213, 110",
  },
  {
    col: "168, 150, 205",
  },
  {
    col: "100, 172, 186",
  },
  {
    col: "184, 185, 133",
  },
  {
    col: "179, 148, 140",
  },
];
const MyNotes = () => {
  //Modal states
  const [isModal, setIsModal] = useState(false);
  const [type, setType] = useState();
  const [selectedDate, setSelectedDate] = useState(null);

  //Open pallete states
  const [tastingColourPallete, setTastingColourPallete] = useState(false);
  const [brewingColourPallete, setBrewingColourPallete] = useState(false);
  const [bottlingColourPallete, setBottlingColourPallete] = useState(false);
  const [fermentaionColourPallete, setFermentationColourPallete] =
    useState(false);

  //BackColour states
  const [backColorTasting, setbackColorTasting] = useState("");
  const [backColorBrewing, setbackColorBrewing] = useState("");
  const [backColorFermentation, setbackColorFermentation] = useState("");
  const [backColorBottling, setbackColorBottling] = useState("");

  //Selected colour states
  const [bottlingSelectedColour, setBottlingSelectedColour] = useState("");
  const [tastingSelectedColour, setTastingSelectedColour] = useState("");
  const [brewingSelectedColour, setBrewingSelectedColour] = useState("");
  const [fermentationSelectedColour, setFermentationSelectedColour] =
    useState("");

  //Modal functions
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleCloseModal = () => {
    setIsModal(false);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  //Open Pallete functions
  const openBottingColours = () => {
    setBottlingColourPallete(true);
  };
  const openTastingColours = () => {
    setTastingColourPallete(true);
  };
  const openBrewingColours = () => {
    setBrewingColourPallete(true);
  };
  const openFermentationColours = () => {
    setFermentationColourPallete(true);
  };

  return (
    <Grid container sx={{ backgroundColor: "#F8F9FA" }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 5, md: 15 },
          py: 4,
        }}
      >
        <Grid
          item
          md={12}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6}>
            <Typography variant="h2">My Notes</Typography>
          </Grid>
          <Grid item md={6} display="flex" justifyContent="flex-end">
            <Button
              onClick={() => {
                setIsModal(true);
              }}
              variant="contained"
              sx={{
                backgroundColor: "#031D2D",
                "&:hover": {
                  backgroundColor: "#000000",
                  "& .MuiSvgIcon-root": {
                    animation: "rotate 0.5s ease-in-out",
                  },
                },
                padding: { xs: "0.5rem 1rem", sm: "0.6rem 2rem" },
                position: { xs: "fixed", sm: "fixed", md: "static" },
                right: { xs: "1rem", sm: "2rem" },
                bottom: { xs: "1rem", sm: "2rem" },
                borderRadius: "1.5rem",
                maxWidth: "100%",
                minWidth: { xs: "0", sm: "15rem" },
                transition: "background-color 0.3s ease",
                zIndex: 1000,
                "@keyframes rotate": {
                  "0%": {
                    transform: "rotate(0deg)",
                  },
                  "100%": {
                    transform: "rotate(90deg)",
                  },
                },
              }}
              startIcon={<AddIcon />}
            >
              ADD NOTE
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          px: { xs: 5, md: 15 },
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pb: { xs: 4, sm: 4, md: 4, lg: 0 },
          }}
        >
          {Tasting_Notes.map(({ cat, item }) => {
            return item.map((note, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "95%", md: "90%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  py: 2,
                  mb: 2,
                  boxShadow: 1,
                  position: "relative",
                }}
              >
                {index === 0 && (
                  <Box
                    sx={{
                      width: { xs: "95%", sm: "90%", md: "90%" },
                      backgroundColor: backColorTasting
                        ? `rgba(${backColorTasting},.2)`
                        : backColorTasting === null
                        ? "#fff"
                        : null,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      py: 1.3,
                      borderRadius: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      color={
                        backColorTasting
                          ? `rgba(${backColorTasting})`
                          : backColorTasting === null
                          ? "#000"
                          : null
                      }
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      {cat}
                    </Typography>
                    <IconButton onClick={openTastingColours}>
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                )}
                {index === 0 && tastingColourPallete && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 60,
                      width: "65%",
                      backgroundColor: "rgb(255, 255, 255)",
                      zIndex: 10,
                      height: "auto",
                      borderRadius: 3,
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Change list color</Typography>
                      <IconButton
                        onClick={() => {
                          setTastingColourPallete(!tastingColourPallete);
                        }}
                      >
                        <CloseIcon sx={{ color: "#000" }} />
                      </IconButton>
                    </Box>
                    {backColours.map((colorObj, index) => {
                      const isSelected = tastingSelectedColour === index;
                      return (
                        <IconButton
                          key={index}
                          onClick={() => {
                            const rgbaColor = `rgba(${colorObj.col}, 0.2)`;
                            setbackColorTasting(colorObj.col);
                            setTastingColourPallete(!tastingColourPallete);
                            setTastingSelectedColour(index);
                            console.log(rgbaColor);
                          }}
                          style={{
                            width: "18%",
                            backgroundColor: `rgb(${colorObj.col})`,
                            borderRadius: 2,
                            margin: 2,
                            border: isSelected
                              ? "2px solid transparent"
                              : "none",
                          }}
                        />
                      );
                    })}
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        onClick={() => {
                          setTastingSelectedColour(null);
                          setbackColorTasting(null);
                        }}
                        variant="contained"
                        startIcon={<CloseIcon sx={{ color: "#000" }} />}
                        sx={{
                          width: "100%",
                          backgroundColor: "#A6E7EB",
                          mt: { xs: 1, sm: 1, md: 2, lg: 1 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ textTransform: "none", color: "#000" }}
                        >
                          Remove color
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                    width: { xs: "95%", sm: "90%", md: "90%" },
                    border: "2px solid lightgray",
                    borderRadius: 4.2,
                    overflow: "hidden",
                    position: "relative",
                    transition: "border-color 0.3s ease",
                    "&:hover": {
                      border: backColorTasting
                        ? `2px solid rgb(${backColorTasting})`
                        : null,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%" }}>
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                      }}
                      src={note.img}
                      alt="Tasting Note"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        padding: 2,
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box
                        onClick={() => {
                          setIsModal(true);
                        }}
                        sx={{
                          height: { xs: 30, sm: 30, md: 40, lg: 40 },
                          width: { xs: 30, sm: 30, md: 40, lg: 40 },
                          borderRadius: { xs: 5, sm: 5, md: 6, lg: 6 },
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mx: 1,
                        }}
                      >
                        <DeleteIcon sx={{ color: "#FF6F61" }} />
                      </Box>
                      <Box
                        onClick={() => {
                          setIsModal(true);
                        }}
                        sx={{
                          height: { xs: 30, sm: 30, md: 40, lg: 40 },
                          width: { xs: 30, sm: 30, md: 40, lg: 40 },
                          borderRadius: { xs: 5, sm: 5, md: 6, lg: 6 },
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <EditIcon />
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      width: "90%",
                      textAlign: "justify",
                      py: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                    }}
                  >
                    {note.desc}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "90%",
                      pb: 2,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: 1.5, alignItems: "center" }}
                    >
                      <LocalOfferOutlinedIcon
                        sx={{
                          color: backColorTasting
                            ? `rgb(${backColorTasting})`
                            : null,
                        }}
                      />
                      <Typography
                        color={
                          backColorTasting ? `rgb(${backColorTasting})` : null
                        }
                        sx={{
                          fontSize: {
                            xs: "0.9rem",
                            sm: "0.9rem",
                            md: "0.9rem",
                          },
                        }}
                      >
                        {note.tag}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", gap: 1.5, alignItems: "center" }}
                    >
                      <CalendarMonthOutlinedIcon sx={{ color: "#031D2D" }} />
                      <Typography
                        variant="body2"
                        color="#031D2D"
                        sx={{
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.8rem",
                            md: "0.8rem",
                          },
                        }}
                      >
                        {note.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ));
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pb: { xs: 4, sm: 4, md: 4, lg: 0 },
          }}
        >
          {Brewing_Notes.map(({ cat, item }) => {
            return item.map((note, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "95%", md: "90%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  py: 2,
                  mb: 2,
                  boxShadow: 1,
                  position: "relative",
                }}
              >
                {index === 0 && (
                  <Box
                    sx={{
                      width: { xs: "95%", sm: "90%", md: "90%" },
                      backgroundColor: backColorBrewing
                        ? `rgba(${backColorBrewing},.2)`
                        : backColorBrewing === null
                        ? "#fff"
                        : null,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      py: 1.3,
                      borderRadius: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      color={
                        backColorBrewing
                          ? `rgba(${backColorBrewing})`
                          : backColorBrewing === null
                          ? "#000"
                          : null
                      }
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      {cat}
                    </Typography>
                    <IconButton onClick={openBrewingColours}>
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                )}
                {index === 0 && brewingColourPallete && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 60,
                      width: "65%",
                      backgroundColor: "rgb(255, 255, 255)",
                      zIndex: 10,
                      height: "auto",
                      borderRadius: 3,
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Change list color</Typography>
                      <IconButton
                        onClick={() => {
                          setBrewingColourPallete(!brewingColourPallete);
                        }}
                      >
                        <CloseIcon sx={{ color: "#000" }} />
                      </IconButton>
                    </Box>
                    {backColours.map((colorObj, index) => {
                      const isSelected = brewingSelectedColour === index;
                      return (
                        <IconButton
                          key={index}
                          onClick={() => {
                            const rgbaColor = `rgba(${colorObj.col}, 0.2)`; // set the desired opacity
                            setbackColorBrewing(colorObj.col); //set background colour
                            setBrewingColourPallete(!brewingColourPallete); // This open the color pallete
                            setBrewingSelectedColour(index); //set the index for highlighting the selected colour
                            console.log(rgbaColor);
                          }}
                          style={{
                            width: "18%",
                            height: "20%",
                            backgroundColor: `rgb(${colorObj.col})`,
                            borderRadius: 2,
                            margin: 2,
                            border: isSelected
                              ? "2px solid transparent"
                              : "none",
                          }}
                        />
                      );
                    })}
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        onClick={() => {
                          setBrewingSelectedColour(null);
                          setbackColorBrewing(null);
                        }}
                        variant="contained"
                        startIcon={<CloseIcon sx={{ color: "#000" }} />}
                        sx={{
                          width: "100%",
                          backgroundColor: "#A6E7EB",
                          mt: { xs: 1, sm: 1, md: 2, lg: 1 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ textTransform: "none", color: "#000" }}
                        >
                          Remove color
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                    width: { xs: "95%", sm: "90%", md: "90%" },
                    border: "2px solid lightgray",
                    borderRadius: 4.2,
                    overflow: "hidden",
                    transition: "border-color 0.3s ease",
                    "&:hover": {
                      border: backColorBrewing
                        ? `2px solid rgb(${backColorBrewing})`
                        : null,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%" }}>
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                      }}
                      src={note.img}
                      alt="Tasting Note"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        padding: 2,
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box
                        onClick={() => {
                          setIsModal(true);
                        }}
                        sx={{
                          height: { xs: 30, sm: 30, md: 40, lg: 40 },
                          width: { xs: 30, sm: 30, md: 40, lg: 40 },
                          borderRadius: { xs: 5, sm: 5, md: 6, lg: 6 },
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mx: 1,
                        }}
                      >
                        <DeleteIcon sx={{ color: "#FF6F61" }} />
                      </Box>
                      <Box
                        onClick={() => {
                          setIsModal(true);
                        }}
                        sx={{
                          height: { xs: 30, sm: 30, md: 40, lg: 40 },
                          width: { xs: 30, sm: 30, md: 40, lg: 40 },
                          borderRadius: { xs: 5, sm: 5, md: 6, lg: 6 },
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <EditIcon />
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      width: "90%",
                      textAlign: "justify",
                      py: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                    }}
                  >
                    {note.desc}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "90%",
                      pb: 2,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: 1.5, alignItems: "center" }}
                    >
                      <LocalOfferOutlinedIcon
                        sx={{
                          color: backColorBrewing
                            ? `rgb(${backColorBrewing})`
                            : "#000",
                        }}
                      />
                      <Typography
                        color={
                          backColorBrewing ? `rgb(${backColorBrewing})` : "#000"
                        }
                        sx={{
                          fontSize: {
                            xs: "0.9rem",
                            sm: "0.9rem",
                            md: "0.9rem",
                          },
                        }}
                      >
                        {note.tag}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", gap: 1.5, alignItems: "center" }}
                    >
                      <CalendarMonthOutlinedIcon sx={{ color: "#031D2D" }} />
                      <Typography
                        variant="body2"
                        color="#031D2D"
                        sx={{
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.8rem",
                            md: "0.8rem",
                          },
                        }}
                      >
                        {note.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ));
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pb: { xs: 4, sm: 4, md: 4, lg: 0 },
          }}
        >
          {Fermentation_Notes.map(({ cat, item }) => {
            return item.map((note, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "95%", md: "90%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  py: 2,
                  mb: 2,
                  boxShadow: 1,
                  position: "relative",
                }}
              >
                {index === 0 && (
                  <Box
                    sx={{
                      width: { xs: "95%", sm: "90%", md: "90%" },
                      backgroundColor: backColorFermentation
                        ? `rgba(${backColorFermentation},.2)`
                        : backColorFermentation === null
                        ? "#fff"
                        : null,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      py: 1.3,
                      borderRadius: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      color={
                        backColorFermentation
                          ? `rgba(${backColorFermentation})`
                          : backColorFermentation === null
                          ? "#000"
                          : null
                      }
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      {cat}
                    </Typography>
                    <IconButton onClick={openFermentationColours}>
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                )}
                {index === 0 && fermentaionColourPallete && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 60,
                      width: "65%",
                      backgroundColor: "rgb(255, 255, 255)",
                      zIndex: 10,
                      height: "auto",
                      borderRadius: 3,
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Change list color</Typography>
                      <IconButton
                        onClick={() => {
                          setFermentationColourPallete(
                            !fermentaionColourPallete
                          );
                        }}
                      >
                        <CloseIcon sx={{ color: "#000" }} />
                      </IconButton>
                    </Box>
                    {backColours.map((colorObj, index) => {
                      const isSelected = fermentationSelectedColour === index;
                      return (
                        <IconButton
                          key={index}
                          onClick={() => {
                            const rgbaColor = `rgba(${colorObj.col}, 0.2)`;
                            setbackColorFermentation(colorObj.col);
                            setFermentationSelectedColour(index);
                            setFermentationColourPallete(
                              !fermentaionColourPallete
                            );
                            console.log(rgbaColor);
                          }}
                          style={{
                            width: "18%",
                            backgroundColor: `rgb(${colorObj.col})`,
                            borderRadius: 2,
                            margin: 2,
                            border: isSelected
                              ? "2px solid transparent"
                              : "none",
                          }}
                        />
                      );
                    })}
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        onClick={() => {
                          setFermentationSelectedColour(null);
                          setbackColorFermentation(null);
                        }}
                        variant="contained"
                        startIcon={<CloseIcon sx={{ color: "#000" }} />}
                        sx={{
                          width: "100%",
                          backgroundColor: "#A6E7EB",
                          mt: { xs: 1, sm: 1, md: 2, lg: 1 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ textTransform: "none", color: "#000" }}
                        >
                          Remove color
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                    width: { xs: "95%", sm: "90%", md: "90%" },
                    border: "2px solid lightgray",
                    borderRadius: 4.2,
                    overflow: "hidden",
                    transition: "border-color 0.3s ease",
                    "&:hover": {
                      border: backColorFermentation
                        ? `2px solid rgb(${backColorFermentation})`
                        : null,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%" }}>
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                      }}
                      src={note.img}
                      alt="Tasting Note"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        padding: 2,
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box
                        onClick={() => {
                          setIsModal(true);
                        }}
                        sx={{
                          height: { xs: 30, sm: 30, md: 40, lg: 40 },
                          width: { xs: 30, sm: 30, md: 40, lg: 40 },
                          borderRadius: { xs: 5, sm: 5, md: 6, lg: 6 },
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mx: 1,
                        }}
                      >
                        <DeleteIcon sx={{ color: "#FF6F61" }} />
                      </Box>
                      <Box
                        onClick={() => {
                          setIsModal(true);
                        }}
                        sx={{
                          height: { xs: 30, sm: 30, md: 40, lg: 40 },
                          width: { xs: 30, sm: 30, md: 40, lg: 40 },
                          borderRadius: { xs: 5, sm: 5, md: 6, lg: 6 },
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <EditIcon />
                      </Box>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      width: "90%",
                      textAlign: "justify",
                      py: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                    }}
                  >
                    {note.desc}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "90%",
                      pb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                        width: "50%",
                      }}
                    >
                      <LocalOfferOutlinedIcon
                        sx={{
                          color: backColorFermentation
                            ? `rgb(${backColorFermentation})`
                            : "#000",
                        }}
                      />
                      <Typography
                        color={
                          backColorFermentation
                            ? `rgb(${backColorFermentation})`
                            : "#000"
                        }
                        sx={{
                          fontSize: {
                            xs: "0.9rem",
                            sm: "0.9rem",
                            md: "0.9rem",
                          },
                        }}
                      >
                        {note.tag}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                        width: "50%",
                      }}
                    >
                      <CalendarMonthOutlinedIcon sx={{ color: "#031D2D" }} />
                      <Typography
                        variant="body2"
                        color="#031D2D"
                        sx={{
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.8rem",
                            md: "0.8rem",
                          },
                        }}
                      >
                        {note.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ));
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pb: { xs: 4, sm: 4, md: 4, lg: 0 },
          }}
        >
          {Bottling_Notes.map(({ cat, item }) => {
            return item.map((note, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "95%", md: "90%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  py: 2,
                  mb: 2,
                  boxShadow: 1,
                  position: "relative",
                }}
              >
                {index === 0 && (
                  <Box
                    sx={{
                      width: { xs: "95%", sm: "90%", md: "90%" },
                      backgroundColor: backColorBottling
                        ? `rgba(${backColorBottling},.2)`
                        : backColorBottling === null
                        ? "#fff"
                        : null,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      py: 1.3,
                      borderRadius: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      color={
                        backColorBottling
                          ? `rgba(${backColorBottling})`
                          : backColorBottling === null
                          ? "#000"
                          : null
                      }
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      {cat}
                    </Typography>
                    <IconButton onClick={openBottingColours}>
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                )}
                {index === 0 && bottlingColourPallete && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 60,
                      alignSelf: "center",
                      width: "65%",
                      backgroundColor: "rgb(255, 255, 255)",
                      zIndex: 10,
                      height: "auto",
                      borderRadius: 3,
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Change list color</Typography>
                      <IconButton
                        onClick={() => {
                          setBottlingColourPallete(!bottlingColourPallete);
                        }}
                      >
                        <CloseIcon sx={{ color: "#000" }} />
                      </IconButton>
                    </Box>
                    {backColours.map((colorObj, index) => {
                      const isSelected = bottlingSelectedColour === index;
                      return (
                        <IconButton
                          key={index}
                          onClick={() => {
                            const rgbaColor = `rgba(${colorObj.col}, 0.2)`; // Set the desired opacity
                            setbackColorBottling(colorObj.col); //set background colour
                            setBottlingColourPallete(!bottlingColourPallete); // This open the color pallete
                            setBottlingSelectedColour(index); //set the index for highlighting the selected colour
                            console.log(rgbaColor); // Log the RGBA color
                          }}
                          style={{
                            width: "18%",
                            backgroundColor: `rgb(${colorObj.col})`,
                            borderRadius: 2,
                            margin: 2,
                            border: isSelected
                              ? "2px solid transparent"
                              : "none",
                          }}
                        />
                      );
                    })}
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        onClick={() => {
                          setBottlingSelectedColour(null);
                          setbackColorBottling(null);
                        }}
                        variant="contained"
                        startIcon={<CloseIcon sx={{ color: "#000" }} />}
                        sx={{
                          width: "100%",
                          backgroundColor: "#A6E7EB",
                          mt: { xs: 1, sm: 1, md: 2, lg: 1 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ textTransform: "none", color: "#000" }}
                        >
                          Remove color
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                    width: { xs: "95%", sm: "90%", md: "90%" },
                    border: "2px solid lightgray",
                    borderRadius: 4.2,
                    overflow: "hidden",
                    transition: "border-color 0.3s ease",
                    "&:hover": {
                      border: backColorBottling
                        ? `2px solid rgb(${backColorBottling})`
                        : null,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%" }}>
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                      }}
                      src={note.img}
                      alt="Tasting Note"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        padding: 2,
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box
                        onClick={() => {
                          setIsModal(true);
                        }}
                        sx={{
                          height: { xs: 30, sm: 30, md: 40, lg: 40 },
                          width: { xs: 30, sm: 30, md: 40, lg: 40 },
                          borderRadius: { xs: 5, sm: 5, md: 6, lg: 6 },
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mx: 1,
                        }}
                      >
                        <DeleteIcon sx={{ color: "#FF6F61" }} />
                      </Box>
                      <Box
                        onClick={() => {
                          setIsModal(true);
                        }}
                        sx={{
                          height: { xs: 30, sm: 30, md: 40, lg: 40 },
                          width: { xs: 30, sm: 30, md: 40, lg: 40 },
                          borderRadius: { xs: 5, sm: 5, md: 6, lg: 6 },
                          backgroundColor: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <EditIcon />
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      width: "90%",
                      textAlign: "justify",
                      py: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                    }}
                  >
                    {note.desc}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "90%",
                      pb: 2,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: 1.5, alignItems: "center" }}
                    >
                      <LocalOfferOutlinedIcon
                        sx={{
                          color: backColorBottling
                            ? `rgb(${backColorBottling})`
                            : null,
                        }}
                      />
                      <Typography
                        color={
                          backColorBottling ? `rgb(${backColorBottling})` : null
                        }
                        sx={{
                          fontSize: {
                            xs: "0.9rem",
                            sm: "0.9rem",
                            md: "0.9rem",
                          },
                        }}
                      >
                        {note.tag}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", gap: 1.5, alignItems: "center" }}
                    >
                      <CalendarMonthOutlinedIcon sx={{ color: "#031D2D" }} />
                      <Typography
                        variant="body2"
                        color="#031D2D"
                        sx={{
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.8rem",
                            md: "0.8rem",
                          },
                        }}
                      >
                        {note.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ));
          })}
        </Grid>
      </Grid>
      <Modal
        open={isModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={2}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: { xs: 1, sm: "0 16px" },
            }}
          ></Grid>

          <Grid
            item
            xs={10}
            sm={8}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: { xs: 3, sm: 3, md: 3, lg: 4 },
              backgroundColor: "#fff",
              borderRadius: { xs: 2, sm: 3, md: 4, lg: 4 },
            }}
          >
            <Box>
              <Typography variant="h5">Add A New Note</Typography>
              <TextField
                fullWidth
                sx={{
                  my: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey",
                    },
                    "&:hover fieldset": {
                      borderColor: "#000",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FF6F61",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "grey",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#FF6F61",
                  },
                }}
                id="outlined-multiline-static"
                label="Add New Note"
                multiline
                rows={5}
                placeholder="Add New Brew Note"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "48%", lg: "48%" },
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{
                        "&.Mui-focused": {
                          color: "#FF6F61",
                        },
                        "&:hover": {
                          color: "#000",
                        },
                        color: "#000",
                      }}
                    >
                      Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      label="Type"
                      onChange={handleTypeChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ccc",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FF6F61",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000",
                        },
                      }}
                    >
                      <MenuItem value={10}>Tasting</MenuItem>
                      <MenuItem value={20}>Brewing</MenuItem>
                      <MenuItem value={30}>Fermentation</MenuItem>
                      <MenuItem value={30}>Bottling</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "48%", lg: "48%" },
                    pt: { xs: 2, sm: 2, md: 0, lg: 0 },
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      label="Select a Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      renderInput={(params) => (
                        <StyledTextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-around"
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                  justifyContent: "space-around",
                  pt: { xs: 2, sm: 2, md: 2, lg: 2 },
                  gap: { xs: 2, sm: 2, md: 0, lg: 0 },
                }}
              >
                <Button
                  onClick={() => {
                    setIsModal(!isModal);
                  }}
                  variant="contained"
                  sx={{
                    backgroundColor: "#D6D6D6",
                    px: { xs: 3, sm: 3, md: 4, lg: 8 },
                    borderRadius: { xs: 4, sm: 4, md: 4, lg: 6 },
                    width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" },
                    color: "#000",
                    py: { xs: 1, sm: 1, md: 1, lg: 1 },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF6F61",
                    px: { xs: 3, sm: 3, md: 4, lg: 8 },
                    borderRadius: { xs: 4, sm: 4, md: 4, lg: 6 },
                    width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" },
                    py: { xs: 1, sm: 1, md: 1, lg: 1 },
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#031D2D",
                      color: "#fff",
                    },
                  }}
                >
                  Save Note
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={2}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: { xs: 1, sm: "0 16px" },
            }}
          ></Grid>
        </Grid>
      </Modal>
      <Grid sx={{ px: { xs: 5, md: 15 } }}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MyNotes;
