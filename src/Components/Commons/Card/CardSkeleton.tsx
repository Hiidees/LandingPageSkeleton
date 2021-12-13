import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import React from "react";
import {
  CardContentStyle,
  CardStyle,
  GridSkeletonStyle,
  ImageSkeletonStyle,
  LineSkeletonStyle,
} from "../Styleds/CardSkeletonStyles";

function SkeletonTypography() {
  return (
    <React.Fragment>
      <Box>
        <Skeleton sx={LineSkeletonStyle} />
        <Skeleton sx={LineSkeletonStyle} />
        <Skeleton sx={LineSkeletonStyle} />
        <Skeleton sx={LineSkeletonStyle} />
        <Skeleton sx={LineSkeletonStyle} />
        <Skeleton sx={LineSkeletonStyle} />
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
      sx={ImageSkeletonStyle}
    />
  );
}

export function CardSkeleton() {
  return (
    <Grid item xs={12} sm={12} md={12} sx={GridSkeletonStyle}>
      <Card elevation={0} sx={CardStyle}>
        <Box>
          <SkeletonImg />
        </Box>
        <CardContent sx={CardContentStyle}>
          <SkeletonTypography />
        </CardContent>
      </Card>
    </Grid>
  );
}
