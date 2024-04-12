import { TextField as TextFieldCore, TextFieldProps } from "@mui/material";
import React from "react";

function TextField({ ...props }: TextFieldProps) {
  return (
    <TextFieldCore InputLabelProps={{ sx: { fontSize: 14 } }} {...props} />
  );
}

export default TextField;
