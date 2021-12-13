import useMediaQuery from "@mui/material/useMediaQuery";
import SupportedLangugesEnum from "../../../Commons/Enums";
import { ToolbarDesktop } from "../../Commons/Toolbar/ToolbarDesktop";
import { ToolbarMobile } from "../../Commons/Toolbar/ToolbarMobile";
import { AppBarStyle, MyBoxAppbar } from "./HeaderStyle";

export interface IAppBarProps {
  onChangeTranslation: (languageCode: SupportedLangugesEnum) => void;
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
    onChangeTranslation,
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
              onChangeTranslation={onChangeTranslation}
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
