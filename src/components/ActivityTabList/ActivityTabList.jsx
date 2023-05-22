import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeDay } from '../../features/program/programSlice';
import { HiPlusSmall } from 'react-icons/hi2';
import "../../sass/input.scss"


const ActivityTabList = () => {

const {currentDay}  = useSelector((state) => state.program);
const dispatch = useDispatch();

const [tabCounter, setTabCounter] = useState(1)
const [selectedButton, setSelectedButton] = useState(1)
const [tabs, setTabs] = useState([
<button key={1} className={selectedButton == 1  ? 'btn-tab-day-selected' : 'btn-tab-day'} value={1}>
      DÍA 1
</button>
]);


useEffect (() => {
  console.log(currentDay)
  console.log("this is tabcounter", tabCounter)
  setSelectedButton(currentDay)
}, [currentDay])


const handleTabChange= (day) => {
    console.log("changing tabs, ", day)
    dispatch(changeDay(day))
}

const addDay = () => {
    console.log(tabCounter)
       const newTab = (
      <button 
      key={tabCounter} 
      className={currentDay == tabCounter  ? 'btn-tab-day-selected' : 'btn-tab-day'} 
       
      value={tabCounter}
      onClick={() => handleTabChange(tabCounter)}
      >
        DÍA {tabCounter}
      </button>
    );
    setTabCounter(tabCounter+1)
    setTabs([...tabs, newTab]);
    console.log(tabCounter)
  };
  
  
  
    return (
    <>
    
    {tabs}

   <button className="btn-tab-plus" onClick={addDay}><span><HiPlusSmall /></span></button>
    
    </>
  )
}

export default ActivityTabList