import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Welcome.css';
import logo from '../../assets/Logo.svg';
import bg from '../../assets/Illustration.svg'

function Welcome() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <div className="welcome">
        <div className="welcome__navbar">
          <div className="welcome__navbar-links_logo">
            <img alt="logo" src={logo} />
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
        <div className='welcome__content'>
          <div className='welcome__content-block1'>
            <h1>
              Мощный инструмент для преподавателей и педагогов.
            </h1>
            <p>
              Создавайте индивидуальные тесты по любому предмету с легкостью. Платформа позволяет быстро и эффективно генерировать тесты, адаптированные под уровень ваших учеников и предмет.
            </p>
            <Link to="/signup">
              <button className="welcome__navbar-link-btn">
                <span>Начать</span>
              </button>
            </Link>
          </div>
          <div className="welcome__content-block2">
            <img alt="bg" src={bg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
