import React, { useState } from 'react';
import '../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(false);

  const handleEditProfileClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name='submit'
        title='Вы уверены?'
        btnText='Сохранить'
        // isOpen={}
      />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        btnText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id='avatar-url-input'
          className='popup__field popup__field_newcard-adress popup__form-input'
          type='url'
          value=''
          name='avatarLink'
          placeholder='Ссылка на картинку'
          required
          autocomplete='off'
        />
        <span className='avatar-url-input-error input-error'>
          Введите адрес аватара.
        </span>
      </PopupWithForm>
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        btnText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id='name-input'
          className='popup__field popup__field_type_name popup__form-input'
          type='text'
          value=''
          name='name'
          placeholder='Введите имя'
          minlength='2'
          maxlength='40'
          required
          autocomplete='off'
        />
        <span className='name-input-error input-error'>
          Вы пропустили это поле.
        </span>
        <input
          id='job-input'
          className='popup__field popup__field_type_job popup__form-input'
          type='text'
          value=''
          name='about'
          placeholder='Введите род деятельности'
          minlength='2'
          maxlength='200'
          required
          autocomplete='off'
        />
        <span className='job-input-error input-error'>
          Вы пропустили это поле.
        </span>
      </PopupWithForm>
      <PopupWithForm
        name='add-card'
        title='Новое место'
        btnText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id='newcard-name-input'
          className='popup__field popup__field_newcard-name popup__form-input'
          type='text'
          value=''
          name='cardName'
          placeholder='Название'
          minlength='2'
          maxlength='30'
          required
          autocomplete='off'
        />
        <span className='newcard-name-input-error input-error'>
          Вы пропустили это поле.
        </span>
        <input
          id='newcard-url-input'
          className='popup__field popup__field_newcard-adress popup__form-input'
          type='url'
          value=''
          name='cardAdress'
          placeholder='Ссылка на картинку'
          required
          autocomplete='off'
        />
        <span className='newcard-url-input-error input-error'>
          Введите адрес сайта.
        </span>
      </PopupWithForm>
      <ImagePopup />
    </div>
  );
}

export default App;
