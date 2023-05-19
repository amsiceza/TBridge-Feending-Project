import React from 'react'
import "../../../sass/buttons.scss"
import {HiDocumentCheck} from "react-icons/hi2"

const KatTest = () => {
  return (
    <>
    <div>KatTest</div>

    <div><button type="button" className="btn-guardar-lg">    <i><HiDocumentCheck></HiDocumentCheck></i><span>button</span></button></div>

    <div><button type="button" className="btn-guardar-md">guardar</button></div>
 
    </>
  )

}

export default KatTest