"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Box, useMediaQuery } from "@mui/material";
import { data } from "@/app/services/videoPhone";
import SliderCard from "@/app/components/SliderCard";
import useBreakPoint from "@/app/hook/useBreakPoint";
import { useEffect, useState } from "react";
const SwiperStyle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "18px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop:'2.5rem',
  borderRadius:'8px'
};

export default function SimilarProducts() {
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
      <Swiper
        slidesPerView={responsive ? responsive : 3}
        spaceBetween={!space ? 20 : 2}
        navigation={isExtraSmall ? false : true}
        modules={[Pagination, Navigation]}
        style={{
          width: "100%",
          height: "100%",
          padding: "1.5rem",
          marginTop: "3rem",
          backgroundColor: "#FFD7B3",
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
