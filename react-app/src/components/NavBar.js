import styled from "styled-components";
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  color: white;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 5%;
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
  return (
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
