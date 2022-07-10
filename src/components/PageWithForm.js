import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from "./Header";

export default function PageWithForm(props) {

const currentUser = useContext(CurrentUserContext);  
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const nav = useNavigate();

  function handleSetEmail(e) {
  setEmail(e.target.value);
  }

  function handleSetPassword(e) {
  setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      password,
      email,
    });
    (currentUser.email = email);  
    setEmail('');
    setPassword('')
  }

  function HandlerHeaderBtn() {
    nav(props.headerLinkPath);
  }   

  return (
    <div className='auth'>
      <Header
        headerBtnText={props.headerBtnText}
        headerBtnAction={HandlerHeaderBtn}
      />
      <div className='auth__container'>
        <h2 className='auth__title'>{props.title}</h2>
        <form
          onSubmit={handleSubmit}
          className={`auth__form auth__${props.name}-form popup__form`}
          name='Form'
          action='#'
          // noValidate
        >
          <input
            id='username'
            className='auth__field popup__form-input'
            type='email'
            value={email}
            onChange={handleSetEmail}
            name='userEmail'
            placeholder='Email'
            autoComplete='username'
            required
          />
          <span className='user-email-input-error input-error_auth'>
            Введите email.
          </span>
          <input
            id={props.inputId}
            className='auth__field popup__form-input'
            type='password'
            value={password}
            onChange={handleSetPassword}
            name='userPassword'
            placeholder='Пароль'
            autoComplete='current-password'
            required
          />
          <span className='user-password-input-error input-error_auth'>
            Введите пароль.
          </span>
          <button
            className='auth__btn-save auth__form-submit btn-opacity'
            type='submit'
          >
            {props.btnText}
          </button>
          {props.children}
        </form>
      </div>
    </div>
  );
}
