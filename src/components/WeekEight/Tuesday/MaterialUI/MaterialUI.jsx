import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

const MaterialUI = () => {
  return (
    <Box
      sx={{
        pt: 3,
      }}
    >
      <Container>
        <Box>
          <Typography variant="h6" component="h6" margin={2}>
            Styling with Material UI
          </Typography>
          <Typography variant="p" component="p" mb={2} ml={2}>
            We are going to be using Material UI to style our components. We
            will be using the Box component to wrap our components and then we
            will be using the sx prop to style our components.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "solid",
              borderColor: "primary.main",
              borderRadius: "1rem",
              padding: "1rem",
              borderWidth: "1px",
              width: "100%",
            }}
          >
            <Typography variant="h6" component="h6" margin={2}>
              Lets make some styles with Material UI
            </Typography>
            <Typography variant="p" component="p" margin={2}>
              PS: This site app is fully using Material UI. Check out the code:{" "}
              <Link href="https://github.com/gazi786/learning-reactjs.git">
                {" "}
                Learning ReactJS
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MaterialUI;
