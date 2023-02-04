import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { pageArr } from "../../data/pagedata";

export default function PageNavigator({
  onNext = () => { },
  onPrevious = () => { },
  pageNum = 0
}) {
  
  const src = {
    upward: "/icons/upwardArrow.png",
    downward: "/icons/downwardArrow.png"
  };

  return <div>
    {
      pageNum > 0 && pageNum < pageArr.length && <Image width={100} height={100} src={src.upward} onClick={onNext} />
    }
    {
      pageNum < pageArr.length-1 && <Image width={100} height={100} src={src.downward} onClick={onPrevious} />
    }
  </div>
}