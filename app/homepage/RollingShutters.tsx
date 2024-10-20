import { Box, Grid2 as Grid } from "@mui/material";
interface Data {
  id: number;
  xxl: {
    imagePath: string;
  };
  xl: {
    imagePath: string;
  };
}
const data: Data[] = [
  {
    id: 1,
    xxl: {
      imagePath:
        "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-mobile-right_original.webp",
    },
    xl: {
      imagePath:
        "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_original.webp",
    },
  },
  {
    id: 2,
    xxl: {
      imagePath:
        "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-mobile-left_original.webp",
    },
    xl: {
      imagePath:
        "https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_original.webp",
    },
  },
];
export default function RollingShutters() {
  return (
    <Grid container spacing={2} sx={{ mt: 8 }}>
      <Grid
        size={6}
        sx={{
          display: {
            xxs: "none",
            xs: "block",
          },
        }}
      >
        <Box
          component={"img"}
          src={data[0].xl.imagePath}
          alt=""
          width={"100%"}
          borderRadius={2}
        />
      </Grid>
      <Grid
        size={6}
        sx={{
          display: {
            xxs: "none",
            xs: "block",
          },
        }}
      >
        <Box
          component={"img"}
          src={data[1].xl.imagePath}
          alt=""
          width={"100%"}
          borderRadius={2}
        />
      </Grid>
      <Grid
        size={6}
        sx={{
          display: {
            xxs: "block",
            xs: "none",
          },
        }}
      >
        <Box
          component={"img"}
          src={data[0].xxl.imagePath}
          alt=""
          width={"100%"}
          borderRadius={2}
        />
      </Grid>
      <Grid
        size={6}
        sx={{
          display: {
            xxs: "block",
            xs: "none",
          },
        }}
      >
        <Box
          component={"img"}
          src={data[1].xxl.imagePath}
          alt=""
          width={"100%"}
          borderRadius={2}
        />
      </Grid>
    </Grid>
  );
}
