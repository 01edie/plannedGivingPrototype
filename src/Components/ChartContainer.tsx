import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

type Props = {
  heading?: string;
  title?: string;
  children: React.ReactNode;
  additionalDetails?: React.ReactNode;
  lastItem?: boolean;
  chartHeight?: number;
};

function ChartContainer({
  heading,
  title,
  children,
  additionalDetails,
  lastItem,
  chartHeight,
}: Props) {
  return (
    <Grid item xs={12}>
      {heading ? (
        <Typography variant="h6" mb={2}>
          {heading}
        </Typography>
      ) : null}
      <Paper variant="outlined" sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box />
          <Typography textAlign="center" variant="h6">
            {title??''}
          </Typography>
          <IconButton onClick={() => {}}>
            <SaveAltIcon />
          </IconButton>
        </Box>
        <Box height={chartHeight ?? 375}>{children}</Box>
      </Paper>
      {additionalDetails ? <Box my={2}>{additionalDetails}</Box> : null}
      {!lastItem ? (
        <Box display="flex" justifyContent="center">
          <Divider sx={{ width: 35, mt: 3 }} />
        </Box>
      ) : null}
    </Grid>
  );
}

export default ChartContainer;
