"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import { Anchor } from "./ResponsiveFilter";
import Filter from "./Accordion";

interface Props {
  state: {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };

  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export default function AnchorTemporaryDrawer({ state, toggleDrawer }: Props) {
  const list = (anchor: Anchor) => (
    <Box height={"100vh"} sx={{ direction: "rtl" }}>
      <Filter
        accordionLabelStyle="#F2F2F2"
        actionFilterBtnStyle={{
          color: "white",
        }}
        chipStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          p: 2.5,
          borderRadius: 2,
          mt: 1,
        }}
      />
    </Box>
  );
  const anchor = "bottom";
  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "8px",
            }}
          >
            <IconButton onClick={toggleDrawer(anchor, false)}>
              <CloseIcon />
            </IconButton>
          </div>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
