import { Box, Button, Stack, SxProps, Typography } from "@mui/material";
import React, { use, useEffect, useRef, useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "../services/Product";
import useBreakPoint from "../hook/useBreakPoint";
interface Props {
  item: Product;
  style?: SxProps;
}
const colorBoxStyle: SxProps = {
  width: "18px",
  height: "18px",
  border: "1px solid #E5E7EB",
};
export default function ProductCardHorizontal({ item, style }: Props) {
  const { isExtraSmall } = useBreakPoint();
  return (
    <Stack
      borderRadius={2}
      flexDirection={"row"}
      position={"relative"}
      sx={
        !isExtraSmall
          ? {
              ...style,
              ...{
                height: "214px",
                border: "1px solid #E5E7EB",
              },
            }
          : {
              borderBottom: "1px solid #E5E7EB",
              width: "500px",
              height: "307px",
            }
      }
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        height={"100%"}
        sx={{
          mr: {
            xxs: 0,
            xs: 3,
          },
        }}
      >
        <Box
          component={"img"}
          src={item.imagePath}
          alt={item.title}
          sx={{
            width: {
              xxs: "234px",
              xs: "124px",
            },
            height: {
              xxs: "234px",
              xs: "124px",
            },
          }}
        />
      </Box>
      <Box>
        <Typography
          variant="body2"
          color="initial"
          sx={{ fontSize: "12px", mt: 6 }}
        >
          {item.title}
        </Typography>
        {item.fastShipping && (
          <Box
            bgcolor={"secondary.main"}
            display={"inline-flex"}
            gap={1}
            px={0.5}
            py={0.5}
            borderRadius={2}
            color={"white"}
            fontSize={"12px"}
            mt={2}
          >
            <RocketLaunchIcon fontSize="small" />
            <Typography variant="body2">ارسال سریع</Typography>
          </Box>
        )}
      </Box>
      <Box
        mt={3}
        sx={{
          direction: "ltr",
          position: {
            xxs: "absolute",
            xs: "relative",
          },
          ml: { xxs: 1, xs: 2 },
        }}
        justifyContent={"space-between"}
        display={"flex"}
        gap={1}
        left={0}
        bottom={10}
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
