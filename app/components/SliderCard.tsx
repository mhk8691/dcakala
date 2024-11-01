import { Box, Stack, SxProps, Typography } from "@mui/material";
import Data from "@/app/services/Product";
import React from "react";
interface Props {
  item: Data;
}
const colorBoxStyle: SxProps = {
  width: "18px",
  height: "18px",
  border: "1px solid #E5E7EB",
};
export default function SliderCard({ item }: Props) {
  return (
    <Stack px={2} pb={3} pt={3} minHeight={"385px"}>
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
      <Typography
        variant="body2"
        color="initial"
        sx={{
          opacity: ".8",
          textAlign: "right",
          mt: 5,
          minHeight: "65px",
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
          {/* {item.offer && (
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
                  )} */}
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
        {/* {item.discount && (
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
                )} */}
      </Box>
    </Stack>
  );
}
