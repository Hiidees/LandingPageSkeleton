import * as React from "react";
import {
  Container,
  Typography,
  CardHeader,
  Avatar,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

export default function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="md" disableGutters>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Card sx={{ background: "transparent" }} elevation={0}>
              <CardHeader
                sx={{
                  color: "#d1dffb",
                }}
                avatar={<Avatar aria-label="Ciao"></Avatar>}
                title="Home"
              />
              <CardContent>
                <Typography variant="body2" color="#d1dffb">
                  Laborum tempor id duis exercitation do enim sint enim dolore
                  anim Lorem laborum cillum nulla. Sint enim anim nulla cillum
                  et eiusmod nisi. Officia ad est magna irure aliquip ullamco
                  magna ut commodo laborum. Officia veniam ea pariatur qui
                  adipisicing ea nulla eu duis quis consequat laboris
                  exercitation do. Sint cupidatat cillum velit ex voluptate ad
                  enim voluptate sint do enim excepteur est.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Card sx={{ background: "transparent" }} elevation={0}>
              <CardHeader
                avatar={<Avatar aria-label="Ciao"></Avatar>}
                title="Contact me"
                sx={{
                  color: "#d1dffb",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="#d1dffb">
                  Laborum tempor id duis exercitation do enim sint enim dolore
                  anim Lorem laborum cillum nulla. Sint enim anim nulla cillum
                  et eiusmod nisi. Officia ad est magna irure aliquip ullamco
                  magna ut commodo laborum. Officia veniam ea pariatur qui
                  adipisicing ea nulla eu duis quis consequat laboris
                  exercitation do. Sint cupidatat cillum velit ex voluptate ad
                  enim voluptate sint do enim excepteur est.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Card sx={{ background: "transparent" }} elevation={0}>
              <CardHeader
                avatar={<Avatar aria-label="Ciao"></Avatar>}
                title="About me"
                sx={{
                  color: "#d1dffb",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="#d1dffb">
                  Laborum tempor id duis exercitation do enim sint enim dolore
                  anim Lorem laborum cillum nulla. Sint enim anim nulla cillum
                  et eiusmod nisi. Officia ad est magna irure aliquip ullamco
                  magna ut commodo laborum. Officia veniam ea pariatur qui
                  adipisicing ea nulla eu duis quis consequat laboris
                  exercitation do. Sint cupidatat cillum velit ex voluptate ad
                  enim voluptate sint do enim excepteur est.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Card sx={{ background: "transparent" }} elevation={0}>
              <CardHeader
                avatar={<Avatar aria-label="Ciao"></Avatar>}
                title="My Curriculum"
                sx={{
                  color: "#d1dffb",
                }}
              />
              <CardContent>
                <Typography variant="body2" color="#d1dffb">
                  Laborum tempor id duis exercitation do enim sint enim dolore
                  anim Lorem laborum cillum nulla. Sint enim anim nulla cillum
                  et eiusmod nisi. Officia ad est magna irure aliquip ullamco
                  magna ut commodo laborum. Officia veniam ea pariatur qui
                  adipisicing ea nulla eu duis quis consequat laboris
                  exercitation do. Sint cupidatat cillum velit ex voluptate ad
                  enim voluptate sint do enim excepteur est.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
