import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo/logo2.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/resume">Create Resume</Link>
          </li>
        </ul>
        <div className="nav-button">
          <button>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Signup
            </Link>
          </button>
          <button>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              Signin
            </Link>
          </button>
        </div>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="/" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/resume" onClick={() => setNavbarState(false)}>
              Create Resume
            </a>
          </li>
          <li>
            <a href="/signin" onClick={() => setNavbarState(false)}>
              Signin
            </a>
          </li>
          <li>
            <a href="/signup" onClick={() => setNavbarState(false)}>
              Signup
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 10rem;
  }
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #008080;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #034d4d;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #9c9c9c;
    font-size: 15px;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #035858;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #008080;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #034d4d;
        }
      }
      &:first-of-type {
        a {
          color: #008080;
          font-weight: 900;
        }
      }
    }
  }
`;
