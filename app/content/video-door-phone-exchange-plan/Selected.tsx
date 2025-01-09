import { data } from "@/app/services/videoPhone";
import { Box, Divider, Grid2 as Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Selected() {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(181.79deg, #fea802 3.98%, #fde252 99.22%)",
        py: 5,
        height: "350px",

        mt: 15,
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          direction: "rtl",
          position: "absolute",
          top: "-20%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <Grid size={12 / 7} key={item.id}>
            <Stack
              bgcolor={"white"}
              direction={"column"}
              justifyContent={"center"}
              px={2}
              borderRadius={4}
            >
              <Box
                component={"img"}
                src={item.imagePath}
                alt=""
                sx={{ width: "126px" }}
              />
              <Typography
                variant="h6"
                color="initial"
                sx={{ mt: 2, fontSize: "14px", minHeight: "70px" }}
              >
                {item.title}
              </Typography>
              <Divider sx={{ mt: 0.5, borderColor: "black" }} />
              <Typography
                variant="body1"
                color="initial"
                sx={{ py: 1, textAlign: "center" }}
              >
                {item.price} تومان
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
