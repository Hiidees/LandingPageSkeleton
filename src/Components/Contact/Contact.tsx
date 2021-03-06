import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { MyCardContent } from "../Commons/Card/MyCardContent";
import { CardSkeleton } from "../Commons/Card/CardSkeleton";
import { MyHelmet } from "../Commons/TitlePage/MyHelmet";
import {
  ContainerImageContactStyle,
  ContainerSkeletonContactStyle,
} from "../Commons/Styleds/ContactStyles";

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
        sx={ContainerImageContactStyle.container(refresh)}
      >
        <Grid container spacing={2}>
          <MyCardContent
            imageUrl="/Contact.png"
            alt="Contact"
            title="Contact"
          />
        </Grid>
      </Container>

      <Container
        maxWidth="md"
        disableGutters
        sx={ContainerSkeletonContactStyle.container(refresh)}
      >
        <Grid container spacing={2}>
          <CardSkeleton />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
