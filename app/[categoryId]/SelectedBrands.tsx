"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { data } from "@/app/services/selectedBrand";
import { Box, Typography } from "@mui/material";

const SwiperStyle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "18px",
  background: "#fff",
  height: "calc((100% - 30px) / 2) !important",
  justifyContent: "center",
  alignItems: "center",
  width:'100%'
};

export default function SelectedBrands() {
  return (
    <Box mt={5}>
      <Box
        bgcolor={"#CED0D0"}
        display={"inline-block"}
        py={1}
        px={2}
        sx={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{ textAlign: "center" }}
        >
          برند های منتخب آیفون تصویری
        </Typography>
      </Box>
      <Box>
        <div style={{position:'relative'}}>
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            style={{backgroundColor:'red'}}
          >
            {data.map((item) => (
              <SwiperSlide style={SwiperStyle} key={item.id} >
                <Box bgcolor={"white"}>
                  <Typography variant="body2" color="initial">
                    {item.title}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Box>
    </Box>
  );
}
