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
import CardContent from "@mui/material/CardContent";
import { Context } from "../../DigitalMarketing/DigitalMarketing";

export interface IItemCarouselProps {
  items: Object[];
}

export function ItemCarousel(props: IItemCarouselProps) {
  const { items } = props;
  const refresh = React.useContext(Context);
  return (
    <React.Fragment>
      <Card sx={CardCarouselStyle} elevation={0}>
        <CardContent>
          <Container
            maxWidth="md"
            disableGutters
            sx={ContainerImageCarouselStyle.container(refresh.refresh)}
          >
            {console.log(refresh.refresh)}
            <Carousel
              indicators={false}
              animation={"fade"}
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
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Container>
          <Container
            maxWidth="md"
            disableGutters
            sx={ContainerSkeletonCarouselStyle.container(refresh.refresh)}
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
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

function Item(props: any) {
  return (
    <React.Fragment>
      <Grid container spacing={2} sx={GridCarouselStyle}>
        <Box
          component="img"
          title="Carousel"
          sx={BoxCarouselStyle}
          src={props.item.ImageUrl}
        />
      </Grid>
    </React.Fragment>
  );
}
