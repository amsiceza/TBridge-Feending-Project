import React from 'react'
import "../../sass/buttons.scss"
import { HiClock } from "react-icons/hi2"

const ProgramNotification = () => {
  return (
    <>
     <button type="button" className="btn-green-lg1"><span><HiClock></HiClock>Programar</span></button>
    </>
  )
}

export default ProgramNotification