import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
        setErrorMessage('El correo electrónico no es válido');
        return;
      }
  
      if (!validatePassword(password)) {
        setErrorMessage('La contraseña debe tener al menos 6 caracteres');
        return;
      }

    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
    setErrorMessage('');
  };

  
  const validateEmail = (email) => {
    // Expresión regular para validar el formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  return (
    
    <div className="container">
      <h2>Inicia sesión</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="input-style"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="input-style"
          />
        </div>
        <button type="primary"  htmlType="submit" className='button-login'>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;