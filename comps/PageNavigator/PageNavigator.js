import { pageArr, src } from "../../data/pagedata";

export default function PageNavigator({
  onNext = () => { },
  onPrevious = () => { },
  pageNum = 0
}) {

  return <div className="page-navigator">
    {
      pageNum > 0 && pageNum < pageArr.length && <a>
        <span>
          <img className="arrow" src={src.upward} onClick={onPrevious} alt="arrow icon upward" />
        </span>
      </a>
    }
    {
      pageNum < pageArr.length - 1 && <a>
        <span >
          <img className="arrow" src={src.downward} onClick={onNext} alt="arrow icon downward" />
        </span>
      </a>
    }
  </div>
}