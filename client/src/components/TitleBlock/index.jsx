import React from "react";
import styles from "./TitleBlock.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const TitleBlock = ({ title, children }) => {
  return (
    <Paper classes={{ root: styles.root }}>
    <form>
      <Typography variant="h6" classes={{ root: styles.title }}>
        {title}
      </Typography>
      {children}
    </form>
    </Paper>
  );
};
