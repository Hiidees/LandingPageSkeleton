import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { MyHelmet } from "../Commons/TitlePage/MyHelmet";
import Skeleton from "@mui/material/Skeleton";
import {
  BoxNotFoundStyle,
  ContainerImageNotFoundStyle,
  ContainerSkeletonNotFoundStyle,
  GridNotFoundStyle,
  SkeletonNotFoundStyle,
} from "../Commons/Styleds/NotFoundStyles";

export interface INotFoundProps {}

export default function NotFound(props: INotFoundProps) {
  const [refresh, setRefresh] = useState(false);

  async function Refresh() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setRefresh(true);
  }

  useEffect(() => {
    Refresh();
  }, []);
  return (
    <React.Fragment>
      <MyHelmet title={"404-Not Found"} />

      <Container
        maxWidth="md"
        disableGutters
        sx={ContainerImageNotFoundStyle.container(refresh)}
      >
        <Grid container spacing={2} sx={GridNotFoundStyle}>
          <Box
            component="img"
            sx={BoxNotFoundStyle}
            alt="Not Found"
            src="/404.png"
          />
        </Grid>
      </Container>

      <Container
        maxWidth="md"
        disableGutters
        sx={ContainerSkeletonNotFoundStyle.container(refresh)}
      >
        <Grid container spacing={2}>
          <Skeleton
            variant="rectangular"
            width={450}
            height={450}
            sx={SkeletonNotFoundStyle}
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
