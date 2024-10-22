import { Box } from "@mui/material";
type Image = string[];
const data: Image = [
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/aldo-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/calluse-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/camax-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/commax-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/dahua-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/electropeyk-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/ferbico-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/fermax-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/ff-technology-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/hyundadi-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/kivos-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/kocom-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/multitek-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/namava-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/panasonic-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/phonix-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/samsung-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/simaran-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/suzuki-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/taban-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/taknama-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/tamer-logo.jpg",
  "https://dashboard.dcakala.com/public/img/img-si/banner/logo/videx-logo.jpg",
];

export default function Slider() {
  return (
    <Box display={"flex"} mt={7} overflow={"scroll"} width={"100%"} px={2}>
      {data.map((item, index) => (
        <Box border={1} borderColor={"#CCCCCC"} borderRadius={2} mx={1} px={1}>
          <Box
            key={index}
            component={"img"}
            src={item}
            alt=""
            sx={{ width: "170px", height: "85px", borderRadius: 2 }}
          />
        </Box>
      ))}
    </Box>
  );
}
