import styled from 'styled-components';
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignUpForm'
import LoginForm from './LoginForm';

const Container = styled.div`
  div {
    transition: all 0.5s;
    cursor: pointer;
  }

  div:hover {
    transform: scale(1.1);
  }
`

function SignupFormModal() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Container>
      <div onClick={() => setShowSignup(true)}>Sign up</div>
      {showSignup && (
        <Modal onClose={() => setShowSignup(false)}>
          <SignupForm />
        </Modal>
      )}
    </Container>
  );
}

export default SignupFormModal;
