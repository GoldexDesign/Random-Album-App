import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import ToggleColorMode from "./ToggleColorMode";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme(); (to activate default theme just remove // and change theme={darkTheme} to theme={defaultTheme})

const handleReload = () => {
  window.location.reload();
};
const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function CustomDialog({ open, onClose, image }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>View Picture</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            src={image}
            alt="Preview"
            style={{ maxWidth: "70vw", maxHeight: "70vh" }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [themeMode, setThemeMode] = useState("light");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleToggleMusic = () => {
    const audioElement = document.getElementById("music");

    if (isMusicPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsMusicPlaying((prevIsMusicPlaying) => !prevIsMusicPlaying);
  };

  useEffect(() => {
    const selectedTheme = themeMode === "light" ? defaultTheme : darkTheme;
    setTheme(selectedTheme);
  }, [themeMode]);

  const handleThemeSwitch = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
  };

  const selectedTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const handleViewImage = (image) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Random Photo Viewer
          </Typography>
          <Box sx={{ marginLeft: "auto" }}></Box>
          <ToggleColorMode
            theme={theme}
            handleThemeSwitch={handleThemeSwitch}
          />
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              This is a basic App. You can watch random beutiful photos from
              around the world and listen music. Check out buttons: SWITCH
              THEME, RELOAD, VIEW, PLAY/STOP MUSIC...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleReload}>
                RELOAD
              </Button>
              <Button variant="outlined" onClick={handleToggleMusic}>
                {isMusicPlaying ? "STOP MUSIC" : "PLAY MUSIC"}
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() =>
                        handleViewImage(
                          "https://source.unsplash.com/random?wallpapers"
                        )
                      }
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <audio id="music" src={require("./music/opsesija.mp3")} />
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      <CustomDialog
        open={openDialog}
        onClose={handleCloseDialog}
        image={selectedImage}
      />
    </ThemeProvider>
  );
}
