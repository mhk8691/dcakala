import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
export default function SubNavbar() {
  return (
    <Stack
      bgcolor={"#F3F3F3"}
      flexDirection={"row"}
      alignItems={"center"}
      borderBottom={3}
      py={1.5}
      gap={4}
      mt={0.5}
      justifyContent={"center"}
      borderColor={"#EAEAEA"}
      sx={{ borderBottomRightRadius: "50%", borderBottomLeftRadius: "50%" }}
      
    >
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: "14px", mr: 0.5 }}
        >
          مجله آموزشی
        </Typography>
        <LocalOfferIcon fontSize="small" />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: "14px", mr: 0.5 }}
        >
          تخفیف ها و پیشنهاد ها
        </Typography>
        <LocalOfferIcon fontSize="small" />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: "14px", mr: 0.5 }}
        >
          خرید اقساطی
        </Typography>
        <LocalOfferIcon fontSize="small" />
      </Stack>
    </Stack>
  );
}
