import { Box, SxProps, Typography } from "@mui/material";

export default function Title({ style,title }: { style?: SxProps,title:string }) {
  return (
    <Box sx={style} display={"flex"} justifyContent={"center"}>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          borderBottom: "1px solid #FF7900",
          fontSize: "22px",
          px: 5,
          pb: 0.5,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
