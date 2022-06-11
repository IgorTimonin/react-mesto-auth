import { useState, useEffect } from 'react';
import userPic from '../images/user.png';
import { api } from '../utils/Api.js';
import Card from './Card';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userName, setuserName] = useState('пользователь');
  const [userDescription, setuserDescription] = useState('профессия');
  const [userAvatar, setuserAvatar] = useState(userPic);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
      api
        .getUserData('https://nomoreparties.co/v1/cohort-41/users/me')
        .then((card) => {
          setuserName(card.name);
          setuserDescription(card.about);
          setuserAvatar(card.avatar);
        });
    }, []);
  });

  return (
    <main>
      <section className='profile'>
        <button className='profile__avatar-btn' onClick={onEditAvatar}>
          <img
            className='profile__avatar profile__avatar_opacity'
            src={userAvatar}
            alt='Аватар пользователя'
          />
        </button>
        <div className='profile__info'>
          <div className='profile__container'>
            <h1 className='profile__name'>{userName}</h1>
            <button
              className='profile__edit-btn btn-opacity'
              type='button'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__job'>{userDescription}</p>
        </div>
        <button
          className='profile__add-btn btn-opacity'
          type='button'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='gallery'>
        <ul className='gallery__cards'>
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
