import React, { useEffect, useState } from "react";
import { MyHelmet } from "../Components/TitlePage/MyHelmet";
import { ItemCarousel } from "../Components/Carousel/ItemCarousel";

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
