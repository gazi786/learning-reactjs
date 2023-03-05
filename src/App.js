import React from "react";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import RoutesStore from "./Routes";
import linkRoutes from "./routeConstant";

const App = () => {
  return (
    <Box marginBottom={5}>
      <NavBar linkRoutes={linkRoutes} />
      <RoutesStore />
    </Box>
  );
};

export default App;
