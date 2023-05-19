import React from 'react'
import "../../../sass/buttons.scss"
import { HiDocumentCheck, HiClipboardDocumentList, HiClipboardDocumentCheck, HiEnvelope, HiClock, HiChevronRight, HiMapPin, HiChevronDown, HiCalendar } from "react-icons/hi2"


import React from 'react'

const BtnTime = () => {

//needs dropdown

    return (
    <>
    <button type="button" className="btn-time">
    <span>
      <HiClock></HiClock>         
              20:30
      <HiChevronDown></HiChevronDown>
   
    </span>
</button>
    </>
  )
}

export default BtnTime