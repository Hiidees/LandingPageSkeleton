import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import React from "react";
import { BoxMedia, MyCard, MyCardContent } from "./HomeStyles";

function SkeletonTypography() {
  return (
    <React.Fragment>
      <Box>
        <Skeleton sx={{ marginBottom: 1, width: { xs: 400, sm: 500 } }} />
        <Skeleton sx={{ marginBottom: 1, width: { xs: 400, sm: 500 } }} />
        <Skeleton sx={{ marginBottom: 1, width: { xs: 400, sm: 500 } }} />
        <Skeleton sx={{ marginBottom: 1, width: { xs: 400, sm: 500 } }} />
        <Skeleton sx={{ marginBottom: 1, width: { xs: 400, sm: 500 } }} />
        <Skeleton sx={{ marginBottom: 1, width: { xs: 400, sm: 500 } }} />
      </Box>
    </React.Fragment>
  );
}

function SkeletonImg() {
  return (
    <Skeleton
      variant="rectangular"
      width={150}
      height={150}
      sx={{ marginTop: 5, marginLeft: 5, borderRadius: 7 }}
    />
  );
}

export function CardSkeleton() {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <MyCard elevation={0} sx={{ display: { xs: "block", sm: "flex" } }}>
        <BoxMedia sx={{ marginLeft: { xs: 15, sm: 0 } }}>
          <SkeletonImg />
        </BoxMedia>
        <MyCardContent>
          <SkeletonTypography />
        </MyCardContent>
      </MyCard>
    </Grid>
  );
}
