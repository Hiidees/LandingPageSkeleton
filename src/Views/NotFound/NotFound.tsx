import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { MyHelmet } from "../FrontEndUtils/MyHelmet";
import Skeleton from "@mui/material/Skeleton";

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
        sx={{ display: refresh ? "block" : " none" }}
      >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 400, md: 500 },
              maxWidth: { xs: 400, md: 500 },
            }}
            alt="The house from the offer."
            src="/404.png"
          />
        </Grid>
      </Container>

      <Container
        maxWidth="md"
        disableGutters
        sx={{ display: refresh ? "none" : " block" }}
      >
        <Grid container spacing={2}>
          <Skeleton
            variant="rectangular"
            width={450}
            height={450}
            sx={{ margin: { xs: "0 auto" }, borderRadius: 5 }}
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
