import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const useBreakPoint = () => {
  const theme = useTheme();

  const isExtraSmall = useMediaQuery(theme.breakpoints.between("xxs", "xs"));
  const isMobileSmall = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMobileLarge = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isTabletSmall = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isTabletLarge = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isDesktopSmall = useMediaQuery(theme.breakpoints.between("xl", "xxl"));
  const isDesktopLarge = useMediaQuery(theme.breakpoints.up("xxl"));

  return {
    isExtraSmall,
    isMobileSmall,
    isMobileLarge,
    isTabletSmall,
    isTabletLarge,
    isDesktopSmall,
    isDesktopLarge,
  };
};

export default useBreakPoint;
