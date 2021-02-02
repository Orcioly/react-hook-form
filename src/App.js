import React from 'react';
import { useForm } from "react-hook-form";
import './styles.css';


function App() {

  const { register, handleSubmit, errors } = useForm();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const onSubmit = data => {
    console.log(data);
  };

  const validateUserName = async (value) => {
    await sleep(1000);
    if (value === 'bill') return true;

    return false;
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <label>Primeiro Nome:</label>
      <input
        name="firstname"
        ref={register({ required: true, minLength: 2 })}
      />
      {errors.firstname && errors.firstname.type === "required" && (
        <p>Campo requerido</p>
      )}
      {errors.firstname && errors.firstname.type === "minLength" && (
        <p>O campo requer no mínimo 02 caractéres</p>
      )}

      <label>Segundo Nome:</label>
      <input name="lastname" ref={register({ required: true })} />
      {errors.lastname && <p>Campo requerido</p>}

      <label>Genero</label>
      <select name="gender" ref={register({ required: true })}>
        <option value="">Selecione...</option>
        <option value="Male">Masculino</option>
        <option value="Female">Feminino</option>
      </select>
      {errors.gender && <p>Campo requerido</p>}

      <label>Usuario:</label>
      <input name="username" ref={register({ required: true, validate: validateUserName })} />
      {errors.username && <p>Campo requerido</p>}

      <label>Email:</label>
      <input name="email" ref={register({ required: true })} />
      {errors.email && <p>Campo requerido</p>}

      <label>Sobre você:</label>
      <textarea name="aboutYou" ref={register({ required: true })} />
      {errors.aboutYou && <p>Campo requerido</p>}

      <input type="submit" />
    </form>

  );
}

export default App;
