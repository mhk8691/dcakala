import { Box, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
export default function Navbar() {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent="space-between"
      borderBottom={1}
      borderColor={"#DDDDDD"}
      p={2}
      alignItems={"center"}
      sx={{ direction: "rtl" }}
    >
      <Box display={"flex"} justifyContent={"right"}>
        <Box
          component={"img"}
          src="https://dashboard.dcakala.com/public/images/setting/new-logo-dcakala/2024/10/new-logo-dcakala_original.webp"
          alt=""
          sx={{ width: "50%" }}
        />
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xxs: "12px",
              sm: "16px",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneIcon sx={{ ml: 1.5, color: "#399697" }} />
          <Box component={"span"} sx={{ opacity: 0.9 }}>
            مرکز تماس و پشتیبانی:
          </Box>
          <Box component="span" sx={{ color: "#399697", mr: 1 }}>
            02172195
          </Box>
        </Typography>
      </Box>
    </Stack>
  );
}
