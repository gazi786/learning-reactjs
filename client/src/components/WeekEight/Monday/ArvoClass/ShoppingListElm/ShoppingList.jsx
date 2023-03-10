import { Box, Button, Divider, Typography } from "@mui/material";
import { DeleteRounded } from "@mui/icons-material";
import React from "react";

const ShoppingList = ({ listsArray, handleDeleteItem }) => {
  console.log(`listsArray:${listsArray} `);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 3,
      }}
    >
      <Box sx={{}}>
        <Divider
          sx={{ my: 2, width: "100%", borderTop: "3px solid #6C6C6C" }}
        ></Divider>
        <Typography variant="h5" component="h5" margin={2}>
          What you need to buy
        </Typography>

        {listsArray.map(({ item, quantity }, index) => (
          <Typography variant="p" component="p" margin={2} key={index}>
            {index + 1}. {item} - {quantity}
            <Button onClick={() => handleDeleteItem(item, quantity)}>
              <DeleteRounded />
            </Button>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
