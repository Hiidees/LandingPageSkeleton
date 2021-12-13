import Layout from "./Layout";

interface ILayoutControllerProps {}

export function LayoutController(
  props: React.PropsWithChildren<ILayoutControllerProps>
) {
  return <Layout>{props.children}</Layout>;
}
