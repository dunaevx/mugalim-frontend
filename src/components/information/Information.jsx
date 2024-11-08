import React from 'react'

import './Information.css'
import bg from '../../assets/Illustration2.svg'

function Information() {
  return (
    <div className='information__content'>
        <div className="information__content-block1">
            <img alt="bg" src={bg} />
        </div>
        <div className='information__content-block2'>
            <h1>
                Удобный сервис для создания и проведения онлайн-тестов.
            </h1>
            <p>
                Легко создавайте тесты и проверяйте знания учеников в онлайн-формате. Платформа упрощает процесс тестирования, помогая быстро адаптировать задания под уровень подготовки и учебный предмет.
            </p>
            <button className="information__content-block2-btn">
                <span>Начать</span>
            </button>
        </div>
    </div>
  )
}

export default Information