import React from 'react';
import { Link } from 'react-router-dom';
import InfoToolTip from './InfoTooltip';
import PageWithForm from './PageWithForm';

export default function Register({ onSignUp, isOpen, onClose, regStatus}) {
    
  return (
    <div>
      <PageWithForm
        title='Регистрация'
        btnText='Зарегистрироваться'
        name='register'
        headerBtnText='Войти'
        headerLinkPath='/sign-in'
        inputId='new-password'
        onSubmit={onSignUp}
      >
        <p className='auth__login-text'>
          Уже зарегистрированы?
          <Link className='auth__login-link btn-opacity' to='/sign-in'>
            Войти
          </Link>
        </p>
      </PageWithForm>
      <InfoToolTip isOpen={isOpen} onClose={onClose} regStatus={regStatus} />
    </div>
  );
}