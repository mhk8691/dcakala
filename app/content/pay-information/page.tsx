import React from "react";
import { metadata } from "../../layout";
import { Box, Typography } from "@mui/material";
metadata.title = "تنوع در روش های پرداخت";
export default function PayInformationPage() {
  return (
    <Box sx={{ mt: 5, direction: "rtl", px: 2 }}>
      <Typography variant="body1" color="initial">
        نماد های اعتباری سایت دی سی ای کالا
      </Typography>
      <Typography variant="body1" color="initial">
        وب سایت دی سی ای کالا با دریافت مجوزهای معتبر از کلیه نهاد های نظارتی در
        راستای جلب اعتمادو اعتبار از مشتریان و آسودگی خیال آنها آماده خدمت رسانی
        به مشتریان عزیز میباشد
      </Typography>
    </Box>
  );
}
