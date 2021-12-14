import React, { useEffect, useState } from "react";
import { MyHelmet } from "../Commons/TitlePage/MyHelmet";
import { ItemCarousel } from "../Commons/Carousel/ItemCarousel";
import Container from "@mui/material/Container";
import {
  ContainerSkeletonCarouselStyle,
  SkeletonCarouselStyle,
} from "../Commons/Styleds/ItemCarouselStyles";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

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
      <ItemCarousel items={items} refresh={refresh} />
    </React.Fragment>
  );
}
