import React from 'react'
import "../../sass/buttons.scss"
import {HiDocumentCheck} from "react-icons/hi2"


const BtnSave = () => {
  return (
    <>
      <button type="button" className="btn-green-md"><span>
        <HiDocumentCheck></HiDocumentCheck>
        Guardar</span></button>
    </>
  )
}

export default BtnSave