import SubTitle from "@/app/components/SubTitle";
import { Box, Typography } from "@mui/material";
import React from "react";
export interface Data {
  title: string;
  description: string;
}
interface Props {
  data: Data[];
}
export default function Table({ data }: Props) {
  return (
    <Box border={1} borderColor={"#F1F1F1"} mt={3} mx={2}>
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            borderBottom: "1px solid #F1F1F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: index % 2 === 1 ? "#FBF6E4" : "#FFFFFF",
            py: 1,
          }}
        >
          <SubTitle
            style={{
              fontSize: { xxs: "13px", xs: "16px" },
              color: "black",
              mt: 0,
              width: "15%",
            }}
          >
            {item.title}
          </SubTitle>
          <Box width={"50%"}>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                textAlign: "right",
                width: "100%",
                fontSize: { xxs: "13px", xs: "16px" },
              }}
            >
              {item.description}
            </Typography>
          </Box>
          <div></div>
        </Box>
      ))}
    </Box>
  );
}
