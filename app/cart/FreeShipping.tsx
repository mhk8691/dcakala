import { Box, LinearProgress, Typography } from "@mui/material";

export default function FreeShipping() {
  return (
    <Box mt={1} width={"100%"} mb={2}>
      <Typography variant="h6" color="initial" sx={{ fontSize: "12px" }}>
        کالا های موجود در سبد شما ثبت و رزرو نشده اند,برای ثبت سفارش مراحل بعدی
        را تکمیل کنید.
      </Typography>
      <LinearProgress
        variant="determinate"
        value={0}
        sx={{ py: 0.6, borderRadius: 5, bgcolor: "#EEAFAF", mt: 1 }}
      />
      <Typography variant="h6" color="initial" sx={{ fontSize: "12px",mt:1 }}>
        10,000,000 تومان تا ارسال رایگان
      </Typography>
    </Box>
  );
}
