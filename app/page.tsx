import ProductSlider from "./components/ProductSlider";
import Category from "./homepage/Category";
import ImageSlider from "./homepage/ImageSlider";
import SubCategory from "./homepage/SubCategory";
import SubNavbar from "./homepage/SubNavbar";
import { metadata } from "./layout";
import { data } from "./services/videoPhone";
metadata.title =
  "فروشگاه دی سی ای کالا - آیفون تصویری، دوربین مدار بسته، جک پارکینگی";
export default function Home() {
  return (
    <div>
      <SubNavbar />
      <ImageSlider />
      <Category />
      <SubCategory />
      <ProductSlider data={data} title="آیفون های تصویری" />
    </div>
  );
}
