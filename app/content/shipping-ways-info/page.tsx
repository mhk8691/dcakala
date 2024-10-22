import { Box, Typography } from "@mui/material";
import React from "react";
import { metadata } from "../../layout";
metadata.title = "ارسال سریع به سراسر ایران";
export default function ShippingWaysInfoPage() {
  return (
    <Box
      sx={{
        px: 2,
        mt: 5,
      }}
    >
      <Typography
        variant="body1"
        color="initial"
        sx={{
          direction: "rtl",
        }}
      >
        - پیک اختصاصی (برای مناطق 22 گانه شهر تهران)
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          direction: "rtl",
        }}
      >
        - پست پیشتاز (برای سراسر کشور)
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          direction: "rtl",
        }}
      >
        - تیپاکس و چاپار (برای شهرهای تحت پوشش تیپاکس)
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          direction: "rtl",
        }}
      >
        - باربری (برای شهرهای تحت پوشش باربری مناسب برای اجناس سنگین)
      </Typography>
    </Box>
  );
}
