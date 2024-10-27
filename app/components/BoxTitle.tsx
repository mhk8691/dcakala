import { Box, SxProps, Typography } from "@mui/material";
import React from "react";

interface Props {
  style?: SxProps;
  title: string;
}
export default function BoxTitle({ style,title }: Props) {
  const defaultStyle: SxProps = {
    py: 0.7,
    px: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: "center",
    fontWeight: "normal",
  };
  return (
    <Box sx={{ ...defaultStyle, ...style }}>
      <Typography variant="h6" sx={{ fontSize: "16px", color: "white" }}>
        {title}
      </Typography>
    </Box>
  );
}
