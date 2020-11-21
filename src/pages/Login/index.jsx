import React, { useState } from 'react';
import { FormLogin, Logo, Input, Label, ButtonLogin } from './styled';
import login from '../../api/services/serviceLogin';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function submit(event) {
    event.preventDefault();
    const response = await login(email, password);

    if (response > 200) {
      alert('Login ou Senha inválidos');
      return;
    }

    history.replace('/navers/index');
  }

  return (
    <FormLogin onSubmit={submit}>
      <Logo />
      <Label>
        E-mail
        <Input type="email" placeholder="E-mail" onChange={handleEmail} />
      </Label>
      <Label>
        Senha
        <Input type="password" placeholder="Senha" onChange={handlePassword} />
      </Label>
      <ButtonLogin>Entar</ButtonLogin>
    </FormLogin>
  );
}
