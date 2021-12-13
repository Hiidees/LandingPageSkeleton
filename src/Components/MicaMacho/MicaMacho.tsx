import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { CardSkeleton } from "../Components/Card/CardSkeleton";
import { CardContent } from "../Components/Card/CardContent";
import { MyHelmet } from "../Components/TitlePage/MyHelmet";

export interface IMicaMachoProps {}

export default function MicaMacho(props: IMicaMachoProps) {
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
      <MyHelmet title={"Mica Macho"} />
      <Container
        maxWidth="md"
        disableGutters
        sx={{ display: refresh ? "block" : " none" }}
      >
        <Grid container spacing={2}>
          <CardContent
            imageUrl="/Contact.png"
            alt="Mica Macho"
            title="Mica Macho"
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
