import { Box, Chip, SxProps } from "@mui/material";
import React from "react";

interface Props {
  checked: {
    id: number;
    title: string;
  }[];
  setChecked: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
      }[]
    >
  >;
  style?: SxProps;
}
export default function FilterChip({ checked, setChecked, style }: Props) {
  const handleDelete = (id: number) => {
    setChecked((prevChecked) => prevChecked.filter((i) => i.id !== id));
  };
  return (
    <Box mt={2}>
      {checked.map((item) => (
        <Chip
          key={item.id}
          label={item.title}
          onDelete={() => handleDelete(item.id)}
          sx={{ ...{ fontSize: "13px", pl: 1.5, m: 0.5 }, ...style }}
        />
      ))}
    </Box>
  );
}
