import ParagraphContent from "@/app/components/ParagraphContent";
import TitleContent from "@/app/components/TitleContent";
import { Box } from "@mui/material";
const text = `
هدیه نقدی به صورت کارت می باشد که در یکسری از محصولات دی سی ای کالا در جشنواره های فروش ارائه می گردد.

دارنده این کارت می تواند به میزان اعتبار این کارت در خرید بعدی خود یا دوستانش تخفیف نقدی دریافت کند.دی سی ای کالا به ازای هر عدد از محصولات خود یک عدد کارت هدیه به خریدار خواهد داد.
`;
export default function GiftCardPage() {
  return (
    <Box>
      <TitleContent>هدیه نقدی دی سی ای کالا چیست؟</TitleContent>
      <ParagraphContent>{text}</ParagraphContent>
    </Box>
  );
}
