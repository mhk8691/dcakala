"use client";
import { Box, Typography, Grid2 as Grid } from "@mui/material";
import { data } from "../services/iphone";
import { useState } from "react";
import useBreakPoint from "../hook/useBreakPoint";
export default function Types() {
  const [hover, setHover] = useState<number | null>(null);
  const { isMobileLarge, isMobileSmall, isExtraSmall } = useBreakPoint();
  const onHover = (id: number) => {
    setHover(id);
  };
  return (
    <Box mt={5}>
      <Box
        sx={{
          bgcolor: "#A4A4A4",
          display: "inline-flex",
          justifyContent: "center",
          px: 5,
          py: 1,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <Typography variant="body1" sx={{ color: "white" }}>
          انواع آیفون تصویری
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          border: 1,
          p: 2,
          borderRadius: 2,
          borderTopRightRadius: 0,
          borderColor: "#DDDDDD",
        }}
      >
        {data.map((item) => (
          <Grid size={{ xxl: 3, sm: 4, xxs: 6 }} sx={{ position: "relative" }}>
            <Box
              component={"div"}
              p={0.15}
              borderRadius={2}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"end"}
              sx={{
                height: {
                  xxl: "238px",
                  lg: "228px",
                  md: "218px",
                  sm: "238px",
                },
                bgcolor: {
                  sm: "primary.dark",
                },
                alignItems: {
                  xxs: "center",
                  sm: "stretch",
                },
              }}
              onMouseEnter={() => onHover(item.id)}
              onMouseLeave={() => setHover(null)}
            >
              <Box
                component={"img"}
                src={item.imagePath}
                alt=""
                sx={{
                  position: {
                    sm: "absolute",
                  },
                  top: "5%",
                  left: "50%",
                  transform: {
                    xxs: "",
                    sm: "translateX(-50%)",
                  },
                  width: {
                    xxl: "150px",
                    xxs: "140px",
                  },
                  height: {
                    xxl: "150px",
                    xxs: "140px",
                  },
                }}
              />
              <Box
                bgcolor={"white"}
                borderRadius={2}
                height={"50%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Typography
                  variant={isExtraSmall || isMobileSmall ? "body2" : "h6"}
                  color="initial"
                  sx={{
                    fontSize: {
                      xxs: "14px",
                      sm: "16px",
                    },
                    // textAlign:'center'
                  }}
                >
                  {item.title}
                </Typography>
                {!isExtraSmall && !isMobileSmall ? (
                  <Box
                    sx={{
                      display: "block",
                      height: "2px",
                      bgcolor: "primary.dark",
                      transition: "width .2s ease",
                      width: hover === item.id ? "5rem" : "2rem",
                      mt: 0.5,
                    }}
                  ></Box>
                ) : null}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
