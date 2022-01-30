import styled from 'styled-components';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginFormContainer = styled.div`
background-image: url("https://media.discordapp.net/attachments/858135958729392152/933538598978998314/animesher.com_purple-clouds-pretty-anime-girl-cute-784074.png?width=435&height=509");
background-size: cover;
background-position: center;
height: fit-content;
width: 400px;
padding: 10% 0;
box-shadow: 0px 0px 5px 1px;
transition: all 0.5s;

#errors {
  color: #ff0033;
  margin: 0% 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: fit-content;
  border: 1px solid black;
  padding: 2%;
  background-color: rgba(104,75,181, 0.9);
  list-style-type: circle;

  .error {
    align-self: flex-start;
    margin-left: 5%;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 3%;
  }
}

button {
  transition: all 0.25s;
  cursor: pointer;
  color: white;
  padding: 2% 0;
  background-color: rgba(104,75,181, 0.9);
  border: 1px solid black;
  font-size: 1.25rem;
  margin: 0 5%;
}
button:hover{
  transform: scale(1.025);
}

#not-member {
  display: flex;
  justify-content: center;
  margin: 0 5%;
  padding-bottom: 10%;
  border-bottom: 1px solid white;
  // background: lightgreen;

  span {
    border-left: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    color: white;
    background-color: rgba(104,75,181, 0.9);
    font-size: 1.5rem;
    padding: 2%;
    padding-right: 1%;
  }

  a {
    border-right: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    cursor: pointer;
    padding: 2%;
    color: white;
    text-decoration: underline;
    background-color: rgba(104,75,181, 0.9);
    font-size: 1.5rem;
  }
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background: lightgreen;
    height: 100%;

    .form-section {
      display: flex;
      padding: 0 5%;
      margin: 5% 0;
      flex-direction: column;
      // background: green;

      label {
        color: white;
        border: 1px solid black;
        background-color: rgba(104,75,181, 0.9);
        width: fit-content;
        padding: 1%;
        margin-bottom: 5px;
        font-size: 1.25rem;
      }

      input {
        transition: all 0.25s;
        border: 1px solid grey;
        background-color: rgb(207,218,245);
        padding: 2%;
        font-size: 1.20rem;
      }
      input:focus {
        transform: scale(1.025)
      }
      input:hover {
        border: 1px solid black;
      }
      input::placeholder {
        color: black;
        opacity: 0.6;
      }
    }
  }
`

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onLogin}>
        {errors.length > 0 &&
        <ul id="errors">
          <h2>The following errors were found: </h2>
          {errors.map((error, ind) => (
            <li className="error" key={ind}>{error}</li>
          ))}
        </ul>}
        <div id="not-member">
          <span>Not on float yet?</span>
          <a>Sign up</a>
        </div>
        <div className="form-section">
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Your email address'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="form-section">
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
