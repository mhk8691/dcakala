import { link } from "fs";

interface Link {
  title: string;
  link: {
    name: string;
    link: string;
    subLinks?: {
      name: string;
      link: string;
      subSublink?: {
        name: string;
        link: string;
      }[];
    }[];
  }[];
}

export const links: Link[] = [
  {
    title: "برندها",
    link: [
      {
        name: "الکتروپیک - Electropeyk",
        link: "/brand/electropeyk-m3",
      },
      {
        name: "کوماکس - Commax",
        link: "/brand/commax-m4",
      },
      {
        name: "سامسونگ - Samsung",
        link: "/brand/samsung-m5",
      },
      {
        name: "سونی - Sony",
        link: "/brand/sony-m6",
      },
      {
        name: "بتا - Beta",
        link: "/brand/beta-m7",
      },
      {
        name: "تابا الکترونیک - Taba Electronic",
        link: "/brand/tabaelectronic-m8",
      },
      {
        name: "اف اف تکنولوژی - FF Technology",
        link: "/brand/fftechnology-m9",
      },
      {
        name: "سیماران - Simaran",
        link: "/brand/simaran-m10",
      },
      {
        name: "تکنما - Taknama",
        link: "/brand/taknama-m11",
      },
      {
        name: "های اسمارت - Hi Smart",
        link: "/brand/hismart-m12",
      },
    ],
  },
  {
    title: "شاخه ها",
    link: [
      {
        name: "دوربین مدار بسته",
        link: "/cctv",
        subLinks: [
          {
            name: "دوربین مداربسته بی سیم",
            link: "/cctv/wireless",
            subSublink: [
              {
                name: "دوربین بی سیم با تضمین انتقال تصویر",
                link: "/cctv/wireless/guaranteed-image-transfer",
              },
              {
                name: "دوربین مداربسته وایرلس شیائومی",
                link: "/cctv/wireless/xiaomi",
              },
            ],
          },
          {
            name: "دوربین مداربسته داهوا",
            link: "/cctv/dahua-hdcvi",
            subSublink: [
              {
                name: "پکیج دوربین مداربسته داهوا",
                link: "/cctv/dahua-hdcvi/dahua-package",
              },
              {
                name: "داهوا سری کوپر (اقتصادی)",
                link: "/cctv/dahua-hdcvi/dahua-cooper-series",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "صفحه ها",
    link: [
      {
        name: "آموزش خرید و پرداخت",
        link: "/content/shopping-guide-and-payment",
      },
      {
        name: "ارسال سریع به سراسر ایران",
        link: "/content/shipping-ways-info",
      },
      {
        name: "درباره ما",
        link: "/content/about-us",
      },
      {
        name: "تنوع در روش های پرداخت",
        link: "/content/pay-information",
      },
      {
        name: "قوانین و مقررات",
        link: "/content/terms-and-conditions-of-use",
      },
    ],
  },
];
