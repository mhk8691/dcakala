import {
  Box,
  Button,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { questions } from "@/app/services/questions";
import Title from "./Title";

export default function QuestionsAndAnswers() {
  return (
    <Box mt={6}>
      <Title title="پرسش و پاسخ" />
      <Grid container spacing={{ xxs: 2, xl: 7 }} rowSpacing={4} sx={{ mt: 2,flexDirection:{
        xxs:'column-reverse',
        sm:'row'
      } }}>
        <Grid size={{ xxs: 12, sm: 3 }}>
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
            <Typography
              variant="body2"
              color="initial"
              sx={{ fontSize: "14px", color: "#000000DE", width: "100%" }}
            >
              درباره این کالا پرسشی دارید؟
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                bgcolor: "primary.dark",
                color: "white",
                width: {
                  xxs: "20%",
                  sm: "100%",
                },
              }}
            >
              ثبت پرسش
            </Button>
          </Stack>
        </Grid>
        <Grid size={{ xxs: 12, sm: 9 }}>
          <Stack direction={"column"} gap={2}>
            {questions.map((item, index) => (
              <Box key={index}>
                <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
                  <HelpOutlineIcon
                    fontSize={"large"}
                    sx={{ color: "#B5B5B5" }}
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{ fontSize: "16px", color: "#000000DE" }}
                    >
                      {item.question}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="initial"
                      sx={{ mt: 1, color: "#A0A6B0", fontSize: "12px" }}
                    >
                      پاسخ: {item.respondent}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="initial"
                      sx={{ mt: 1, color: "#62666D", fontSize: "14px" }}
                    >
                      {item.answer}
                    </Typography>
                    <Button
                      variant="text"
                      color="primary"
                      sx={{
                        mt: 1.5,
                        color: "primary.dark",
                        fontSize: "13px",
                        fontWeight: "normal",
                        mr: 0.5,
                      }}
                      endIcon={<KeyboardArrowLeftIcon sx={{ mr: 0.5 }} />}
                    >
                      ثبت پاسخ جدید
                    </Button>
                  </Box>
                </Stack>
                {index < questions.length - 1 && <Divider sx={{ mt: 1 }} />}
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
