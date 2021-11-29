import Layout from "./Layout";
import { useHistory } from "react-router-dom";

interface ILayoutControllerProps {}

export function LayoutController(
  props: React.PropsWithChildren<ILayoutControllerProps>
) {
  const history = useHistory();

  function onClickHome() {
    history.push("/");
  }

  function onClickDM() {
    history.push("/digitalmarketing");
  }

  function onClickMM() {
    history.push("/micamacho");
  }

  function onClickAltriProgetti() {
    history.push("/altriprogetti");
  }

  function onClickContact() {
    history.push("/contatti");
  }

  return (
    <Layout
      onClickHome={onClickHome}
      onClickDM={onClickDM}
      onClickMM={onClickMM}
      onClickAltriProgetti={onClickAltriProgetti}
      onClickContact={onClickContact}
    >
      {props.children}
    </Layout>
  );
}
