"use client";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import Drawer from "./Drawer";

import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export type Anchor = "top" | "left" | "bottom" | "right";
export default function ResponsiveFilter() {
  const theme = useTheme();

  const smallSize = useMediaQuery(theme.breakpoints.between("xxs", "xxl"));

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    if (!smallSize) return null;
  return (
    <>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          direction: "rtl",
          display: "flex",
          justifyContent: "space-between",
          borderColor: "#E5E7EB",
          py: 1,
        }}
        onClick={toggleDrawer("bottom", true)}
      >
        <TuneIcon />
        <Typography variant="body2" color="initial" sx={{ mr: 1 }}>
          فیلتر ها
        </Typography>
      </Button>
      <Drawer key={1} state={state} toggleDrawer={toggleDrawer} />
    </>
  );
}
