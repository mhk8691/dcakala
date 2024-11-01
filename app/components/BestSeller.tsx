"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import useBreakPoint from "../hook/useBreakPoint";
import Product from "../services/Product";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import SliderCard from "./SliderCard";
const SwiperStyle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "18px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
};
interface Props {
  title: string;
  data: Product[];
}
export default function BestSeller({ title, data }: Props) {
  const [responsive, setResponsive] = useState<number | null>(null);
  const space = useMediaQuery("(max-width:600px)");
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
      setResponsive(2);
    } else if (isMobileSmall) {
      setResponsive(2.5);
    } else if (isMobileLarge) {
      setResponsive(2.5);
    } else if (isTabletSmall) {
      setResponsive(2.5);
    } else if (isTabletLarge) {
      setResponsive(4.5);
    } else if (isDesktopSmall) {
      setResponsive(3.5);
    } else if (isDesktopLarge) {
      setResponsive(4);
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
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #D3D5D5 0%, #FFFFFF 100%)",
        py: 3,
        px: 1,
        borderRadius: 2,
        position: "relative",
      }}
    >
      <Box
        bgcolor={"white"}
        sx={{
          borderBottomLeftRadius: "5rem",
          borderBottomRightRadius: "5rem",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          py: 1,
          pb: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="initial" sx={{ fontSize: "16px" }}>
          {title}
        </Typography>
      </Box>
      <Swiper
        slidesPerView={responsive ? responsive : 3}
        spaceBetween={!space ? 20 : 2}
        navigation={isExtraSmall ? false : true}
        modules={[Pagination, Navigation]}
        style={{
          width: "100%",
          height: "100%",
          padding: "0 1.5rem",
          marginTop: "3rem",
        }}
      >
        {data.map((item) => (
          <SwiperSlide
            style={{ ...SwiperStyle, ...{ borderRadius: space ? "0" : "8px" } }}
            key={item.id}
          >
            <SliderCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
