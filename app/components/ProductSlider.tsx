"use client";
import {
  Box,
  Button,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import React, { use, useEffect, useRef, useState } from "react";
import { Data } from "../services/videoPhone";
import { Swiper, SwiperSlide } from "swiper/react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./ProductSlider.module.css";
import { Pagination, Navigation } from "swiper/modules";
import useBreakPoint from "../hook/useBreakPoint";
import Title from "./Title";

const colorBoxStyle: SxProps = {
  width: "18px",
  height: "18px",
  border: "1px solid #E5E7EB",
};

const viewAllBtnStyle: SxProps = {
  mt: 2,
  "&:hover": {
    backgroundColor: "#F6FAFD",
  },
};
interface Props {
  data: Data[];
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
            <Stack
              border={1}
              borderColor={"#E5E7EB"}
              borderRadius={2}
              px={2}
              pb={3}
              pt={5}
              minHeight={"450px"}
            >
              <Box
                component={"img"}
                src={item.imagePath}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <Box display={"flex"} gap={1} sx={{ minHeight: "20px" }}>
                {item.color?.map((item, index) => (
                  <Box key={index} sx={colorBoxStyle} bgcolor={item}></Box>
                ))}
              </Box>
              {item.fastShipping && (
                <Box
                  bgcolor={"secondary.main"}
                  display={"inline-flex"}
                  gap={1}
                  px={0.5}
                  py={0.5}
                  borderRadius={2}
                  width={"105px"}
                  color={"white"}
                  mt={1}
                  fontSize={"12px"}
                  minHeight={"28px"}
                >
                  <RocketLaunchIcon fontSize="small" />
                  <Typography variant="body2">ارسال سریع</Typography>
                </Box>
              )}
              <Typography
                variant="body2"
                color="initial"
                sx={{
                  opacity: ".8",
                  textAlign: "right",
                  mt: item.fastShipping ? 3 : 7.2,
                  minHeight: "40px",
                }}
              >
                {item.title}
              </Typography>
              <Box
                mt={3}
                sx={{ direction: "ltr" }}
                justifyContent={"space-between"}
                display={"flex"}
                gap={1}
              >
                <Box>
                  {item.offer && (
                    <Typography
                      variant="h6"
                      color={item.offer ? "error.dark" : "initial"}
                      sx={{
                        fontSize: "15px",
                        direction: "rtl",
                      }}
                    >
                      {item.offer}{" "}
                      <Box
                        component={"span"}
                        sx={{ fontSize: "12px", opacity: ".8" }}
                      >
                        تومان
                      </Box>
                    </Typography>
                  )}
                  <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                      fontSize: "15px",
                      textDecoration: item.offer ? "line-through" : "none",
                      direction: "rtl",
                    }}
                  >
                    {item.price}{" "}
                    <Box
                      component={"span"}
                      sx={{ fontSize: "12px", opacity: ".8" }}
                    >
                      تومان
                    </Box>
                  </Typography>
                </Box>
                {item.discount && (
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{
                      height: "20px",
                      bgcolor: "error.main",
                      display: "inline-flex",
                      alignItems: "center",
                      color: "white",
                      borderRadius: "5px",
                      px: 0.5,
                      fontSize: "12px",
                    }}
                  >
                    % {item.discount}
                  </Typography>
                )}
              </Box>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
