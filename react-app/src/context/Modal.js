import styled from 'styled-components';
import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const ModalContainer = styled.div`
    #modal {
        z-index: 1000;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #modal-background {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.7);
      }

      #modal-content {
        z-index: 1001;
        position: absolute;
        background-color:white;
    }
`

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <ModalContainer>
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                {children}
            </div>
        </div>
    </ModalContainer>,
    modalNode
  );
}
