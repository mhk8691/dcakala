import ParagraphContent from "@/app/components/ParagraphContent";
import SubTitle from "@/app/components/SubTitle";
import TitleContent from "@/app/components/TitleContent";
import { Box } from "@mui/material";
import Slider from "./Slider";

export default function AboutUsPage() {
  return (
    <div>
      <TitleContent
        style={{ fontSize: "40px", color: "primary.dark", fontWeight: "blod" }}
      >
        چرا دی سی ای کالا
      </TitleContent>
      <ParagraphContent style={{ fontWeight: "normal", mt: 5 }}>
        دی سی ای کالا فروشگاه اینترنتی و حضوری است که شروع فعالیت ها آن به ۱۳۸۸
        بر می گردد پس می توان این فروشگاه را با سابقه ترین فروشگاه تخصصی سیستم
        های حفاظتی و نظارتی و برق ساختمانی در ایران دانست
      </ParagraphContent>
      <Box display={"flex"} justifyContent={"center"} mt={5}>
        <Box
          component={"video"}
          src="https://video.dcakala.com/video-files/special_video/mr_Mohamadian.mp4"
          controls
          sx={{
            width: "85%",
            borderRadius: 5,
            boxShadow: "0 0 20px rgba(184, 224, 239, 1)",
          }}
        />
      </Box>
      <SubTitle style={{ fontSize: "22px", color: "#52afc2", mt: 5 }}>
        تیم قدرتمند فروش
      </SubTitle>
      <ParagraphContent
        style={{ fontWeight: "normal", mt: 5, fontSize: "16px" }}
      >
        اکثر فروشگاههای اینترنتی بزرگ تنها اجناس را با یک سری اطلاعات پایه ای در
        سایت خود قرار می‌دهند و به لحاظ فنی اطلاعات کافی از محصول خود ندارد. اما
        تیم فروش دی سی ای کالا برای هر بخش از متخصصان همان رشته استفاده کرده تا
        بهترین تجربه خرید را برای مشتریان خود به ارمغان آورد.
      </ParagraphContent>
      <SubTitle style={{ fontSize: "22px", color: "#52afc2", mt: 5 }}>
        نمایندگی اکثر برندها
      </SubTitle>
      <ParagraphContent
        style={{ fontWeight: "normal", mt: 5, fontSize: "16px" }}
      >
        مشکل جدیدی که گریبان گیر بسیاری از فروشگاه های اینترنتی شده این است که
        مشتری پس از خرید متوجه می شود محصول که خریده از طرف شرکت اصلی خدماتی
        دریافت نمی کند علت هم عدم تایید فروشنده از طرف تولید کننده و وارد کننده
        است. دی سی ای کالا با داشتن نمایندگی اکثر برندهای قرار داده شده در سایت
        این مشکل را کاملاً برطرف کرده است
      </ParagraphContent>
      <Slider />
      <SubTitle style={{ fontSize: "22px", color: "#52afc2", mt: 7 }}>
        تیم نصب و خدمات پس از فروش
      </SubTitle>
      <ParagraphContent
        style={{ fontWeight: "normal", mt: 5, fontSize: "16px" }}
      >
        جایی که تفاوت فروشگاه دی سی کالا با بقیه فروشگاه کاملاً مشخص می‌شود. این
        فروشگاه در تهران و کرج تیم مستقیم برای نصب صحیح و اصولی دارد و در اکثر
        شهرستان‌ها با تیم‌های قدرتمندی که خدمات نصب را برعهده دارند همکاری
        می‌کند که در صورت تمایل خریدار، جنس پس از فروش به صورت استاندارد نصب شود
        . به نحوی که گارانتی محصول معتبر بمانند. اما اگر بعد از چند وقت مشکلی
        برای اجناس پیش آمد همین تیم فنی به کمک او آمده و مشکل را به سرعت برطرف
        می کند.
      </ParagraphContent>
      <Box display={"flex"} justifyContent={"center"} mt={5}>
        <Box
          component={"video"}
          src="https://video.dcakala.com/video-files/special_video/mr_Sharifmoradi.mp4"
          controls
          sx={{
            width: "85%",
            borderRadius: 5,
            boxShadow: "0 0 20px rgba(184, 224, 239, 1)",
          }}
        />
      </Box>
      <SubTitle style={{ fontSize: "22px", color: "#52afc2", mt: 7 }}>
        سرعت تحویل را با ما تجربه کنید
      </SubTitle>
      <ParagraphContent
        style={{ fontWeight: "normal", mt: 5, fontSize: "16px" }}
      >
        اکثر فروشگاه اینترنتی اجناس را پس از سفارش تهیه می‌کنند اما ما در دی سی
        ای کالا این ادعا را داریم که ۷۰ درصد اجناس درخواستی را از انبار خود
        ارسال می‌کنیم این مورد دو حسن دارد یکی اینکه سرعت ارسال محصول بسیار
        بالاست به نحوی که مصرف کننده تهران می تواند جنس سفارش داده را همان روز
        سفارش تحویل بگیرد و مورد دوم این است که مشکل لغو سفارش به علت عدم موجودی
        کالا تقریباً وجود ندارد.
      </ParagraphContent>
      <SubTitle style={{ fontSize: "22px", color: "#52afc2", mt: 7 }}>
        ۷ روز ضمانت بازگشت واقعی
      </SubTitle>
      <ParagraphContent
        style={{ fontWeight: "normal", mt: 5, fontSize: "16px" }}
      >
        اکثر کالاهای دی سی کالا دارای ۷ روز ضمانت بازگشت هستند البته باید شرایط
        اولیه کالا حفظ شده باشد یعنی جنس نصب یا پیچ نشده باشد و خط و خش روی
        محصول ایجاد نشده باشد. اگر از ظاهر محصول خوشتان نیامد و یا محصول با آن
        چیزی که در ذهن شما بود فرق داشت می توانید محصول را تا حداکثر 7 روز پس از
        تحویل مرجع نمایید.
      </ParagraphContent>
      <SubTitle style={{ fontSize: "22px", color: "#52afc2", mt: 7 }}>
        پرداخت در محل
      </SubTitle>
      <ParagraphContent
        style={{ fontWeight: "normal", mt: 5, fontSize: "16px" }}
      >
        پرداخت پس از تحویل جنس امکانی است که دی سی ای کالا برای مشتریان شهر
        تهران فراهم کرده است ما تمام تلاش خود را می کنیم که بتوانیم به زودی این
        امکان را برای سایر شهرستانها نیز فراهم آوریم. پس اگر با پرداخت درب محل
        راحت تر هستید از این امکان جدید دی سی ای کالا استفاده کنید. قبل از خرید
        از هر سایتی اعتبار نامه های آن را بررسی کنید. ای نماد و اعتبار نامه
        رسانه های دیجیتال مواردی هستند که نشان می دهند شما در حال خرید از یک
        سایت معتبر هستید.
      </ParagraphContent>
    </div>
  );
}
