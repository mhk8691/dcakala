import { metadata } from "@/app/layout";
import { Box } from "@mui/material";
import Link from "next/link";
metadata.title = 'نماد های اعتباری سایت دی سی ای کالا'
export default function DcakalaProductCreditSymbolPage() {
  return (
    <Box sx={{ mt: 5, px: 2, direction: "rtl" }}>
      <Box
        sx={{
          boxShadow: "0 0 10px #DBDBDB",
          px: 2,
          py: 1.5,
          textAlign: "center",
        }}
      >
        وب سایت دی سی ای کالا با دریافت مجوزهای معتبر از کلیه نهاد های نظارتی در
        راستای جلب اعتمادو اعتبار از مشتریان و آسودگی خیال آنها آماده خدمت رسانی
        به مشتریان عزیز میباشد
      </Box>
      <Link
        href={"https://trustseal.enamad.ir/?id=19777&Code=Nub0nH1cXdEKhBD1rd3p"}
        target="_blank"
      >
        <Box
          component={"img"}
          src="https://dashboard.dcakala.com/public/img/cms-new/trust/2024/09/enamad-new.png"
          alt="enamad"
          sx={{ display: "block", mt: 4 }}
        />
      </Link>
      <Link
        href={
          "https://logo.samandehi.ir/Verify.aspx?id=270296&p=uiwkjyoeobpduiwkpfvlgvka"
        }
        target="_blank"
      >
        <Box
          component={"img"}
          src="https://dashboard.dcakala.com/public/img/cms-new/trust/2024/09/samandehi-new-1.png"
          alt="samandehi"
          sx={{ display: "block", mt: 2 }}
        />
      </Link>
    </Box>
  );
}
