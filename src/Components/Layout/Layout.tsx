import { Container } from "@mui/material";
import React from "react";
import SupportedLangugesEnum from "../../Commons/Enums";
import ParticlesComponent from "../Commons/Particles/ParticlesComponent";

import { Footer } from "./Footer/Footer";
import { MyAppBar } from "./Header/MyAppBar";

interface ILayoutProps {
  onChangeTranslation: (languageCode: SupportedLangugesEnum) => void;
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickOtherProject: () => void;
  onClickContact: () => void;
  handleDrawerClick: (text: string) => void;
}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
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
    <React.Fragment>
      <ParticlesComponent />
      <MyAppBar
        onChangeTranslation={onChangeTranslation}
        onClickHome={onClickHome}
        onClickDM={onClickDM}
        onClickMM={onClickMM}
        onClickOtherProject={onClickOtherProject}
        onClickContact={onClickContact}
        handleDrawerClick={handleDrawerClick}
      />

      <Container maxWidth="md">{props.children}</Container>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
