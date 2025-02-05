/** @format */

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
import React, { useEffect, useState } from "react";
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
import dayjs from "dayjs";
import {
  resetCategoryColor,
  setCategoryColor,
} from "../redux/slices/notesSlices/tastingSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddNoteMutation,
  useDeleteNoteMutation,
  useGetNoteMutation,
  useUpdateNoteMutation,
} from "../redux/apis/UserAuth";
import moment from "moment";
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
  // ----------------------------userAuth----------------------------
  const AuthData = useSelector((state) => state?.Auth?.data);
  console.log("userAuth in mynotes screen", AuthData);

  // -----------------------------All Notes-----------------------------
  const [allNotes, setAllNotes] = useState([]);
  const [tastingNotes, setTastingNotes] = useState([]);
  const [brewingNotes, setBrewingNotes] = useState([]);
  const [fermentatinNotes, setFermentationNOtes] = useState([]);
  const [bottlingNotes, setBottingNotes] = useState([]);
  console.log("All notes", allNotes);

  // -----------------------------Extra states-----------------------------
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  //Modal states
  const [isModal, setIsModal] = useState(false);
  const [type, setType] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [description, setDescription] = useState("");

  //Open pallete states
  const [tastingColourPallete, setTastingColourPallete] = useState(false);
  const [brewingColourPallete, setBrewingColourPallete] = useState(false);
  const [bottlingColourPallete, setBottlingColourPallete] = useState(false);
  const [fermentaionColourPallete, setFermentationColourPallete] =
    useState(false);

  // -----------------------------BackColour states-----------------------------
  const [backColorTasting, setbackColorTasting] = useState("");
  const [backColorBrewing, setbackColorBrewing] = useState("");
  const [backColorFermentation, setbackColorFermentation] = useState("");
  const [backColorBottling, setbackColorBottling] = useState("");

  // -----------------------------Selected colour states-----------------------------
  const [bottlingSelectedColour, setBottlingSelectedColour] = useState("");
  const [tastingSelectedColour, setTastingSelectedColour] = useState("");
  const [brewingSelectedColour, setBrewingSelectedColour] = useState("");
  const [fermentationSelectedColour, setFermentationSelectedColour] =
    useState("");

  // -----------------------------Redux states-----------------------------
  const dispatch = useDispatch();
  const backColor = useSelector((state) => state.notes);
  const [AddNote] = useAddNoteMutation();
  const [GetNotes] = useGetNoteMutation();
  const [deleteNotes] = useDeleteNoteMutation();
  const [updateNotess] = useUpdateNoteMutation();
  // -----------------------------Modal functions-----------------------------
  const handleCloseModal = () => {
    setIsModal(false);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log("dateeeeeee", newDate);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  // -----------------------------Open Pallete functions-----------------------------
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

  //-------------------------------API's Functions-------------------------------

  const getNotes = async () => {
    try {
      const response = await GetNotes();
      setAllNotes(response.data);
      console.log("All Notes:", response);

      const tasting = response?.data?.filter(
        (note) => note.categorie === "Tasting"
      );
      const brewing = response?.data?.filter(
        (note) => note.categorie === "Brewing"
      );
      const fermentation = response?.data?.filter(
        (note) => note.categorie === "Fermentation"
      );
      const bottling = response?.data?.filter(
        (note) => note.categorie === "Bottling"
      );

      console.log("Tasting Notes:", tasting);
      console.log("Brewing Notes:", brewing);
      console.log("Fermentation Notes:", fermentation);
      console.log("Bottling Notes:", bottling);

      await setTastingNotes(tasting);
      await setBrewingNotes(brewing);
      await setFermentationNOtes(fermentation);
      await setBottingNotes(bottling);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const addNotes = async () => {
    try {
      const payload = {
        description: description,
        categorie: type,
        date: selectedDate,
        userId: AuthData._id,
      };
      if (isEditing) {
        const updatedResponse = await updateNotess({
          id: currentNoteId,
          updatedData: payload,
        });
        console.log("Note updated:", updatedResponse);
        setAllNotes((prevNotes) =>
          prevNotes.map((note) =>
            note._id === currentNoteId ? { ...note, ...payload } : note
          )
        );
      } else {
        const notesResponse = await AddNote(payload);
        console.log("Note added:", notesResponse);
        // setAllNotes((prevNotes) => [...prevNotes, notesResponse]);
        setAllNotes((prevNotes = []) => [...prevNotes, notesResponse]);
      }
      getNotes();
      setDescription("");
      setType("");
      setSelectedDate("");
      setIsModal(false);
      setIsEditing(false);
      setCurrentNoteId(null);
    } catch (error) {
      console.error(
        isEditing ? "Error updating note:" : "Error adding note:",
        error
      );
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await deleteNotes(id);
      await getNotes();
      console.log("Delete note response:", response);
    } catch (error) {
      console.error("Failed to delete the note:", error);
    }
  };

  const handleEditNote = (note) => {
    console.log("first", note);
    setDescription(note.description);
    setType(note.categorie);
    setSelectedDate(note.date);
    setCurrentNoteId(note._id);
    setIsEditing(true);
    setIsModal(true);
  };

  useEffect(() => {
    getNotes();
  }, []);
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
          <Grid
            item
            md={6}
            display="flex"
            justifyContent="flex-end"
            sx={{ zIndex: { xs: 10000, sm: 10000, md: 0, lg: 0 } }}
          >
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
          {tastingNotes?.length > 0 ? (
            tastingNotes?.map((item, index) => {
              const isoDate = item.date;
              const formattedDate = moment(isoDate).format("DD/MM/YYYY");
              return (
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
                        backgroundColor: backColor?.tastingColor
                          ? `rgba(${backColor?.tastingColor},.2)`
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
                          backColor?.tastingColor
                            ? `rgba(${backColor?.tastingColor})`
                            : backColorTasting === null
                            ? "#000"
                            : null
                        }
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                        }}
                      >
                        {item.categorie}
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
                              dispatch(
                                setCategoryColor({
                                  category: "tasting",
                                  color: colorObj.col,
                                })
                              );
                              setbackColorTasting(colorObj.col);
                              setTastingColourPallete(!tastingColourPallete);
                              setTastingSelectedColour(index);
                              console.log("12345681234568", colorObj.col);
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
                            dispatch(
                              resetCategoryColor({ category: "tasting" })
                            );
                            setTastingSelectedColour(null);
                            setbackColorTasting(null);
                            setTastingColourPallete(false);
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
                        border: backColor?.tastingColor
                          ? `2px solid rgb(${backColor?.tastingColor})`
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
                        src={noteImage}
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
                            deleteNote(item._id);
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
                          onClick={() => handleEditNote(item)}
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
                      {item.description}
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
                            color: backColor?.tastingColor
                              ? `rgb(${backColor?.tastingColor})`
                              : null,
                          }}
                        />
                        <Typography
                          color={
                            backColor?.tastingColor
                              ? `rgb(${backColor?.tastingColor})`
                              : null
                          }
                          sx={{
                            fontSize: {
                              xs: "0.9rem",
                              sm: "0.9rem",
                              md: "0.9rem",
                            },
                          }}
                        >
                          {item.categorie}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
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
                          {formattedDate}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Typography
              variant="h6"
              color="#999"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                textAlign: "center",
                mt: 4,
              }}
            >
              No Items In Tastiing.
            </Typography>
          )}
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
          {brewingNotes?.length > 0 ? (
            brewingNotes?.map((item, index) => {
              const isoDate = item.date;
              const formattedDate = moment(isoDate).format("DD/MM/YYYY");
              return (
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
                        backgroundColor: backColor?.brewingColor
                          ? `rgba(${backColor?.brewingColor},.2)`
                          : backColor?.brewingColor === null
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
                          backColor?.brewingColor
                            ? `rgba(${backColor?.brewingColor})`
                            : backColor?.brewingColor === null
                            ? "#000"
                            : null
                        }
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                        }}
                      >
                        {item.categorie}
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
                              dispatch(
                                setCategoryColor({
                                  category: "brewing",
                                  color: colorObj.col,
                                })
                              );
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
                            dispatch(
                              resetCategoryColor({ category: "brewing" })
                            );
                            setBrewingColourPallete(false);
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
                        border: backColor?.brewingColor
                          ? `2px solid rgb(${backColor?.brewingColor})`
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
                        src={noteImage}
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
                            deleteNotes(item._id);
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
                          onClick={() => handleEditNote(item)}
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
                      {item.description}
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
                            color: backColor?.brewingColor
                              ? `rgb(${backColor?.brewingColor})`
                              : "#000",
                          }}
                        />
                        <Typography
                          color={
                            backColor?.brewingColor
                              ? `rgb(${backColor?.brewingColor})`
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
                          {item.categorie}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
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
                          {formattedDate}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Typography
              variant="h6"
              color="#999"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                textAlign: "center",
                mt: 4,
              }}
            >
              No Items In Brewing.
            </Typography>
          )}
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
          {fermentatinNotes?.length > 0 ? (
            fermentatinNotes?.map((item, index) => {
              const isoDate = item.date;
              const formattedDate = moment(isoDate).format("DD/MM/YYYY");
              return (
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
                        backgroundColor: backColor?.fermentationColor
                          ? `rgba(${backColor?.fermentationColor},.2)`
                          : backColor?.fermentationColor === null
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
                          backColor?.fermentationColor
                            ? `rgba(${backColor?.fermentationColor})`
                            : backColor?.fermentationColor === null
                            ? "#000"
                            : null
                        }
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                        }}
                      >
                        {item.categorie}
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
                              dispatch(
                                setCategoryColor({
                                  category: "fermentation",
                                  color: colorObj.col,
                                })
                              );
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
                            dispatch(
                              resetCategoryColor({ category: "fermentation" }),
                              setFermentationColourPallete(false)
                            );
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
                        border: backColor?.fermentationColor
                          ? `2px solid rgb(${backColor?.fermentationColor})`
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
                        src={noteImage}
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
                            deleteNote(item._id);
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
                          onClick={() => handleEditNote(item)}
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
                      {item.description}
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
                          gap: 0.5,
                          alignItems: "center",
                          width: "50%",
                        }}
                      >
                        <LocalOfferOutlinedIcon
                          sx={{
                            color: backColor?.fermentationColor
                              ? `rgb(${backColor?.fermentationColor})`
                              : "#000",
                          }}
                        />
                        <Typography
                          color={
                            backColor?.fermentationColor
                              ? `rgb(${backColor?.fermentationColor})`
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
                          {item.categorie}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 0.5,
                          alignItems: "center",
                          width: "50%",
                          justifyContent: "flex-end",
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
                          {formattedDate}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Typography
              variant="h6"
              color="#999"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                textAlign: "center",
                mt: 4,
              }}
            >
              No Items In Fermentation.
            </Typography>
          )}
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
          {bottlingNotes?.length > 0 ? (
            bottlingNotes?.map((item, index) => {
              const formattedDate = moment(item.date).format("DD/MM/YYYY");
              return (
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
                        backgroundColor: backColor?.bottlingColor
                          ? `rgba(${backColor?.bottlingColor},.2)`
                          : backColor?.bottlingColor === null
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
                          backColor?.bottlingColor
                            ? `rgba(${backColor?.bottlingColor})`
                            : backColor?.bottlingColor === null
                            ? "#000"
                            : null
                        }
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                        }}
                      >
                        {item.categorie}
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
                              const rgbaColor = `rgba(${colorObj.col}, 0.2)`;
                              dispatch(
                                setCategoryColor({
                                  category: "bottling",
                                  color: colorObj.col,
                                })
                              );
                              setbackColorBottling(colorObj.col);
                              setBottlingColourPallete(!bottlingColourPallete);
                              setBottlingSelectedColour(index);
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
                            setBottlingSelectedColour(null);
                            setbackColorBottling(null);
                            dispatch(
                              resetCategoryColor({ category: "bottling" })
                            );
                            setBottlingColourPallete(false);
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
                        border: backColor?.bottlingColor
                          ? `2px solid rgb(${backColor?.bottlingColor})`
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
                        src={noteImage}
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
                            deleteNotes(item._id);
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
                          onClick={() => handleEditNote(item)}
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
                      {item.description}
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
                            color: backColor?.bottlingColor
                              ? `rgb(${backColor?.bottlingColor})`
                              : null,
                          }}
                        />
                        <Typography
                          color={
                            backColor?.bottlingColor
                              ? `rgb(${backColor?.bottlingColor})`
                              : null
                          }
                          sx={{
                            fontSize: {
                              xs: "0.9rem",
                              sm: "0.9rem",
                              md: "0.9rem",
                            },
                          }}
                        >
                          {item.categorie}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
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
                          {formattedDate}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Typography
              variant="h6"
              color="#999"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                textAlign: "center",
                mt: 4,
              }}
            >
              No Items In Bottling.
            </Typography>
          )}
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
                onChange={handleDescriptionChange}
                value={description}
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
                      <MenuItem value={"Tasting"}>Tasting</MenuItem>
                      <MenuItem value={"Brewing"}>Brewing</MenuItem>
                      <MenuItem value={"Fermentation"}>Fermentation</MenuItem>
                      <MenuItem value={"Bottling"}>Bottling</MenuItem>
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
                      value={
                        selectedDate ? dayjs(selectedDate, "DD/MM/YYYY") : null
                      }
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
                  onClick={addNotes}
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
                  {isEditing ? "Update Note" : "Save Note"}
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
