"use client";
import {
  Box,
  Button,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import React, { use, useEffect, useRef, useState } from "react";
import Product from '@/app/services/Product'
import { Swiper, SwiperSlide } from "swiper/react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./ProductSlider.module.css";
import { Pagination, Navigation } from "swiper/modules";
import useBreakPoint from "../hook/useBreakPoint";
import Title from "./Title";
import ProductCard from "./ProductCard";



const viewAllBtnStyle: SxProps = {
  mt: 2,
  "&:hover": {
    backgroundColor: "#F6FAFD",
  },
};
interface Props {
  data: Product[];
  title: string;
}
export default function ProductSlider({ data, title }: Props) {
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
      setResponsive(1.5);
      setHasBtn(false);
    } else if (isMobileSmall) {
      setResponsive(1.5);
      setHasBtn(true);
    } else if (isMobileLarge) {
      setResponsive(2.2);
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
    <>
      <Title title={title} />
      <Box display={"flex"} justifyContent={"flex-end"} gap={1}>
        <Button variant="text" color="primary" sx={viewAllBtnStyle}>
          مشاهده همه
        </Button>
      </Box>
      <Swiper
        slidesPerView={responsive ? responsive : 3}
        spaceBetween={30}
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
          <SwiperSlide className={styles.swiperSlide} key={item.id}>
            <ProductCard item={item} key={item.id}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
