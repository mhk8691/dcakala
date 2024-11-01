import { Box, Stack, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
export default function ServiceHighlights() {
  return (
    <Box
      sx={{
        borderTop: "1px solid #E5E5E5",
        borderBottom: "1px solid #E5E5E5",
        py: 2,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        mt:{
            xxs:2,
            sm:4
        }
      }}
    >
      <Stack
        sx={{
          flexDirection: {
            xxs: "column",
            xl: "row",
          },
          alignItems: "center",
          columnGap: 1,
          rowGap: {
            xxs: 0.7,
            xl: 0,
          },
        }}
      >
        <LocalShippingIcon sx={{ color: "#838383" }} />
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: {
              xxs: "12px",
              xl: "16px",
            },
            color: "#838383",
          }}
        >
          ارسال سریع به سراسر ایران
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: {
            xxs: "column",
            xl: "row",
          },
          alignItems: "center",
          columnGap: 1,
          rowGap: {
            xxs: 0.7,
            xl: 0,
          },
        }}
      >
        <CurrencyExchangeIcon sx={{ color: "#838383" }} />
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: {
              xxs: "12px",
              xl: "16px",
            },
            color: "#838383",
          }}
        >
          تضمین بازگشت وجه
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: {
            xxs: "column",
            xl: "row",
          },
          alignItems: "center",
          columnGap: 1,
          rowGap: {
            xxs: 0.7,
            xl: 0,
          },
        }}
      >
        <CreditScoreIcon sx={{ color: "#838383" }} />
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: {
              xxs: "12px",
              xl: "16px",
            },
            color: "#838383",
          }}
        >
          تنوع در روش های پرداخت
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: {
            xxs: "column",
            xl: "row",
          },
          alignItems: "center",
          columnGap: 1,
          rowGap: {
            xxs: 0.7,
            xl: 0,
          },
        }}
      >
        <SupportAgentIcon sx={{ color: "#838383" }} />
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: {
              xxs: "12px",
              xl: "16px",
            },
            color: "#838383",
          }}
        >
          تنوع در روش های پرداخت
        </Typography>
      </Stack>
    </Box>
  );
}
