import PageNavigator from "../PageNavigator/PageNavigator";
import Menu from "../Menu/Menu";
import { src, pageArr } from "../../data/pagedata";

export default function Layout({ children }) {
  return <>
    <Menu />
    <main>{children}</main>
  </>
}