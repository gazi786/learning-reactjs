import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Doggo from "../../../../assets/WeekEight/EventsRendering/Doggo.jpeg";
import Catgo from "../../../../assets/WeekEight/EventsRendering/Catgo.jpeg";
import LongNeck from "../../../../assets/WeekEight/EventsRendering/longNeck.jpeg";

const EventsRendering = () => {
  const [animalImageURL, setAnimalImageURL] = useState("");
  const [animalAlt, setAnimalAlt] = useState("");

  const handleDoggo = () => {
    setAnimalImageURL(Doggo);
    setAnimalAlt("Doggo is wassup");
  };
  const handleCatgo = () => {
    setAnimalImageURL(Catgo);
    setAnimalAlt("Cat is Lost");
  };
  const handleLongNeck = () => {
    setAnimalImageURL(LongNeck);
    setAnimalAlt("Long Neck is sleepy");
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
        }}
      >
        <Button
          variant="outlined"
          onClick={handleDoggo}
          sx={{
            mr: 1,
            "&:hover": {
              backgroundColor: "#6C6C6C",
              color: "#fff",
              fontWeight: "bold",
            },
          }}
        >
          Wassup Doggo
        </Button>
        <Button
          variant="outlined"
          onClick={handleCatgo}
          sx={{
            mr: 1,
            "&:hover": {
              backgroundColor: "#6C6C6C",
              color: "#fff",
              fontWeight: "bold",
            },
          }}
        >
          Lost Cat
        </Button>
        <Button
          variant="outlined"
          onClick={handleLongNeck}
          sx={{
            mr: 1,
            "&:hover": {
              backgroundColor: "#6C6C6C",
              color: "#fff",
              fontWeight: "bold",
            },
          }}
        >
          Sleepy Long Neck
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
        }}
      >
        <Box>
          <img
            src={animalImageURL}
            alt={animalAlt}
            sx={{
              width: "100%",
              maxWidth: "1rem",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: "justify", my: 3 }}
        >
          Event Condition Rendering is a feature that allows you to render
          components based on events. In this example, we have three buttons
          that represent three different animals. When you click on the button,
          the image of the animal will appear. This is a simple example of how
          you can use events to render components. You can also use events to
          render components based on user input. For example, you can render a
          component based on a user's search input. This is a very powerful
          feature that can be used to create dynamic web applications. The
          useState hook allows you to create a state variable that can be used
          to render components based on events.
        </Typography>
      </Box>
    </Box>
  );
};

export default EventsRendering;
