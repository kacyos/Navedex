import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createNaver } from '../../api/services/serviceCreate';
import moment from 'moment';
import Header from '../components/Header';
import ModalFeedBack from '../components/ModalFeedback';
import {
  Container,
  Control,
  ImgBack,
  DivInput,
  DivButton,
} from '../../styled/form';

export default function EditNaver() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [project, setProject] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [url, setUrl] = useState('');
  const [feedBack, setFeedBack] = useState('');
  const [feedBackTitle, setFeedBackTitle] = useState('');
  const [feedText, setFeedText] = useState('');
  const history = useHistory();

  function convertDate(age) {
    const year = String(moment().year().toFixed() - age);
    const fullData = moment(year).format(`DD/MM/YYYY`);
    return fullData;
  }

  function submitCreate(event) {
    const admission = convertDate(admissionDate);
    const age = convertDate(birthDate);
    const response = createNaver(jobRole, admission, age, name, project, url);
    
    event.preventDefault();
    if (response.errorCode) {
      setFeedBackTitle('Erro');
      setFeedText('Erro ao criar naver');
      setFeedBack(true);
      
    } else {
      
      setFeedBackTitle('Naver criado');
      setFeedText('Naver criado com sucesso!');
      setFeedBack(true);
    }

    return;
  }

  function closeModal() {
    setFeedBack(false);
    history.replace('/navers/index');
  }

  return (
    <>
      <Header />
      <Container>
        <Control>
          <ImgBack onClick={() => history.replace('/navers/index')} />
          <span>Adicionar Naver</span>
        </Control>
        <form onSubmit={submitCreate}>
          <DivInput>
            <label>Nome</label>
            <input
              required
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Idade</label>
            <input
              required
              type="number"
              min="0"
              placeholder="Idade"
              onChange={(e) => setBirthDate(e.target.value)}
              value={birthDate}
            />
            <label>Projetos que participou</label>
            <input
              required
              type="text"
              placeholder="Projetos que participou"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </DivInput>
          <DivInput>
            <label>Cargo</label>
            <input
              required
              type="text"
              placeholder="Cargo"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            />
            <label>Tempo de empresa</label>
            <input
              required
              type="number"
              min="0"
              placeholder="Tempo de empresa"
              value={admissionDate}
              onChange={(e) => setAdmissionDate(e.target.value)}
            />
            <label>URL da foto do Naver</label>
            <input
              required
              type="url"
              placeholder="URL da foto do Naver"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </DivInput>
          <DivButton>
            <button>Salvar</button>
          </DivButton>
        </form>
      </Container>
      <ModalFeedBack isOpen={feedBack} onClickClose={closeModal}>
        <h2>{feedBackTitle}</h2>
        <p>{feedText}</p>
      </ModalFeedBack>
    </>
  );
}
