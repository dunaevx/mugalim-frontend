import React from 'react'

import './Footer.css'
import logo from '../../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      <img src={logo} alt="logo" />
      <p>Платформа для создания тестов и поддержки преподавателей.</p>
    </div>

    <div className="footer-links">
      <h3>Навигация</h3>
      <ul>
        <li><a href="/generate-test">Создать тест</a></li>
        <li><a href="/online-test">Онлайн тест</a></li>
        <li><a href="/about">О проекте</a></li>
        <li><a href="/contact">Контакты</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h3>Контакты</h3>
      <p>Email: support@mugalim.com</p>
      <p>Телефон: +9 (996) 777-777-777</p>
      <p>Адрес: г. Бишкек, Кыргызстан</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2024 Mugalim. Все права защищены.</p>
    <p><a href="/privacy-policy">Политика конфиденциальности</a> | <a href="/terms-of-service">Условия использования</a></p>
  </div>
</footer>

  )
}

export default Footer
