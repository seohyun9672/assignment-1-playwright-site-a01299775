import PageNavigator from "../PageNavigator/PageNavigator";
import Menu from "../Menu/Menu";

export default function Layout({ children }) {
  const src = "/icons/graduation-hat.png";

  return <>
    <div>
      <div className="icon-cont">
        <Menu />
        <img className="icon" src={src} />
      </div>
      <main>{children}</main>
      <PageNavigator />
    </div>
  </>
}