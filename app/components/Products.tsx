"use client";
import ProductCard from "./ProductCard";
import ProductCardHorizontal from "./ProductCardHorizontal";
import useBreakPoint from "../hook/useBreakPoint";
import { Box, Divider, Grid2 as Grid } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useState } from "react";
import Filter from "../components/Filter";
import Product from "../services/Product";
import PaginationRounded from "./Pagination";
interface Props {
  data: Product[];
}
export default function Products({ data }: Props) {
  const { isExtraSmall } = useBreakPoint();
  const [view, setView] = useState(false);

  return (
    <Box mt={5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xxs: "space-between",
            sm: "right",
          },
          alignItems: "center",
        }}
      >
        <Filter />

        <Box
          border={1}
          display={"flex"}
          borderColor={"#CECECE"}
          borderRadius={1}
          mr={2}
        >
          <Box
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            p={1}
            onClick={() => setView(true)}
            bgcolor={view ? "#EBEBEB" : ""}
            sx={{ cursor: "pointer" }}
          >
            <ViewListIcon />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            p={1}
            onClick={() => setView(false)}
            bgcolor={!view ? "#EBEBEB" : ""}
            sx={{ cursor: "pointer" }}
          >
            <ViewModuleIcon />
          </Box>
        </Box>
      </Box>
      <Grid container spacing={{ xxs: 0, sp: 2 }} sx={{ mt: 3 }}>
        {data.map((item) =>
          view ? (
            <Grid size={{ xxl: 3, sm: 4, xxs: 12, xs: 6 }}>
              {!isExtraSmall ? (
                <ProductCard
                  style={{
                    borderRadius: {
                      xxs: 0,
                      sp: 2,
                    },
                  }}
                  item={item}
                  key={item.id}
                />
              ) : (
                <ProductCardHorizontal item={item} />
              )}
            </Grid>
          ) : (
            <Grid size={12}>
              <ProductCardHorizontal
                item={item}
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              />
            </Grid>
          )
        )}
      </Grid>
      <PaginationRounded />
    </Box>
  );
}
