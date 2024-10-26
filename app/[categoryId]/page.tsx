import { Box, Container, Grid2 as Grid, SxProps } from "@mui/material";
import Types from "./Types";
import Products from "../components/Products";
import BestSeller from "../components/BestSeller";
import { data } from "../services/ParkingDoorJack";
import { data as videoPhoneData } from "../services/videoPhone";
import Filter from "../components/Accordion";
const accordionStyle: SxProps = {
  border: "1px solid #A4A4A4",
  borderTop: "none",
  borderRadius: 2,
  px: 1,
  position: "absolute",
  top: "85%",
  zIndex: 10,
  bgcolor: "white",
};
export default function CategoryPage() {
  return (
    <Container maxWidth="xxxl" sx={{ direction: "rtl", mt: 5 }}>
      <Grid container spacing={2}>
        <Grid size={{ xxs: 0, xxl: 2.8 }}>
          <Box sx={{ display: { xxs: "none", xxl: "block" } }}>
            <Filter
              style={accordionStyle}
              accordionSummaryStyle={{ px: 0 }}
              hasFilterTitle={true}
              actionFilterBtnStyle={{
                width: "100%",
                mt: 1,
                position: "sticky",
                top: "5rem",
                zIndex: 10,
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ sm: 12, xxl: 9.2 }}>
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
