import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import ToDoList from "./components/ToDoList";

const useStyles = makeStyles(() => ({
  titleBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  appTitle: {
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: 0,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.titleBox}>
        <h1 className={classes.appTitle}>Simple React TODO List</h1>
        <sub>powered by Material UI</sub>
      </Box>
      <ToDoList />
    </>
  );
}

export default App;
