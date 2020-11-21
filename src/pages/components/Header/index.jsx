import React from 'react';
import './style.css';
import {useHistory} from 'react-router-dom'
import logo from '../../../images/logo.svg';


export default function Header() {
  const history = useHistory();

  function exit() {
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <>
      <header className="headerNave">
        <img src={logo} alt="Logo Nave.rs"/>
        <button onClick={exit}>Sair</button>
      </header>
    </>
  );
}
