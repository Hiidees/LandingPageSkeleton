import * as React from "react";
import {
  Container,
  Typography,
  CardHeader,
  Avatar,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="md" disableGutters>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Card
              sx={{ background: "transparent", display: "flex" }}
              elevation={0}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image="/Home.png"
                  alt="Home"
                  title="Home"
                />
              </Box>

              <CardContent sx={{ marginTop: 3 }}>
                <Typography variant="body1" color="#d1dffb">
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
            <Card
              sx={{ background: "transparent", display: "flex" }}
              elevation={0}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image="/Contact.png"
                  alt="Contact me"
                  title="Contact me"
                />
              </Box>

              <CardContent sx={{ marginTop: 3 }}>
                <Typography variant="body1" color="#d1dffb">
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
            <Card
              sx={{ background: "transparent", display: "flex" }}
              elevation={0}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image="/Aboutme.png"
                  alt="About me"
                  title="About me"
                />
              </Box>

              <CardContent sx={{ marginTop: 3 }}>
                <Typography variant="body1" color="#d1dffb">
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
            <Card
              sx={{ background: "transparent", display: "flex" }}
              elevation={0}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image="/Portfolio.png"
                  alt="My Portfolio"
                  title="My Portfolio"
                />
              </Box>

              <CardContent sx={{ marginTop: 3 }}>
                <Typography variant="body1" color="#d1dffb">
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
