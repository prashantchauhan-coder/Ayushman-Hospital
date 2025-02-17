import React from 'react'
import '../Component/Button.scss'

const Button = ({ text }) => {
  return (
    <button id='btn_btn'><span>{text}</span></button>

  )
}

export default Button