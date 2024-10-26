import { Box, Button, SxProps } from "@mui/material";
import React from "react";
export default function ActionFilterBtn({
  checked,
  style,
}: {
  checked?: {
    id: number;
    title: string;
  }[];
  style?: SxProps;
}) {
  const defaultStyle: SxProps = {
    bgcolor: "primary.dark",
    color: "white",
    fontWeight: "normal",
    "&[disabled]": {
      color: "#7B7B85",
      bgcolor: "#A4A4A4",
    },
  };
  return (
      <Button
        variant="contained"
        disabled={checked?.length === 0}
        sx={{ ...defaultStyle, ...style }}
      >
        اعمال فیلتر
      </Button>
  );
}
