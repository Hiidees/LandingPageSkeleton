import { Container } from "@mui/material";
import React from "react";
import ParticlesComponent from "../Components/Particles/ParticlesComponent";
import { Footer } from "./Footer/Footer";
import { MyAppBar } from "./Header/MyAppBar";

interface ILayoutProps {
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickOtherProject: () => void;
  onClickContact: () => void;
  handleDrawerClick: (text: string) => void;
}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
  const {
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
