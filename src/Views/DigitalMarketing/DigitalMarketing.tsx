import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MyHelmet } from "../FrontEndUtils/MyHelmet";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { MyCard } from "../FrontEndUtils/CardStyles";

export interface IDigitalMarketingProps {}

export default function DigitalMarketing(props: IDigitalMarketingProps) {
  const [refresh, setRefresh] = useState(false);

  async function Refresh() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setRefresh(true);
  }

  var items = [
    {
      ImageUrl: "/Aboutme.png",
    },
    {
      ImageUrl: "/Home.png",
    },
    {
      ImageUrl: "/Contact.png",
    },
  ];

  useEffect(() => {
    Refresh();
  }, []);
  return (
    <React.Fragment>
      <MyHelmet title={"Digital Marketing"} />
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
