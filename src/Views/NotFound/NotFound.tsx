import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Box from "@mui/material/Box";
import { MyHelmet } from "../FrontEndUtils/MyHelmet";

export interface INotFoundProps {}

export default function NotFound(props: INotFoundProps) {
  return (
    <React.Fragment>
      <MyHelmet title={"404-Not Found"} />
      <Container maxWidth="md" disableGutters>
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
    </React.Fragment>
  );
}
