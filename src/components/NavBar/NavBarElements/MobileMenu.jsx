import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const MobileMenu = ({ linkRoutes }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ fontSize: "1.5rem" }}
        >
          <MenuIcon sx={{ width: "3em", height: "3em" }} />
        </IconButton>
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
            width: { xs: "100%", md: "auto" },
          }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            {linkRoutes.map((route) => (
              <Box key={route.path}>
                <Typography
                  textAlign="center"
                  sx={{
                    width: "100%",
                    display: "block",
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  <Link to={route.path} sx={{ textDecoration: "none" }}>
                    {route.label}
                  </Link>
                </Typography>
                {route.children && (
                  <Box sx={{ pl: 2 }}>
                    {route.children.map((childRoute) => (
                      <Typography
                        key={childRoute.path}
                        textAlign="center"
                        sx={{
                          width: "100%",
                          display: "block",
                          color: "white",
                          textDecoration: "none",
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        <Link
                          to={childRoute.path}
                          sx={{ textDecoration: "none" }}
                        >
                          {childRoute.label}
                        </Link>
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default MobileMenu;
