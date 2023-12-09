import React from "react";
import logo from "../assets/img/logo.png";
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

const pages = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "About", to: "/About"},
  { id: 3, name: "Medicine", to: "/Medicine"},
  { id: 4, name: "Contact", to: "/Contact" },
];
// const settings = [
//   { id: 1, name: "Education", to: "/Education" },
//   { id: 2, name: "Position of Responsibility", to: "/Post" },
//   { id: 3, name: "Other Platforms", to: "/Other" },
// ];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#001830"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton href={pages[0].to}>
                {/* <Avatar alt="Shree" src="ss.jpg" sx={{ bgcolor: "grey" }} /> */}
                <Avatar src={logo} style={{ filter: "invert(100%)"}} />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  href={setting.to}
                  onClick={handleCloseUserMenu}
                >
                  <Button
                    href={setting.to}
                    key={setting.name}
                    sx={{ my: 3, mr: 1, color: "brown", display: "block" }}
                  >
                    {setting.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
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
              fontSize:"1.5rem",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RogRaksha
          </Typography>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                href={page.to}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 7, color: "white", display: "block" , fontWeight:"800",  borderRadius: 2,pl:"1.3rem", pr:"1.3rem", // Add border radius
                '&:hover': {
                  backgroundColor: "orange", // Change color on hover
                },}}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
