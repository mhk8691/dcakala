import ParagraphContent from "@/app/components/ParagraphContent";
import TitleContent from "@/app/components/TitleContent";
import { metadata } from "@/app/layout";
import { Box, Typography } from "@mui/material";
metadata.title = 'مناطق تحت پوشش نصب و خدمات'
export default function AreasCoveredInstallationPage() {
  return (
    <Box sx={{ direction: "rtl" }}>
      <TitleContent style={{ mt: 7 }}>
        شهر ها و استانهایی که فروشگاه دی سی ای کالا قادر می باشد در آن نواحی
        خدمات نصب و گارانتی انجام دهد
      </TitleContent>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Box
          component={"img"}
          src="https://dashboard.dcakala.com/public/img/cms/menu/IranMap.gif"
          alt=""
        />
      </Box>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 2 }}>
        به طور معمول خدمات نصب مربوط به جک درب اتوماتیک، آیفون تصویری، دوربین
        مداربسته، درب شیشه ای، آرامبند و قفل برقی در شهرهایی که در زیر نام برده
        می شود انجام می پذیرد. البته در هر زمان می توانید با تماس با فروشگاه دی
        سی ای کالا اطلاعات مربوط با نصب و گارانتی را از کارشناسان ما دریافت
        نمایید.
      </ParagraphContent>
      <Typography variant="body1" color="initial" sx={{ px: 3, my: 1 }}>
        تهران و البرز
      </Typography>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 1 }}>
        تمام خدمات مربوط به نصب و گارانتی در شهرهای استان تهران و البرز توسط
        خدمات مرکزی دی سی ای کالا انجام می پذیرد. اطلاعات تماس خدمات مرکزی دی سی
        ای کالا در اینجا دریافت نمایید.
      </ParagraphContent>
      <Typography variant="body1" color="initial" sx={{ px: 3, my: 1 }}>
        آذربایجان شرقی
      </Typography>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 1 }}>
        شهرهای تبریز، شبستر،اسکو، آذر شهر، مراغه میانه، سراب تحت پوشش نصب دی سی
        ای کالا می باشد.
      </ParagraphContent>
      <Typography variant="body1" color="initial" sx={{ px: 3, my: 1 }}>
        آذربایجان غربی
      </Typography>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 1 }}>
        شهرهای ارومیه، بوکان، شاهین دژ، میاندوآب، خوی
      </ParagraphContent>
      <Typography variant="body1" color="initial" sx={{ px: 3, my: 1 }}>
        اردبیل
      </Typography>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 1 }}>
        شهر اردبیل
      </ParagraphContent>
      <Typography variant="body1" color="initial" sx={{ px: 3, my: 1 }}>
        اصفهان
      </Typography>
    </Box>
  );
}
