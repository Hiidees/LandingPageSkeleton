import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { CardSkeleton } from "../FrontEndUtils/CardSkeleton";
import { CardContent } from "../FrontEndUtils/CardContent";
export interface IAltriProgettiProps {}

export default function AltriProgetti(props: IAltriProgettiProps) {
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
      <Container
        maxWidth="md"
        disableGutters
        sx={{ display: refresh ? "block" : " none" }}
      >
        <Grid container spacing={2}>
          <CardContent
            imageUrl="/Portfolio.png"
            alt="Altri Progetti"
            title="Altri Progetti"
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
        </Grid>
      </Container>
    </React.Fragment>
  );
}
