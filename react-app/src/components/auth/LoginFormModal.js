import styled from 'styled-components';
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

const Container = styled.div`
  div {
    transition: all 0.25s;
    cursor: pointer;
  }

  div:hover {
    transform: scale(1.1);
  }
`

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <div onClick={() => setShowModal(true)}>Log In</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </Container>
  );
}

export default LoginFormModal;
