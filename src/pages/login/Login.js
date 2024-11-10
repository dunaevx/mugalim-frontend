import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Login.css';
import Logo from '../../components/logo/Logo';
import google from '../../assets/Social media logo.svg';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {


    try {
      const response = await axios.get('/test', {
        auth: {
          username: data.email,
          password: data.password,
        }
      });

      console.log('Ответ сервера:', response.data);
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  return (
    <div className='login'>
      <Logo />
      <div className='login-block2'>
        <h2>Вход</h2>

        <button className="google-login-btn">
          <img src={google} alt="Google Icon" />
          Продолжить с помощью Google
        </button>

        <div className="divider">
          <span></span> или <span></span>
        </div>

        <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="email">Почта</label>
          <input
            type="email"
            id="email"
            placeholder="Почта"
            {...register('email', {
              required: 'Введите почту',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Некорректный формат почты',
              },
            })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

          <label htmlFor="password">Пароль</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Введите пароль"
              {...register('password', {
                required: 'Введите пароль',
                minLength: {
                  value: 6,
                  message: 'Пароль должен содержать минимум 6 символов',
                },
                pattern: {
                  value: /^(?=.*[A-Z])/,
                  message: 'Пароль должен содержать хотя бы одну заглавную букву',
                },
              })}
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? 'Скрыть' : 'Показать'} пароль
            </span>
          </div>
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
          <p className="reset-password"> <Link to="/reset-password">Забыли пароль?</Link></p>
          <button type="submit" className="register-btn">Войти</button>
        </form>

        <p className="login-link">
          У вас нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
