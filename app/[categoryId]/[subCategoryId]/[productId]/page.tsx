import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Images from "./Images";
import Features from "./Features";
import Detail from "./Detail";
import AddToCart from "./AddToCart";
import data from "@/app/services/productDetail";
import Package from "./Package";
import Comment from "./Comment";
import ServiceHighlights from "./ServiceHighlights";
import Ads from "./Ads";
import ComplementaryProducts from "./ComplementaryProducts";
import VideoIntroduction from "./VideoIntroduction";
import AllFeatures from "./AllFeatures";
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import Comments from "./Comments";
import BestSeller from "@/app/components/BestSeller";
import { data as relatedProducts } from "@/app/services/videoPhone";
import SimilarProducts from "./SimilarProducts";

export default function ProductPage() {
  return (
    <Container maxWidth="xxxl" sx={{ mt: 8, direction: "rtl", mb: 10 }}>
      <Typography
        variant="h6"
        sx={{
          mt: 2,
          mb: 1.5,
          fontSize: "18px",
          color: "#656565",
          fontWeight: "bold",
        }}
      >
        {data.title}
      </Typography>
      <Grid container spacing={1.5} rowSpacing={5}>
        <Grid size={{ xxs: 12, sm: 4.5 }}>
          <Images images={data.imagesPath} />
        </Grid>
        <Grid size={{ xxs: 12, sm: 4.5 }}>
          <Features features={data.features} AllFeatures={data.allFeatures} />
          <Package />
          <Comment />
        </Grid>
        <Grid size={{ xxs: 12, sm: 3 }}>
          <Box bgcolor={"#F6F6F6"} borderRadius={2} p={2}>
            <Detail item={data} />
            <AddToCart price={data.price} />
          </Box>
        </Grid>
        <Grid size={12}>
          <ServiceHighlights />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        rowSpacing={4}
        sx={{
          mt: 7,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid size={{ xxs: 12, sm: 9 }}>
          <ComplementaryProducts />
        </Grid>
        <Grid size={{ xxs: 12, sm: 3 }}>
          <Ads />
        </Grid>
      </Grid>
      <VideoIntroduction video={data.video} />
      <AllFeatures data={data} />
      <QuestionsAndAnswers />
      <Comments />
      <SimilarProducts/>
    </Container>
  );
}
