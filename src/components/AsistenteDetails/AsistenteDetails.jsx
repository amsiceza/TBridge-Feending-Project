import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { getById } from "../../features/asistentes/asistentesSlice";

const AsistenteDetails = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const { asistente } = useSelector((state) => state.asistentes);

  useEffect(() => {

    dispatch(getById(id));

  }, []);

  return (
    <div>
      <h1>AsistenteDetails</h1>
      { asistente ? 
        <>
          <p>{asistente.name}</p>
          <p>{asistente.details}</p>
        </>
        :
        <p>Loading...</p>
      }
    </div>
  );
};

export default AsistenteDetails;
