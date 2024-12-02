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
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import filterPng from "../assets/Images/filter.png";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import cardImg from "../assets/Images/cardImg.png";
import Footer from "../components/Footer";
import { styled } from "@mui/material/styles";
import {
  useAddBrewsMutation,
  useDeleteBrewsMutation,
  useGetAllBrewsMutation,
} from "../redux/apis/UserAuth";
import { useSelector } from "react-redux";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
const Cats = [
  { id: 1, value: "ALL" },
  { id: 2, value: "TASTING" },
  { id: 3, value: "BOTTLING" },
];
const cards = [
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "In Stock",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Pre-Order",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  ,
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
  {
    name: "Golden Ale",
    status: "Limited Release",
    img: cardImg,
  },
];
const BrewCollection = () => {
  const authData = useSelector((state) => state?.Auth?.data);
  const [selectedCat, setSelectedCat] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [allBrews, setAllBrews] = useState([]);
  const [getAllBrew, { isLoading, isError }] = useGetAllBrewsMutation();
  const [Addbrews] = useAddBrewsMutation();
  const [deleteBrews] = useDeleteBrewsMutation();
  console.log("first", allBrews);
  // ---------------Modal states---------------
  const [brewName, setBrewName] = useState("");
  const [brewStatus, setBrewStatus] = useState("");
  const [description, setDescription] = useState("");
  const [bottleSize, setBottleSize] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [brewImage, setBrewImage] = useState({});
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

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleBottleSizeChange = (event) => {
    setBottleSize(event.target.value);
  };

  const handleDateChange = (date) => {
    console.log("dataaaaa", date);
    setSelectedDate(date);
  };

  const handleBrewName = (event) => {
    setBrewName(event.target.value);
  };

  const handleBrewStatus = (event) => {
    setBrewStatus(event.target.value);
  };

  const handleImage = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      setBrewImage(files[0]);
    }

    console.log("first", brewImage);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  // ------------------API's Calling------------------
  const getAllBrews = async () => {
    try {
      const allBrews = await getAllBrew();
      const filteredBrews = allBrews.data.data.filter(
        (brew) => brew.userId === authData._id
      );
      setAllBrews(filteredBrews);
      console.log("Filtered Brews:", filteredBrews);
    } catch (error) {
      console.log("Error on getting all brews.");
    }
  };

  const addBrews = async () => {
    try {
      if (
        !brewName ||
        !brewStatus ||
        !description ||
        !bottleSize ||
        !selectedDate ||
        !brewImage
      ) {
        console.log("All fields are required");
        return;
      }

      const formData = new FormData();
      formData.append("brewName", brewName);
      formData.append("status", brewStatus);
      formData.append("description", description);
      formData.append("bottleSize", bottleSize);
      formData.append("date", selectedDate);
      formData.append("userId", authData._id);
      formData.append("image", brewImage);

      const addBrew = await Addbrews(formData);
      setIsModal(!isModal);
      getAllBrews();
      console.log("Brew added successfully", addBrew);
    } catch (error) {
      console.error("Error adding brew:", error);
    }
  };

  const deleteBrew = async (id) => {
    try {
      const responce = await deleteBrews(id);
      getAllBrews();
      console.log("Delete brew responce:", responce);
    } catch (error) {
      console.error("Failed to delete the brew:", error);
    }
  };

  useEffect(() => {
    getAllBrews();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          px: { xs: "1rem", sm: "2rem", md: "4rem", lg: "6rem" },
          backgroundColor: "#F8F9FA",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginY: "2rem",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "3rem", sm: "2rem", md: "3.5rem" },
              }}
            >
              My Brew Collection
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: { xs: 15, sm: "0.7rem", md: "1rem" },
                color: "gray",
              }}
            >
              Track, edit, and showcase your unique creations.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid item xs={10} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: { xs: 1, sm: 2, md: 3, lg: 4 },
                overflowX: "hidden",
              }}
            >
              {Cats.map((item, index) => (
                <Box key={index}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor:
                        selectedCat === index ? "#FF6F61" : "transparent",
                      borderRadius: "1.5rem",
                      boxShadow: "none",
                      minWidth: { xs: "40px", sm: "auto" },
                    }}
                    onClick={() => setSelectedCat(index)}
                  >
                    <Typography
                      sx={{
                        color: selectedCat === index ? "#fff" : "#000",
                        fontWeight: "500",
                        fontSize: { xs: 13, sm: 16, md: 18, lg: 20 },
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Button>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1rem",
              marginTop: { xs: "1rem", sm: 0 },
            }}
          >
            <img
              src={filterPng}
              alt="Filter icon"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />
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
              ADD NEW BREW
            </Button>
          </Grid>
        </Grid>

        {/* cards */}
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            my: 1,
          }}
        >
          {allBrews.length > 0 ? (
            allBrews.map((item, index) => {
              const isoDate = item.date;
              const formattedDate = moment(isoDate).format("DD/MM/YYYY");
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      padding: { xs: "12px", sm: "16px" },
                      borderRadius: "1rem",
                      borderColor: "#000",
                      borderWidth: hoveredIndex === index ? "0.05rem" : 0,
                      borderStyle: "solid",
                      transition: "border-width 0.3s, box-shadow 0.3s",
                      boxShadow:
                        hoveredIndex === index
                          ? "0 4px 20px rgba(0, 0, 0, 0.1)"
                          : "none",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "500",
                            fontSize: { xs: "1.2rem", sm: "1.5rem" },
                          }}
                        >
                          {item.brewName}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#FF6F61",
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                          }}
                        >
                          {item.status}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "7%",
                          justifyContent: "space-between",
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            deleteBrew(item._id);
                          }}
                          sx={{
                            backgroundColor: "#F6D9D6",
                            "&:hover": {
                              backgroundColor: "#FFE2DF",
                            },
                          }}
                          aria-label="delete"
                        >
                          <DeleteIcon sx={{ color: "#FF6F61" }} />
                        </IconButton>
                        <IconButton
                          sx={{
                            backgroundColor: "#E1E3E5",
                            "&:hover": {
                              backgroundColor: "#CDD2D5",
                            },
                          }}
                          aria-label="edit"
                        >
                          <EditIcon sx={{ color: "#000" }} />
                        </IconButton>
                      </Box>
                    </Box>
                    {hoveredIndex === index ? (
                      <Box
                        sx={{
                          width: "100%",
                          height: { xs: "auto", sm: "17.1rem" },
                          marginTop: "0.7rem",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                          opacity: hoveredIndex === index ? 1 : 0,
                          transform:
                            hoveredIndex === index ? "scale(1)" : "scale(0.95)",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            maxWidth: "22rem",
                            textAlign: "left",
                            fontSize: "1.2rem",
                            fontWeight: "normal",
                            border: "none",
                            outline: "none",
                            padding: "0",
                            resize: "none",
                            overflowY: "auto",
                            width: "100%",
                            maxHeight: "10rem",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                          }}
                        >
                          {item.description}
                        </div>

                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Box>
                              <Typography
                                variant="body2"
                                sx={{ color: "gray" }}
                              >
                                Bottle Size
                              </Typography>
                              <Typography variant="h6" sx={{ color: "#000" }}>
                                {item.bottleSize}ml
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-end",
                                textAlign: "left",
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ color: "gray" }}
                              >
                                Release Date
                              </Typography>
                              <Typography variant="h6" sx={{ color: "#000" }}>
                                {formattedDate}
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    ) : (
                      <img
                        src={item.image}
                        alt={allBrews.image}
                        style={{
                          width: "100%",
                          height: "30vh",
                          maxHeight: "400px",
                          marginTop: "0.7rem",
                          transition: "transform 0.3s ease",
                          borderRadius: "1rem",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Box>
                </Grid>
              );
            })
          ) : (
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                color="#999"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                  textAlign: "center",
                  mt: 4,
                }}
              >
                No Brews...
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6F61",
              px: { xs: 6, sm: 8, md: 10 },
              py: 1.5,
              my: { xs: 3, sm: 4, md: 4 },
              borderRadius: 8,
            }}
          >
            <Typography>SHOW MORE</Typography>
          </Button>
        </Grid>
        <Footer />
      </Box>
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
              <Typography variant="h5">Brew Name</Typography>
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
                label="Add Brew Name"
                multiline
                rows={1}
                placeholder="Add New Brew Note"
                onChange={handleBrewName}
                value={brewName}
              />
              <Typography variant="h5">Brew Status</Typography>
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
                label="Add Brew status"
                multiline
                rows={1}
                placeholder="Add Brew Status"
                onChange={handleBrewStatus}
                value={brewStatus}
              />
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
                      Bottle Size
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bottleSize}
                      onChange={handleBottleSizeChange}
                      variant="outlined"
                      label="Bottle Size"
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
                      <MenuItem value={100}>100ml</MenuItem>
                      <MenuItem value={250}>250ml</MenuItem>
                      <MenuItem value={500}>500ml</MenuItem>
                      <MenuItem value={1000}>1000ml</MenuItem>
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "red",
                  mt: 2,
                  borderRadius: 1,
                }}
              >
                <Button
                  fullWidth
                  component="label"
                  role={undefined}
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF6F61",
                    "&:hover": { backgroundColor: "#FF6F61" },
                  }}
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Image
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                  />
                </Button>
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
                  onClick={addBrews}
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
                  Save Brew
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
    </Box>
  );
};

export default BrewCollection;
