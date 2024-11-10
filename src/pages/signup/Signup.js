import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Signup.css';
import Logo from '../../components/logo/Logo';
import google from '../../assets/Social media logo.svg';

function Signup() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    setEmail(data.email);
    const user = {
      email: data.email,
      password: data.password
    };

    try {
      const response = await axios.post('/auth/register', user);
      console.log('Регистрация прошла успешно:', response.data);
      setStep(2);
    } catch (error) {
      if (error.response) {
        console.error('Ошибка сервера:', error.response.data);
      } else if (error.request) {
        console.error('Запрос не получил ответа:', error.request);
      } else {
        console.error('Ошибка при настройке запроса:', error.message);
      }
    }
  };

  const onConfirm = async (data) => {
    const user = {
      email: email,
      confirmationCode: data.confirmationCode
    };

    try {
      const response = await axios.post('/auth/confirm', user);
      console.log('Подтверждение прошло успешно:', response.data);
      navigate('/welcom');
    } catch (error) {
      if (error.response) {
        console.error('Ошибка сервера:', error.response.data);
      } else if (error.request) {
        console.error('Запрос не получил ответа:', error.request);
      } else {
        console.error('Ошибка при настройке запроса:', error.message);
      }
    }
  };

  return (
    <div className='signup'>
      <Logo />
      <div className='signup-block2'>
        {step === 1 && (
          <div className="form" id="signup-form">
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
            <p className="login-link">У вас уже есть аккаунт? <Link to="/login">Войти</Link></p>
          </div>
        )}

        {step === 2 && (
          <div className="form" id="confirmation-form">
            <h2>Подтверждение</h2>
            <p className='login-link'>Пожалуйста, введите код, который мы отправили на вашу почту.</p>
            <form className="registration-form" onSubmit={handleSubmit(onConfirm)}>
              <input
                type="text"
                placeholder="Код подтверждения"
                {...register('confirmationCode', { required: 'Введите код подтверждения' })}
              />
              {errors.confirmationCode && <p style={{ color: 'red' }}>{errors.confirmationCode.message}</p>}

              <button type="submit" className="register-btn">Подтвердить</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
