import Category from "./homepage/Category";
import ImageSlider from "./homepage/ImageSlider";
import SubNavbar from "./homepage/SubNavbar";
import { metadata } from "./layout";
metadata.title =
  "فروشگاه دی سی ای کالا - آیفون تصویری، دوربین مدار بسته، جک پارکینگی";
export default function Home() {
  return (
    <div>
      <SubNavbar />
      <ImageSlider />
      <Category />
    </div>
  );
}
