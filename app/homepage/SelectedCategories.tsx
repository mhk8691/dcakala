import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Title from "../components/Title";
import {} from "swiper/modules";
import { data } from "../services/selectedCategories";

export default function SelectedCategories() {
  return (
    <Box mt={5} mb={5}>
      <Title title="دسته های منتخب" />
      <Grid
        container
        spacing={{
          xxs: 2,
          xs: 5,
        }}
        rowSpacing={{
          xl: 5,
          xxs: 15,
        }}
        sx={{ mt: 15 }}
        // justifyContent={"center"}
      >
        {data.map((item) => (
          <Grid
            size={{ xl: 2, sm: 3, xxs: 4 }}
            key={item.id}
            sx={{
              position: "relative",
            }}
          >
            <Box
              component={"img"}
              src={item.imagePath}
              alt=""
              sx={{
                width: {
                  xl: "90%",
                  lg: "80%",
                  md: "70%",
                  xxs: "100%",
                },
                maxWidth: "100%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
                position: "absolute",
                bottom: "50%",
              }}
            />
            <Box
              border={1}
              borderColor={"#E5E7EB"}
              borderRadius={4}
              minHeight={130}
              display={"flex"}
              alignItems={"end"}
              justifyContent={"center"}
              p={1}
              sx={{
                width: {
                  xl: "90%",
                  lg: "80%",
                  md: "70%",
                  xxs: "100%",
                },
              }}
            >
              <Typography variant="body1" sx={{}}>
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
