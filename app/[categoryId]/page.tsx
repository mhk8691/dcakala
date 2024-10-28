import { Box, Container, Grid2 as Grid, SxProps } from "@mui/material";
import Types from "./Types";
import Products from "../components/Products";
import BestSeller from "../components/BestSeller";
import { data } from "../services/ParkingDoorJack";
import { data as videoPhoneData } from "../services/videoPhone";
import Filter from "../components/Accordion";
import ProductsPopular from "../components/ProductsPopular";
import SelectedBrands from "./SelectedBrands";
const accordionStyle: SxProps = {
  border: "1px solid #A4A4A4",
  borderTop: "none",
  borderRadius: 2,
  px: 1,
  zIndex: 10,
  bgcolor: "white",
  mt: "-.3rem",
};
export default function CategoryPage() {
  return (
    <Container maxWidth="xxxl" sx={{ direction: "rtl", mt: 5 }}>
      <Grid container spacing={2} sx={{ position: "relative", height: "100%" }}>
        <Grid size={{ xxs: 0, xxl: 2.8 }} sx={{display:{xxs:'none',xxl:'block'}}}>
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
          <Box
            sx={{
              width: "100%",
              position: "static",
              zIndex: 10,
            }}
          >
            <Box
              component={"img"}
              src="https://dashboard.dcakala.com/public/images/side-banner/slider/2024/10/video-door-phone-ns_original.webp"
              alt=""
              sx={{
                borderRadius: 2,
                mt: 2,
                width: "100%",
              }}
            />
            <ProductsPopular />
          </Box>
        </Grid>
        <Grid size={{ sm: 12, xxl: 9.2 }}>
          <Box>
            <BestSeller title="پرفروش ترین آیفون های تصویری" data={data} />
            <Types />
            <SelectedBrands />
            <Products data={videoPhoneData} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
