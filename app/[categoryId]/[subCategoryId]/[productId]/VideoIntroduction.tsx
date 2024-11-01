import { Box, Container, Stack, Typography } from "@mui/material";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

interface Props {
  video: {
    videoPath: string;
    poster: string;
  };
}
export default function VideoIntroduction({ video }: Props) {
  return (
    <Container maxWidth="xxl" sx={{ mt: 7 }}>
      <Box px={6}>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <SlowMotionVideoIcon fontSize="large" />
          <Typography
            variant="h6"
            color="initial"
            sx={{ fontSize: { xxs: "14px", sm: "16px", fontWeight: "bold" } }}
          >
            معرفی ویدیویی آیفون تصویری تابا مدل 1040M
          </Typography>
        </Stack>
        <Box
          component={"video"}
          src={video.videoPath}
          controls
          sx={{ width: "100%", borderRadius: 2, mt: 2 }}
          poster={video.poster}
        />
      </Box>
    </Container>
  );
}
