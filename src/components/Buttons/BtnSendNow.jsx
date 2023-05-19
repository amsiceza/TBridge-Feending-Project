import React from 'react'
import "../../sass/buttons.scss"
import { HiEnvelope} from "react-icons/hi2"

const BtnSendNow = () => {
  return (
    <>
     <button type="button" className="btn-green-lg"><span><HiEnvelope></HiEnvelope>Enviar ahora</span></button>
    </>
  )
}

export default BtnSendNow