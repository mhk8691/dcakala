import { Box, Typography } from "@mui/material";
import React from "react";

export default function Questions({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        border: "1px solid #00786D",
        borderRadius: 2,
        borderTop: 5,
        borderTopColor: "#00786D",
        direction: "rtl",
        p: 2,
        width: "50%",
      }}
    >
      <Typography variant="h6" sx={{ fontSize: "17px", px: 4 }}>
      {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "16px", lineHeight: "2.25", mt: 3 }}
      >
        {children}
      </Typography>
    </Box>
  );
}
