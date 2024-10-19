import { Container } from "@mui/material";
import ProductSlider from "./components/ProductSlider";
import Category from "./homepage/Category";
import ImageSlider from "./homepage/ImageSlider";
import SubCategory from "./homepage/SubCategory";
import SubNavbar from "./homepage/SubNavbar";
import { metadata } from "./layout";
import { data as dataBrand } from "./services/videoBrand";
import { data as dataVideoIphon } from "./services/videoPhone";
import {data as dataParkingDoorJack} from "./services/ParkingDoorJack";
import {data as jackBrand} from "./services/jackBrand";
import BrandSlider from "./components/BrandSlider";
metadata.title =
  "فروشگاه دی سی ای کالا - آیفون تصویری، دوربین مدار بسته، جک پارکینگی";
export default function Home() {
  return (
    <div>
      <SubNavbar />
      <ImageSlider />
      <Category />
      <SubCategory />
      <Container maxWidth={"xxxl"} sx={{ mt: 5, direction: "rtl" }}>
        <ProductSlider data={dataVideoIphon} title="آیفون های تصویری" />
        <BrandSlider data={dataBrand} />
        <ProductSlider data={dataParkingDoorJack} title="جک درب پارکینگ" />
        <BrandSlider data={jackBrand} />
      </Container>
    </div>
  );
}
