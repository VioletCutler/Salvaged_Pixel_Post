import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  function handleClick(){
    navigate('/welcome')
  }

  const pixelPostString = [`P`, `I`, `X`, `3`, `L`, `P`, `0`, `S`, `T`]
  function generateRandomColorClass(){
      let randomNum = Math.ceil(Math.random() * 7)
      return `header-letter-style-${randomNum}`
    }



  return <div id="navbar">
      <div id="header-link-to-welcome-page" onClick={handleClick}>{
        pixelPostString.map((character, idx)=> {
          return(
            <p key={idx}className={generateRandomColorClass()}>{character}</p>
          )
        })
      }</div>
      <nav id="nav-links">
        <Link id="link-to-homepage" to="/">Home</Link>
        <Link 
        id="link-to-videos-page"
        to="/videos">Videos</Link>
      </nav>
  </div>;
};

export default Navbar;
