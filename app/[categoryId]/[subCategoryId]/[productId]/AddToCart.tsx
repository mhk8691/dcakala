"use client";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
interface Props {
  price: number;
}
export default function AddToCart({ price }: Props) {
  const [count, setCount] = useState<number>(1);
  function plus() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  }
  return (
    <Box mt={20}>
      <Stack
        sx={{
          flexDirection: {
            xxs: "row",
            sm: "column-reverse",
            xl: "row",
          },
          justifyContent: {
            xxs: "space-between",
            sm: "center",
            xl: "space-between",
          },
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton aria-label="delete" onClick={minus} disabled={count <= 1}>
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Box
            component={"input"}
            type="number"
            readOnly
            value={count}
            sx={{
              border: "1px solid #E5E7EB",
              py: 0.4,
              width: "40px",
              textAlign: "center",
            }}
          />
          <IconButton aria-label="delete" onClick={plus}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Typography
          variant="h6"
          color="initial"
          sx={{
            fontSize: {
              xxs: "20px",
              sm: "12px",
              xl: "14px",
              xll: "20px",
            },
            fontWeight: "bold",
            opacity: ".9",
            alignSelf: {
              xxs: "center",
              sm: "flex-start",
              md: "flex-end",
              xl: "center",
            },
            mb: {
              xxs: 1,
              xl: 0,
            },
          }}
        >
          {price * count} تومان
        </Typography>
      </Stack>
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            bgcolor: "primary.dark",
            color: "white",
            fontSize: "14px",
            fontWeight: "normal",
            width: "100%",
            mt: 2,
          }}
        >
          افزودن به سبد خرید
        </Button>
      </Box>
      <Box>
        <Typography
          variant="body2"
          color="initial"
          sx={{
            fontSize: {
              xxs: "14px",
              sm: "8px",
              xl: "12px",
            },
            mt: 1.5,
            textAlign: "center",
          }}
        >
          بروزرسانی قیمت: یکشنبه, 15 مهر 1403
        </Typography>
      </Box>
    </Box>
  );
}
