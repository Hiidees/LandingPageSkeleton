import useMediaQuery from "@mui/material/useMediaQuery";
import { ToolbarDesktop } from "../../Components/Toolbar/ToolbarDesktop";
import { ToolbarMobile } from "../../Components/Toolbar/ToolbarMobile";
import { AppBarStyle, MyBoxAppbar } from "./HeaderStyle";

export interface IAppBarProps {
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickOtherProject: () => void;
  onClickContact: () => void;
  handleDrawerClick: (text: string) => void;
}

export function MyAppBar(props: IAppBarProps) {
  const matches = useMediaQuery("(min-width:600px)");
  const {
    onClickHome,
    onClickDM,
    onClickMM,
    onClickOtherProject,
    onClickContact,
    handleDrawerClick,
  } = props;
  return (
    <div>
      <MyBoxAppbar>
        <AppBarStyle position="static">
          {matches ? (
            <ToolbarDesktop
              onClickHome={onClickHome}
              onClickDM={onClickDM}
              onClickMM={onClickMM}
              onClickOtherProject={onClickOtherProject}
              onClickContact={onClickContact}
            />
          ) : (
            <ToolbarMobile handleDrawerClick={handleDrawerClick} />
          )}
        </AppBarStyle>
      </MyBoxAppbar>
    </div>
  );
}
