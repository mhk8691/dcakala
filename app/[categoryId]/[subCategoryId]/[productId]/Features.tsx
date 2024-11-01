import { Box, Button, Divider, Typography } from "@mui/material";
import { AllFeatures } from "../../../services/productDetail";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface Props {
  features: string[];
  AllFeatures: AllFeatures[];
}
export default function Features({ features, AllFeatures }: Props) {
  return (
    <Box px={1}>
      <Box
        component={"ul"}
        height={"180px"}
        overflow={"auto"}
        px={1}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.47em",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#F1F1F1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#808080",
            borderRadius: "1rem",
          },
        }}
      >
        {features.map((item, index) => (
          <Typography
            component={"li"}
            variant="body2"
            key={index}
            sx={{
              opacity: ".9",
              fontSize: "13px",
              my: 1,
              listStyleType: {
                xxs: "none",
                sm: "circle",
              },
              listStylePosition: "inside",
              "&::marker": {
                color: "primary.dark",
                fontSize: "20px",
                m: 0,
                p: 0,
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
      <Divider sx={{ position: "relative", mt: 10 }}>
        <Button
          variant="outlined"
          color="inherit"
          size="small"
          sx={{
            py: 1,
            borderRadius: 0,
            borderColor: "#E0E0E2",
            position: "absolute",
            top: "-1.5rem",
            bgcolor: "white",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "13px", opacity: ".9" }}>
            مشاهده همه ویژگی ها
          </Typography>
          <KeyboardArrowLeftIcon sx={{}} />
        </Button>
      </Divider>
    </Box>
  );
}
