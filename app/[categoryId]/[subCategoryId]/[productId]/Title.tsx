import { Box, Divider, Typography } from "@mui/material";
import React from "react";
interface Props {
  title: string;
}
export default function Title({ title }: Props) {
  return (
    <Box>
      <Typography
        variant="h6"
        color="initial"
        sx={{
          fontSize: "15px",
          color: "primary.dark",
          borderBottom: "2px solid #FF7900",
          display: "inline-block",
          px: 2,
          pb: 0.8,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Divider />
    </Box>
  );
}
