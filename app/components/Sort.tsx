import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Sort() {
  const [filter, setFilter] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, direction: "rtl" }}
      >
        <InputLabel
          id="demo-simple-select-standard-label"
          sx={{ fontSize: "16px" }}
        >
          نمایش براساس
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filter}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>ردیف</MenuItem>
          <MenuItem value={20}>ابتدا محصولات جدید</MenuItem>
          <MenuItem value={30}>قیمت کم به زیاد</MenuItem>
          <MenuItem value={40}>قیمت زیاد به کم</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
