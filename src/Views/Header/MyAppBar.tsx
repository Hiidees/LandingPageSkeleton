import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerMenu from "./DrawerMenu";
import {
  AppBarStyle,
  MyBoxAppbar,
  MyToolbarLarge,
  MyToolbarSmall,
  MyButtonAppBar,
} from "./HeaderStyle";

export interface IAppBarProps {}

export function MyAppBar(props: IAppBarProps) {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <MyBoxAppbar>
        <AppBarStyle position="static">
          {matches ? (
            <MyToolbarLarge>
              <MyButtonAppBar color="inherit">Home</MyButtonAppBar>
              <MyButtonAppBar color="inherit">Contact me</MyButtonAppBar>
              <MyButtonAppBar color="inherit">About me</MyButtonAppBar>
              <MyButtonAppBar color="inherit">My Portfolio</MyButtonAppBar>
            </MyToolbarLarge>
          ) : (
            <MyToolbarSmall>
              <DrawerMenu />
            </MyToolbarSmall>
          )}
        </AppBarStyle>
      </MyBoxAppbar>
    </div>
  );
}
