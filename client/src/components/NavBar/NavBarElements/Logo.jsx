import React from "react";
import { Typography, Box } from "@mui/material";
import { Adb as AdbIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Logo = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <AdbIcon
        sx={{
          mr: 1,
          fontSize: "2.125rem",
          lineHeight: "1.235rem",
          fontWeight: 700,
        }}
      />
      <Typography
        variant="h4"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          "&:hover": {
            color: "#135a48c1",
          },
          [theme.breakpoints.up("xs", "sm")]: {
            variant: "h6",
            fontWeight: 800,
            letterSpacing: ".01rem",
          },
        }}
      >
        LEARN REACT JS
      </Typography>
    </Box>
  );
};

export default Logo;
