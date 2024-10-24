import { Box, Container, Grid2 as Grid } from "@mui/material";
import BestSeller from "./BestSeller";

export default function CategoryPage() {
  return (
    <Container maxWidth="xxxl" sx={{ direction: "rtl", mt: 5 }}>
      <Grid container spacing={2}>
        <Grid size={{ sm: 0, xl: 2 }}>
          <Box></Box>
        </Grid>
        <Grid size={{ sm: 12, xl: 10 }}>
          <Box>
            <BestSeller />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
