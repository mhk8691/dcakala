import {
  Box,
  createTheme,
  Grid2 as Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Theme from "../core/Theme";
import Link from "next/link";

interface Data {
  image: string;
  link: string;
  title: string;
}
const data: Data[] = [
  {
    image:
      "https://dashboard.dcakala.com/public/images/home/simple-category/2024/09/cctv-categories-desk_original.webp",
    link: "/cctv",
    title: "دوربین مداربسته",
  },
  {
    image:
      "https://dashboard.dcakala.com/public/images/home/simple-category/2024/09/video-door-phone-categories-desktop_original.webp",
    link: "/video-door-phone",
    title: "آیفون تصویری",
  },
  {
    image:
      "https://dashboard.dcakala.com/public/images/home/simple-category/2024/09/automatic-gate-categories-desktop_original.webp",
    link: "/automatic-gate",
    title: "جک درب پارکینگی",
  },

  {
    image:
      "https://dashboard.dcakala.com/public/images/home/simple-category/2024/09/automatic-glass-doors-categories-desktop_original.webp",
    link: "/automatic-glass-doors",
    title: "درب اتوماتیک شیشه ای",
  },
  {
    image:
      "https://dashboard.dcakala.com/public/images/home/simple-category/2024/09/barrier-categories-desktop_original.webp",
    link: "/barrier",
    title: "راهبند",
  },
  {
    image:
      "https://dashboard.dcakala.com/public/images/home/simple-category/2024/09/simaran-electrical-devices-categories-desktop_original.webp",
    link: "/simaran-electrical-devices",
    title: "لوازم خانگی",
  },
];

export default function Category() {
  return (
    <Theme>
      <Grid container spacing={2} sx={{ mt: "2rem",mb:2, direction: "rtl" }}>
        {data.map((item, index) => (
          <Grid size={{ sm: 2, xs: 4 }} key={index}>
            <Stack
              component={Link}
              href={item.link}
              direction={"column"}
              alignItems={"center"}
              sx={{
                transition: "all 0.1s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                component={"img"}
                src={item.image}
                alt={item.title}
                width={"70%"}
              />
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontSize: "12px", mt: 1 }}
              >
                {item.title}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Theme>
  );
}
