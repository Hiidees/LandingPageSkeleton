import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { CardSkeleton } from "../Commons/Card/CardSkeleton";
import { MyCardContent } from "../Commons/Card/MyCardContent";
import {
  ContainerImageOtherProjectStyle,
  ContainerSkeletonOtherProjectStyle,
} from "../Commons/Styleds/OtherProject";
import { MyHelmet } from "../Commons/TitlePage/MyHelmet";
export interface IOtherProjectProps {}

export default function OtherProject(props: IOtherProjectProps) {
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
      <MyHelmet title={"Altri Progetti"} />
      <Container
        maxWidth="md"
        disableGutters
        sx={ContainerImageOtherProjectStyle.container(refresh)}
      >
        <Grid container spacing={2}>
          <MyCardContent
            imageUrl="/Portfolio.png"
            alt="Altri Progetti"
            title="Altri Progetti"
          />
        </Grid>
      </Container>

      <Container
        maxWidth="md"
        disableGutters
        sx={ContainerSkeletonOtherProjectStyle.container(refresh)}
      >
        <Grid container spacing={2}>
          <CardSkeleton />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
