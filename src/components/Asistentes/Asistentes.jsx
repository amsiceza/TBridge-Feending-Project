import React, { useEffect } from 'react'
import Asistente from '../Asistente/Asistente'
import { useDispatch } from 'react-redux';
import { getAll } from '../../features/asistentes/asistentesSlice';



const Asistentes = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getAll());
}, []);

  return (
    <div>
        <Asistente/>
    </div>
  )
}

export default Asistentes