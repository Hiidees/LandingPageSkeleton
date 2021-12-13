import { CardContent } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { MyHelmet } from "../Commons/TitlePage/MyHelmet";

export interface IContactProps {}

export default function Contact(props: IContactProps) {
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
      <MyHelmet title={"Contact"} />
      <Container
        maxWidth="md"
        disableGutters
        sx={{ display: refresh ? "block" : " none" }}
      >
        <Grid container spacing={2}>
          <CardContent imageUrl="/Contact.png" alt="Contact" title="Contact" />
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
