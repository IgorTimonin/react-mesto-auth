import React from 'react';
import PopupWithForm from './PopupWithForm';


export default function InfoToolTip({ isOpen, onClose, regStatus }) {

  return (
    <PopupWithForm
      name='infoToolTip'
      title=''
      btnText=''
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={`infoToolTip__pic infoToolTip__pic_${regStatus}`}></div>
      <h2 className='infoToolTip_title'>
        {regStatus === 'ok'
          ? 'Вы успешно зарегистрировались!'
          : 'Что-то пошло не так! Попробуйте ещё раз.'}
      </h2>
    </PopupWithForm>
  );
}
