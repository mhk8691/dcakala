import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { metadata } from "../layout";
metadata.title = "ورود";
export default function LoginPage() {
  return (
    <Stack
      flexDirection={"column"}
      alignItems={"center"}
      spacing={2}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Box
        border={1}
        borderColor={"#E5E7EB"}
        borderRadius={2}
        display={"inline-block"}
        p={2}
        sx={{ direction: "rtl" }}
        width={"30%"}
      >
        <Stack flexDirection={"row"} justifyContent={"center"}>
          <Link href={"/"} style={{ textAlign: "center" }}>
            <Box
              component={"img"}
              src="https://www.dcakala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.559baedb.jpg&w=256&q=75"
              alt=""
              style={{ width: "55%", height: "100%" }}
            />
          </Link>
        </Stack>
        <Box mt={3}>
          <Typography variant="h6" color="initial" sx={{ fontSize: "16px" }}>
            ورود | ثبت نام
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            sx={{ fontSize: "12px", mt: 2, opacity: ".8" }}
          >
            سلام!
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            sx={{ fontSize: "12px", mt: 1, opacity: ".8" }}
          >
            لطفا شماره تماس خود را وارد نمایید
          </Typography>
        </Box>
        <Box
          component={"input"}
          type="number"
          width={"100%"}
          border={1}
          borderColor={"#C4C4C4"}
          borderRadius={1}
          placeholder=" "
          p={1}
          mt={1.5}
          sx={{
            outline: "none",
            direction: "ltr",
            "&:hover": {
              borderColor: "black",
            },
            "&:not(:placeholder-shown)": {
              border: 2,
              borderColor: "primary.dark",
            },
          }}
        />
        <Box mt={2}>
          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "#FF7900", color: "white", width: "100%", py: 0.8 }}
          >
            ورود
          </Button>
        </Box>
        <Typography
          variant="body2"
          color="initial"
          sx={{ fontSize: "10px", mt: 2, textAlign: "center" }}
        >
          ورود شما به معنای پذیرش{" "}
          <Link href={"/"} style={{ color: "#008EB2" }}>
            شرایط دی سی ای کالا
          </Link>{" "}
          و{" "}
          <Link href={"/"} style={{ color: "#008EB2" }}>
            قوانین حریم ‌خصوصی
          </Link>{" "}
          است
        </Typography>
      </Box>
    </Stack>
  );
}
