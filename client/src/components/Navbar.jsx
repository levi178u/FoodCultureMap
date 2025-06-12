import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <AppBar position="static" sx={{
  background: "linear-gradient(90deg,#2a5298  0%, #1e3c72 100%)"
}}
>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="/logo2.png" // Replace with your logo path
            alt="Logo"
            style={{ height: 40 }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            FM-Culture
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffffff",
            px: 2,
            borderRadius: 2,
            width: "40%",
          }}
        >
          <SearchIcon sx={{ color: "#888" }} />
          <InputBase placeholder="Search…" fullWidth sx={{ ml: 1 }} />
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit"  startIcon={<MenuBookIcon />} sx={{ textTransform: "none" }}>
            Explore Stories
          </Button>
          <Button color="inherit"      startIcon={<LogoutIcon />} sx={{ textTransform: "none" }}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
