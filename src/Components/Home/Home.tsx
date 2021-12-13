import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { CardSkeleton } from "../Commons/Card/CardSkeleton";
import { MyCardContent } from "../Commons/Card/MyCardContent";
import {
  ContainerImageHomeStyle,
  ContainerSkeletonHomeStyle,
} from "../Commons/Styleds/HomeStyles";
import { MyHelmet } from "../Commons/TitlePage/MyHelmet";

export default function Home() {
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
      <MyHelmet title={"Home"} />
      <Container
        maxWidth="md"
        disableGutters
        sx={ContainerImageHomeStyle.container(refresh)}
      >
        <Grid container spacing={2}>
          <MyCardContent imageUrl="/Home.png" alt="Home" title="Home" />
          <MyCardContent
            imageUrl="/Contact.png"
            alt="Contact me"
            title="Contact me"
          />
          <MyCardContent
            imageUrl="/Aboutme.png"
            alt="About me"
            title="About me"
          />
          <MyCardContent
            imageUrl="/Portfolio.png"
            alt="My Portfolio"
            title="My Portfolio"
          />
        </Grid>
      </Container>

      <Container
        maxWidth="md"
        disableGutters
        sx={ContainerSkeletonHomeStyle.container(refresh)}
      >
        <Grid container spacing={2}>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
