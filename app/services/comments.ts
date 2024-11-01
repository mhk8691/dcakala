interface Comments {
  user: {
    name: string;
    image?: string;
  };
  comment: string;
  date: string;
  likes: number;
  dislikes: number;
}
export const comments: Comments[] = [
  {
    user: {
      name: "کاربر دی سی ای",
    },
    comment: `مرسی از موجود کردن نسخه به روز شده آیفون 1040 تابا
من این مدل رو دو روزه دارم استفاده می کنم و وضوح تصویر خیلی بالایی داره`,
    date: "4 هفته پیش",
    likes: 0,
    dislikes: 0,
  },
];
