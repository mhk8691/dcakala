import {
  Box,
  Container,
  Divider,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { links } from "./links";
import Link from "next/link";

export default function SitemapPage() {
  return (
    <Container maxWidth="xxxl" sx={{ mt: 7, direction: "rtl" }}>
      <Typography variant="body1" sx={{ color: "#72777A" }}>
        نقشه سایت
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {links.map((item, index) => (
          <Grid size={4} key={index}>
            <Typography variant="h6" color="initial" sx={{ fontSize: "16px" }}>
              {item.title}
            </Typography>
            <Divider />
            <Box component={"ul"} mt={1}>
              {item.link.map((link, index2) => (
                <Box key={index2}>
                  <Typography
                    key={index2}
                    component={"li"}
                    variant="body2"
                    sx={{ color: "#212121", my: 1 }}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </Typography>
                  {link.subLinks?.map((subLink, index3) => (
                    <Box key={index3}>
                      <Typography
                        key={index3}
                        component={"li"}
                        variant="body2"
                        sx={{ color: "#212121", my: 1, mx: 1.5 }}
                      >
                        <Link href={subLink.link}>{subLink.name}</Link>
                      </Typography>
                      {subLink.subSublink?.map((subSubLink, index4) => (
                        <Box key={index4}>
                          <Typography
                            key={index4}
                            component={"li"}
                            variant="body2"
                            sx={{ color: "#212121", my: 1, mx: 3.5 }}
                          >
                            <Link href={subSubLink.link}>
                              {subSubLink.name}
                            </Link>
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
