import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function InfoToolTip({ isOpen, onClose, registerStatus }) {
//   function handlerRegistration(e) {
//     e.preventDefault();
//     console.log(registerStatus);
//   }

  return (
    <PopupWithForm
      name='infoToolTip'
      title={
        registerStatus === 'ok'
          ? 'Вы успешно зарегистрировались!'
          : 'Что-то пошло не так! Попробуйте ещё раз.'
      }
      btnText=''
      isOpen={isOpen}
      onClose={onClose}
      //   onSubmit={handlerRegistration}
    >
      <div className={`infoToolTip infoPicture_${registerStatus}`}></div>
    </PopupWithForm>
  );
}
