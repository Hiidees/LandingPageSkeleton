import Container from "@mui/material/Container";
import React from "react";
import ParticlesComponent from "../Commons/Particles/ParticlesComponent";
import { FooterController } from "./Footer/FooterController";
import { HeaderController } from "./Header/HeaderController";

interface ILayoutProps {}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
  return (
    <React.Fragment>
      <ParticlesComponent />
      <HeaderController />

      <Container maxWidth="md">{props.children}</Container>

      <footer>
        <FooterController />
      </footer>
    </React.Fragment>
  );
}
