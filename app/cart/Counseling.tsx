import { Box, Typography } from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
export default function Counseling() {
  return (
    <Box border={1} borderColor={"#DDDDDD"} borderRadius={2} p={2} mt={2} >
      <Box display={"flex"} alignItems={"center"}>
        <HeadsetMicIcon fontSize="medium" color="secondary" />
        <Typography
          variant="body1"
          color="initial"
          sx={{ opacity: 0.8, mr: 1 }}
        >
          مشاوره و راهنمایی
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color="secondary"
        sx={{ fontSize: "12px", mt: 2 }}
      >
        در صورت سوال یا مشکل در مورد پرداخت <br /> با ما تماس بگیرید
      </Typography>
      <Box display={"flex"} alignItems={"center"} mt={2}>
        <PhoneEnabledIcon fontSize="medium" color="secondary" />
        <Typography
          variant="body1"
          color="initial"
          sx={{ opacity: 0.8, mr: 1 }}
        >
          مشاوره و راهنمایی
        </Typography>
      </Box>
    </Box>
  );
}
