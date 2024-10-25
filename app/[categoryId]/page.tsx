import { Box, Container, Grid2 as Grid } from "@mui/material";
import Types from "./Types";
import SelectedBrands from "./SelectedBrands";
import Products from "../components/Products";
import BestSeller from "../components/BestSeller";
import { data } from "../services/ParkingDoorJack";
import { data as videoPhoneData  } from "../services/videoPhone";
export default function CategoryPage() {
  return (
    <Container maxWidth="xxxl" sx={{ direction: "rtl", mt: 5 }}>
      <Grid container spacing={2}>
        <Grid size={{ sm: 0, xxl: 2 }}>
          <Box></Box>
        </Grid>
        <Grid size={{ sm: 12, xxl: 10 }}>
          <Box>
            <BestSeller title="پرفروش ترین آیفون های تصویری" data={data} />
            <Types />
            {/* <SelectedBrands /> */}
            <Products data={videoPhoneData} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
