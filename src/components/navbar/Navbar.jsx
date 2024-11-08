import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Navbar.css'
import logo from '../../assets/Logo.svg';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
        <div className="welcome__navbar">
          <div className="welcome__navbar-links_logo">
            <img alt="logo" src={logo} />
          </div>
          <div className="welcome__navbar-links_page">
            <Link to="/login" className="welcome__navbar-link-p">
              <span>Сгенирировать тест</span>
            </Link>
            <Link to="/login" className="welcome__navbar-link-p">
              <span>Онлайн тест</span>
            </Link>
          </div>
          <div className="welcome__navbar-links">
            <div className="welcome__navbar-links_container">
              <Link to="/login" className="welcome__navbar-link-p">
                <span>Войти</span>
              </Link> 
              <Link to="/signup">
                <button className="welcome__navbar-link-btn">
                  <span>Зарегистрироваться</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="welcome__navbar-menu">
            {toggleMenu ? (
              <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
            ) : (
              <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div className="welcome__navbar-menu_container">
                <Link to="/login" className="welcome__navbar-link-p">
                  <span>Войти</span>
                </Link>
                <Link to="/signup">
                  <button className="welcome__navbar-link-btn">
                    <span>Зарегистрироваться</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
  )
}

export default Navbar