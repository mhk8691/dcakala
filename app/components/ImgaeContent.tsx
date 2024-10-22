import { Box, SxProps } from "@mui/material";
import React from "react";
interface Props {
  src: string;
  style?:SxProps
}
// const imageStyle:SxProps = {

// }
export default function ImgaeContent({ src, style }: Props) {
  return (
    <Box display={"flex"} justifyContent={"center"} mt={5}>
      <Box component={"img"} src={src} alt="" sx={style} />
    </Box>
  );
}
