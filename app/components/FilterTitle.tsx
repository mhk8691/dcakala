import { Box, Typography } from "@mui/material";
import React from "react";

export default function FilterTitle() {
  return (
    <Box
      bgcolor={"#A4A4A4"}
      py={0.7}
      px={1}
      sx={{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        textAlign: "center",
        fontWeight: "normal",
      }}
    >
      <Typography variant="h6" sx={{ fontSize: "16px", color: "white" }}>
        فیلتر محصولات
      </Typography>
    </Box>
  );
}
