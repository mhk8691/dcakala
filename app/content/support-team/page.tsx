import { Box, Typography } from "@mui/material";
import { metadata } from "../../layout";
metadata.title = "پشتیبانی حین و بعد از فروش";
export default function SupportTeamPage() {
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
        پشتیبانی حین و بعد از فروش
      </Typography>
    </Box>
  );
}
