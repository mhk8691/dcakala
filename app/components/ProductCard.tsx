import { Box, Button, Stack, SxProps, Typography } from "@mui/material";
import React, { use, useEffect, useRef, useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "../services/Product";
import HoverVideoBox from "./HoverVideoBox";
interface Props {
  item: Product;
  style?: SxProps;
  hasHover: boolean;
}
const colorBoxStyle: SxProps = {
  width: "18px",
  height: "18px",
  border: "1px solid #E5E7EB",
};
export default function ProductCard({ item, style, hasHover }: Props) {
  return (
    <Stack
      border={1}
      borderColor={"#E5E7EB"}
      borderRadius={2}
      px={2}
      pb={3}
      pt={5}
      minHeight={"450px"}
      sx={{
        ...style,
        transition: ".2s ease",
        "&:hover": {
          xxs: "",
          sm: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" },
        },
      }}
    >
      {hasHover ? (
        <HoverVideoBox
          videoPath={item.video}
          imagePath={item.imagePath}
          title={item.title}
          id={item.id}
        />
      ) : (
        <Box
          component="img"
          src={item.imagePath}
          alt={item.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

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
          minHeight={"28.2px"}
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
          <Typography
            variant="h6"
            color={item.offer ? "error.dark" : "initial"}
            sx={{
              fontSize: "15px",
              direction: "rtl",
              minHeight: !item.offer ? "24px" : "",
            }}
          >
            {item.offer}{" "}
            {item.offer && (
              <Box component={"span"} sx={{ fontSize: "12px", opacity: ".8" }}>
                تومان
              </Box>
            )}
          </Typography>
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
            <Box component={"span"} sx={{ fontSize: "12px", opacity: ".8" }}>
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
  );
}
