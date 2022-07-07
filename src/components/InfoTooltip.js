import React from 'react';
import { useNavigate } from 'react-router';
import PopupWithForm from './PopupWithForm';


export default function InfoToolTip({ isOpen, onClose, regStatus }) {
//  function useCloseRedirect() {
//     const nav = useNavigate();
//     nav('/sign-in')
//  }

  return (
    <PopupWithForm
      name='infoToolTip'
      title=''
      btnText=''
      isOpen={isOpen}
      onClose={onClose}
      //   onSubmit={handlerRegistration}
    >
      <div className={`infoToolTip_pic infoToolTip_pic_${regStatus}`}></div>
      <h2 className='infoToolTip_title'>
        {regStatus === 'ok'
          ? 'Вы успешно зарегистрировались!'
          : 'Что-то пошло не так! Попробуйте ещё раз.'}
      </h2>
    </PopupWithForm>
  );
}
