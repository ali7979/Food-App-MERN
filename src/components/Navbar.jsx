import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useContext } from "react";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
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
import AdbIcon from "@mui/icons-material/Adb";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";

const pages = ["Offer","Order","About"];
const settings = ["Profile", "Payment Methods", "Logout"];

function Navbar() {
  const handleOpenSidebar = () => {};

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {};

  const navigate = useNavigate();

  function handleMenuItemClick(setting) {
    console.log(`Clicked on ${setting} setting`);
    if (setting == "Logout") {
      localStorage.removeItem("authToken");
      navigate("../");
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { theme, settheme } = useContext(ThemeContext);

  const handleToggleDarkMode = () => {
    settheme(!theme);
    //setDarkMode(!darkMode);
  };

  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.body.className = theme ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <>
      <AppBar
        position="static"
        sx={{ mb: 4 }}
        style={{
          background: theme ? "#102a43" : "transparent",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: theme ? 'white' : '#0B2447',ml:11 }} /> */}

            <img
              src={logo}
              alt="ZB Foods logo"
              style={{ filter: !theme ? "none" : "invert(1)", width: "5rem" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontSize: "2rem",
                display: { xs: "none", md: "flex" },
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: "900",
                letterSpacing: ".1rem",
                color: theme ? "white" : "#0B2447",
                textDecoration: "none",
              }}
            >
              ZB Foods
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleSlider}
              >
                <MenuIcon style={{ color: theme ? "white" : "#0B2447" }} />
              </IconButton>

              <Button onClick={handleToggleDarkMode}>
                {" "}
                <ModeNightIcon />
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  fontFamily: "M PLUS Rounded 1c",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: theme ? "white" : "black",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: { theme } ? "white" : "black",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button onClick={handleToggleDarkMode}>
                {" "}
                <ModeNightIcon />
              </Button>
              {localStorage.getItem("authToken") ? (
              <>
              
                </>
              ) : (<><Link
                key="Signup"
                to='/signup'
                replace
                style={{ textDecoration: "none" }}
              >
                <div
                  key="Signup"
                  style={{
                    fontFamily: "M PLUS Rounded 1c",
                    fontSize: "1.2rem",
                    color: theme ? "white" : "var(--l2)",
                    margin: "1.5rem 2rem",
                    cursor: "pointer",
                  }}
                >
                  Signup
                </div>
              </Link> </>)
                  }
              {pages.map((page) => (
                <Link
                  key={page}
                  to={`/${page}`}
                  replace
                  style={{ textDecoration: "none" }}
                >
                  <div
                    key={page}
                    style={{
                      fontFamily: "M PLUS Rounded 1c",
                      fontSize: "1.2rem",
                      color: theme ? "white" : "var(--l2)",
                      margin: "1.5rem 2rem",
                      cursor: "pointer",
                    }}
                  >
                    {page}
                  </div>
                </Link>
              ))}


  {localStorage.getItem("authToken") ? (
    <>
              <Link
                key="My Cart"
                to="../mycart"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    fontFamily: "M PLUS Rounded 1c",
                    fontSize: "1.2rem",
                    color: theme ? "white" : "var(--l2)",
                    margin: "1.5rem 2rem",
                    cursor: "pointer",
                  }}
                >
                  My Cart
                </div>
              </Link>
             
             </>
              ) : (
                <NavLink
                key="Login"
                to="/login"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    fontFamily: "M PLUS Rounded 1c",
                    fontSize: "1.2rem",
                    color: theme ? "white" : "var(--l2)",
                    margin: "1.5rem 2rem",
                    cursor: "pointer",
                  }}
                >
                  Login
                </div>
              </NavLink>
              )}

            </Box>

            {localStorage.getItem("authToken") ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="zb"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
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
                      onClick={() => handleMenuItemClick(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              ""
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
