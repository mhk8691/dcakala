import { Box, Divider, Stack, Tooltip, Typography } from "@mui/material";
import { ProductDetail } from "../../../services/productDetail";
import MopedIcon from "@mui/icons-material/Moped";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
interface Props {
  item: ProductDetail;
}
export default function Detail({ item }: Props) {
  return (
    <Box>
      <Box>
        <Typography variant="body2" color="initial">
          برند سازنده:
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgcolor={"white"}
          px={1}
          py={0.7}
          borderRadius={1}
          mt={1}
        >
          <Typography variant="body2" color="initial" sx={{ fontSize: "12px" }}>
            {item.brand.name}
          </Typography>
          <Box
            component={"img"}
            src={item.brand.logo}
            alt="image"
            sx={{
              maxWidth: "35px",
              maxHeight: "35px",
              minWidth: "31px",
              minHeight: "31px",
            }}
          />
        </Stack>
      </Box>
      <Box mt={2}>
        <Typography
          variant="body2"
          color="initial"
          sx={{ fontSize: "14px", color: "#20203C" }}
        >
          رنگ:{" "}
          {item.color.map((item2, index) => (
            <Typography component={"span"} variant="body2" color="initial" key={index}>
              {item2.name}
              {index !== item.color.length - 1 && ", "}
            </Typography>
          ))}
        </Typography>
        <Stack direction={"row"} gap={2} mt={1}>
          {item.color.map((item, index) => (
            <Tooltip title={item.name} arrow key={index}>
              <Box
                sx={{
                  width: "28px",
                  height: "28px",
                  bgcolor: item.color,
                  border: "1px solid #FF7900",
                  borderRadius: 1.5,
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          ))}
        </Stack>
      </Box>
      <Box mt={2}>
        <Divider />
        <Stack
          sx={{
            flexDirection: {
              xxs: "row",
              sm: "column",
            },
            alignItems: {
              xxs: "center",
              sm: "flex-start",
            },
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              my: 0.2,
              flexGrow: 1,
            }}
          >
            <MopedIcon sx={{ color: "#6D7083" }} />
            <Typography
              variant="body2"
              color="initial"
              sx={{ fontSize: { xxs: "10px", xl: "12px" }, opacity: ".9" }}
            >
              {item.shipping}
            </Typography>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              my: 0.2,
              flexGrow: 2,
            }}
          >
            <WorkspacePremiumIcon sx={{ color: "#6D7083" }} />
            <Typography
              variant="body2"
              color="initial"
              sx={{ fontSize: { xxs: "10px", xl: "12px" }, opacity: ".9" }}
            >
              گارانتی {item.guarantee}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
      </Box>
    </Box>
  );
}
