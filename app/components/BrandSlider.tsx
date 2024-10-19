"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Box, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { Brand } from "../services/videoBrand";
import Link from "next/link";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useEffect, useState } from "react";
import useBreakPoint from "../hook/useBreakPoint";
const swiperStyle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "18px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
interface Props {
  data: Brand[];
}
export default function BrandSlider({ data }: Props) {
  const [responsive, setResponsive] = useState<number | null>(null);
  const [hasBtn, setHasBtn] = useState<boolean>(true);
  const {
    isExtraSmall,
    isMobileSmall,
    isMobileLarge,
    isTabletSmall,
    isTabletLarge,
    isDesktopSmall,
    isDesktopLarge,
  } = useBreakPoint();
  useEffect(() => {
    if (isExtraSmall) {
      setHasBtn(false);
      setResponsive(2.5);
    } else if (isMobileSmall) {
      setResponsive(2.5);
      setHasBtn(false);
    } else if (isMobileLarge) {
      setResponsive(2.5);
      setHasBtn(true);
    } else if (isTabletSmall) {
      setResponsive(3.5);
      setHasBtn(true);
    } else if (isTabletLarge) {
      setResponsive(4.5);
      setHasBtn(true);
    } else if (isDesktopSmall) {
      setResponsive(3.5);
      setHasBtn(true);
    } else if (isDesktopLarge) {
      setResponsive(5);
      setHasBtn(true);
    }
  }, [
    isExtraSmall,
    isMobileSmall,
    isMobileLarge,
    isTabletSmall,
    isTabletLarge,
    isDesktopSmall,
    isDesktopLarge,
  ]);
  return (
    <div style={{ marginTop: "1rem" }}>
      <Grid container spacing={2}>
        <Grid size={{ xxs: 12, xl: 1.5 }}>
          <Box
            sx={{
              background: "linear-gradient(90deg, #FFA100 0%, #FF8D00 100%)",
              borderRadius: ".5rem",
              padding: "1rem",
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: {
                xxs: "76px",
                xl: "109px",
              },
              flexDirection: "column",
            }}
          >
            <VerifiedIcon sx={{ color: "white" }} />
            <Typography variant="body2" color="white">
              منتخب برندها
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xxs: 12, xl: 10.5 }}>
          <Box
            sx={{
              mt: {
                xxs: "0",
                xl: ".5rem",
              },
            }}
          >
            <Swiper
              slidesPerView={responsive ? responsive : 5}
              spaceBetween={30}
              navigation={hasBtn}
              modules={[Pagination, Navigation]}
              style={{
                width: "100%",
                height: "100%",
                padding: "1rem 1.5rem",
                border: "1px solid #FF7900",
                borderRadius: ".5rem",
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide style={swiperStyle} key={item.id}>
                  <Box
                    component={Link}
                    href={item.link}
                    sx={{
                      filter: {
                        xxs: "grayscale(0%)",
                        sm: "grayscale(100%)",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src={item.imagePath}
                      alt={item.title}
                      sx={{
                        display: "block",
                        width: "75px",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  {index < data.length && index != 0 && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        position: "absolute",
                        right: "-15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: "50%",
                        backgroundColor: "#E5E7EB",
                      }}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
