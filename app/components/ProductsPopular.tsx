"use client";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import { data } from "../services/videoPhone";
import BoxTitle from "./BoxTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

const boxStyle: SxProps = {
  border: "1px solid #FF7900",
  borderTop: "none",
  borderRadius: 2,
  px: 1,
  zIndex: 10,
  bgcolor: "white",
  mt: "-.8rem",
};

export default function ProductsPopular() {
  return (
    <Box mt={2}>
      <BoxTitle style={{ bgcolor: "primary.dark" }} title="محبوب ترینها" />
      <Box sx={boxStyle}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Grid]}
          grid={{
            rows: 3,
            fill: "row",
          }}
          style={{
            width: "100%",
            height: "100%",
            marginTop: ".5rem",
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={2}
                py={1.5}
              >
                <Box
                  component={"img"}
                  src={item.imagePath}
                  alt={item.title}
                  sx={{ maxWidth: "93px", maxHeight: "93px" }}
                />
                <Typography
                  variant="body2"
                  color="initial"
                  sx={{ fontSize: "14px" }}
                >
                  {item.title}
                </Typography>
              </Stack>
              <hr style={{ border: "1px solid #E5E7EB" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
