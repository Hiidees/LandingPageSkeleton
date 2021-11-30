import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { CardSkeleton } from "../FrontEndUtils/CardSkeleton";
import { CardContent } from "../FrontEndUtils/CardContent";
import { MyHelmet } from "../FrontEndUtils/MyHelmet";

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
        sx={{ display: refresh ? "block" : " none" }}
      >
        <Grid container spacing={2}>
          <CardContent imageUrl="/Home.png" alt="Home" title="Home" />
          <CardContent
            imageUrl="/Contact.png"
            alt="Contact me"
            title="Contact me"
          />
          <CardContent
            imageUrl="/Aboutme.png"
            alt="About me"
            title="About me"
          />
          <CardContent
            imageUrl="/Portfolio.png"
            alt="My Portfolio"
            title="My Portfolio"
          />
        </Grid>
      </Container>

      <Container
        maxWidth="md"
        disableGutters
        sx={{ display: refresh ? "none" : " block" }}
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
