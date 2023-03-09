import React from "react";
import { AppBar, Toolbar, Box, Container, styled } from "@mui/material";
import Logo from "./NavBarElements/Logo";
import NavLink from "./NavBarElements/ActiveNavLink";
import MobileMenu from "./NavBarElements/MobileMenu";
import "./NavBarElements/NavBar.module.css";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#43C0F6",
  textTransform: "uppercase",
  color: "white",
});

const NavBar = ({ linkRoutes }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#43C0F6" }}>
      <Container>
        <StyledToolbar>
          <Logo />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              ml: "auto",
            }}
          >
            {linkRoutes.map((route) => (
              <Box key={route.path} sx={{ mx: 2 }}>
                <Box
                  textAlign="center"
                  sx={{
                    width: "100%",
                    display: "block",
                    textDecoration: "none !important",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  <NavLink to={route.path}>{route.label}</NavLink>
                </Box>
              </Box>
            ))}
          </Box>
          {/* Mobile Menu */}
          <MobileMenu linkRoutes={linkRoutes} />
          {/* Mobile Menu End */}
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
