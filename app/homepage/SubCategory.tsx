"use client";
import {
  Box,
  Container,
  Grid2 as Grid,
  SxProps,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Theme from "../core/Theme";
import Link from "next/link";
const imageStyle: SxProps = {
  width: "100%",
  borderRadius: 2,
};

export default function SubCategory() {
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Theme>
      <Container maxWidth={"xxxl"} sx={{ mt: 5 }}>
        <Grid container rowSpacing={[0.1, 0.1, 1]} columnSpacing={[1, 1, 2]}>
          <Grid size={6}>
            <Box component={Link} href={"/automatic-gate/kone-gates"}>
              <Box
                component={"img"}
                src={
                  isExtraSmallScreen
                    ? "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-mobile-new-size_original.webp"
                    : "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_2x.webp"
                }
                alt="جک کانه گیتس"
                sx={imageStyle}
              />
            </Box>
          </Grid>
          <Grid size={6}>
            <Box component={Link} href={"/video-door-phone/electropeyk"}>
              <Box
                component={"img"}
                src={
                  isExtraSmallScreen
                    ? "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-mobile-new-size_original.webp"
                    : "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_2x.webp"
                }
                alt="آیفون تصویری"
                sx={imageStyle}
              />
            </Box>
          </Grid>
          <Grid size={12}>
            <Box
              component={Link}
              href={
                "/rolling-shutters/rolling-shutter-packs/pool-cover-electric-shutter.html"
              }
            >
              <Box
                component={"img"}
                src={
                  isExtraSmallScreen
                    ? "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-mobile-design_original.webp"
                    : "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_2x.webp"
                }
                alt="کرکره روی استخر"
                sx={imageStyle}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Theme>
  );
}
