import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api.js';
import Card from './Card';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    }, []);
  });

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.likeSwitcher(card._id, isLiked).then((newCard) => {
      setCards((data) => data.map((c) => (c._id === card._id ? newCard : c)));
    });
  };

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {setCards((data) => data.filter((c) => (c._id === card._id ? newCard : c)))})
  };

  return (
    <main>
      <section className='profile'>
        <button className='profile__avatar-btn' onClick={onEditAvatar}>
          <img
            className='profile__avatar profile__avatar_opacity'
            src={currentUser.avatar}
            alt='Аватар пользователя'
          />
        </button>
        <div className='profile__info'>
          <div className='profile__container'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              className='profile__edit-btn btn-opacity'
              type='button'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__job'>{currentUser.about}</p>
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
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
