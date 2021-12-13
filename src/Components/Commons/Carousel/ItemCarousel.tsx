import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import * as React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import {
  BoxCarouselStyle,
  CardCarouselStyle,
  ContainerImageCarouselStyle,
  ContainerSkeletonCarouselStyle,
  GridCarouselStyle,
  NavButtonsCarouselStyle,
  NavButtonsWrapperCarouselStyle,
  SkeletonCarouselStyle,
} from "../Styleds/ItemCarouselStyles";

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
          style: NavButtonsWrapperCarouselStyle,
        }}
        navButtonsProps={{
          style: NavButtonsCarouselStyle,
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
      <Card sx={CardCarouselStyle} elevation={0}>
        <Container
          maxWidth="md"
          disableGutters
          sx={ContainerImageCarouselStyle.container(refresh)}
        >
          <Grid container spacing={2} sx={GridCarouselStyle}>
            <Box
              component="img"
              sx={BoxCarouselStyle}
              alt="The house from the offer."
              src={props.item.ImageUrl}
            />
          </Grid>
        </Container>
        <Container
          maxWidth="md"
          disableGutters
          sx={ContainerSkeletonCarouselStyle.container(refresh)}
        >
          <Grid container spacing={2}>
            <Skeleton
              variant="rectangular"
              width={450}
              height={450}
              sx={SkeletonCarouselStyle}
            />
          </Grid>
        </Container>
      </Card>
    </React.Fragment>
  );
}
