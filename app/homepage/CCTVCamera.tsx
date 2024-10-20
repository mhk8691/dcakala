import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import Title from "../components/Title";
import Image from "next/image";
import { data } from "../services/cctvCamera";
const cctvCamera: SxProps = {
  backgroundImage:
    "url(https://dashboard.dcakala.com/public/images/home/category-content/2024/01/2024/06/back-cctv.webp)",
  backgroundSize: "cover",
  mt: 1.5,
  position: "relative",
  height: "100%",
};
const titleStyle: SxProps = {
  textAlign: "center",
  fontSize: "14px",
};
const boxStyle: SxProps = {
  bgcolor: "white",
  m: {
    xxs: 0.5,
    sm: 1,
  },
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  px: 2,
  py: 1,
  borderRadius: "10px",
  transition: "all .2s ease",
  
};
const leftBoxStyle: SxProps = {
  "&:hover": {
    transform: "scale(1.05)",
    transformOrigin: "bottom left",
  },
};
const rightBoxStyle: SxProps = {
  "&:hover": {
    transform: "scale(1.05)",
    transformOrigin: "bottom right",
  },
}
export default function CCTVCamera() {
  return (
    <>
      <Container maxWidth={"xxxl"} sx={{ mt: 5, direction: "rtl" }}>
        <Title title="دوربین مدار بسته" />
      </Container>
      <Box sx={cctvCamera}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          display={{
            xxs: "none",
            sm: "flex",
          }}
        >
          <Image
            src="/images/left-cctv-new_original.webp"
            alt="دوربین مدار بسته"
            width={336}
            height={272}
          />
          <Image
            src="/images/right-cctv-new_original.webp"
            alt="دوربین مدار بسته"
            width={336}
            height={272}
          />
        </Stack>
        <Stack
          sx={{
            transform: {
              xxs: "translateY(-5%)",
              xl: "translateY(-25%)",
            },
            mt: {
              xxs: 5,
              sm: 0,
            },
            overflow: "hidden",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ ...boxStyle, ...rightBoxStyle }}>
              <img src={data[0].imagePath} alt="" />
              <Typography variant="body1" sx={titleStyle}>
                {data[0].title}
              </Typography>
            </Box>
            <Box sx={{ ...boxStyle, ...leftBoxStyle }}>
              <img src={data[1].imagePath} alt="" />
              <Typography variant="body1" sx={titleStyle}>
                {data[1].title}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ ...boxStyle, ...rightBoxStyle }}>
              <img src={data[2].imagePath} alt="" />
              <Typography variant="body1" sx={titleStyle}>
                {data[2].title}
              </Typography>
            </Box>
            <Box sx={{ ...boxStyle, ...leftBoxStyle }}>
              <img src={data[3].imagePath} alt="" />
              <Typography variant="body1" sx={titleStyle}>
                {data[3].title}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
