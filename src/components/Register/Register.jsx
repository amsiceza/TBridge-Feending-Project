import React, { useState } from "react";
import "./Register.scss"
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

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

  const { nombre, email, password, role, puesto, empresa, imagen } = formData;

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
        <div>
            <form className="formRegister" onSubmit={onSubmit}>
            <input className="inputRegister" type="text" name="nombre" value={nombre} onChange={onChange} placeholder="nombre"/>
            <input className="inputRegister" type="email" name="email" value={email} onChange={onChange} placeholder="email"/>
            <input className="inputRegister"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="password"
            />
            <input className="inputRegister" type="text" name="role" value={role} onChange={onChange} placeholder="role"/>
            <input className="inputRegister" type="text" name="puesto" value={puesto} onChange={onChange} placeholder="puesto"/>
            <input className="inputRegister" type="text" name="empresa" value={empresa} onChange={onChange} placeholder="empresa"/>
            <input className="inputRegister" type="text" name="imagen" value={imagen} onChange={onChange} placeholder="imagen"/>
            <button type="submit">Register</button>
            </form>
        </div>
    </div>
  );
};

export default Register;
