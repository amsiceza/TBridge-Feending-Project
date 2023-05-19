import React from 'react'
import "../../sass/buttons.scss"
import { HiClipboardDocumentList} from "react-icons/hi2"


const BtnRevision = () => {
  return (
    <>
        <button type="button" className="btn-green-lg">    <span className="iconText">
          <HiClipboardDocumentList></HiClipboardDocumentList>
        Enviar a revisión</span>
        </button>
    </>
  )
}

export default BtnRevision