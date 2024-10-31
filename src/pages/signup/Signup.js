import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './Signup.css';
import Logo from '../../components/logo/Logo';
import google from '../../assets/Social media logo.svg';

function Signup() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);  
  };

  return (
    <div className='signup'>
      <Logo />
      <div className='signup-block2'>
        <h2>Регистрация</h2>

        <button className="google-login-btn">
          <img src={google} alt="Google Icon" />
          Продолжить с помощью Google
        </button>

        <div className="divider">
          <span></span> или <span></span>
        </div>

        <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fullName">ФИО</label>
          <input
            type="text"
            id="fullName"
            placeholder="ФИО"
            {...register('fullName', {
              required: 'Введите ФИО',
              pattern: {
                value: /^[А-Яа-яЁёA-Za-z\s]+$/,
                message: 'ФИО должно содержать только буквы и пробелы',
              },
              minLength: {
                value: 3,
                message: 'Минимальная длина — 3 символа',
              },
            })}
          />
          {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName.message}</p>}

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
                }, pattern: {
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

          <label htmlFor="confirmPassword">Подтвердите пароль</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Подтвердите пароль"
            {...register('confirmPassword', {
              required: 'Подтвердите пароль',
              validate: (value) =>
                value === watch('password') || 'Пароли должны совпадать',
            })}
          />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}

          <button type="submit" className="register-btn">Зарегистрироваться</button>
        </form>

        <p className="login-link">У вас уже есть аккаунт? <a href="#">Войти</a></p>
      </div>
    </div>
  );
}

export default Signup;
