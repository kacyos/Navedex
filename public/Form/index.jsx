import React, { useState } from 'react';
import Header from '../../src/pages/components/Header';
import arrow from '../../../images/icons/arrow.svg';
import './form.css';

export default function Form({ children }) {
  const [name, setName] = useState('ola');
  const [office, setOffice] = useState('ola');
  const [age, setAge] = useState('ola');
  const [projects, setProjects] = useState('ola');
  const [url, setUrl] = useState('ola');

  return (
    <>
      <Header />
      <div className="container">
        <div className="edit">
          <img className="back" src={arrow} alt="voltar" />
          {children}
        </div>
        <div className="left">
          <label>Nome</label>
          <input type="text" value={name} />
          <label>Idade</label>
          <input type="text" />
          <label>Projetos que participou</label>
          <input type="text" />
        </div>
        <div className="right">
          <label>Cargo</label>
          <input type="text" />
          <label>Tempo de empresa</label>
          <input type="text" />
          <label>URL da foto do Naver</label>
          <input type="text" />
        </div>
        <div className="div-button"></div>
      </div>
    </>
  );
}
