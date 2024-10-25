"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
interface Props {
  videoPath: string | undefined;
  imagePath: string;
  title: string;
  id: number;
}
function HoverVideoBox({ videoPath, imagePath, title, id }: Props) {
  const [hover, setHover] = useState<number | null>(null);
  const onHover = (id: number) => {
    setHover(id);
  };
  const onLeave = () => {
    setHover(null);
  };
  return (
    <Box
      minHeight={"220px"}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={onLeave}
    >
      <Box
        component="img"
        src={imagePath}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: !hover ? "block" : "none",
        }}
      />

      {hover === id && (
        <Box
          component="video"
          src={videoPath}
          autoPlay
          muted
          loop
          sx={{
            width: "100%",
            minHeight: "210px",
            objectFit: "contain",
            bgcolor: "black",
          }}
        />
      )}
    </Box>
  );
}

export default HoverVideoBox;
