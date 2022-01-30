import styled from 'styled-components';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpFormContainer = styled.div`
background-image: url("https://media.discordapp.net/attachments/858135958729392152/933538598978998314/animesher.com_purple-clouds-pretty-anime-girl-cute-784074.png?width=435&height=509");
background-size: cover;
background-position: center;
height: fit-content;
width: 500px;
padding: 5% 0;
box-shadow: 0px 0px 5px 1px;
transition: all 0.5s;
display: flex;
flex-direction: column;

#heading {
  display: flex;
  justify-content: center;
  // background: lightgreen;
  border-bottom: 1px solid white;
  padding-bottom: 5%;
  margin: 0 5%;
}

h1 {
  font-size: 1.5rem;
  border: 1px solid black;
  padding: 2%;
  color: white;
  background-color: rgba(104,75,181, 0.9);
}

#errors {
  color: #ff0033;
  // margin: 0% 5%;
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

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background: lightgreen;
    height: 100%;

    .form-section {
      display: flex;
      padding: 0 5%;
      margin: 2% 0;
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

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <SignUpFormContainer>
      {errors.length > 0 &&
      <ul id="errors">
        <h2>The following errors were found: </h2>
        {errors.map((error, ind) => (
          <li className="error" key={ind}>{error}</li>
        ))}
      </ul>}
      {errors.length === 0 && <div id="heading">
        <h1>Sign up for float</h1>
      </div>}
      <form onSubmit={onSignUp}>
        <div className="form-section">
          <label>User Name</label>
          <input
            placeholder="Your artist name"
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="form-section">
          <label>Email</label>
          <input
            placeholder='Your email address'
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="form-section">
          <label>Password</label>
          <input
            placeholder='Password'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="form-section">
          <label>Repeat Password</label>
          <input
            placeholder='Confirm your password'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="form-section">
          <label>Profile Image URL</label>
          <input
          placeholder="Link to your profile image"
          ></input>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
