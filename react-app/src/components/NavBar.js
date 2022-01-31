import styled from "styled-components";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';

import { useCreateSongContext } from "../context/CreateSongProvider";
import CreateSongForm from "./songs/CreateSongForm";
import SignupFormModal from "./auth/SignupFormModal";
import LoginFormModal from "./auth/LoginFormModal";
import { logout } from "../store/session";

const NavAndUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Nav = styled.nav`
  z-index: 1001;
  color: white;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 50px;
  border-bottom: 1px solid grey;
  background-color: rgb(104,75,181);

  #float {
    transition: all 0.25s;
    font-style: italic;
  }
  #float:hover {
    transform: scale(1.05);
  }

  ul {
    width: 1180px;
    height: 100%;
    display: flex;
    flex-direction: row;

    li:first-child {
      border-left: 1px solid grey;
    }

    li {
      border-right: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style-type: none;
      a {
        color: white;
      }
    }

    #logo {
      width: 15%;
      height: 100%;
      img {
        height: 50px;
      }
    }

    #home {
      font-family: 'Nanum Myeongjo', serif;
      font-size: 1.8rem;
      font-weight: 700;
      width: 15%;
    }

    #home-long {
      display: flex;
      font-family: 'Nanum Myeongjo', serif;
      font-size: 1.8rem;
      font-weight: 700;
      width: 25%;
    }

    #all-songs {
      cursor: pointer;
      width: 15%;

      div {
        transition: all 0.25s;
      }
      div:hover {
        transform: scale(1.1);
      }
    }

    #logout {
      cursor: pointer;
      width: 10%;

      div {
        transition: all 0.25s;
      }
      div:hover {
        transform: scale(1.1);
      }
    }

    #about {
      display: flex;
      justify-content: center;
      gap: 10px;
      width: 15%;

      img {
        cursor: pointer;
        transition: all 0.25s;
        aspect-ratio: 1;
        width: 20%;
        border-radius: 50%;
      }
      img:hover {
        background: rgb(208,154,245);
        transform: scale(1.05);
      }
    }

    #upload, #profile {
      width: 15%;
    }

    #upload {
      cursor: pointer;

      div {
        transition: all 0.25s;
      }
      div:hover {
        transform: scale(1.1);
      }
    }

    #user-info{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      height: 100%;
      width: 100%;

      #chevron {
        position: relative;
        bottom: 2px;
        color: white;
        width: 20px;
      }

      #user-username {
        margin-right: 2%;
      }

      #profile-options {
        position: absolute;
        width: 206px;
        left: 0;
        top: 50px;
      }

      #user-pfp-container {
        margin-right: 7%;
        aspect-ratio: 1;
        height: 60%;
        border-radius: 50%;
        overflow: hidden;

        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`


const NavBar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const createSong = useCreateSongContext()
  const user = useSelector(state => state.session.user)

  const handleLogout = async() => {
    await dispatch(logout())
  }

  return (
    <NavAndUploadContainer>
      <Nav>
        <ul>
          <li id="logo">
            <NavLink to='/' exact={true} activeClassName='active'>
              <img src="https://media.discordapp.net/attachments/858135958729392152/937537433170493500/lotus-flower-Mi2y0m8K-removebg-preview.png?width=681&height=325"></img>
            </NavLink>
          </li>
          {user && <li id="home">
            <NavLink to='/' exact={true} activeClassName='active'>
              <div id="float">f l o a t .</div>
            </NavLink>
          </li>}
          {!user && <li id="home-long">
            <NavLink to='/' exact={true} activeClassName='active'>
              <div id="float">f l o a t .</div>
            </NavLink>
          </li>}
          <li onClick={() => history.push("/all")} id="all-songs">
            <div>All songs</div>
          </li>
          {user && <li
          onClick={() => {
            createSong.visible ? createSong.hide() : createSong.show();
          }}
          id="upload">
            <div>Upload</div>
          </li>}
          {!user && <li id="upload">
            <SignupFormModal />
          </li>}
          <li id="profile">
            {!user && <LoginFormModal />}
            {user &&
            <div id="user-info">
              <div id="user-pfp-container">
                <img src={user ? user.image ? user.image : "https://media.discordapp.net/attachments/858135958729392152/935040055888719892/user.png" : "https://media.discordapp.net/attachments/858135958729392152/935040055888719892/user.png"}></img>
              </div>
              <span id="user-username">{user.username}</span>
            </div>}
          </li>
          {user &&
          <li onClick={handleLogout} id="logout">
            <div>Log out</div>
          </li>}
          <li id="about">
            <img onClick={() => window.open("https://github.com/andyrose507")} src="https://media.discordapp.net/attachments/858135958729392152/937417777793347614/github_1.png"></img>
            <img onClick={() => window.open("https://www.linkedin.com/in/andy-jones-a2519b173/")} src="https://media.discordapp.net/attachments/858135958729392152/937417953132052500/linkedin_2.png"></img>
          </li>
        </ul>
      </Nav>
      <CreateSongForm />
    </NavAndUploadContainer>
  );
}

export default NavBar;
