import React from 'react'
import '../Component/Button.scss'

const Button = ({ text,bookAppointment }) => {
  return (
    <button id='btn_btn' onClick={bookAppointment}><span>{text}</span></button>

  )
}

export default Button