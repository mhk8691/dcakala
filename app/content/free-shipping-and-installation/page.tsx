import BoxContent from "@/app/components/BoxContent";
import ParagraphContent from "@/app/components/ParagraphContent";
import SubTitle from "@/app/components/SubTitle";
import TitleContent from "@/app/components/TitleContent";
import { metadata } from "@/app/layout";
import { SxProps, Typography } from "@mui/material";
import React from "react";
metadata.title = 'ارسال و نصب محصولات دی سی ای کالا'
const paragraphStyle:SxProps = {
  lineHeight:2.25
}
export default function FreeShippingAndInstallationPage() {
  return (
    <div>
      <TitleContent>ارسال سریع و رایگان محصولات در تهران</TitleContent>
      <ParagraphContent style={{ ...{ mt: 5 }, ...paragraphStyle }}>
        در ابتدا باید گفت فروشگاه دی سی ای کالا سعی کرده که مجموعه ای کامل از
        لوازم الکترونیکی ساختمان را، برای راحتی و آرامش خاطر مشتریان به صورت
        اینترنتی عرضه و ارسال کند. این فروشگاه با تنوع محصولات در تمامی زمینه ها
        از قبیل جک درب پارکینگ، آیفون تصویری، دوربین مداربسته، سیستم های حفاظتی
        و... و همچنین ارائه محصولات با کیفیت، توانسته تا جایگاه خود را در میان
        مصرف کنندگان به دست آورد. برای دی سی ای کالا رضایت مندی مشتریان در
        ارجحیت قرار دارد و در این راستا سعی شده تا محصولات درخواستی مشتریان به
        صورت رایگان و سریع به سراسر تهران ارسال شود. در واقع فردی که در دی سی ای
        کالا سفارش خود را ثبت می کند یک خرید ماندگار و خوب را در خاطر خود خواهد
        داشت، چرا که خرید محصول از دی سی ای کالا دارای مزایای زیر می باشد:
      </ParagraphContent>
      <BoxContent>
        <Typography
          variant="body2"
          color="initial"
          sx={{ fontSize: "16px", opacity: ".9" }}
        >
          خرید محصولی باکیفیت با قیمتی مناسب
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{ fontSize: "16px", mt: 2, opacity: ".9" }}
        >
          امنیت در سفارش کالا
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{ fontSize: "16px", mt: 2, opacity: ".9" }}
        >
          ارسال سریع و تحویل به مشتری تا حداکثر 4 ساعت
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{ fontSize: "16px", mt: 2, opacity: ".9" }}
        >
          ارسال رایگان به سراسر تهران
        </Typography>
      </BoxContent>
      <SubTitle>نصب ارزان در تهران</SubTitle>
      <ParagraphContent style={paragraphStyle}>
        ذکر این نکته نیز در ابتدا ضروری به نظر می رسد که{" "}
        <span style={{ fontWeight: "bold" }}>قیمت محصولات دی سی ای کالا</span>{" "}
        به مراتب مناسب تر از رقبای خود می باشد و در واقع مشتریان با خرید محصول
        خود یک کالا با کیفیت و قیمت مناسب را تهیه نموده اند. دی سی ای کالا این
        بار برای رضایت مندی مشتریان خود در جهت نصب ارزان و تخصصی محصولاتی مانند
        آرامبند و قفل برقی قدم برداشته که به ترتیب مبالغ 90 و 100 هزار تومان را
        برای دستمزد نصب این محصولات در نظر گرفته است والبته نسبت به کیفیت نصب و
        رقبای این فروشگاه اینترنتی بسیار ناچیز می باشد.
      </ParagraphContent>
      <SubTitle>تضمین کیفیت دی سی ای کالا</SubTitle>
      <ParagraphContent style={paragraphStyle}>
        اجناسی که وارد سایت دی سی ای کالا می شوند از یک تیم تحقیقاتی گسترده عبور
        می کند که کاملا نقاط قوت و ضعف کالاها را مورد بررسی قرار می دهند. ضمن آن
        که کادر مجرب دی سی ای کالا همواره با بررسی اصل بودن کیفیت محصولات و صدور
        فاکتور رسمی برای کالاها سعی بر ارائه محصولی بی عیب و نقص و با کیفیت
        دارد. در واقع باید گفت کیفیت یک محصول هیچ گاه اتفاقی نبوده و تحقق آن در
        راستای فعالیت{" "}
        <span style={{ fontWeight: "bold" }}>
          فروشگاه اینترنتی دی سی ای کالا
        </span>{" "}
        با سیستم مدیریت کیفیت و نظارت دقیق آن به انجام رسیده است. تضمین کیفیت به
        عنوان رکن اصلی مدیریت کیفیت، تمامی راهکار ها و تدابیری که بر روی کیفیت
        یک محصول اثرگذار هستند را پوشش می دهد. علاوه بر این، محافظت از کسب و کار
        و حفظ کیفیت محصول، فرایندی سیستماتیک برای شناسایی، ارزیابی و مدیریت ریسک
        های موجود را پایه ریزی نموده و در راستای برآوردن نیازها و الزامات، دائما
        آن را توسعه داده است. به طور کلی باید گفت که با ضمانت دی سی ای کالا از
        خرید محصول مورد نیاز خود لذت ببرید.
      </ParagraphContent>
    </div>
  );
}
