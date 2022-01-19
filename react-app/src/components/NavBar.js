import styled from "styled-components";
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 5%;
  border-bottom: 1px solid grey;

  ul {
    background: lightgrey;
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
    }

    #logo {
      width: 15%;
      height: 100%;
    }

    #home {
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
  return (
    <Nav>
      <ul>
        <li id="logo">
          <NavLink to='/' exact={true} activeClassName='active'>
            Logo
          </NavLink>
        </li>
        <li id="home">
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li id="search">
          Search
        </li>
        <li id="upload">
          Upload
        </li>
        <li id="profile">
          Profile
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
