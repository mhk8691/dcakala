"use client";
import * as React from "react";
import Box from "@mui/material/Box";

import { Stepper, Step, StepLabel, StepConnector, styled } from "@mui/material";

export default function StepCart() {
  interface Step {
    title: string;
    active: boolean;
  }
  const steps: Step[] = [
    {
      title: "روش پرداخت",
      active: false,
    },
    {
      title: "آدرس و نحوه ارسال",
      active: false,
    },
    {
      title: "سبد خرید",
      active: true,
    },
  ];
  const CustomConnector = styled(StepConnector)(() => ({
    alternativeLabel: {
      top: 22,
    },
    "& .MuiStepConnector-line": {
      height: 5, // ضخامت خط
      border: 0,
      borderRadius: 1,
      backgroundColor: "#D9D9D9",
      margin: "0 2px",
    },
  }));
  return (
    <Box
      border={1}
      borderColor={"#DDDDDD"}
      borderRadius={2}
      height={"170px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box sx={{ width: "100%" }}>
        <Stepper
          activeStep={3}
          alternativeLabel
          connector={<CustomConnector />}
        >
          {steps.map((label) => (
            <Step key={label.title}>
              <StepLabel
                StepIconProps={{
                  sx: {
                    width: "40px",
                    height: "40px",
                    fill: label.active ? "#ff7900" : "#D9D9D9",
                  }, // اندازه آیکون‌ها کوچک می‌شود
                }}
              >
                <span>{label.title}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
}
