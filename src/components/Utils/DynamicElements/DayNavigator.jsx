import React from "react";
import { Box } from "@mui/material";
import NavLink from "../../NavBar/NavBarElements/ActiveNavLink";
import { StyledLinkNav } from "./StyledElements";
import classnames from "classnames";

const isActive = (match, location) => {
  return location.pathname === match.path;
};

const DayNavigator = ({ linkRoutes, location, weekPath }) => {
  const weekRoute = linkRoutes.find((route) => route.path === weekPath);
  return (
    <Box sx={{ display: "flex", ml: "auto", marginTop: 3 }}>
      {weekRoute?.children?.map((child) => (
        <Box key={child.path} sx={{ marginLeft: "1rem" }}>
          <NavLink to={child.path}>
            <StyledLinkNav
              className={classnames({
                active: isActive({ path: child.path }, location),
              })}
            >
              {child.label}
            </StyledLinkNav>
          </NavLink>
        </Box>
      ))}
    </Box>
  );
};

export default DayNavigator;
