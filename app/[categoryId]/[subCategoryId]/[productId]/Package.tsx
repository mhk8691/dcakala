"use client";
import { Box, Stack, Typography } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import React, { use, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { data } from "@/app/services/ParkingDoorJack";
import { Autoplay } from "swiper/modules";
export default function Package() {
  return (
    <Box mt={7} width={"100%"}>
      <Stack direction={"row"} alignItems={"center"} color={"#7D7979"}>
        <InventoryIcon />
        <Typography variant="body2" sx={{ fontSize: "14px", mr: 1 }}>
          پکیج های این محصول
        </Typography>
      </Stack>
      <Box px={1}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: 5,
            marginTop: "1rem",
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                <Box
                  component={"img"}
                  src={item.imagePath}
                  alt={item.title}
                  sx={{
                    maxWidth: {
                      xxs: "150px",
                      sm: "50px",
                      md: "100px",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    fontSize: { xxs: "12px", sm: "14px" },
                    color: "#7D7979",
                  }}
                >
                  {item.title}
                </Typography>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
