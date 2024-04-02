
import React from 'react'
interface Props {
  children: String;
  color?: "primary" | "secondary";
  clicked: () => void;
}

const Button = ({children, clicked, color}:Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-"+color} onClick={clicked}>{children}</button>
    </div>
  )
}

export default Button


