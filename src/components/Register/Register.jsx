import React, { useState } from "react";
import "./Register.scss"
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import Hands from "../../assets/hands.png"


const Register = () => {
  

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "",
    puesto: "",
    empresa: "",
    imagen: "",
  });

  const { nombre, email, password, puesto, empresa, imagen } = formData;

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData))
  };

  return (
    <div className="formContainer">
      <div className="title">
        <img src={Hands} alt="" />
        <h1 className="header-title register">  Feevents</h1>
      </div>
        <div>
          
            <form className="formRegister" onSubmit={onSubmit}>
            <hr />
            <input className="inputRegister" type="text" name="nombre" value={nombre} onChange={onChange} placeholder="Escribe tu nombre"/>
            <input className="inputRegister" type="email" name="email" value={email} onChange={onChange} placeholder=" Correo electronico"/>
            <input className="inputRegister"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Inserta tu contraseña"
            />
            <input className="inputRegister" type="text" name="puesto" value={puesto} onChange={onChange} placeholder="Puesto de trabajo"/>
            <input className="inputRegister" type="text" name="empresa" value={empresa} onChange={onChange} placeholder="Nombre de la empresa"/>
            <div className="select-files"><input className="inputFiles" type="file" name="imagen" value={imagen} onChange={onChange} placeholder="imagen"/></div>
            <div className="container-btn-r">
              <button className="btn-register" type="submit">Register</button>
            </div>
            </form>
        </div>
    </div>
  );
};

export default Register;
