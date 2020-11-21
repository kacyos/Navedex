import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

const portalRoot = document.getElementById('modal-root');

const Modal = ({ isOpen, onClickClose, deleteUser }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div className="modal-delete">
        <h2>Excluir Naver</h2>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <button className="cancel" onClick={onClickClose}>Cancelar</button>
        <button className="delete" onClick={deleteUser}>Excluir</button>
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
