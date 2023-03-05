import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material";

const NavLink = ({ to, children }) => {
  const location = useLocation();

  const NavbarLink = styled(Link)({
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#2725252d",
    },
    "&:focus": {
      color: "#2725252d",
    },
  });

  const parentActiveStyle = {
    fontWeight: "bold",
    color: "#394c74b0",
    borderBottom: "2px solid #394c74b0",
  };

  return (
    <NavbarLink
      to={to}
      style={
        (location.pathname.includes(to) || location.pathname === to) &&
        !(to === "/" && location.pathname !== "/")
          ? parentActiveStyle
          : {}
      }
    >
      {children}
    </NavbarLink>
  );
};

export default NavLink;
