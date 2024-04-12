import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {};

function InsuranceQuote({}: Props) {
  return (
    <Box padding={2} pb={4} bgcolor="white" borderRadius={2} boxShadow={2}>
      <Typography variant="h5">Insurance Quote</Typography>
    </Box>
  );
}

export default InsuranceQuote;
