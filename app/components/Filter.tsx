"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { filterList } from "./filterList";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Stack,
  styled,
  Typography,
} from "@mui/material";
const CustomAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  fontSize: "14px",
}));

export default function Filter() {
  const [checked, setChecked] = React.useState<{ id: number; title: string }[]>(
    []
  );
  const handleChange = (item2: { id: number; title: string }) => {
    setChecked((prevChecked) =>
      prevChecked.includes(item2)
        ? prevChecked.filter((i) => i !== item2)
        : [...prevChecked, item2]
    );
  };
  const handleDelete = (id: number) => {
    setChecked((prevChecked) => prevChecked.filter((i) => i.id !== id));
  };

  return (
    <Box position={"relative"}>
      <Box
        bgcolor={"#A4A4A4"}
        py={0.7}
        px={1}
        sx={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          textAlign: "center",
          fontWeight: "normal",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "16px", color: "white" }}>
          فیلتر محصولات
        </Typography>
      </Box>
      <Box
        border={1}
        borderColor={"#A4A4A4"}
        borderTop={"none"}
        borderRadius={2}
        px={1}
        position={"absolute"}
        top={"85%"}
        zIndex={10}
        bgcolor={"white"}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: checked.length != 0 ? "primary.dark" : "#A4A4A4",
            color: checked.length != 0 ? "white" : "#7B7B85",
            width: "100%",
            fontWeight: "normal",
            mt: 1,
            position: "sticky",
            top: "5rem",
            zIndex: 10,
          }}
        >
          اعمال فیلتر
        </Button>
        <Box mt={2}>
          {checked.map((item) => (
            <Chip
              key={item.id}
              label={item.title}
              onDelete={() => handleDelete(item.id)}
              sx={{
                fontSize: "13px",
                pl: 1.5,
                m: 0.5,
              }}
            />
          ))}
        </Box>
        <Box mt={8}>
          {filterList.map((item, index) => (
            <CustomAccordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  px: 0,
                }}
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0, my: "-8px" }}>
                {item.items.map((item2, index) => (
                  <FormGroup key={index} sx={{ p: 0 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={checked.includes(item2)}
                          onChange={() => handleChange(item2)}
                        />
                      }
                      label={item2.title}
                      sx={{
                        "&.MuiFormControlLabel-root .MuiTypography-root": {
                          fontSize: "14px",
                        },

                        "&.MuiFormControlLabel-root": {
                          m: 0,
                          p: 0,
                        },
                      }}
                    />
                  </FormGroup>
                ))}
              </AccordionDetails>
            </CustomAccordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
