"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, History } from "swiper/modules";
import styles from "./ImageSlider.module.css";
import { Box } from "@mui/material";
import Link from "next/link";

interface Data {
  id: number;
  imagePath: string;
  link: string;
}

const data: Data[] = [
  {
    id: 1,
    imagePath:
      "https://dashboard.dcakala.com/public/images/home/full-width-banner/2024/10/simaran-automatic-gate-desktop-banner_original.webp",
    link: "/automatic-gate/simaran",
  },
  {
    id: 2,
    imagePath:
      "https://dashboard.dcakala.com/public/images/home/full-width-banner/2024/10/blurams-cctv-desktop-banner_original.webp",
    link: "/cctv/wireless/blurams",
  },
  {
    id: 3,
    imagePath:
      "https://dashboard.dcakala.com/public/images/home/full-width-banner/2024/10/ivor-automatic-gate-desktop-banner-min_original.webp",
    link: "/automatic-gate/ivor",
  },
  {
    id: 4,
    imagePath:
      "https://dashboard.dcakala.com/public/images/home/full-width-banner/2024/10/calluse-video-door-phone-desktop-banner_original.webp",
    link: "/video-door-phone/calluse",
  },
  {
    id: 5,
    imagePath:
      "https://dashboard.dcakala.com/public/images/home/full-width-banner/2024/10/imou-cctv-desktop-banner_original.webp",
    link: "cctv/wireless/blurams",
  },
];
export default function ImageSlider() {
  return (
    <Box height={"50vh"} width={"100%"} mt={1}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, History]}
        style={{
          width: "100%",
          height: "97%",
        }}
      >
        {data.map((item) => (
          <SwiperSlide className={styles.swiperSlide} key={item.id}>
            <Link href={item.link} style={{ height: "100%" }}>
              <img src={item.imagePath} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
