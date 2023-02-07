import Image from "next/image";
import { use, useEffect, useState } from "react";
import { pageArr, src } from "../../data/pagedata";
import { useRouter } from "next/router";

export default function PageNavigator({
  onNext = () => { },
  onPrevious = () => { },
  pageNum = 0
}) {

  return <div className="page-navigator">
    {
      pageNum > 0 && pageNum < pageArr.length && <Image width={100} height={100} src={src.upward} onClick={onPrevious} alt="arrow icon upward" />
    }
    {
      pageNum < pageArr.length - 1 && <Image width={100} height={100} src={src.downward} onClick={onNext} alt="arrow icon downward" />
    }
  </div>
}