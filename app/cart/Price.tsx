import { Box, Button, Grid2 as Grid, SxProps, Typography } from "@mui/material";
const PriceTitleStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  mb: 2.5,
};
export default function Price() {
  return (
    <Box border={1} borderColor={"#DDDDDD"} borderRadius={2} p={2}>
      <Box>
        <Box sx={PriceTitleStyle}>
          <Typography variant="body2" color="initial" sx={{ opacity: 0.9 }}>
            مبلغ کل (۰ کالا)
          </Typography>
          <Typography variant="body2" color="initial" sx={{ opacity: 0.9 }}>
            ۰ تومان
          </Typography>
        </Box>
        <Box sx={PriceTitleStyle}>
          <Typography variant="body2" color="initial" sx={{ opacity: 0.9 }}>
            هزینه ارسال
          </Typography>
          <Typography variant="body2" color="initial" sx={{ opacity: 0.9 }}>
            وابسته به آدرس
          </Typography>
        </Box>
      </Box>
      <Box component={"hr"} sx={{ border: 1, borderColor: "#E5E7EB" }} />
      <Box mt={2}>
        <Box sx={PriceTitleStyle}>
          <Typography variant="body2" color="error" sx={{ opacity: 0.9 }}>
            تخفیف
          </Typography>
          <Typography variant="body2" color="error" sx={{ opacity: 0.9 }}>
            ۰ تومان
          </Typography>
        </Box>
        <Box sx={PriceTitleStyle}>
          <Typography variant="body2" color="initial" sx={{ opacity: 0.9 }}>
            مبلغ قابل پرداخت
          </Typography>
          <Typography variant="body2" color="initial" sx={{ opacity: 0.9 }}>
            ۰ تومان
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ bgcolor: "primary.dark", color: "#efefef", width: "100%" }}
        >
          ادامه ثبت سفارش
        </Button>
      </Box>
    </Box>
  );
}
