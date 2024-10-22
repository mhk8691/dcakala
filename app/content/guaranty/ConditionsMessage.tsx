import { Box, SxProps, Typography } from "@mui/material";
const TypographyStyle: SxProps = {
  mt: 1,
  color: "#2c2b29",
  "&:first-child": {
    mt: 0,
  },
  lineHeight: 2.25,
};
function BoldWord({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component={"span"}
      sx={{
        fontWeight: "bold",
      }}
    >
      {children}
    </Box>
  );
}
export default function ConditionsMessage() {
  return (
    <div>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        آسیب‏‏ یا ایراد فیزیکی باید <BoldWord>حداکثر طی 48 ساعت</BoldWord> پس از
        دریافت کالا، به واحد فروش دی سی ای کالا از طریق تلفن، ایمیل یا مراجعه
        حضوری اطلاع داده شود.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        لازم است کارتن و جعبه اصلی محصولات تا پایان 7 روز مهلت استفاده، نگهداری
        شود و از دور ریختن آن جداً خودداری شود.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        استفاده از این سرویس تنها در صورتی امکان‌پذیر است که کالا در{" "}
        <BoldWord>کارتن یا جعبه اصلی</BoldWord> خود به دی سی ای کالا بازگردانده
        شود.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        برای مرجوع کردن کالای خود، باید{" "}
        <BoldWord>تمامی اقلام همراه محصول،</BoldWord> در جعبه وجود داشته باشند.
        همچنین اگر کالا به‌ همراه هدیه فروخته شده باشد، بازگرداندن هدیه همراه آن
        نیز الزامی است.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        برچسب زدن یا نوشتن توضیحات، آدرس یا هر مورد دیگری روی کارتن یا جعبه اصلی
        کالا و یا پاره و مخدوش کردن آن، امکان استفاده از ضمانت بازگشت را از بین
        خواهد برد.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        این سرویس اشکال‏‏‌های فنی و ظاهری (شکستگی، خط و خش و مانند آن روی بدنه
        کالا و قطعات تزئینی) را که در اثر{" "}
        <BoldWord>استفاده نادرست کاربر از کالا</BoldWord> ایجاد شود، شامل
        نمی‏‏‌شود.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        استفاده نادرست پس از تحویل کالا مواردی مانند حمل و نقل و جابجایی، نصب و
        راه اندازی، تنظیمات، کاربرد غیرمعمول، نگهداری و استفاده‌ ی نامناسب و
        متفاوت با توصیه سازنده کالا (قید شده در دفترچه راهنمای کالا) را شامل
        می‌شود.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        اگر مغایرت، بدون باز کردن بسته بندی یا بدون استفاده از کالا قابل مشاهده
        است، مثل رنگ یا مشخصات درج شده روی بدنه، باید کالا در{" "}
        <BoldWord>شرایط اولیه خود </BoldWord>
        باشد و از آن استفاده نشده باشد.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        عکس محصولات جهت اطلاع و کمک به خرید مشتری و از آنجا که ممکن است در پاره
        ای جزییات با کالای اصلی تفاوت هایی داشته باشد به استناد آنها نمی توان
        اعلام مغایرت کرد. ملاک وجود مغایرت در مشخصات کالا،{" "}
        <BoldWord>مشخصات فنی</BoldWord> درج شده در وب سایت است.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        در صورتی که امکان تشخیص مغایرت تنها با باز کردن بسته بندی ممکن باشد،
        لازم است <BoldWord>کارتن و جعبه اصلی محصولات نگهداری شود</BoldWord> و از
        دور ریختن آن جدا خودداری شود. استفاده از این سرویس تنها در صورتی امکان
        ‌پذیر است که کالا در کارتن یا جعبه اصلی خود (
        <BoldWord>بدون مخدوش شدن کارتن یا جعبه</BoldWord>) به دی سی ای کالا
        بازگردانده شود. همچنین در صورتی که آسیب‏‌، در لحظه قابل مشاهده باشد،
        مشتری می‏‌تواند از تحویل گرفتن مرسوله خودداری کند تا جهت بررسی و ارسال
        مجدد به دی سی ای کالا بازگردانده شود.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        <BoldWord>انصراف از خرید</BoldWord> و درخواست مرجوعی بدون وجود ایراد یا
        مغایرت، به کالایی تعلق می‌گیرد که<BoldWord> باز نشده باشد</BoldWord>.
        دخل و تصرف، باز کردن بسته‌ بندی اولیه، پلمب، برچسب ‌ها و حتی نایلون
        وکیوم و شیرینک، امکان مرجوع کردن را از بین خواهد برد؛ حتی اگر از کالا
        استفاده نشده باشد.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        در صورت انصراف از خرید، ارسال کالا به عهده <BoldWord>مشتری</BoldWord>{" "}
        خواهد بود.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        اگر هنوز سفارش ارسال نشده باشد، باید هر چه سریع‏‌تر به واحد پیگیری
        سفارشات دی سی ای کالا اطلاع داده شود.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        با توجه به بسته بندی ایمن و استاندارد همه مرسولات، تحویل به هر یک از
        شرکت‏‏‌های حمل و نقل معتبر به انتخاب کاربر و اعلام بارنامه مرسوله به این
        معنی است که بروز هر گونه حادثه در هنگام حمل و تحویل به عهده شرکت حمل و
        نقل است و دی سی ای کالا تنها در صورت تایید شرکت حمل کننده سفارش و در
        راستای تسهیل امور پیگیری، خسارت را جبران می‌‏کند.
      </Typography>
      <Typography variant="body1" color="initial" sx={TypographyStyle}>
        کالای آسیب دیده و همه لوازم جانبی و متعلقات آن، باید به همان شکلی که
        مشتری تحویل گرفته است به همراه{" "}
        <BoldWord>صورت جلسه رسمی شرکت حمل کننده و فاکتور</BoldWord> به خدمات پس
        از فروش دی سی ای کالا ارسال شود.
      </Typography>
    </div>
  );
}
