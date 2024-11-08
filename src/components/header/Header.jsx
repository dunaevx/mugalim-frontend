import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import bg from '../../assets/Illustration.svg'

const Header = () => {

  return (
      <div className="welcome">

        <div className='welcome__content'>
          <div className='welcome__content-block1'>
            <h1>
              Мощный инструмент для преподавателей и педагогов.
            </h1>
            <p>
              Создавайте индивидуальные тесты по любому предмету с легкостью. Платформа позволяет быстро и эффективно генерировать тесты, адаптированные под уровень ваших учеников и предмет.
            </p>
              <button className="welcome__navbar-link-btn">
            <Link to="/signup">
                <span>Начать</span>
            </Link>
              </button>
          </div>
          <div className="welcome__content-block2">
            <img alt="bg" src={bg} />
          </div>
        </div>
      </div>
  )
}

export default Header
