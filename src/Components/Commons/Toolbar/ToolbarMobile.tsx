import * as React from "react";
import DrawerMenu from "../../Layout/Header/DrawerMenu";
import { MyToolbarSmall } from "../../Layout/Header/HeaderStyle";

export interface IToolbarMobileProps {
  handleDrawerClick: (text: string) => void;
}

export function ToolbarMobile(props: IToolbarMobileProps) {
  const { handleDrawerClick } = props;
  return (
    <React.Fragment>
      <MyToolbarSmall>
        <DrawerMenu handleDrawerClick={handleDrawerClick} />
      </MyToolbarSmall>
    </React.Fragment>
  );
}
