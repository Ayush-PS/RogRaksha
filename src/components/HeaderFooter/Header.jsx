import React from "react";
import logo from "../../assets/img/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";

import classes from "../Styles/Header.module.css";

const pages = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "About", to: "/About" },
  { id: 3, name: "Medicine", to: "/Medicine" },
  { id: 4, name: "Emergency", to: "/Meeting" },
  { id: 5, name: "Appointment", to: "/AppointmentForm" },
];

function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#001830" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton href={pages[0].to}>
                <Avatar src={logo} style={{ filter: "invert(100%)" }} />
              </IconButton>
            </Tooltip>
          </Box>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 6,
              mr: 14,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              fontSize: "1.5rem",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RogRaksha
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              ml: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RogRaksha
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  href={page.to}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Button
                    href={page.to}
                    key={page.name}
                    sx={{ my: 2, mr: 3, color: "#001830", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                href={page.to}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mr: 7,
                  color: "white",
                  display: "block",
                  fontWeight: "800",
                  borderRadius: 2,
                  pl: "1.3rem",
                  pr: "1.3rem",
                  "&:hover": {
                    backgroundColor: "orange",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
            {isAuthenticated ? (
              <Button
                className={classes.authButton}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                sx={{
                  my: 2,
                  mr: 7,
                  color: "white",
                  display: "block",
                  fontWeight: "800",
                  borderRadius: 2,
                  pl: "1.3rem",
                  pr: "1.3rem",
                  "&:hover": {
                    backgroundColor: "orange",
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => loginWithRedirect()}
                className={classes.authButton}
                sx={{
                  my: 2,
                  mr: 7,
                  color: "white",
                  display: "block",
                  fontWeight: "800",
                  borderRadius: 2,
                  pl: "1.3rem",
                  pr: "1.3rem",
                  "&:hover": {
                    backgroundColor: "orange",
                  },
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
