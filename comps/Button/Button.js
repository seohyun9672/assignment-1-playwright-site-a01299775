export default function Button(
  { text = "button text", handleClick = () => { }, href = "" }
) {
  return <a href={href} >
    <button onClick={handleClick}>{text}</button>
  </a>
}