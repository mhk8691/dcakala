export interface AllFeatures {
  title: string;
  description: string;
}
export interface ProductDetail {
  title: string;
  price: number;
  imagesPath: string[];
  description?: string;
  features: string[];
  allFeatures: AllFeatures[];
  brand: {
    name: string;
    logo: string;
  };
  color: {
    name: string;
    color: string;
  }[];
  shipping: string;
  guarantee: string;
  video: {
    videoPath: string;
    poster: string;
  };
}
const data: ProductDetail = {
  title: "آیفون تصویری نماوا 4.3 اینچ بدون حافظه A42",
  price: 1812000,
  imagesPath: [
    "https://dashboard.dcakala.com/public/images/product/a42/2024/09/namava-video-door-phone-a42-new_large.webp",
    "https://dashboard.dcakala.com/public/images/product/a42/2024/08/namava-video-door-phone-a42-front_large.webp",
    "https://dashboard.dcakala.com/public/images/product/a42/2024/08/namava-video-door-phone-a42-phone_large.webp",
    "https://dashboard.dcakala.com/public/images/product/a42/2024/08/namava-video-door-phone-a42-side_large.webp",
    "https://dashboard.dcakala.com/public/images/product/a42/2024/08/namava-video-door-phone-a42-back_large.webp",
    "https://dashboard.dcakala.com/public/images/product/a42/2024/08/namava-video-door-phone-a42-guarantee_large.webp",
  ],
  description: "مانیتور دربازکن تصویری نماوا A42",
  features: [
    "صفحه نمایش رنگی 4.3 اینچ LED",
    "با امکان اتصال به دو پنل (یا یک دوربین مداربسته)",
    "امکان اتصال به جک پارکینگی، کرکره و یا فراخوانی آسانسور",
    "دارای سوییچر هوشمند داخلی",
    "سازگار با پنل های سیماران، تابا، الکتروپیک، تکنما، سوزوکی، کوماکس و...",
    "دارای گارانتی سه ساله",
  ],
  allFeatures: [
    {
      title: "برند سازنده",
      description: "نماوا",
    },
    {
      title: "کشور سازنده",
      description: "ایران",
    },
    {
      title: "جنس بدنه",
      description: "پلاستیک",
    },
    {
      title: "وزن محصول",
      description: "کمتر از 1 کیلوگرم",
    },
    {
      title: "گارانتی",
      description: "3 ساله",
    },
    {
      title: "اندازه صفحه نمایش",
      description: "4.3 اینچ",
    },
    {
      title: "نوع صفحه نمایش",
      description: "ساده",
    },
    {
      title: "تکنولوژی ساخت صفحه نمایش",
      description: "TFT-LCD",
    },
    {
      title: "نوع صفحه کلید",
      description: "ساده (کلید مکانیکی)",
    },
    {
      title: "حافظه",
      description: "ندارد",
    },
    {
      title: "قابلیت اتصال به دو پنل",
      description: "دارد",
    },
    {
      title: "قابلیت اتصال به دوربین مدار بسته",
      description: "دارد - یک دوربین",
    },
    {
      title: "ضبط تصویر با تشخیص حرکت",
      description: "ندارد",
    },
    {
      title: "ارتباط داخلی بین واحدها",
      description: "ندارد",
    },
    {
      title: "ارتباط داخلی با نگهبانی",
      description: "ندارد",
    },
    {
      title: "قابلیت باز کردن درب پارکینگ",
      description: "ندارد",
    },
    {
      title: "فراخوان آسانسور",
      description: "دارد",
    },
    {
      title: "قابلیت اتصال به وای فای و انتقال تصویر روی موبایل",
      description: "دارد",
    },
    {
      title: "رابط کاربری",
      description: "دارد - ساده",
    },
    {
      title: "نوع محصول",
      description: "مانیتور",
    },
    {
      title: "تکنولوژی کارکرد",
      description: "آنالوگ",
    },
  ],
  brand: {
    name: "نماوا-Namava",
    logo: "https://dashboard.dcakala.com/public/images/brand/2023/11/Namava_samll.webp",
  },
  color: [
    {
      name: "سفید",
      color: "white",
    },
    {
      name: "سفید",
      color: "white",
    },
  ],
  shipping: "ارسال از 1 روز کاری دیگر",
  guarantee: "3 سال",
  video: {
    videoPath:
      ' "https://upload.vidbeen.ir/videos/video-door-phone/taba/taba-1040m.mp4"',
    poster:
      "https://vidbeen.ir/public/images/poster/2024/03/taba-1040-video-cover-2.jpg",
  },
};
export default data;
