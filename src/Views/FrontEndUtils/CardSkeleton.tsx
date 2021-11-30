import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import React from "react";
import { BoxMedia, MyCard, MyCardContent } from "./CardStyles";

function SkeletonTypography() {
  return (
    <React.Fragment>
      <Box>
        <Skeleton
          sx={{
            marginBottom: 1,
            margin: { xs: "0 auto" },
            width: 600,
          }}
        />
        <Skeleton
          sx={{
            marginBottom: 1,
            margin: { xs: "0 auto" },
            width: 600,
          }}
        />
        <Skeleton
          sx={{
            marginBottom: 1,
            margin: { xs: "0 auto" },
            width: 600,
          }}
        />
        <Skeleton
          sx={{
            marginBottom: 1,
            margin: { xs: "0 auto" },
            width: 600,
          }}
        />
        <Skeleton
          sx={{
            marginBottom: 1,
            margin: { xs: "0 auto" },
            width: 600,
          }}
        />
        <Skeleton
          sx={{
            marginBottom: 1,
            margin: { xs: "0 auto" },
            width: 600,
          }}
        />
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
      sx={{ margin: { xs: "0 auto" }, borderRadius: 5 }}
    />
  );
}

export function CardSkeleton() {
  return (
    <Grid item xs={12} sm={12} md={12} sx={{ marginBottom: 4 }}>
      <MyCard elevation={0} sx={{ display: { xs: "block", sm: "flex" } }}>
        <BoxMedia>
          <SkeletonImg />
        </BoxMedia>
        <MyCardContent>
          <SkeletonTypography />
        </MyCardContent>
      </MyCard>
    </Grid>
  );
}
