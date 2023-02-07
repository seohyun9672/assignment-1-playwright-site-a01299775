import { useEffect, useState } from "react"
import { words, src } from "../../data/pagedata"
import Image from "next/image";

export default function Carousel() {
  // const [imgNum, setImageNum] = useState(0);
  const [count, setCount] = useState(0);

  const [img, setImage] = useState(`/carousel-images/${count}.jpg`);
  const [value, setValue] = useState(words[0].value);

  function nextImage() {
    setCount(count + 1);
    setImage(`/carousel-images/${count}.jpg`);
    setValue(words[count].value)
  }

  function previousImage() {
    setCount(count - 1);
    setImage(`/carousel-images/${count}.jpg`)
    setValue(words[count].value)
  }

  return (<div className="carousel">
    <div className="arrow-cont">
    <img className="arrow" src="/icons/leftArrow.png" onClick={previousImage}></img>
      <div id="testOnImageHere">{value}</div>
      <img className="arrow" src="/icons/rightArrow.png" onClick={nextImage}></img>
    </div>
    <img src={img} id="carouselImage" />
  </div>)
}