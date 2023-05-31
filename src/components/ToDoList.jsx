import React, { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  listBox: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    height: "35rem",
    justifyContent: "center",
    flexDirection: "column",
  },
  todoInputTextfield: {
    width: "30rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  addButton: {
    backgroundColor: "gray",
  },
}));

function ToDoList() {
  const classes = useStyles();
  const [todoList, setToDoList] = useState([]);

  return (
    <>
      <Box className={classes.listBox}>
        <TextField
          className={classes.todoInputTextfield}
          label="Enter TODO description to add to the list."
          id="todoInput"
        />
        <Button className={classes.addButton}>Add to list</Button>
      </Box>
    </>
  );
}

export default ToDoList;
