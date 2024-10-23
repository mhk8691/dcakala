import { Box, Container, Grid2 as Grid } from "@mui/material";
import { metadata } from "../layout";
import Navbar from "./Navbar";
import StepCart from "./Step";
import Products from "./Products";
import Price from "./Price";
import Counseling from "./Counseling";
import FreeShipping from "./FreeShipping";
metadata.title = "سبد خرید شما";
export default function CartPage() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="xxxl" sx={{ mt: 2 }}>
        <StepCart />
        <Grid container spacing={2} sx={{ direction: "rtl", mt: 2 }}>
          <Grid
            size={{ xxs: 12, lg: 9, md: 7 }}
            sx={{
              height: {
                xxs: "345px",
                xs: "360px",
                md: "505px",
              },
            }}
          >
            <Products />
          </Grid>
          <Grid
            size={{ xxs: 12, xs: 5.5, lg: 3 }}
            sx={{
              height: {
                xxs: "487px",
                xs: "505px",
              },
            }}
          >
            <Box>
              <Price />
              <Counseling />
              <FreeShipping />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <hr style={{ border: "1px solid #DDDDDD", marginTop: "16px" }} />
      <Container maxWidth="xxxl" sx={{ mt: 2,mb:5 }}>
        <Grid container spacing={[.5,3]} sx={{ direction: "rtl" }}>
          <Grid size={{ xxs: 12, xs: 6 }}>
            <Box
              component={"img"}
              src="https://dashboard.dcakala.com/public/img/cms-new/cart-footer/2024/10/export.png"
              alt=""
              sx={{width:'100%'}}
            />
          </Grid>
          <Grid size={{ xxs: 12, xs: 6 }}>
            <Box
              component={"img"}
              src="https://dashboard.dcakala.com/public/img/cms-new/cart-footer/2024/10/enamad.png"
              alt=""
              sx={{width:'100%'}}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
