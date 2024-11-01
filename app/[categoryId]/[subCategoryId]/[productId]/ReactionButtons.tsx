"use client";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
export default function ReactionButtons() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  function handleLike() {
    setLike(like + 1);
  }
  function handleDislike() {
    setDislike(dislike + 1);
  }
  return (
    <Box display={"flex"} gap={6}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Typography variant="body2" color="initial" sx={{ fontSize: "14px" }}>
          {like}
        </Typography>
        <IconButton onClick={handleLike}>
          <ThumbUpOffAltIcon fontSize="small" sx={{ color: "#757575" }} />
        </IconButton>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Typography variant="body2" color="initial" sx={{ fontSize: "14px" }}>
          {dislike}
        </Typography>
        <IconButton onClick={handleDislike}>
          <ThumbDownOffAltIcon fontSize="small" sx={{ color: "#757575" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
