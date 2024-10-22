import BoxContent from "@/app/components/BoxContent";
import ParagraphContent from "@/app/components/ParagraphContent";
import SubTitle from "@/app/components/SubTitle";
import TitleContent from "@/app/components/TitleContent";
import { metadata } from "@/app/layout";
import { Box, SxProps, Typography } from "@mui/material";
import React from "react";
metadata.title = 'روش های ارسال'
const ParagraphStyle:SxProps = {
  lineHeight:2.25
}
export default function ShippingWaysPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <TitleContent style={{ mt: 7, px: 2, textAlign: "right" }}>
        روش های ارسال
      </TitleContent>
      <Box mt={2}>
        <Box
          component={"img"}
          src="https://dashboard.dcakala.com/public/img/cms/001a-koli/send-and-dliver.jpg"
          alt=""
        />
      </Box>
      <ParagraphContent style={ParagraphStyle}>
        همه ی تلاش ما در مجموعه دی سی ای کالا این است که محصول خریداری شده توسط
        مشتری در سریعترین زمان به دست او برسد و از این سو ما سرویس های سریع
        مطابق با نیاز مشتری راه اندازی نموده ایم. در کنار این موضوع ما به ارسال
        اقتصادی و ارزان قیمت نیز فکر کرده ایم تا مشتریانی که اجناس ارزان تری
        خریده اند یا خیلی عجله در دریافت سریع محصول ندارند بتوانند از این سیستم
        استفاده کنند.
      </ParagraphContent>
      <BoxContent>
        <Typography variant="body1" sx={{ opacity: ".9" }}>
          - پیک اختصاصی (برای مناطق 22 گانه شهر تهران)
        </Typography>
        <Typography variant="body1" sx={{ opacity: ".9", mt: 2 }}>
          - پست پیشتاز (برای سراسر کشور)
        </Typography>
        <Typography variant="body1" sx={{ opacity: ".9", mt: 2 }}>
          - تیپاکس و چاپار (برای شهرهای تحت پوشش تیپاکس)
        </Typography>
        <Typography variant="body1" sx={{ opacity: ".9", mt: 2 }}>
          - باربری (برای شهرهای تحت پوشش باربری مناسب برای اجناس سنگین)
        </Typography>
      </BoxContent>
      <ParagraphContent>
        همچنین امکان پرداخت در محل برای شهر تهران فعال است و امکان ارسال محصول
        به سراسر کشور وجود دارد.
      </ParagraphContent>
      <Box
        component={"img"}
        src="https://dashboard.dcakala.com/public/img/cms/001a-koli/peyk.jpg"
        alt=""
        sx={{ mt: 2 }}
      />
      <TitleContent style={{ textAlign: "right", px: 2 }}>
        پیک اختصاصی(مناطق 22 گانه شهر تهران)
      </TitleContent>
      <ParagraphContent style={{ ...{ mt: 4 }, ...ParagraphStyle }}>
        سعی ما این است که سفارش‌های شما را در روزهای کاری و به سرعت و در همان
        روز تحویل دهیم. برخی از محصولات سایت دارای قابلیت ارسال فوری هستند که
        تنها ظرف 3 ساعت پس از ثبت سفارش به دست خریدار خواهند رسید. زمان ثبت این
        سفارشات از ساعت 9 صبح تا 4 بعد از ظهر روزهای شنبه تا چهارشنبه و روز پنج
        شنبه ساعت 9 تا 12 است. اما در ارسال های اختصاصی سفارش هایی که تا ساعت 12
        روزهای شنبه تا چهارشنبه ثبت گردند در همان روز ارسال می شوند و سفارش هایی
        که روز پنج شنبه و جمعه ثبت شوند در روز شنبه ارسال میگردند. همچنین ارسال
        سفارش های ثبت شده در روزهای تعطیل در اولین روز کاری پس از تعطیلات انجام
        می پذیرد.
      </ParagraphContent>
      <SubTitle style={{ mt: 5 }}>موارد قابل توجه :</SubTitle>
      <ParagraphContent style={ParagraphStyle}>
        در صورتی که بعد از ثبت سفارش، آدرستان را تغییر دهید ممکن است سفارش شما
        با نهایتا ۴۸ ساعت تاخیر ارسال گردد. هزینه ارسال سفارشات فوری و اختصاصی
        با توجه به منطقه سفارش دهنده متغیر است و اجناس با الوپیک یا اسنپ باکس
        ارسال خواهد شد.
      </ParagraphContent>
      <Box
        component={"img"}
        src="https://dashboard.dcakala.com/public/img/cms/001a-koli/post.jpg"
        alt=""
        sx={{ mt: 1 }}
      />
      <SubTitle>ارسال اقتصادی و به صرفه ( برای سراسر کشور)</SubTitle>
      <ParagraphContent style={ParagraphStyle}>
        بسیاری از کالاهای دی سی ای کالا به مانند ریموت، فلاشر و … کوچکند و ارزش
        ریالی کمی دارند. برخی از خریداران نیز عجله ای بابت دریافت محصولشان
        ندارند. از این سو دی سی ای کالا روشی اقتصادی و ارزان قیمت برای ارسال ها
        ابداع نمود که برای این افراد بسیار مناسب است. در روش دی سی ای کالا مقرون
        به صرفه ترین حامل را یافته تا مصرف کننده هزینه ی ثابت و کمی بابت دریافت
        کالایش بپردازد.
      </ParagraphContent>
      <ParagraphContent style={{ mt: 5 }}>موارد قابل توجه :</ParagraphContent>
      <BoxContent>
        <Typography variant="body1" sx={{ opacity: ".9" }}>
          هزینه ارسال به روش اقتصادی مبلغ ثابت 25000 تومان برای سراسر ایران می
          باشد.
        </Typography>
        <Typography variant="body1" sx={{ opacity: ".9", mt: 2 }}>
          این روش صرفا برای کالاهای سبک قابل استفاده است و برای اجناسی نظیر جک و
          موتور پارکینگی، کرکره برقی و موتور کرکره، راهبند، درب و اپراتور شیشه
          ای و دیگر اجناس سنگین حذف خواهد شد.
        </Typography>
      </BoxContent>
      <Box
        component={"img"}
        src="https://dashboard.dcakala.com/public/img/cms/001a-koli/barbary.jpg"
        alt=""
        sx={{ mt: 1 }}
      />
      <SubTitle>ارسال با باربری (سراسر ایران)</SubTitle>
      <ParagraphContent style={ParagraphStyle}>
        باربری ها حامل هایی مطمئن هستند که در اکثر شهرهای ایران شعبه هایی دارند.
        ما این حامل را برای اجناس سنگین پیشنهاد می کنیم. اما حداقل اندازه جنسی
        که باربری ها می پذیرند ابعاد 30x30x20 می باشد. سفارش هایی که تا ساعت 15
        شنبه تا چهارشنبه ثبت گردند، همان روز به باربری تحویل می شوند( منوط بر
        این که آن جنس جزو کالا های ارسال سریع باشد) و سفارش های ثبت شده تا ساعت
        11 روز پنج شنبه نیز در همان روز تحویل باربری می گردند.
      </ParagraphContent>
      <ParagraphContent style={{ ...{ mt: 2 }, ...ParagraphStyle }}>
        هزینه ارسال باربری شامل دو بخش هزینه ارسال درون شهری و بین شهری می شود
        که این هزینه با توجه به مقصد متفاوت است. این هزینه پس کرایه شده و در
        مقصد از خریدار دریافت می گردد.
      </ParagraphContent>
      <SubTitle>تیپاکس (برای سراسر کشور)</SubTitle>
      <ParagraphContent style={ParagraphStyle}>
        تیپاکس و چاپار دو سرویس حمل سریع در کشور است که در ۵۵۰ شهر ایران دارای
        نمایندگی بوده و با توجه به ارسال مستقیم به اکثر این شهرها روشی سریع جهت
        ارسال مرسوله به حساب می‌آید. در روزهای کاری، چنانچه تا ساعت 14 ( پنج
        شنبه ها تا ساعت ۰۹:۰۰) سفارش خود را نهایی کنید، سفارش شما همان روز تحویل
        تیپاکس یا چاپار خواهد شد.
      </ParagraphContent>
      <ParagraphContent style={{ ...{ mt: 2 } , ...ParagraphStyle}}>
        کد پیگیری مرسوله در قسمت جزئیات سفارش در حساب کاربری شما درج می‌شود.
        همچنین کد پیگیری مرسوله از طریق پیامک نیز به دست شما خواهد رسید. با
        استفاده از کد پیگیری تیپاکس می‌توانید وضعیت مرسوله خود را از سامانه
        رهگیری تیپاکس و سامانه رهگیری چاپار پیگیری نمایید.
        <br />
        موارد قابل توجه:
      </ParagraphContent>
      <ParagraphContent>
        قبل انتخاب تیپاکس یا چاپار مطمئن شوید که شهر شما در فهرست شهرهای تحت
        پوشش این دو سرویس هستند.
        <br />
        <br />
        شهرهای تحت پوشش تیپاکس,شهرهای تحت پوشش چاپار هزینه ارسال با تیپاکس و
        چاپار به روش پس کرایه است که با توجه به مسافت متغیر می باشد.
      </ParagraphContent>
      <SubTitle>ارسال توسط پست پیشتاز (برای سراسر کشور)</SubTitle>
      <ParagraphContent style={ParagraphStyle}>
        سفارش های ثبت شده به روش پستی در روز کاری بعد تحویل مرکز پست خواهد شد.
        همچنین در هنگام ثبت سفارش می‌توانید زمان و ساعتی که سفارش شما تحویل شرکت
        پست می‌شود را مشاهده فرمایید.
        <br />
        <br />
        کد پیگیری مرسوله در قسمت جزئیات سفارش در حساب کاربری شما درج می‌شود.
        همچنین کد پیگیری مرسوله از طریق پیامک نیز به دست شما خواهد رسید. با
        استفاده از کد پیگیری پست پیشتاز می‌توانید وضعیت مرسوله خود را از سامانه
        رهگیری مرسولات پستی پیگیری نمایید.
      </ParagraphContent>
      <SubTitle>چگونگی پیگیری مرسولات</SubTitle>
      <ParagraphContent style={ParagraphStyle}>
        پس از ثبت سفارش مراحل مربوط به تکمیل و ارسال سفارش به صورت پیامکی ارسال
        و در حساب کاربری مشتری قابل مشاهده است. پس از تحویل جنس به حامل پیامک
        مربوط به نوع حامل و شماره پیگیری برای مشتری ارسال میگردد که پس از آن
        مشتری می تواند به سامانه پیگیری حامل ها وارد و پس از وارد کردن شماره
        پیگیره محل دقیق مرسوله خود را مشاهده کند.
      </ParagraphContent>
    </div>
  );
}
