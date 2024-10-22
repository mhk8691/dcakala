import { Box, Typography } from "@mui/material";
import React from "react";
import { metadata } from "../../layout";
metadata.title =' تضمین بازگشت وجه';
export default function RefundPayPage() {
  return (
    <Box sx={{ mt: 5, direction: "rtl", px: 5 }}>
      <Typography variant="body1" color="initial">
        بازگشت 7 روزه در صو.رت مغایرت کالا
      </Typography>
    </Box>
  );
}