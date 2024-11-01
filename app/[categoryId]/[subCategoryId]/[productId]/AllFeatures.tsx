"use client";
import {
  Box,
  Button,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ProductDetail } from "../../../services/productDetail";
import { useState } from "react";
interface Props {
  data: ProductDetail;
}
export default function AllFeatures({ data }: Props) {
  const [collapse, setCollapse] = useState(true);
  return (
    <Box mt={5}>
      <Box>
        <Typography variant="h6" color="initial" sx={{ fontSize: "16px" }}>
          مشخصات محصول
        </Typography>
        <Divider sx={{ mt: 0.5 }} />
      </Box>
      <Grid
        container
        spacing={2}
        rowSpacing={4}
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: {
            xxs: "column-reverse",
            sm: "row",
          },
        }}
      >
        <Grid size={{ xxs: 12, sm: 6 }}>
          <Box>
            {data.allFeatures
              .slice(0, collapse ? 7 : data.allFeatures.length)
              .map((item, index) => (
                <Stack
                  direction={"row"}
                  sx={{ gap: { xxs: 1, sm: 2 } }}
                  key={index}
                >
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 3,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      bgcolor: "#D6D3D1",
                      width: "50%",
                      my: {
                        xxs: 0.5,
                        sm: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="initial"
                      sx={{
                        fontSize: {
                          xxs: "12px",
                          sm: "14px",
                        },
                        color: "000000DE",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 3,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      bgcolor: "#E7E5E4",
                      width: "50%",
                      my: {
                        xxs: 0.5,
                        sm: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="initial"
                      sx={{
                        fontSize: {
                          xxs: "12px",
                          sm: "14px",
                        },
                        color: "000000DE",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            <Button
              variant="text"
              onClick={() => setCollapse(!collapse)}
              color="primary"
              sx={{ color: "primary.dark", mt: 1, fontWeight: "normal" }}
            >
              {collapse ? "مشاهده بیشتر" : "مشاهده کمتر"}
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xxs: 12, sm: 6 }} sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              position: {
                xxs: "",
                sm: "absolute",
              },
              top: "50%",
              transform: {
                xxs: "",
                sm: "translate(-50%, -50%)",
              },
              left: "50%",
              justifyContent: "center",
            }}
          >
            <Box
              component={"img"}
              src={data.imagesPath[0]}
              alt={data.title}
              sx={{ width: "210px", height: "210px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
