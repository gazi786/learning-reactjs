import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ListShopLists = ({ handleAddItem }) => {
  const [itemList, setItemList] = useState({ item: "", quantity: "" });

  const addItem = (e) => {
    const { name, value } = e.target;
    setItemList((prevItemList) => ({ ...prevItemList, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemList.item.length > 0 || itemList.quantity.length > 0) {
      handleAddItem(itemList.item, itemList.quantity);
      setItemList({ item: "", quantity: "" }); // Clear the text fields
    } else {
      alert("Please enter an item and quantity");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="outlined-item-list"
          label="Add Item"
          name="item"
          value={itemList.item}
          onChange={addItem}
        />
        <TextField
          id="outlined-item-list"
          label="Add Quantity"
          name="quantity"
          value={itemList.quantity}
          onChange={addItem}
        />
        <Button variant="contained" type="submit">
          Add Item to List
        </Button>
      </Box>
    </Box>
  );
};

export default ListShopLists;
