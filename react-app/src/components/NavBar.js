import styled from "styled-components";
import React from 'react';
import { NavLink } from 'react-router-dom';
import CreateSongProvider, { useCreateSongContext } from "../context/CreateSongProvider";
import CreateSongForm from "./songs/CreateSongForm";

const NavAndUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Nav = styled.nav`
  color: white;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 5vh;
  border-bottom: 1px solid grey;
  background-color: rgb(104,75,181);

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
    }

    #home {
      font-family: 'Nanum Myeongjo', serif;
      font-size: 1.8rem;
      font-weight: 700;
      width: 15%;
    }

    #search {
      width: 35%;
    }

    #upload, #profile {
      width: 17.5%;
    }
  }
`


const NavBar = () => {
  const createSong = useCreateSongContext()

  return (
    <NavAndUploadContainer>
      <Nav>
        <ul>
          <li id="logo">
            <NavLink to='/' exact={true} activeClassName='active'>
              Icon
              {/* <img src="https://pbs.twimg.com/media/Dm1Zg7EWwAIT3ro.png"></img> */}
            </NavLink>
          </li>
          <li id="home">
            <NavLink to='/' exact={true} activeClassName='active'>
              f l o a t .
            </NavLink>
          </li>
          <li id="search">
            Search
          </li>
          <li
          onClick={() => {
            createSong.visible ? createSong.hide() : createSong.show();
          }}
          id="upload">
            Upload
          </li>
          <li id="profile">
            Profile
          </li>
        </ul>
      </Nav>
      <CreateSongForm />
    </NavAndUploadContainer>
  );
}

export default NavBar;
