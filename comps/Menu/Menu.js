import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { src } from "../../data/pagedata";

export default function Menu() {

  const router = useRouter();
  const [open, setOpen] = useState(false);

  function expandMenu() {
    setOpen(true);
  }

  function changePage(page) {
    router.push(page);
    setOpen(false);
  }

  return <>
    <Image width={50} height={50} onClick={expandMenu} src={src.menu.default} alt="Menu icon" />
    <img className="icon" src={src.logo} />
    {
      open && <div className="menu">
        <div className="close" onClick={() => setOpen(false)}>
          <h1>X</h1>
        </div>
        <ul className="menu-list">
          <li onClick={() => changePage("/")}>Home</li>
          <li onClick={() => changePage("/about")}>About</li>
          <li onClick={() => changePage("/contact")}>Contact</li>
        </ul>
      </div>
    }
  </>
}