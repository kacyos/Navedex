import React from 'react';
import ReactDom from 'react-dom';
import './modal.css';
import close from '../../../images/icons/close.svg';

const portalRoot = document.getElementById('modal-root');

const Modal = ({ isOpen, onClickClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button type="button" className="close" onClick={onClickClose}>
          <img src={close} alt="close"/>
        </button>
        {children}        
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;


