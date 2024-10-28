"use client";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { data } from "@/app/services/selectedBrand";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import useBreakPoint from "../hook/useBreakPoint";

const boxStyle: SxProps = {
  bgcolor: "#CED0D0",
  py: 1,
  pb: 2,
  px: 2,
  borderRadius: 2,
  borderTopRightRadius: 0,
  borderTopLeftRadius: {
    xxs: 0,
    sm: 2,
  },
};

const SwiperStyle: React.CSSProperties = {
  fontSize: "18px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  borderRadius: 10,
  padding: "0",
  overflow: "hidden",
};

export default function SelectedBrands() {
  const [responsive, setResponsive] = useState<number | null>(null);
  const [hasBtn, setHasBtn] = useState(true);
  const [hover, setHover] = useState<number | null>(null);
  const onMouseEnter = (id: number) => {
    setHover(id);
  };
  const onMouseLeave = () => {
    setHover(null);
  };
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
      setResponsive(2.5);
      setHasBtn(true);
    } else if (isTabletSmall) {
      setResponsive(3.5);
      setHasBtn(true);
    } else if (isTabletLarge) {
      setResponsive(4.5);
      setHasBtn(true);
    } else if (isDesktopSmall) {
      setResponsive(7);
      setHasBtn(true);
    } else if (isDesktopLarge) {
      setResponsive(7);
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
    <Box mt={5}>
      <Box
        sx={{
          bgcolor: "#CED0D0",
          display: { xxs: "block", sm: "inline-block" },
          py: 1,
          px: 2,
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        }}
      >
        <Typography variant="body1">برندها</Typography>
      </Box>
      <Box sx={boxStyle}>
        <Swiper
          slidesPerView={responsive ? responsive : 5}
          spaceBetween={10}
          navigation={hasBtn}
          modules={[Navigation, Grid]}
          grid={{
            rows: isDesktopSmall || isDesktopLarge ? 2 : 1,
            fill: "row",
          }}
          style={{
            width: "100%",
            height: "100%",
            marginTop: ".5rem",
          }}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              style={SwiperStyle}
              onMouseEnter={() => onMouseEnter(item.id)}
              onMouseLeave={onMouseLeave}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={3}
                height={"45px"}
                overflow={"hidden"}
              >
                {hover === item.id ? (
                  <Box
                    component={"img"}
                    src={item.imagePath}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      objectFit: "cover",
                      animation: ".2s ease-in-out  fadeIn",
                      "@keyframes fadeIn": {
                        "0%": {
                          opacity: "0",
                        },
                        "100%": {
                          opacity: "1",
                        },
                      },
                    }}
                  />
                ) : (
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </Typography>
                )}
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
