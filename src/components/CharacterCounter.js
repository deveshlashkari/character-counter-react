import React, { useState } from "react";
import { TextField, Box, Typography, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Create a custom hook for styles
const useStyles = makeStyles({
  root: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    marginBottom: "32px",
    color: "teal",
    textAlign: "center",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "teal",
      },
      "&:hover fieldset": {
        borderColor: "teal",
      },
      "&.Mui-focused fieldset": {
        borderColor: "teal",
      },
    },
    "& .MuiInputLabel-root": {
      color: "teal",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "teal",
    },
  },
  card: {
    padding: "16px",
    backgroundColor: "teal !important",
    color: "white",
    marginTop: "32px",
    width: "100%",
  },
  typographyBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  typography: {
    fontSize: "24px",
    color: "white", // Adjusted for better visibility
  },
});

const CharacterCounter = () => {
  const [text, setText] = useState("");
  const classes = useStyles();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const getCharacterCount = () => text.length;
  const getWordCount = () =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const getSentenceCount = () =>
    (text.match(/[^\.!\?]+[\.!\?]+/g) || []).length;
  const getParagraphCount = () =>
    text.trim() === "" ? 0 : text.trim().split(/\n+/).length;
  const getSpaceCount = () => text.split(" ").length - 1;

  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.heading}>
        Character Counter
      </Typography>
      <TextField
        placeholder="Enter your text here"
        multiline
        rows={8}
        variant="outlined"
        fullWidth
        value={text}
        onChange={handleTextChange}
        className={classes.textField}
      />
      <Card className={classes.card}>
        <Box className={classes.typographyBox}>
          <Typography variant="h4" className={classes.typography}>
            Characters: {getCharacterCount()}
          </Typography>
          <Typography variant="h4" className={classes.typography}>
            Words: {getWordCount()}
          </Typography>
          <Typography variant="h4" className={classes.typography}>
            Sentences: {getSentenceCount()}
          </Typography>
          <Typography variant="h4" className={classes.typography}>
            Paragraphs: {getParagraphCount()}
          </Typography>
          <Typography variant="h4" className={classes.typography}>
            Spaces: {getSpaceCount()}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default CharacterCounter;
