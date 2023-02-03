export default function Header({ text = "Header text" }) {
  return <div className='header'>
    <hr className="line" />
    <h1>{text}</h1>
    <hr className="line" />
  </div>
}