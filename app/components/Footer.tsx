"use client";
import { Box, Button, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
type FooterLink = {
  title: string;
  urlList: { urlTitle: string; url: string }[];
};
const footerLinks: FooterLink[] = [
  {
    title: "خدمات مشتریان",
    urlList: [
      {
        urlTitle: "قوانین و مقررات",
        url: "/content/terms-and-conditions-of-use",
      },
      {
        urlTitle: "ضمانت خرید",
        url: "/content/guaranty",
      },
      {
        urlTitle: "روش های ارسال",
        url: "/content/shipping-ways",
      },
      {
        urlTitle: "حریم خصوصی",
        url: "/content/Privacy-Policy",
      },
    ],
  },
  {
    title: "دی سی ای کالا",
    urlList: [
      {
        urlTitle: "آموزش خرید و پرداخت",
        url: "/content/shopping-guide-and-payment",
      },
      {
        urlTitle: "درباره ما",
        url: "/content/about-us",
      },
      {
        urlTitle: "تماس با ما",
        url: "/content/contact-us",
      },
    ],
  },
  {
    title: "آخرین دسته بندی ها",
    urlList: [
      {
        urlTitle: "دزدگیر ارزان",
        url: "/alarm-systems/affordable-burglar-alarm",
      },
      {
        urlTitle: "پکیج مناسب داروخانه",
        url: "/store-alarm-system/package/drug-store",
      },
      {
        urlTitle: "دوربین بیسیم داهوا",
        url: "/cctv/wireless/dahua",
      },
      {
        urlTitle: "پکیج مناسب فروشگاه عینک فروشی",
        url: "/store-alarm-system/package/optometry-store",
      },
      {
        urlTitle: "پکیج مناسب فروشگاه موبایل و تبلت",
        url: "/store-alarm-system/package/mobile-store",
      },
    ],
  },
];
export default function Footer() {
  const pathName = usePathname();
  const noNavbarPages = ["/login", "/cart"];
  if (noNavbarPages.includes(pathName)) {
    return null;
  }
  return (
    <Box mt={2}>
      <Grid
        container
        sx={{
          bgcolor: {
            xxs: "",
            sm: "#E7E7E7",
          },
          px: {
            xxs: 0,
            sm: 5,
          },
          py: {
            xxs:0,
            sm:2
          },
          display: "flex",
          direction: {
            xxs: "rtl",
            sm: "ltr",
          },
        }}
        spacing={{
          xxs:.5,
          sm:0,
          xll:3
        }}
      >
        <Grid
          size={{ xxs: 12, sm: 6, xll: 3 }}
          sx={{
            display: "flex",
            justifyContent: {
              xxs: "start",
              sm: "center",
            },
            order: { xxs: 3, sm: 2, xll: 0 },
            bgcolor:{
              xxs:'#E7E7E7',
              sm:''
            },
            py:1,
            px:{
              xxs:2,
            }
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box
              component="img"
              src="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_original.webp"
              alt=""
              sx={{
                width: "45px",
                height: "45px",
              }}
            />
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: "16px",
                  color: "#72777A",
                  fontWeight: "bold",
                  mx: { xxs: 2, sm: 0 },
                }}
              >
                پشتیبانی حین و بعد از فروش
              </Typography>
              <Typography
                variant="body2"
                color="initial"
                sx={{
                  fontSize: "12px",
                  color: "#BABCBD",
                  mx: { xxs: 2, sm: 0 },
                }}
              >
                تیم مسلط فروش و تیم پشتیبانی فنی
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid
          size={{ xxs: 12, sm: 6, xll: 3 }}
          sx={{
            display: "flex",
            justifyContent: {
              xxs: "start",
              sm: "center",
            },
            order: { xxs: 2, sm: 3, xll: 1 },
            bgcolor:{
              xxs:'#E7E7E7',
              sm:''
            },
            py:1,
            px:{
              xxs:2,
            }
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box
              component="img"
              src="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_original.webp"
              alt=""
              sx={{
                width: "45px",
                height: "45px",
              }}
            />
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: "16px",
                  color: "#72777A",
                  fontWeight: "bold",
                  mx: { xxs: 2, sm: 0 },
                }}
              >
                تضمین بازگشت وجه
              </Typography>
              <Typography
                variant="body2"
                color="initial"
                sx={{
                  fontSize: "12px",
                  color: "#BABCBD",
                  mx: { xxs: 2, sm: 0 },
                }}
              >
                بازگشت 7 روزه در صو.رت مغایرت کالا
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid
          size={{ xxs: 12, sm: 6, xll: 3 }}
          sx={{
            display: "flex",
            justifyContent: {
              xxs: "start",
              sm: "center",
            },
            order: { xxs: 1, sm: 0, xll: 2 },
            bgcolor:{
              xxs:'#E7E7E7',
              sm:''
            },
            py:1,
            px:{
              xxs:2,
            }
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box
              component="img"
              src="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_original.webp"
              alt=""
              sx={{
                width: "45px",
                height: "35px",
              }}
            />
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: "16px",
                  color: "#72777A",
                  fontWeight: "bold",
                  mx: { xxs: 2, sm: 0 },
                }}
              >
                تنوع در روش های پرداخت
              </Typography>
              <Typography
                variant="body2"
                color="initial"
                sx={{
                  fontSize: "12px",
                  color: "#BABCBD",
                  mx: { xxs: 2, sm: 0 },
                }}
              >
                پرداخت آنلاین، کارت به کارت و یا در محل
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid
          size={{ xxs: 12, sm: 6, xll: 3 }}
          sx={{
            display: "flex",
            justifyContent: {
              xxs: "start",
              sm: "center",
            },
            order: { xxs: 0, sm: 1, xll: 3 },
            bgcolor:{
              xxs:'#E7E7E7',
              sm:''
            },
            py:1,
            px:{
              xxs:2,
            }
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box
              component="img"
              src="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_original.webp"
              alt=""
              sx={{
                width: "45px",
                height: "35px",
              }}
            />
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  fontSize: "16px",
                  color: "#72777A",
                  fontWeight: "bold",
                  mx: { xxs: 2, sm: 0 },
                }}
              >
                ارسال سریع به سراسر ایران
              </Typography>
              <Typography
                variant="body2"
                color="initial"
                sx={{
                  fontSize: "12px",
                  color: "#BABCBD",
                  mx: { xxs: 2, sm: 0 },
                }}
              >
                اکسپرس، پست، تیپاکس و باربری
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          bgcolor: "#72777A",
          display: "flex",
          flexDirection: {
            xxs: "column-reverse",
            sm: "row",
          },
          py: 2,
          px: 1,
        }}
      >
        <Grid
          container
          size={{ xxs: 12, sm: 3 }}
          spacing={1}
          offset={{ xxs: 3, sm: 0 }}
          sx={{ mt: { xxs: 2, sm: 0 } }}
        >
          <Grid size={{ xxs: 3, sm: 6 }} sx={{ height: "150px" }}>
            <Box
              component={"img"}
              src="https://dashboard.dcakala.com/public/img/cms-new/trust/2024/09/enamad-new.png"
              alt=""
              maxWidth={"100%"}
              height={"100%"}
              sx={{
                width: {
                  xxs: "150px",
                },
              }}
            />
          </Grid>
          <Grid size={{ xxs: 3, sm: 6 }} sx={{ height: "150px" }}>
            <Box
              component={"img"}
              src="https://dashboard.dcakala.com/public/img/cms-new/trust/2024/09/samandehi-new-1.webp"
              alt=""
              maxWidth={"100%"}
              height={"100%"}
              sx={{
                width: {
                  xxs: "150px",
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          size={{ xxs: 12, sm: 9 }}
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ direction: "rtl" }}
          px={3}
          rowSpacing={{ xxs: 2, sm: 0 }}
        >
          {footerLinks.map((item, index) => (
            <Grid size={{ xxs: 6, sm: 4 }} key={index}>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", color: "#fff", fontWeight: "bold" }}
              >
                {item.title}
              </Typography>
              <Stack component={"ul"} spacing={1} mt={1}>
                {item.urlList.map((urlItem, index2) => (
                  <Typography
                    variant="body1"
                    component={"li"}
                    key={index2}
                    sx={{
                      listStyleType: "circle",
                      fontSize: {
                        xxs: "14px",
                        xxl: "16px",
                      },
                      color: "white",
                    }}
                  >
                    <Link href={urlItem.url}>{urlItem.urlTitle}</Link>
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={{ xxs: 1, sm: 0 }}
        sx={{
          bgcolor: "primary.dark",
          p: 2,
          display: "flex",
          justifyContent: {
            xxs: "center",
            sm: "space-between",
          },
          flexDirection: {
            xxs: "column-reverse",
            sm: "row",
          },
        }}
      >
        <Grid size={{ xxs: 12, sm: 6 }}>
          <Stack
            direction={"row"}
            spacing={1.5}
            alignItems={"center"}
            sx={{ justifyContent: { xxs: "center", sm: "start" } }}
          >
            <InstagramIcon
              sx={{ width: "35px", height: "35px", color: "white" }}
            />
            <YouTubeIcon
              sx={{ width: "35px", height: "35px", color: "white" }}
            />
            <LinkedInIcon
              sx={{ width: "35px", height: "35px", color: "white" }}
            />
            <Box
              component="img"
              src="https://dashboard.dcakala.com/public/images/social/2024/10/Facebook-Icon-ns_original.webp"
              alt=""
              sx={{ width: "35px", height: "35px" }}
            />
            <XIcon sx={{ width: "30px", height: "30px", color: "white" }} />
          </Stack>
        </Grid>
        <Grid size={{ xxs: 12, sm: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xxs: "center",
                sm: "end",
              },
            }}
          >
            <Button
              variant="contained"
              color="inherit"
              sx={{
                width: "50%",
                borderRadius: 5,
                bgcolor: "white",
                py: { xxs: 1, sm: 0.7 },
              }}
            >
              پرداخت سریع
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ bgcolor: "#A1A3A8", display: "flex" }}
        py={3}
        px={2}
        spacing={{ xxs: 2, sm: 0 }}
      >
        <Grid
          size={{ xxs: 6, sm: 4 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            order: {
              xxs: 3,
              sm: 0,
            },
          }}
        >
          <Box>
            <Box
              component={"img"}
              src="https://dashboard.dcakala.com/public/images/setting/dcakala-logo-new-ns/2024/09/dcakala-logo-new-ns_2x.webp"
              alt=""
              maxWidth={"156px"}
            />
          </Box>
        </Grid>
        <Grid size={{ xxs: 6, sm: 4 }} sx={{ order: { xxs: 0, sm: 1 } }}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Stack flexDirection={"row"} alignItems={"center"} ml={2}>
              <CallIcon sx={{ color: "white" }} />
              <Typography variant="h6" color="white" sx={{ fontSize: "24px" }}>
                ۰۲۱۱۷۲۱۹۵
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color="white"
              sx={{
                fontSize: {
                  xxs: "12px",
                  sm: "14px",
                },
                whiteSpace: "pre-wrap",
                textAlign: "center",
                lineHeight: "2",
                mt: 5,
              }}
            >
              {`اگر سوالی دارید با ما تماس بگیرید
ساعت کاری ما: شنبه تا چهارشنبه 9 الی 18 پنج شنبه 9 الی 14
021-77132831-32 / 021-72195
مدیریت سایت : مسلم زمانی`}
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ xxs: 6, sm: 4 }}
          sx={{
            order: {
              sm: 3,
            },
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"end"}
            sx={{
              justifyContent: {
                xxs: "center",
                sm: "start",
              },
            }}
          >
            <Box
              component={Link}
              href={"/content/contact-us"}
              bgcolor={"red"}
              display={"flex"}
              justifyContent={"end"}
            >
              <Box
                component={"img"}
                src="https://dashboard.dcakala.com/public/img/cms-new/google-map/2024/09/googlemap-dcakala.webp"
                alt=""
                width={"100%"}
              />
            </Box>
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: {
                  xxs: "100%",
                  md: "70%",
                },
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ direction: "rtl" }}
              >
                <PlaceIcon sx={{ color: "white" }} />
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ fontSize: "14px" }}
                >
                  آدرس:
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                color="white"
                sx={{ fontSize: "12px", textAlign: "center", mt: 0.5 }}
              >
                تهران,نارمک,ضلع جنوبی میدان 47 ,پلاک 8
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Stack
        bgcolor={"#72777A"}
        py={2}
        direction={"row"}
        justifyContent={"center"}
      >
        <Typography variant="body2" sx={{ color: "white", fontSize: "12px" }}>
          کلیه حقوق این سایت متعلق به دی سی ای کالا می باشد
        </Typography>
      </Stack>
    </Box>
  );
}
