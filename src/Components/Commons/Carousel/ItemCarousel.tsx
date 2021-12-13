import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import * as React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MyCard } from "../Card/CardStyles";

export interface IItemCarouselProps {
  items: Object[];
  refresh: any;
}

export function ItemCarousel(props: IItemCarouselProps) {
  const { items, refresh } = props;
  return (
    <React.Fragment>
      <Carousel
        indicators={false}
        animation={"slide"}
        navButtonsAlwaysVisible={true}
        interval={5000}
        duration={800}
        fullHeightHover={false}
        navButtonsWrapperProps={{
          style: {
            marginLeft: 40,
          },
        }}
        navButtonsProps={{
          style: {
            background: "transparent",
            color: "black",
          },
        }}
        PrevIcon={<ArrowBackIosNewIcon fontSize={"large"} />}
        NextIcon={<ArrowForwardIosIcon fontSize={"large"} />}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} refresh={refresh} />
        ))}
      </Carousel>
    </React.Fragment>
  );
}

function Item(props: any) {
  const { refresh } = props;
  return (
    <React.Fragment>
      <MyCard
        sx={{
          display: { xs: "block", sm: "flex" },
        }}
        elevation={0}
      >
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
              src={props.item.ImageUrl}
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
      </MyCard>
    </React.Fragment>
  );
}
