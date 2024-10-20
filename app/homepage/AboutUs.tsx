import { Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box sx={{ direction: "rtl", bgcolor: "#F7F7F7", px: 2, py: 4,mt:7 }}>
      <Typography variant="body1" color="initial" sx={{ fontSize: "24px" }}>
        فروشگاه دی سی ای کالا
      </Typography>
      <Typography variant="body2" color="initial" sx={{opacity: ".8",mt:1.5,fontSize:'16px'}}>
        دی سی ای کالا اولین و بزرگترین فروشگاه اینترنتی و حضوری سیستم های حفاظتی
        و نظارتی در ایران است که در سال 1392 کار خود را آغاز کرد. در این فروشگاه
        محصولاتی از گروه دوربین مدار بسته، آیفون تصویری، جک درب پارکینگ، انواع
        قفل برقی و آرام بند، کرکره برقی، راهبند و درب شیشه ای و انواع سیستم های
        حضور و غیاب و کنترل تردد قرار داده شده تا کاربر با توجه به ویژگی ها و
        بررسی های تخصصی قرار داده در سایت آنها را انتخاب و خریداری نماید.
      </Typography>
    </Box>
  );
}
