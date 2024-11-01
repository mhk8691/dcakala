"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import styles from "./Image.module.css";
import ShareIcon from "@mui/icons-material/Share";
import CategoryIcon from "@mui/icons-material/Category";
interface Props {
  images: string[];
}

export default function Images({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <Box
      border={1}
      borderColor={"#DDDDDD"}
      p={1}
      borderRadius={2}
      sx={{ minHeight: "490px" }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={2}
      >
        <Box flexGrow={1}>
          <Box
            component={"img"}
            src="https://www.dcakala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftag.2952fdfa.png&w=96&q=75"
            alt=""
          />
        </Box>
        <Box
          color={"#757575"}
          display={"flex"}
          flexGrow={2}
          justifyContent={"start"}
        >
          <CategoryIcon sx={{ ml: 1.5 }} />
          <ShareIcon sx={{ mr: 1.5, cursor: "pointer" }} />
        </Box>
      </Stack>
      <>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper2}
          style={{ marginTop: ".5rem" }}
        >
          {images.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
              <img src={item} style={{ width: "355px", height: "355px" }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper}
        >
          {images.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
              <Box
                component={"img"}
                src={item}
                sx={{
                  maxWidth: { xxs: "90px", sm: "75px" },
                  maxHeight: { xxs: "90px", sm: "75px" },
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </Box>
  );
}
