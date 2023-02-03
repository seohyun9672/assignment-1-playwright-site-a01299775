import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function PageNavigator() {

  const [page, setPage] = useState("home");
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    setPageNum();
  }, [])

  const src = {
    upward: "/icons/upwardArrow.png",
    downward: "/icons/downwardArrow.png"
  };

  function nextPage() {
    pageNum + 1;
  }

  function previousPage() {
    pageNum - 1;
  }

  const router = useRouter();

  return <div className="icon-cont arrow">
    {
      page !== "home" && <img className="icon" src={src.upward} onClick={previousPage} />
    }
    {
      page !== "contact" && <img className="icon" src={src.downward} onClick={nextPage} />
    }
  </div>
}