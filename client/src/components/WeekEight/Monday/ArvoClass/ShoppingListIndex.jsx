import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "./ShoppingListElm/Header";
import ListShopLists from "./ShoppingListElm/ListShopLists";
import ShoppingList from "./ShoppingListElm/ShoppingList";

const ShoppingLists = () => {
  const [listsArray, setListsArray] = useState([]);

  const handleAddItem = (item, quantity) => {
    const newItem = { item, quantity };
    setListsArray([...listsArray, newItem]);
  };

  const handleDeleteItem = (itemToDelete, quantityToDelete) => {
    setListsArray(
      listsArray.filter((item) => {
        return item.item !== itemToDelete || item.quantity !== quantityToDelete;
      })
    );
  };
  return (
    <Box
      sx={{
        pt: 3,
      }}
    >
      <Container>
        <Box>
          <Typography variant="h6" component="h6" margin={2}>
            Shopping List App
          </Typography>
          <Typography variant="p" component="p" mb={2} ml={2}>
            We are doing a shopping list app. We will be using the same logic as
            the ToDo app, but we will be using a different UI.
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
              maxWidth: "32rem",
            }}
          >
            <Header />
            <ListShopLists handleAddItem={handleAddItem} />
            <ShoppingList
              listsArray={listsArray}
              handleDeleteItem={handleDeleteItem}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ShoppingLists;
