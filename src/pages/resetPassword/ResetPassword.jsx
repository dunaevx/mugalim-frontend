import React from 'react'
import { useForm } from 'react-hook-form';

import '../login/Login.css'
import Logo from '../../components/logo/Logo';

function ResetPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='login'>
      <Logo />  
      <div className='login-block2'>
        <h2>Сброс пароля</h2>
        <p className='login-link'>Введите почту которая привязана к профилю</p>
        <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Введите почту которая привязана к профилю</label>
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
          <button type="submit" className="register-btn">Сбросить пароль</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword