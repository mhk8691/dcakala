import ParagraphContent from "@/app/components/ParagraphContent";
import SubTitle from "@/app/components/SubTitle";
import { metadata } from "@/app/layout";
import { Box } from "@mui/material";

metadata.title = "پرداخت امن دی سی ای کالا";
export default function SecurePaymentPage() {
  return (
    <Box sx={{ direction: "rtl" }}>
      <SubTitle style={{ mt: 7, textAlign: "center" }}>
        نماد های اعتباری سایت دی سی ای کالا
      </SubTitle>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 0 }}>
        وب سایت دی سی ای کالا با دریافت مجوزهای معتبر از کلیه نهاد های نظارتی در
        راستای جلب اعتمادو اعتبار از مشتریان و آسودگی خیال آنها آماده خدمت رسانی
        به مشتریان عزیز میباشد
      </ParagraphContent>
      <Box display={"flex"} justifyContent={"space-around"} gap={1} mt={5}>
        <Box
          component={"img"}
          src="https://dashboard.dcakala.com/public/img/cms-new/trust/2024/09/enamad-new.png"
          alt=""
        />
        <Box
          component={"img"}
          src="https://dashboard.dcakala.com/public/img/cms-new/trust/2024/09/samandehi-new-1.png"
          alt=""
        />
        <Box
          component={"img"}
          src="https://dashboard.dcakala.com/public/img/img-si/logo/Parsian.png"
          alt=""
        />
      </Box>
    </Box>
  );
}
