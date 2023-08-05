import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ToggleColorMode = ({ theme, handleThemeSwitch }) => {
  return (
    <IconButton
      color="inherit"
      aria-label="toggle color mode"
      onClick={handleThemeSwitch}
    >
      {theme.palette.mode === "light" ? (
        <Brightness4Icon />
      ) : (
        <Brightness7Icon />
      )}
    </IconButton>
  );
};

export default ToggleColorMode;
