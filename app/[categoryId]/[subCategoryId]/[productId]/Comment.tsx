import { Box, Button, Divider, Rating, Stack, Typography } from "@mui/material";

export default function Comment() {
  return (
    <Box mt={3}>
      <Divider sx={{ borderColor: "black" }} />
      <Stack
        sx={{
          mt: 1.5,
          flexDirection: {
            xxs: "column-reverse",
            sm: "row",
          },
          alignItems: {
            xxs: "flex-start",
            sm: "center",
          },
          justifyContent: {
            xxs: "flex-start",
            sm: "space-between",
          },
        }}
      >
        <Box alignSelf={"center"}>
          <Button
            variant="text"
            color="primary"
            size="small"
            sx={{
              color: "primary.dark",
              fontSize: { xxs: "10px", lg: "14px" },
              minWidth: "35px",
              mt: {
                xxs: 1,
                sm: 0,
              },
            }}
          >
            مشاهده نظرات
          </Button>
        </Box>
        <Box sx={{mt:{ xxs: 1, sm: 0 }}}>
          <Typography
            variant="body2"
            sx={{ fontSize: { xxs: "10px", xll: "12px" }, mr: 1 }}
          >
            2 نظر برای این کالا ثبت شده است
          </Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <Rating
            name="read-only"
            value={3}
            readOnly
            sx={{ fontSize: "18px", color: "primary.dark" }}
          />
          <Typography variant="body2" sx={{ fontSize: "12px" }}>
            ۵/۳
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
