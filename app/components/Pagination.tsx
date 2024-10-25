import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack
      spacing={2}
      mt={7}
      mb={4}
      sx={{ direction: "ltr", display: "flex", justifyContent: "center" }}
    >
      <Pagination
        count={4}
        variant="outlined"
        shape="rounded"
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </Stack>
  );
}
