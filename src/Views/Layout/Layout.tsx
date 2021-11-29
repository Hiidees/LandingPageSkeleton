import { Container } from "@mui/material";
import ParticlesComponent from "../../utils/ParticlesComponent";
import { Footer } from "../Footer/Footer";
import { MyAppBar } from "../Header/MyAppBar";

interface ILayoutProps {
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickAltriProgetti: () => void;
  onClickContact: () => void;
}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
  const {
    onClickHome,
    onClickDM,
    onClickMM,
    onClickAltriProgetti,
    onClickContact,
  } = props;
  return (
    <div>
      <ParticlesComponent />
      <MyAppBar
        onClickHome={onClickHome}
        onClickDM={onClickDM}
        onClickMM={onClickMM}
        onClickAltriProgetti={onClickAltriProgetti}
        onClickContact={onClickContact}
      />

      <Container maxWidth="md">{props.children}</Container>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
