import BoxContent from "@/app/components/BoxContent";
import ParagraphContent from "@/app/components/ParagraphContent";
import SubTitle from "@/app/components/SubTitle";
import TitleContent from "@/app/components/TitleContent";
import { Typography } from "@mui/material";
import React from "react";
import ConditionsMessage from "./ConditionsMessage";
import { metadata } from "@/app/layout";
metadata.title = 'ضمانت خرید'
export default function GuarantyPage() {
  return (
    <div>
      <TitleContent>ضمانت خرید محصولات از دی سی ای کالا</TitleContent>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 2 }}>
        یکی از اصلی ترین اولویت های دی سی ای کالا آسودگی خاطر و رضایت مندی
        خریداران است به همین خاطر تلاش ما بر این است تا هر سفارش در شرایط مطلوب
        و مورد انتظار به دست شما برسد. با وجود این ممکن است پس از خرید، با
        مواردی ناخواسته روبرو شوید. بر همین مبنا دی سی ای کالا، یک بازه ی 7 روزه
        را جهت ضمانت بازگرداندن کالا تعیین کرده است. در نظر داشته باشید در صورتی
        که قیمت کالای مرجوعی در زمان بازگشت،کاهش یافته باشد استرداد وجه به قیمت
        روز خواهد بود.
      </ParagraphContent>
      <TitleContent>اجناس را این گونه تحویل بگیرید</TitleContent>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 2 }}>
        فروشگاه دی سی ای کالا سعی کرده اجناس را به بهترین نحو بسته بندی و وکیوم
        نماید تا در اگر بسته از جایی رها شد، محصول داخل آن آسیب نبیند. با این
        حال پیشنهاد ما این است که در هنگام تحویل محصول مخصوصا از باربری یا سرویس
        هایی که به شهرستان ها ارسال دارند به مانند تیپاکس و چاپار، کارتن را باز
        نموده و از تعداد اجناس و سالم بودن فیزیکی اجناس مطمئن شوید و در صورت
        مغایرت اجناس را تحویل نگرفته و سریعا با دی سی ای کالا تماس حاصل نمایید.
      </ParagraphContent>
      <SubTitle style={{ textAlign: "center", fontWeight: "bold", mt: 6 }}>
        در صورتی که محصول خریداری شده شما دچار مسائل زیر باشد، می توانید تا 7
        روز کالای خود را مرجوع کنید:
      </SubTitle>
      <BoxContent>
        <Typography variant="body1" color="initial">
          کالای خریداری شده{" "}
          <span style={{ fontWeight: "bold" }}>ایراد یا اشکال فنی</span> داشته
          باشد.*
        </Typography>
        <Typography variant="body1" color="initial" sx={{ mt: 1.5 }}>
          کالای خریداری شده از نظر
          <span style={{ fontWeight: "bold" }}>مشخصات یا ظاهر فیزیکی</span> با
          اطلاعات وب سایت مغایرت داشته باشد.
        </Typography>
        <Typography variant="body1" color="initial" sx={{ mt: 1.5 }}>
          مشتری به دلایلی از خرید خود راضی نبوده یا یا پشمیان شده است.
        </Typography>
      </BoxContent>
      <ParagraphContent style={{ mt: 3 }}>
        *= در قوانین برخی تولید کنندگان وجود دارد که در صورت خرابی جنس حتی در
        زمان تحویل، مشتری می باست این موضوع را به خدمات پس از فروش اعلام کند تا
        تیم خدماتی آن شرکت مشکل را مرتفع سازد.
      </ParagraphContent>
      <BoxContent>
        <ConditionsMessage />
      </BoxContent>
      <TitleContent>چه کالاهایی ضمانت بازگشت ندارند</TitleContent>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 2 }}>
        با اینکه فروشگاه دی سی ای کالا برای اکثر کالاهای خود ضمانت بازگشت گذاشته
        است اما برخی محصولات به محض سفارش دیگر امکان بازگشت ندارند. کالاهایی که
        به درخواست مشتری تولید میشوند مثل درب شیشه ای و درب کرکره ای و پایه
        آیفون تصویری از این گروه هستند و برخی از محصولات سنگین و کالاهایی که به
        درخواست مشتری از شرکت ثانویه سفارش داده میشود قابلیت بازگشت ندارند.
      </ParagraphContent>
    </div>
  );
}
