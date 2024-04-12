import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {};

function ExtraordinaryExpenses({}: Props) {
  return (
    <Box padding={2} pb={4} bgcolor="white" borderRadius={2} boxShadow={2}>
      <Typography variant="h5">Extraordinary Expenses</Typography>
    </Box>
  );
}

export default ExtraordinaryExpenses;
