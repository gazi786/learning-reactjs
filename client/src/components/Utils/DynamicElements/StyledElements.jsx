import { Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledLinkNav = styled(Typography)({
  color: "#172527",
  textDecoration: "none",
  width: "100%",
  display: "block",
  fontSize: "1rem",
  fontWeight: "bold",
  fontStyle: "italic",
  fontFamily: "cursive",
  "&:hover": {
    color: "#2725252d",
  },
  "&.active": {
    color: "#05554ecc",
  },
  "&:focus": {
    color: "#2725252d",
  },
});

export const StyledLinkBtn = styled(NavLink)({
  display: "flex",
  color: "#172527",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  "& button": {
    width: "auto",
    marginRight: "1rem",
    "&:hover": {
      color: "#127a7a",
    },
    "&:focus": {
      color: "#2f7777c6",
    },
  },
});
