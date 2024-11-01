"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import useBreakPoint from "@/app/hook/useBreakPoint";
import { data } from "@/app/services/videoPhone";
import Title from "./Title";
const SwiperStyle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "18px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function ComplementaryProducts() {
  const [responsive, setResponsive] = useState<number | null>(null);
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
      setResponsive(2.5);
    } else if (isMobileSmall) {
      setResponsive(2.5);
    } else if (isMobileLarge) {
      setResponsive(2.5);
    } else if (isTabletSmall) {
      setResponsive(3.5);
    } else if (isTabletLarge) {
      setResponsive(4.5);
    } else if (isDesktopSmall) {
      setResponsive(5);
    } else if (isDesktopLarge) {
      setResponsive(5);
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
    <Box>
      <Title title="محصولات مکمل" />
      <Swiper
        slidesPerView={responsive ? responsive : 3}
        spaceBetween={20}
        navigation={isExtraSmall ? false : true}
        modules={[Pagination, Navigation]}
        style={{
          width: "100%",
          height: "100%",
          marginTop: "2rem",
          position: "relative",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide style={{ ...SwiperStyle }} key={item.id}>
            <Box>
              <Box
                component={"img"}
                src={item.imagePath}
                alt="1"
                sx={{ width: "100%" }}
              />
              <Typography
                variant="body2"
                color="initial"
                sx={{
                  mt: 2,
                  color: "#7D7979",
                  minHeight: "60px",
                  fontSize: {
                    xxs: "12px",
                    sm: "14px",
                  },
                }}
              >
                {item.title}
              </Typography>
            </Box>
            {index < data.length && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  position: "absolute",
                  right: "-15px",
                  height: "98%",
                  backgroundColor: "#E5E7EB",
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
