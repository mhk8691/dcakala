import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Stack,
  Divider,
} from "@mui/material";
import Title from "./Title";
import Questions from "./Questions";
import { data } from "@/app/services/videoPhone";
import Selected from "./Selected";
import { title } from "process";
type Brand = {
  name: string;
};
const brand: Brand[] = [
  {
    name: "سیماران",
  },
  {
    name: "اف اف تکنولوژی",
  },
  {
    name: "تابا",
  },
  {
    name: "سوزوکی",
  },
  {
    name: "تکنما",
  },
  {
    name: "کالیوز",
  },
  {
    name: "الکتروپیک",
  },
];
type Advertising = {
  title: string;
  description: string;
};
const advertising: Advertising[] = [
  {
    title: "ارسال سریع به سراسر ایران",
    description: "اکسپرس،پست،تیپاکس و باربری",
  },
  {
    title: "تنوع در روش های پرداختی",
    description: "پرداخت آنلاین کارت به کارت و یا در محل",
  },
  {
    title: "تضمین بازگشت وجه",
    description: "بازگشت 7 روزه کالا در صورت مغایرت کالا",
  },
  {
    title: "پشتیبانی حین و بعد از فروش",
    description: "تیم مسلط فروش و پشتیبانی",
  },
];
export default function VideoDoorPhoneExchangePlanPage() {
  return (
    <Container maxWidth="xxxl" sx={{ mt: 7, mb: 10 }}>
      <Box display={"flex"} justifyContent={"center"}>
        <Typography
          variant="h6"
          sx={{
            color: "#009688",
            fontSize: "28px",
            bgcolor: "#f5f5f5",
            px: 2,
            py: 1,
            borderRadius: 10,
          }}
        >
          طرح تعویض آیفون تصویری
        </Typography>
      </Box>
      <Title style={{ mt: 10 }} title={"طرح تعویض آیفون تصویری"} />
      <Grid container spacing={0} sx={{ mt: 5, textAlign: "center" }}>
        {brand.map((item, index) => (
          <Grid size={12 / 7} key={index}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "16px" }}
            >
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} justifyContent={"center"} mt={10}>
        <Box
          sx={{
            border: "1.5rem solid #026D61",
            borderBottom: "none",
            borderTop: "2.2rem solid #026D61",
            // position: "relative",
            width: "45%",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontSize: "30px",
              bgcolor: "#f5f5f5",
              height: "100px",
              textAlign: "center",
              // position: "absolute",
              pt: 1,
              px: 3,
            }}
          >
            همه آیفون های تصویری و صوتی قدیمی و حتی خراب در این طرح پذیرفته می
            شود
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={2}>
        <Box
          component={"video"}
          src="https://video.dcakala.com/video-files/video-door-phone/exchange/video-door-phone-exchange.mp4"
          controls
          width={"85%"}
          borderRadius={2}
        />
      </Box>
      <Title style={{ mt: 5 }} title={"پرسش های متداول"} />
      <Stack
        direction={"column"}
        width={"100%"}
        alignItems={"center"}
        mt={3}
        spacing={1}
      >
        <Questions title="شرایط طرح تعویض آیفون تصویری چیست؟">
          اگر آیفون صوتی و تصویری منزلتان قدیمی شده و یا از کار افتاده اکنون
          فرصت مناسبی است که از این طرح استفاده کنید. برای این کار کافیست فرم
          داخل این صفحه را پر کرده و یا با شماره تلفن شرکت تماس بگیرید تا
          کارشناسان دی سی ای کالا مراحل مربوط به این طرح را برای شما توضیح دهند.
          ما در این طرح گوشی قدیمی شما را بر نمیداریم، کارشناسان ما تنها مطمئن
          میشوند کسانی از این طرح بهره مند شوند که قصد تغییر آیفون صوتی و یا
          تصویری خود را دارند و برای این کار حتی گرفتن عکس از محصول قدیمی نیز
          کفایت میکند.
        </Questions>
        <Questions title="آیا استفاده از طرح تعویض آیفون تصویری زمانبر است؟">
          خیر. این نوع خرید به مانند سایر سفارش ها به سرعت پردازش شده و اجناس
          کمتر از یک روز کاری برای خریدار ارسال می شود. در طرح تعویض خریدار فقط
          یک مرحله بیشتر باید طی کند که آن هم ارسال عکس آیفون قدیمی از منزل خودش
          است. لازم به ذکر است اگر چندین واحد میخواهد از این طرح استفاده کند، می
          بایست تک تک واحدها عکس مانیتور و پنل را یکجا برای کارشناس ما ارسال
          نماید.
        </Questions>
        <Questions title="درصد تخفیف در این طرح چقدر است؟">
          ما بابت هر گوشی و یا پنل قدیمی در حدود 5 درصد تومان تخفیف برای انتخاب
          مانیتورهای ساده و حدود 8 درصد تخفیف بابت انتخاب مانیتور حافظه دار و
          پنل به شما اعطا می کنیم. این تخفیف زمانی جذاب می شود که شما برای همه ی
          واحدهای ساختمان تان قصد استفاده از این طرح را داشته باشید. در این صورت
          ممکن است هزینه راه اندازی آیفون برای شما رایگان در آید!
        </Questions>
      </Stack>
      <Title title="منتخب آیفون تصویری" style={{ mt: 5 }} />
      <Selected />
      <Box display={"flex"} justifyContent={"center"} mt={15}>
        <Box
          bgcolor={"#008B7E"}
          px={1.5}
          height={"200px"}
          borderRadius={2}
          width={"48%"}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "24px",
              bgcolor: "white",
              borderRadius: 2,
              textAlign: "center",
              px: 1,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            آیا میدانستید باشرکت در طرح تعویض آیفون تصویری 5% تخفیف دوربین
            وایرلس و یا 500هزارتومان تخفیف جک پارکینگی دریافت می کنید؟
          </Typography>
        </Box>
      </Box>
      <Title title="منتخب دوربین مداربسته" style={{ mt: 15 }} />
      <Selected />
      <Title title="منتخب جک پارکینگی" style={{ mt: 5 }} />
      <Selected />
      <Stack>
        <Container
          maxWidth="md"
          sx={{ display: "flex", justifyContent: "center", mt: 5,direction:"rtl" }}
        >
          <Grid container rowSpacing={3} sx={{ mt: 5}}>
            {advertising.map((item, index) => (
              <Grid size={6} key={index}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "20px", color: "primary.dark" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "14px", mt: 1.5 }}>
                  {item.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Container>
  );
}
