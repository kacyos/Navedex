import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';

import { loadHome } from '../../api/services/serviceHome';
import { deleteUser } from '../../api/services/serviceDelete';

import deleteIcon from '../../images/icons/deleteIcon.svg';
import editIcon from '../../images/icons/editIcon.svg';

import { Container, Title, Button, List, Card, ModalDiv } from './styled';
import Modal from '../components/ModalViewNaver';
import ModaDelete from '../components/ModalDelete';
import ModalFeedBack from '../components/ModalFeedback';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [showUser, setShowUser] = useState(null);
  const [userID, setuserID] = useState(null);
  const [feedBack, setFeedBack] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function load() {
      const result = await loadHome();
      setUsers(result);
    }
    load();
  }, [users]);

  function deleteNaver(id) {
    deleteUser(id);
    setuserID(null);
    setShowUser();
    setFeedBack(true);
    return <ModalFeedBack />;
  }

  function calculateTime(date) {
    const age = Math.floor(
      moment(new Date()).diff(moment(date), 'years', true)
    );
    return `${age} anos`;
  }

  return (
    <Container>
      <Header />
      <Title>Navers</Title>
      <Button onClick={()=>history.push('/navers/create')}>Adicionar Naver</Button>
      <List>
        {users.map((user) => (
          <Card key={user.id}>
            <img
              src={user.url}
              alt={user.name}
              onClick={() => setShowUser(user)}
            />
            <p className="userName">{user.name}</p>
            <p className="userJob">{user.job_role}</p>
            <button>
              <img
                alt="delete Icon"
                src={deleteIcon}
                onClick={() => setuserID(user.id)}
              />
            </button>
            <button onClick={() => history.push(`/navers/update/${user.id}`)}>
              <img alt="edit Icon" src={editIcon} className="edit" />
            </button>
          </Card>
        ))}
      </List>

      <Modal isOpen={Boolean(showUser)} onClickClose={() => setShowUser(null)}>
        {showUser ? (
          <ModalDiv>
            <img src={showUser.url} alt="" />
            <div>
              <h2>{showUser.name}</h2>
              <p>{showUser.job_role}</p>
              <h3>idade</h3>
              <p>{calculateTime(showUser.birthdate)}</p>
              <h3>Tempo de empresa</h3>
              <p>{calculateTime(showUser.admission_date)}</p>
              <h3>Projetos que participou</h3>
              <p>{showUser.project}</p>
              <button className="trash">
                <img
                  alt={showUser.name}
                  src={deleteIcon}
                  onClick={() => setuserID(showUser.id)}
                />
              </button>
              <button
                onClick={() => history.push(`/navers/update/${showUser.id}`)}
              >
                <img alt="edit Icon" src={editIcon} className="edit" />
              </button>
            </div>
          </ModalDiv>
        ) : null}
      </Modal>

      <ModaDelete
        isOpen={Boolean(userID)}
        onClickClose={() => setuserID(null)}
        deleteUser={() => deleteNaver(userID)}
      ></ModaDelete>
      <ModalFeedBack isOpen={feedBack} onClickClose={() => setFeedBack(false)}>
        <h2>Naver excluído</h2>
        <p>Naver excluído com sucesso!</p>
      </ModalFeedBack>
    </Container>
  );
}
