import { useId } from "react";

export interface FilterList {
  title: string;
  items: {
    id: number;
    title: string;
  }[];
}
export const filterList: FilterList[] = [
  {
    title: "برند سازنده",
    items: [
      {
        id: 1,
        title: "تابا taba",
      },
    ],
  },
  {
    title: "اندازه صفحه نمایش",
    items: [
      {
        id: 2,
        title: "۲.۴ اینچ",
      },
      {
        id: 3,
        title: "۳.۵ اینچ",
      },
      {
        id: 4,
        title: "۴ اینچ",
      },
      {
        id: 5,
        title: "۴.۳ اینچ",
      },
      {
        id: 6,
        title: "۷ اینچ",
      },
      {
        id: 7,
        title: "۱۰ اینچ",
      },
      {
        id: 8,
        title: "۵.۶ اینچ",
      },
    ],
  },
  {
    title: "نوع صفحه نمایش",
    items: [
      {
        id: 9,
        title: "ساده",
      },
      {
        id: 10,
        title: "لمسی",
      },
    ],
  },
  {
    title: "نوع صفحه کلید",
    items: [
      {
        id: 11,
        title: "ساده (کلید مکانیکی)",
      },
      {
        id: 12,
        title: "کلید لمسی",
      },
    ],
  },
  {
    title: "حافظه",
    items: [
      {
        id: 13,
        title: "ندارد",
      },
      {
        id: 14,
        title: "دارد - حافظه داخلی و پشتیبانی از کارت حافظه",
      },
      {
        id: 15,
        title: "دارد - حافظه داخلی",
      },
    ],
  },
  {
    title: "قابلیت اتصال به دو پنل",
    items: [
      {
        id: 16,
        title: "دارد",
      },
      {
        id: 17,
        title: "ندارد",
      },
    ],
  },
  {
    title: "ارتباط داخلی بین واحدها",
    items: [
      {
        id: 18,
        title: "دارد",
      },
      {
        id: 19,
        title: "ندارد",
      },
    ],
  },
  {
    title: "قابلیت باز کردن درب پارکینگ",
    items: [
      {
        id: 20,
        title: "دارد",
      },
      {
        id: 21,
        title: "ندارد",
      },
    ],
  },
  {
    title: "قابلیت اتصال به وای فای و انتقال تصویر روی موبایل",
    items: [
      {
        id: 22,
        title: "ندارد",
      },
      {
        id: 23,
        title: "با قطعه وای فای باکس",
      },
    ],
  },
  {
    title: "نوع محصول",
    items: [
      {
        id: 24,
        title: "پنل ساده",
      },
      {
        id: 25,
        title: "پنل کارتخوان",
      },
      {
        id: 26,
        title: "مانیتور",
      },
      {
        id: 27,
        title: "پنل کدینگ",
      },
      {
        id: 28,
        title: "ترانس",
      },
    ],
  },
  {
    title: "تعداد واحد پنل",
    items: [
      {
        id: 29,
        title: "۱ واحد",
      },
      {
        id: 30,
        title: "۲ واحد",
      },
      {
        id: 31,
        title: "۳ واحد",
      },
      {
        id: 32,
        title: "۴ واحد",
      },
      {
        id: 33,
        title: "۵ واحد",
      },
      {
        id: 34,
        title: "۱۰ واحد",
      },
      {
        id: 35,
        title: "۱۱ واحد",
      },
      {
        id: 36,
        title: "۱۲ واحد",
      },
      {
        id: 37,
        title: "۱ تا ۱۲ واحد",
      },
      {
        id: 38,
        title: "۱ تا ۱۶ واحد",
      },
      {
        id: 39,
        title: "۱ تا ۲۴ واحد",
      },
    ],
  },
  {
    title: "قابلیت کارت خوان",
    items: [
      {
        id: 40,
        title: "دارد",
      },
      {
        id: 41,
        title: "ندارد",
      },
    ],
  },
];
