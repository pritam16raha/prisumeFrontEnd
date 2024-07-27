import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2024 Prisume. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsGithub onClick={() => open("https://github.com/pritam16raha")}/>
        </li>
        <li>
          <BsGlobe onClick={() => open("https://pritamraha.in/")}/>
        </li>
        <li>
          <BsLinkedin onClick={() => open("https://www.linkedin.com/in/pritam16raha/")}/>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  max-width: 1440px;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem 0;

  span{
    margin-top: 1rem;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;