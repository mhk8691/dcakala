import { Box, Grid2 as Grid, Typography } from "@mui/material";

export default function Products() {
  return (
    <Box border={1} borderColor={"#DDDDDD"} borderRadius={2} height={"100%"}>
      <Box pt={1}>
        <Typography
          variant="body2"
          sx={{
            color: "primary.dark",
            fontWeight: 400,
            borderBottom: 2,
            display: "inline",
            px: 2,
            pb: 1,
          }}
        >
          سبد خرید
        </Typography>
      </Box>
      <hr style={{ border: "1px solid #D9D9D9", marginTop: "8px" }} />
      <Typography
        variant="body2"
        color="initial"
        sx={{ fontSize: "14px", opacity: 0.9, mt: 2, mr: 2 }}
      >
        0 کالا در سبد خرید شما
      </Typography>
      <Box
        height={"80%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        // bgcolor={'red'}
      >
        <Box
          component={"img"}
          src="https://www.dcakala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEmptyCart.4ecea7b3.png&w=256&q=75"
          alt=""
        />
        <Typography
          variant="body1"
          color="initial"
          sx={{ opacity: 0.9, mt: 1 }}
        >
          سبد خرید شما خالی است
        </Typography>
      </Box>
    </Box>
  );
}
