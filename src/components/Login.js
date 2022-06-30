import React from 'react';
import PageWithForm from './PageWithForm';

export default function Login() {
    
return (
  <PageWithForm
    title='Вход'
    btnText='Войти'
    name='login'
    headerBtnText='Регистрация'
    headerLinkPath='/sign-up'
    // onSubmit={}
  ></PageWithForm>
);
}