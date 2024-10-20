"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Title from "../components/Title";
import useBreakPoint from "../hook/useBreakPoint";
import { data } from "../services/bestSellers";
export default function BestSellers() {
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
      setResponsive(2.5);
      setHasBtn(false);
    } else if (isMobileSmall) {
        setResponsive(2.5);
        setHasBtn(true);
    } else if (isMobileLarge) {
      setResponsive(4.5);
      setHasBtn(true);
    } else if (isTabletSmall) {
      setResponsive(2.5);
      setHasBtn(true);
    } else if (isTabletLarge) {
      setResponsive(4);
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
    <Box sx={{ bgcolor: "primary.light", py: 2 ,mt:7}}>
      <Box px={5}>
        <Title title="پر فروش ترین ها" />
      </Box>
      <Swiper
        slidesPerView={responsive ? responsive : 3}
        spaceBetween={5}
        navigation={hasBtn}
        modules={[Pagination, Navigation]}
        style={{
          width: "100%",
          height: "100%",
          padding: "0 1.5rem",
          marginTop: ".5rem",
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Box>
              <Box
                component={"img"}
                src={item.imagePath}
                alt=""
                width={"100%"}
                borderRadius={2}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
