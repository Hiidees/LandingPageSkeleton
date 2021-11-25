import { Container } from "@mui/material";
import { Footer } from "../Footer/Footer";
import { MyAppBar } from "../Header/MyAppBar";

interface ILayoutProps {}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
  return (
    <div>
      <MyAppBar />

      <Container maxWidth="md">{props.children}</Container>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
