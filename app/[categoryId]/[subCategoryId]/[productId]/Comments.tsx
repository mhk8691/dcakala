import {
  Box,
  Button,
  Divider,
  Grid2 as Grid,
  LinearProgress,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Title from "./Title";
import { comments } from "@/app/services/comments";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReactionButtons from "./ReactionButtons";
export default function Comments() {
  const rating: number = 3;
  return (
    <Box mt={6}>
      <Title title="نقد و بررسی" />
      <Grid
        container
        spacing={{ xxs: 2, xl: 4 }}
        rowSpacing={4}
        sx={{
          mt: 2,
          flexDirection: {
            xxs: "column-reverse",
            sm: "row",
          },
        }}
      >
        <Grid size={{ xxs: 12, sm: 3 }}>
          <Stack direction={"column"}>
            <Typography
              variant="body2"
              color="initial"
              sx={{ fontSize: "14px", color: "#000000DE" }}
            >
              مجموع 3 امتیاز از 1 نظر
            </Typography>
            <Rating
              name="read-only"
              value={rating}
              readOnly
              sx={{ color: "primary.dark", mt: 2 }}
            />
            <Typography
              variant="body2"
              color="initial"
              sx={{ fontSize: "14px", color: "#000000DE", mt: 4 }}
            >
              جزییات امتیاز دهی
            </Typography>
            <Box mt={2}>
              <Typography
                variant="body2"
                color="initial"
                sx={{ fontSize: "12px", color: "#000000DE" }}
              >
                خیلی بد
              </Typography>
              <LinearProgress
                variant="determinate"
                value={rating === 1 ? 100 : 0}
                color="success"
              />
            </Box>
            <Box mt={2}>
              <Typography
                variant="body2"
                color="initial"
                sx={{ fontSize: "12px", color: "#000000DE" }}
              >
                بد
              </Typography>
              <LinearProgress
                variant="determinate"
                value={rating === 2 ? 100 : 0}
                color="success"
              />
            </Box>
            <Box mt={2}>
              <Typography
                variant="body2"
                color="initial"
                sx={{ fontSize: "12px", color: "#000000DE" }}
              >
                متوسط
              </Typography>
              <LinearProgress
                variant="determinate"
                value={rating === 3 ? 100 : 0}
                color="success"
              />
            </Box>
            <Box mt={2}>
              <Typography
                variant="body2"
                color="initial"
                sx={{ fontSize: "12px", color: "#000000DE" }}
              >
                خوب
              </Typography>
              <LinearProgress
                variant="determinate"
                value={rating === 4 ? 100 : 0}
                color="success"
              />
            </Box>
            <Box mt={2}>
              <Typography
                variant="body2"
                color="initial"
                sx={{ fontSize: "12px", color: "#000000DE" }}
              >
                خیلی خوب
              </Typography>
              <LinearProgress
                variant="determinate"
                value={rating === 5 ? 100 : 0}
                color="success"
              />
            </Box>
            <Stack
              sx={{
                mt: 5,
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
              <Typography
                variant="body2"
                color="initial"
                sx={{ fontSize: "14px", color: "#000000DE", width: "100%" }}
              >
                درباره این کالا نظری دارید؟
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  bgcolor: "primary.dark",
                  color: "white",
                  width: {
                    xxs: "15%",
                    sm: "80%",
                  },
                }}
              >
                ثبت نظر
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xxs: 12, sm: 9 }}>
          <Stack direction={"column"} gap={2} pl={4}>
            {comments.map((item, index) => (
              <Box key={index}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    {!item.user.image && (
                      <AccountCircleIcon
                        fontSize="large"
                        sx={{ color: "#B5B5B5" }}
                      />
                    )}
                    <Typography
                      variant="body2"
                      color="initial"
                      sx={{ fontSize: "14px", color: "#000000DE" }}
                    >
                      {item.user.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{ color: "#a0a6b0", fontSize: "12px" }}
                  >
                    {item.date}
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{
                      color: "#4f4f4f",
                      fontSize: "14px",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {item.comment}
                  </Typography>
                </Box>
                <Box justifyContent={"flex-end"} display={"flex"} mt={2}>
                  <ReactionButtons />
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
