import ImageContent from "@/app/components/ImgaeContent";
import TitleContent from "@/app/components/TitleContent";
import { Box, Container } from "@mui/material";
import { dataProtection } from "./dataProtection";
import Table from "./Table";
import SubTitle from "@/app/components/SubTitle";
import { dataContactUs } from "./dataContactUs";
import Map from "./Map";

export default function ContactUsPage() {
  return (
    <Container maxWidth={"xxl"} sx={{ direction: "rtl", mt: 5 }}>
      <ImageContent
        src="https://www.lighthome.ir/img/cms/contact%20us.png"
        key={1}
      />
      <ImageContent
        src="https://dashboard.dcakala.com/public/img/cms/call-dcakala.jpg"
        key={1}
        style={{ borderRadius: 4, width: "100%" }}
      />
      <Box
        sx={{
          borderRadius: 6,
          boxShadow: "0 0 20px rgba(184, 224, 239, 1)",
          mt: 2,
          border: 2,
          borderColor: "#52AFC2",
        }}
      >
        <TitleContent
          style={{
            textAlign: "right",
            mt: 0,
            fontSize: "24px",
            p: 2,
            fontWeight: "normal",
          }}
        >
          - بخش تجهیزات حفاظتی و نظارتی (آیفون تصویری، جک، دوربین مداربسته و
          ...)
        </TitleContent>
        <Box component={"hr"} sx={{ border: "1px solid #52AFC2", mx: 2 }} />
        <Table data={dataProtection} />
      </Box>
      <Box
        sx={{
          borderRadius: 6,
          boxShadow: "0 0 20px rgba(184, 224, 239, 1)",
          mt: 2,
          border: 2,
          borderColor: "#52AFC2",
        }}
      >
        <TitleContent
          style={{
            textAlign: "right",
            mt: 0,
            fontSize: "24px",
            p: 2,
            fontWeight: "normal",
          }}
        >
          ارتباط با ما
        </TitleContent>
        <Box component={"hr"} sx={{ border: "1px solid #52AFC2", mx: 2 }} />
        <SubTitle style={{ fontSize: "16px", color: "black" }}>
          ساعات کار فروشگاه اینترنتی دی سی ای کالا شنبه تا چهارشنبه، 9 الی 18 -
          پنجشنبه 9 الی 15 میباشد
        </SubTitle>
        <Table data={dataContactUs} />
      </Box>
      <Map />
    </Container>
  );
}
