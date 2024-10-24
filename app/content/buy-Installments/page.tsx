import BoxContent from "@/app/components/BoxContent";
import ParagraphContent from "@/app/components/ParagraphContent";
import TitleContent from "@/app/components/TitleContent";
import { Badge, Box, Button, Grid2 as Grid, Typography } from "@mui/material";
import BuyButton from "./BuyButton";

export default function BuyInstallmentsPage() {
  return (
    <div>
      <TitleContent style={{ color: "primary.dark", fontSize: "40px" }}>
        خرید اقساطی از دی سی ای کالا
      </TitleContent>
      <TitleContent style={{ mt: 2 }}>مزایای خرید اقساطی چیست ؟</TitleContent>
      <ParagraphContent style={{ lineHeight: 2.25, mt: 5 }}>
        در شرایط اقتصادی کنونی که هزینه های خرید کالا سرسام آور است می توان با
        ارائه راهکارهایی همانند خرید اقساطی، قدرت خرید را بالاتر برد. در واقع
        همانند این است که وام با بازپرداخت بلند مدت دریافت کرده اید و در این
        صورت به راحتی می توانید کالای مورد نیازتان را خریداری کرده و هزینه ها را
        طی مدت زمان مشخص و در چند ماه تا یک سال پرداخت کنید.
      </ParagraphContent>
      <ParagraphContent style={{ lineHeight: 2.25 }}>
        خرید اقساطی به شما کمک می کند خیلی زیرکانه تر هزینه های خود را کنترل
        کنید در واقع نوعی انعطاف پذیری مالی پیدا می کنید و نیازی نیست نقدا به
        صورت یک جا هزینه ی کالای مورد نظرتان را پرداخت کنید.
      </ParagraphContent>
      <ParagraphContent style={{ lineHeight: 2.25 }}>
        خرید اقساطی به شما امکان خرید آنی را می دهد به این صورت که در خریدهای
        ضروری و برنامه ریزی نشده نیازی به مدت ها از قبل پس انداز کردن نیست و می
        توانید در یک بازه زمانی مشخص هزینه های خود را مدیریت کنید.
      </ParagraphContent>
      <TitleContent style={{ mt: 2 }}>
        شرایط و مزایای خرید اقساطی از دی سی ای کالا
      </TitleContent>
      <ParagraphContent style={{ lineHeight: 2.25 }}>
        شما برای خرید اعتباری از DCAKALA نیاز دارید وارد لینک زیر در سایت لندو
        شوید و درخواست وام یا اعتبار برای خرید اقساطی بدهید.
      </ParagraphContent>
      <BoxContent
        style={{
          py: 1.5,
          display: "flex",
          justifyContent: "center",
          bgcolor: "white",
          borderRadius: 2,
        }}
      >
        <BuyButton />
      </BoxContent>
      <Grid container rowSpacing={2} sx={{ direction: "rtl", mt: 1 }}>
        <Grid size={{ xxs: 12, xs: 6 }}>
          <BoxContent
            style={{
              position: "relative",
              bgcolor: "white",
              borderRadius: 2,
              height: "300px",
            }}
          >
            <Box
              position={"absolute"}
              top={"-5%"}
              right={0}
              bgcolor={"primary.dark"}
              px={2}
              py={1}
              mr={1}
            >
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: "12px" }}
              >
                مزایای خرید اقساطی دی سی ای کالا
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: {
                  xxs: "14px",
                  xs: "16px",
                },
              }}
            >
              خرید اقساطی تا سقف 20 میلیون تومان
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                mt: 1,
                fontSize: {
                  xxs: "14px",
                  xs: "16px",
                },
              }}
            >
              بدون نیاز به چک و ضامن
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                mt: 1,
                fontSize: {
                  xxs: "14px",
                  xs: "16px",
                },
              }}
            >
              فرآیند انجام کار کاملا آنلاین
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                mt: 1,
                fontSize: {
                  xxs: "14px",
                  xs: "16px",
                },
              }}
            >
              عدم اخذ جریمه دیرکرد
            </Typography>
          </BoxContent>
        </Grid>
        <Grid size={{ xxs: 12, xs: 6 }}>
          <BoxContent
            style={{
              position: "relative",
              bgcolor: "white",
              borderRadius: 2,
              height: "300px",
            }}
          >
            <Box
              position={"absolute"}
              top={"-5%"}
              right={0}
              bgcolor={"primary.dark"}
              px={2}
              py={1}
              mr={1}
            >
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: "12px" }}
              >
                مدارک مورد نیاز برای دریافت وام یا اعتبار دی سی ای کالا
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: {
                  xxs: "14px",
                  xs: "16px",
                },
              }}
            >
              <span style={{ marginLeft: "3px" }}>۱.</span>
              خرید اقساطی تا سقف 20 میلیون تومان
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                mt: 1,
                fontSize: {
                  xxs: "14px",
                  xs: "16px",
                },
              }}
            >
              <span style={{ marginLeft: "3px" }}>۲.</span>
              بدون نیاز به چک و ضامن
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                mt: 1,
                fontSize: {
                  xxs: "14px",
                  xs: "16px",
                },
              }}
            >
              <span style={{ marginLeft: "3px" }}>۳.</span>
              فرآیند انجام کار کاملا آنلاین
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                mt: 1,
                fontSize: {
                  xxs: "14px",
                  xs: "16px",
                },
              }}
            >
              <span style={{ marginLeft: "3px" }}>۴.</span>
              عدم اخذ جریمه دیرکرد
            </Typography>
          </BoxContent>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        sx={{
          direction: "rtl",
          mt: 1,
          mb: 2,
          position: "relative",
        }}
      >
        <Grid size={{ xxs: 12, xs: 6 }}>
          <BoxContent
            style={{
              position: "relative",
              bgcolor: "white",
              borderRadius: 2,
              height: "300px",
            }}
          >
            <Box
              position={"absolute"}
              top={"-5%"}
              right={0}
              bgcolor={"primary.dark"}
              px={2}
              py={1}
              mr={1}
              zIndex={100}
            >
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: "12px" }}
              >
                مراحل خرید اقساطی یا دریافت اعتبار
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۱.</span>
                مشخص کردن مبلغ درخواستی یا اعتبار برای خرید اقساطی و ضمانت
                (سفته){" "}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  mt: 1,
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۲.</span>
                مشخص کردن تعداد اقساط بین بازپرداخت 12 ماهه، بازپرداخت 9 ماهه و
                بازپرداخت 6 ماهه{" "}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  mt: 1,
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۳.</span>
                آپلود مدارک لازم برای اعتبار سنجی آنلاین را در سایت لندو{" "}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  mt: 1,
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۴.</span>
                دریافت اعتبار (کد) از سایت لندو{" "}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  mt: 1,
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۵.</span>
                خرید از فروشگاه دی سی ای کالا{" "}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  mt: 1,
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۶.</span>
                پرداخت اقساط به صورت ماهانه در سایت لندو{" "}
              </Typography>
            </Box>
          </BoxContent>
        </Grid>
        <Grid size={{ xxs: 12, xs: 6 }}>
          <BoxContent
            style={{
              position: "relative",
              bgcolor: "white",
              borderRadius: 2,
              height: "300px",
            }}
          >
            <Box
              position={"absolute"}
              top={"-5%"}
              right={0}
              bgcolor={"primary.dark"}
              px={2}
              py={1}
              mr={1}
              zIndex={100}
            >
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: "12px" }}
              >
                پرداخت اقساط
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۱.</span>
                بازپرداخت به صورت 6 ماهه، 9 ماهه یا 12 ماهه{" "}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  mt: 1,
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۲.</span>
                پرداخت به صورت آنلاین از طریق سایت لندو{" "}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  mt: 1,
                  fontSize: {
                    xxs: "14px",
                    xs: "16px",
                  },
                }}
              >
                <span style={{ marginLeft: "3px" }}>۳.</span>
                بدون دریافت جریمه دیرکرد{" "}
              </Typography>
            </Box>
          </BoxContent>
        </Grid>
        <BoxContent
          style={{
            position: "absolute",
            top: {
              xxs: "0",
              xs: "7%",
            },
            width: "calc(100% - 31px)",
            bgcolor: "transparent",
            minHeight: {
              xxs: "770px",
              xs: "430px",
              md: "410px",
              lg: "387px",
            },
            display: "flex",
            alignItems: "flex-end",
            pt: 2,
          }}
        >
          <Box width={"100%"}>
            <ParagraphContent
              style={{
                mb: 1,
                px: 0,
                textAlign: {
                  xxs: "center",
                  xs: "right",
                },
              }}
            >
              توجه داشته باشید برای انجام این مراحل باید در سایت لندو عضویت
              داشته باشید یا اگر کاربر جدید هستید ثبت نام کنید!
            </ParagraphContent>
            <Box display={"flex"} justifyContent={"center"}>
              <BuyButton />
            </Box>
          </Box>
        </BoxContent>
      </Grid>
    </div>
  );
}
