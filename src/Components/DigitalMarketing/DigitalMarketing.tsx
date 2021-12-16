import React, { createContext, useEffect, useState } from "react";
import { MyHelmet } from "../Commons/TitlePage/MyHelmet";
import { ItemCarousel } from "../Commons/Carousel/ItemCarousel";

export interface IDigitalMarketingProps {}

interface IRefresh {
  refresh: boolean;
  setRefresh: (bool: boolean) => void;
}

export const Context = createContext({} as IRefresh);

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
      <Context.Provider value={{ refresh, setRefresh }}>
        <ItemCarousel items={items} />
      </Context.Provider>
    </React.Fragment>
  );
}
