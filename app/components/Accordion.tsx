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
  SxProps,
  Typography,
} from "@mui/material";
import ActionFilterBtn from "./ActionFilterBtn";
import FilterChip from "./FilterChip";
import FilterTitle from "./FilterTitle";
const CustomAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  fontSize: "14px",
}));
interface Props {
  style?: SxProps;
  accordionSummaryStyle?: SxProps;
  accordionLabelStyle?: string;
  hasFilterTitle?: boolean;
  actionFilterBtnStyle?: SxProps;
  chipStyle?: SxProps;
}
export default function Filter({
  style,
  accordionSummaryStyle,
  accordionLabelStyle,
  hasFilterTitle,
  actionFilterBtnStyle,
  chipStyle,
}: Props) {
  const [checked, setChecked] = React.useState<{ id: number; title: string }[]>(
    []
  );
  const handleChange = (item2: { id: number; title: string }) => {
    setChecked((prevChecked) =>
      prevChecked.some((i) => i.id === item2.id)
        ? prevChecked.filter((i) => i.id !== item2.id)
        : [...prevChecked, item2]
    );
  };
  return (
    <Box position={"relative"}>
      {hasFilterTitle ? <FilterTitle /> : null}
      <Box sx={style}>
        {!style && (
          <Box display={"flex"} justifyContent={"left"} mx={1}>
            <ActionFilterBtn checked={checked} style={actionFilterBtnStyle} />
          </Box>
        )}
        {style && (
          <ActionFilterBtn checked={checked} style={actionFilterBtnStyle} />
        )}

        <FilterChip
          checked={checked}
          setChecked={setChecked}
          style={chipStyle}
        />
        <Box mt={!style ? 0 : 8}>
          {filterList.map((item, index) => (
            <CustomAccordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={accordionSummaryStyle}
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails
                sx={{ py: 1, px: 0, my: "-15px", bgcolor: accordionLabelStyle }}
              >
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
                          // bgcolor: accordionLabelStyle,
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
